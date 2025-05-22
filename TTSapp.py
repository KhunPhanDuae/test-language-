# app.py
from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('T-TS.html')

@app.route('/TTSdata.json')
def get_data():
    # In a real application, you might read this from a database or a file
    import json
    with open('TTSdata.json', 'r', encoding='utf-8') as f:
        data = json.load(f)
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)
