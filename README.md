Starting the Model (Gemma3)

First create an account if you don't have one at https://huggingface.co/ 

Create a access token choose read(is selected right under the Token type and above token name textbox) https://huggingface.co/settings/tokens

get access to use googles models https://huggingface.co/google/gemma-3-4b-it

open the Backend folder in the terminal and input "hf auth login" then paste in your token

~~~~~~If have a 50 series Nvidia GPU or no Nvidia GPU~~~~~~~~
Download the libraries "pip install torch flask transformers pillow"
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

~~~If you have a Nvidia 40 series card or below~~~
Make sure you have python 3.11 on your system

in the Backend folder
py -3.11 -m venv venv
venv\Scripts\Activate
pip install flask transformers pillow
pip install --pre torch --index-url https://download.pytorch.org/whl/nightly/cu121
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


in the Backend terminal input "python app.py" this will download Gemma3 (~8gb)

Successfully running will yield the message "* Running on http://127.0.0.1:5001"

Starting backend

after npm installs go to the Backend-js terminal and input "node server.js"  -- Successfully running will yield "Server is running on port 5000"

pip install --pre torch --index-url https://download.pytorch.org/whl/nightly/cu121


In Backend-js install node modules.




