from flask import render_template, request
from datetime import datetime


def init_routes(app):
    @app.context_processor
    def get_current_year():
        return {"current_year": datetime.utcnow().year}

    @app.route("/")
    def home():
        return render_template("index.html")

    @app.route("/contact", methods=["GET", "POST"])
    def contact():
        return render_template("contact.html")
