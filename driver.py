from flask import Flask, redirect, url_for, request, render_template, jsonify
import requests, json

app = Flask(__name__)

#class to store image info
class Image:
    def __init__(self, image_title, image_link, met_link):
        self.image_title = image_title
        self.image_link = image_link
        self.met_link = met_link

with open("./static/curated_paintings.json") as curated:
   all_paintings = json.load(curated)

def get_img(position):
   obj_num = all_paintings['objectIDs'][position]
   #convert int to string
   parameter = str(obj_num)
   #make a request to met api
   img_response = requests.get('https://collectionapi.metmuseum.org/public/collection/v1/objects/' + parameter)
   painting = img_response.json()

   result = Image(painting['title'], painting['primaryImage'], painting['objectURL'])
   return result

@app.route('/_get_painting/<int:im_num>')
def get_painting(im_num):
   painting = get_img(im_num)
   return jsonify(image_link=painting.image_link, title=painting.image_title, met_link=painting.met_link)

@app.route('/')
def index():
   return render_template('index.html')

@app.route('/main')
def main():
   return render_template('main.html')

@app.route('/test')
def test():
   return render_template('test.html')

if __name__ == '__main__':
   app.run(debug = True)