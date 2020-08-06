from flask import Flask, redirect, url_for, request, render_template, jsonify
import requests, json

app = Flask(__name__)

#class to store image info
class Image:
    def __init__(self, image_title, image_link, link):
        self.image_title = image_title
        self.image_link = image_link
        self.link = link

with open("./static/curated_paintings.json") as curated:
   all_paintings = json.load(curated)

with open("./static/curated_images.json") as curated_images:
   all_images = json.load(curated_images)

def get_img(position):
   obj_num = all_paintings['objectIDs'][position]
   #convert int to string
   parameter = str(obj_num)
   #make a request to met api
   img_response = requests.get('https://collectionapi.metmuseum.org/public/collection/v1/objects/' + parameter)
   painting = img_response.json()

   result = Image(painting['title'], painting['primaryImage'], painting['objectURL'])
   return result

#flask renders
@app.route('/_get_asset/<int:a_num>')
def get_asset(a_num):
   return jsonify(all_images['objectIDs'][a_num])

@app.route('/_get_painting/<int:im_num>')
def get_painting(im_num):
   painting = get_img(im_num)
   return jsonify(image_link=painting.image_link, title=painting.image_title, link=painting.link)

@app.route('/')
def index():
   return render_template('index.html')

@app.route('/main')
def main():
   return render_template('main.html')

@app.route('/connect4')
def connect4():
   return render_template('connect4.html')

if __name__ == '__main__':
   app.run(debug=True)