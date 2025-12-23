#!/usr/bin/env python3
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parent
TEMPLATES = ROOT / 'templates'

def replace_in_file(path: Path):
    text = path.read_text(encoding='utf-8', errors='ignore')

    # Replace url(static/...) inside CSS background declarations
    text, n1 = re.subn(r"url\(\s*static/(?P<p>[^)\s]+)\s*\)",
                      lambda m: f"url({{ {{ url_for('static', filename='{m.group('p')}') }} }})",
                      text)

    # Replace src="static/..." or href='static/...'
    def repl_attr(m):
        quote = m.group('q')
        path = m.group('p')
        return f"{quote}{{{{ url_for('static', filename='{path}') }}}}{quote}"

    text, n2 = re.subn(r'(?P<q>["\'])static/(?P<p>[^"\']+)(?P=q)', repl_attr, text)

    if n1 + n2 > 0:
        path.write_text(text, encoding='utf-8')
        print(f"Updated {path} ({n1 + n2} replacements)")


def main():
    for f in sorted(TEMPLATES.glob('*.html')):
        replace_in_file(f)

if __name__ == '__main__':
    main()
