from flask import Flask, request, jsonify
from models.load_model import model
from PIL import Image
import io


app = Flask(__name__)

@app.route("/predict", methods=["POST"])
def predict():
    file = request.files["image"]
    image = Image.open(io.BytesIO(file.read()))
    
    message = [
        {
            "role": "user",
            "content": [
                {"type": "image", "image": image},
                {"type": "text", "text": "Describe the content of the image in 3 sentences or less."}
            ]
        }
    ]
    
    output = model(message, max_new_tokens=256)
    result = output[0]["generated_text"][-1]["content"]
    
    return jsonify({"result": result})


if __name__ == "__main__":
    app.run(port=5001)
