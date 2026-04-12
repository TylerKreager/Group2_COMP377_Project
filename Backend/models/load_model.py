from transformers import pipeline
import torch

def load():
    pipe = pipeline(
        "image-text-to-text",
        model="google/gemma-3-4b-it",
        device="cuda" if torch.cuda.is_available() else "cpu",
        torch_dtype=torch.bfloat16,
    )
    
    return pipe

model = load()