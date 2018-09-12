from flask import Flask
from modules.form_sidebar import subjects_maker
import json

app = Flask(__name__)


@app.route('/')
def index():
    subjpic = subjects_maker(tabu=0)
    subjects = list(subjpic.keys())
    return json.dumps({'subjects': subjects, 'data': str(subjpic)})


if __name__ == "__main__":
    app.run(debug=True)