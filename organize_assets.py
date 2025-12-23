#!/usr/bin/env python3
"""
Script para reorganizar activos en `static/`.

Qué hace:
- Crea una copia de seguridad de las carpetas de assets encontradas.
- Mueve `css`, `js`, `images`, `img`, `fonts` a `static/<name>`.
- Actualiza referencias dentro de archivos `.html`, `.htm`, `.php`, `.css`, `.js`, `.py` apuntando a `static/...`.

Úsalo desde la raíz del proyecto:
    python organize_assets.py
"""

import os
import shutil
import time
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parent
ASSET_DIRS = ["css", "js", "images", "img", "fonts"]
BACKUP_DIR = ROOT / f"backup_assets_before_move_{int(time.time())}"
STATIC_DIR = ROOT / "static"

EXT_SCAN = {".html", ".htm", ".php", ".css", ".js", ".py"}


def find_existing_asset_dirs():
    return [d for d in ASSET_DIRS if (ROOT / d).exists()]


def backup_dirs(dirs):
    if not dirs:
        print("No asset directories found to backup.")
        return
    print(f"Creando copia de seguridad en {BACKUP_DIR}")
    BACKUP_DIR.mkdir(parents=True, exist_ok=True)
    for d in dirs:
        src = ROOT / d
        dest = BACKUP_DIR / d
        print(f"  - Copiando {src} -> {dest}")
        shutil.copytree(src, dest)


def move_dirs(dirs):
    STATIC_DIR.mkdir(parents=True, exist_ok=True)
    moved = []
    for d in dirs:
        src = ROOT / d
        dest = STATIC_DIR / d
        if dest.exists():
            print(f"  - El destino {dest} ya existe, fusionando contenidos.")
            for item in src.iterdir():
                target = dest / item.name
                if item.is_dir():
                    if target.exists():
                        shutil.rmtree(target)
                    shutil.move(str(item), str(target))
                else:
                    shutil.move(str(item), str(target))
            shutil.rmtree(src)
        else:
            print(f"  - Moviendo {src} -> {dest}")
            shutil.move(str(src), str(dest))
        moved.append((d, str(dest)))
    return moved


def scan_files():
    for p in ROOT.rglob("*"):
        if p.is_file() and p.suffix.lower() in EXT_SCAN:
            # skip files inside backup or static (we'll update static later if needed)
            if BACKUP_DIR in p.parents:
                continue
            yield p


def update_references():
    # Replacements: optionally leading slash then asset dir -> static/dir
    pattern = re.compile(r'(?P<prefix>["\'"\(\s>])/?(?P<dir>css|js|images|img|fonts)/')
    changed_files = []
    for f in scan_files():
        text = f.read_text(encoding="utf-8", errors="ignore")
        new_text, n = pattern.subn(lambda m: f"{m.group('prefix')}static/{m.group('dir')}/", text)
        if n > 0:
            print(f"  - Actualizando {f} ({n} referencias)")
            f.write_text(new_text, encoding="utf-8")
            changed_files.append(str(f))
    return changed_files


def main():
    os.chdir(ROOT)
    dirs = find_existing_asset_dirs()
    if not dirs:
        print("No se encontraron carpetas de assets en la raíz (css, js, images, img, fonts). Nada que mover.")
        return

    print("Direcciones de assets encontradas:", dirs)
    backup_dirs(dirs)

    moved = move_dirs(dirs)
    print("Movimientos realizados:")
    for m in moved:
        print(f"  - {m[0]} -> {m[1]}")

    print("Actualizando referencias en archivos...")
    changed = update_references()
    print(f"Ficheros modificados: {len(changed)}")
    print("Listo. Revisa los cambios y prueba la aplicación. Si algo sale mal, restaura desde:", BACKUP_DIR)


if __name__ == '__main__':
    main()
