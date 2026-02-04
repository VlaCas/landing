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
    
    @app.route("/politica-privacidad", methods=["GET", "POST"])
    def politica_privacidad():
        return render_template("politica-privacidad.html")
    
    @app.route("/politica-cookies", methods=["GET", "POST"])
    def politica_cookies():
        return render_template("politica-cookies.html")
    
    @app.route("/aviso-legal", methods=["GET", "POST"])
    def aviso_legal():
        return render_template("aviso-legal.html")
