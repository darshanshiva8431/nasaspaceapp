from flask import Flask, jsonify, send_from_directory
import requests
import os

app = Flask(__name__, static_url_path='', static_folder='../frontend')

# Set your API key here
API_KEY = 'e0aa1f0c9dcc4ecbb8ac1115ad33175c'  # Replace with your actual API key
API_URL = 'https://api.example.com/data'  # Replace with the actual API endpoint

@app.route('/api/emission', methods=['GET'])
def get_emission():
    # Make a request to the third-party API to get the emission data
    response = requests.get(API_URL, headers={'Authorization': f'Bearer {API_KEY}'})
    
    if response.status_code == 200:
        data = response.json()
        # Adjust the following based on the actual API response structure
        emission_data = {
            "emission": data.get("emission", 0),  # Change keys based on API response
            "location": data.get("location", [0, 0])  # Change keys based on API response
        }
        return jsonify(emission_data)
    else:
        return jsonify({"error": "Failed to fetch data"}), response.status_code

@app.route('/')
def home():
    return send_from_directory('../frontend', 'index.html')

if __name__ == '__main__':
    app.run(debug=True)
