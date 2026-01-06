import { Hono } from "hono";
import { cors } from "hono/cors";
import mysql from "mysql2/promise";

const pool = mysql.createPool({
  host: Bun.env.MYSQLHOST,
  user: Bun.env.MYSQLUSER,
  password: Bun.env.MYSQLPASSWORD,
  database: Bun.env.MYSQLDATABASE,
  port: parseInt(Bun.env.MYSQLPORT || "3306", 10),
  connectionLimit: 10,
});

const app = new Hono();

app.use(
  "/*",
  cors({
    origin: [
      "https://fuegofest.es",
      "https://www.fuegofest.es",
      "http://127.0.0.1:5000",
      "http://localhost:5000",
    ],
    methods: ["GET", "POST", "OPTIONS"],
    allowHeaders: ["Content-Type"],
  })
);

app.options("*", (c) => c.body(null, 204));

app.get("/", (c) => c.text("Hello world!"));
app.get("/api/health", (c) => c.json({ status: "ok" }));

app.post("/api/customers", async (c) => {
  try {
    const body = await c.req.json().catch(() => null);
    if (!body)
      return c.json({ error: "invalid_json", message: "JSON inválido." }, 400);

    const name = (body.name ?? "").toString().trim();
    const email = (body.email ?? "").toString().trim().toLowerCase();
    const whatsapp = (body.whatsapp ?? "").toString().trim();

    if (!name || !email || !whatsapp) {
      return c.json(
        {
          error: "missing_fields",
          message: "Faltan campos obligatorios.",
          errors: {
            ...(name ? {} : { name: "El nombre es obligatorio." }),
            ...(whatsapp ? {} : { whatsapp: "El WhatsApp es obligatorio." }),
            ...(email ? {} : { email: "El email es obligatorio." }),
          },
        },
        400
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return c.json(
        {
          error: "invalid_email",
          message: "Email no válido.",
          errors: { email: "Email no válido." },
        },
        400
      );
    }

    const [result] = await pool.execute(
      "INSERT INTO customers (name, whatsapp, email) VALUES (?, ?, ?)",
      [name, whatsapp, email]
    );

    // @ts-ignore
    return c.json(
      {
        ok: true,
        id: result.insertId,
        message:
          "Reserva recibida. Te contactaremos por WhatsApp cuando haya disponibilidad.",
      },
      201
    );
  } catch (err: any) {
    console.error("Error inserting customer:", err);

    if (err?.code === "ER_DUP_ENTRY") {
      const msg = String(err?.sqlMessage || err?.message || "");
      // Intentamos identificar qué UNIQUE falló
      const keyMatch = msg.match(/for key '([^']+)'/i);
      const keyName = (keyMatch?.[1] || "").toLowerCase();

      if (keyName.includes("whatsapp")) {
        return c.json(
          {
            ok: false,
            error: "whatsapp_exists",
            message: "Este WhatsApp ya está registrado.",
            errors: { whatsapp: "Este WhatsApp ya está registrado." },
          },
          409
        );
      }

      if (keyName.includes("email")) {
        return c.json(
          {
            ok: false,
            error: "email_exists",
            message: "Este email ya está registrado.",
            errors: { email: "Este email ya está registrado." },
          },
          409
        );
      }

      // Si no pudimos detectar cuál, devolvemos genérico
      return c.json(
        {
          ok: false,
          error: "duplicate_entry",
          message: "Ya existe un registro con esos datos.",
        },
        409
      );
    }

    return c.json(
      { error: "internal_error", message: "Error del servidor." },
      500
    );
  }
});

Bun.serve({
  port: import.meta.env.PORT || 3000,
  fetch: app.fetch,
});
