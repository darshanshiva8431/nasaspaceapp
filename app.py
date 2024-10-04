from flask import Flask
from pymongo import MongoClient

app = Flask(__name__)

# MongoDB Connection
client = MongoClient('mongodb://localhost:27017/')
db = client['hackathon_db']  # Your database name

@app.route('/')
def home():
    return "Backend is up and running!"

if __name__ == '__main__':
    app.run(debug=True)
