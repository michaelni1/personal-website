import requests, json

class Image:
    def __init__(self, image_title, image_link, met_link):
        self.image_title = image_title
        self.image_link = image_link
        self.met_link = met_link

def get_img(position):
    #set parameters
    parameters = {'q': 'hudson river school', 'departmentId': 1}
    #make a request to met api
    all_response = requests.get('https://collectionapi.metmuseum.org/public/collection/v1/search', params=parameters)
    all_paintings = all_response.json()
    obj_num = all_paintings['objectIDs'][position]

    parameter = str(obj_num)
    img_response = requests.get('https://collectionapi.metmuseum.org/public/collection/v1/objects/' + parameter)
    painting = img_response.json()
    
    result = Image(painting['title'], painting['primaryImage'], painting['objectURL'])
    return result