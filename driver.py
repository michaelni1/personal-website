from flask import Flask, redirect, url_for, request, render_template, jsonify
from flask_cors import CORS
import requests, json

app = Flask(__name__)
CORS(app)

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

def get_space_img(position):
   asset_id = all_images['objectIDs'][position]
   img_response = requests.get('https://images-api.nasa.gov/asset/' + asset_id)
   space_img = img_response.json()

   img_link = space_img['collection']['items'][0]['href']
   link = 'https://images.nasa.gov/details-' + asset_id

   title_request = space_img['collection']['items'][-1]['href']
   img_title_response = requests.get(title_request)
   img_dict = img_title_response.json()
   title = img_dict['AVAIL:Title']

   result = Image(title, img_link, link)
   return result

@app.route('/_get_image/<int:im_num>')
def send_space_img(im_num):
   space_img = get_space_img(im_num)
   return jsonify(image_link=space_img.image_link, title=space_img.image_title, link=space_img.link)

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

@app.route('/test')
def test():
   return render_template('test.html')

if __name__ == '__main__':
   app.run(debug = True)