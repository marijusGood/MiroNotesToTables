import requests
import json
from StickyNote import StickyNote
from Frame import Frame

distanceValue = 300

# def listAllWidgets(board, token):

#     url = f"https://api.miro.com/v1/boards/{board}%3D/widgets/"

#     headers = {
#         "Accept": "application/json",
#         "Authorization": f"Bearer {token}"
#     }

#     response = requests.request("GET", url, headers=headers)

#     return response.text

# with open("boardPasswords.json") as f:
#     boardPasswords = json.loads(f.read())

# jsonRaw = listAllWidgets(boardPasswords["board"], boardPasswords["token"])

jsonRaw = '{ "type": "collection", "data": [ { "id": "3458764518748072655", "style": { "backgroundColor": "#fff9b1", "fontSize": 0, "fontFamily": "OpenSans", "textAlign": "center", "textAlignVertical": "middle" }, "text": "<p>IT</p>", "x": -238.959676524184, "y": -777.138905303114, "width": 199, "height": 228, "scale": 1.74069060268687, "type": "sticker", "createdAt": "2022-02-11T19:20:01Z", "modifiedAt": "2022-02-16T16:38:50Z", "modifiedBy": { "type": "user", "name": "Marijus Gudiskis", "id": "3458764518646869972" }, "createdBy": { "type": "user", "name": "Marijus Gudiskis", "id": "3458764518646869972" } }, { "id": "3458764518748072656", "style": { "backgroundColor": "#f5d128", "fontSize": 52, "fontFamily": "OpenSans", "textAlign": "center", "textAlignVertical": "middle" }, "text": "<p>EDaaS</p>", "x": 371.496081585787, "y": -747.948301456073, "width": 199, "height": 228, "scale": 1.6148535846216, "type": "sticker", "createdAt": "2022-02-11T19:20:01Z", "modifiedAt": "2022-02-11T21:40:37Z", "modifiedBy": { "type": "user", "name": "Marijus Gudiskis", "id": "3458764518646869972" }, "createdBy": { "type": "user", "name": "Marijus Gudiskis", "id": "3458764518646869972" } }, { "id": "3458764518748072657", "style": { "backgroundColor": "#fff9b1", "fontSize": 64, "fontFamily": "OpenSans", "textAlign": "center", "textAlignVertical": "middle" }, "text": "<p>a</p>", "x": -1014.19693925278, "y": 298.133059068515, "width": 199, "height": 228, "scale": 2.1372800626275, "type": "sticker", "createdAt": "2022-02-11T19:20:01Z", "modifiedAt": "2022-02-16T20:11:35Z", "modifiedBy": { "type": "user", "name": "Marijus Gudiskis", "id": "3458764518646869972" }, "createdBy": { "type": "user", "name": "Marijus Gudiskis", "id": "3458764518646869972" } }, { "id": "3458764518748072658", "style": { "backgroundColor": "#fff9b1", "fontSize": 64, "fontFamily": "OpenSans", "textAlign": "center", "textAlignVertical": "middle" }, "text": "<p>b</p>", "x": -967.16094051492, "y": 546.920045864834, "width": 199, "height": 228, "scale": 2.61000366803318, "type": "sticker", "createdAt": "2022-02-11T19:20:01Z", "modifiedAt": "2022-02-16T20:11:40Z", "modifiedBy": { "type": "user", "name": "Marijus Gudiskis", "id": "3458764518646869972" }, "createdBy": { "type": "user", "name": "Marijus Gudiskis", "id": "3458764518646869972" } }, { "id": "3458764518754023469", "type": "frame", "title": "Frame 1", "children": [ "3458764518748072656", "3458764518748072655", "3458764518748072657", "3458764518748072658", "3458764519108232961", "3458764519108232974", "3458764519108232975", "3458764519108232976", "3458764519108142608", "3458764519108142823" ], "x": 693.593160085902, "y": -279.459054473894, "width": 4095.47261931968, "height": 3071.60446448976, "frameType": "freeform", "frameFormat": "4:3", "style": { "backgroundColor": "#ffffffff", "fontSize": 14, "fontFamily": "OpenSans", "textAlign": "left" }, "createdAt": "2022-02-11T21:40:32Z", "createdBy": { "type": "user", "name": "Marijus Gudiskis", "id": "3458764518646869972" }, "modifiedAt": "2022-02-11T21:40:37Z", "modifiedBy": { "type": "user", "name": "Marijus Gudiskis", "id": "3458764518646869972" } }, { "id": "3458764519108142608", "style": { "backgroundColor": "#fff9b1", "fontSize": 64, "fontFamily": "OpenSans", "textAlign": "center", "textAlignVertical": "middle" }, "text": "<p>c</p>", "x": -873.772327027005, "y": 383.004695121223, "width": 199, "height": 228, "scale": 1.39279202707743, "type": "sticker", "createdAt": "2022-02-16T21:13:03Z", "modifiedAt": "2022-02-16T21:13:11Z", "modifiedBy": { "type": "user", "name": "Marijus Gudiskis", "id": "3458764518646869972" }, "createdBy": { "type": "user", "name": "Marijus Gudiskis", "id": "3458764518646869972" } }, { "id": "3458764519108142823", "style": { "backgroundColor": "#fff9b1", "fontSize": 64, "fontFamily": "OpenSans", "textAlign": "center", "textAlignVertical": "middle" }, "text": "<p>d</p>", "x": -1119.60571960272, "y": 258.808314888937, "width": 199, "height": 228, "scale": 1.1551401301755, "type": "sticker", "createdAt": "2022-02-16T21:13:17Z", "modifiedAt": "2022-02-16T21:13:19Z", "modifiedBy": { "type": "user", "name": "Marijus Gudiskis", "id": "3458764518646869972" }, "createdBy": { "type": "user", "name": "Marijus Gudiskis", "id": "3458764518646869972" } }, { "id": "3458764519108232961", "style": { "backgroundColor": "#f5d128", "fontSize": 64, "fontFamily": "OpenSans", "textAlign": "center", "textAlignVertical": "middle" }, "text": "<p>1</p>", "x": 423.932295778251, "y": -110.607101270324, "width": 199, "height": 228, "scale": 1.3272117089161, "type": "sticker", "createdAt": "2022-02-16T21:13:24Z", "modifiedAt": "2022-02-16T21:13:27Z", "modifiedBy": { "type": "user", "name": "Marijus Gudiskis", "id": "3458764518646869972" }, "createdBy": { "type": "user", "name": "Marijus Gudiskis", "id": "3458764518646869972" } }, { "id": "3458764519108232974", "style": { "backgroundColor": "#f5d128", "fontSize": 64, "fontFamily": "OpenSans", "textAlign": "center", "textAlignVertical": "middle" }, "text": "<p>4</p>", "x": 342.87571495309, "y": -24.1797947675059, "width": 199, "height": 228, "scale": 1.3272117089161, "type": "sticker", "createdAt": "2022-02-16T21:13:28Z", "modifiedAt": "2022-02-16T21:13:45Z", "modifiedBy": { "type": "user", "name": "Marijus Gudiskis", "id": "3458764518646869972" }, "createdBy": { "type": "user", "name": "Marijus Gudiskis", "id": "3458764518646869972" } }, { "id": "3458764519108232975", "style": { "backgroundColor": "#f5d128", "fontSize": 64, "fontFamily": "OpenSans", "textAlign": "center", "textAlignVertical": "middle" }, "text": "<p>2</p>", "x": 501.74003466748, "y": 29.3094684459495, "width": 199, "height": 228, "scale": 1.3272117089161, "type": "sticker", "createdAt": "2022-02-16T21:13:28Z", "modifiedAt": "2022-02-16T21:13:46Z", "modifiedBy": { "type": "user", "name": "Marijus Gudiskis", "id": "3458764518646869972" }, "createdBy": { "type": "user", "name": "Marijus Gudiskis", "id": "3458764518646869972" } }, { "id": "3458764519108232976", "style": { "backgroundColor": "#f5d128", "fontSize": 64, "fontFamily": "OpenSans", "textAlign": "center", "textAlignVertical": "middle" }, "text": "<p>3</p>", "x": 575.769880962603, "y": -60.1967364618448, "width": 199, "height": 228, "scale": 1.3272117089161, "type": "sticker", "createdAt": "2022-02-16T21:13:28Z", "modifiedAt": "2022-02-16T21:13:47Z", "modifiedBy": { "type": "user", "name": "Marijus Gudiskis", "id": "3458764518646869972" }, "createdBy": { "type": "user", "name": "Marijus Gudiskis", "id": "3458764518646869972" } } ], "size": 11 }'


jsonWidgets = json.loads(jsonRaw)



def extractStickers(jsonWidgets):
    stickyNotes = {}

    for element in jsonWidgets["data"]:
        if element["type"] == "sticker":
            stickyNotes[element["id"]] =  StickyNote(element["id"],
                                          element["style"]["backgroundColor"],
                                          element["text"],
                                          element["x"],
                                          element["y"])
            
    return stickyNotes
            
def extractFrames(jsonWidgets, stickyNotes):
    frames = []
    for element in jsonWidgets["data"]:
        if element["type"] == "frame":
            tempFrame = Frame(element["title"])

            for children in element["children"]:
                if children in stickyNotes:
                    tempFrame.addChildren(stickyNotes[children].color, stickyNotes[children])

            frames.append(tempFrame)
    return frames

def getDistanceBetweenTwoNotes(noteText1, noteText2, notes):
    for note in notes.values():
        if noteText1 == note.text.replace("<p>", "").replace("</p>", ""):
            note1 = note
        if noteText2 == note.text.replace("<p>", "").replace("</p>", ""):
            note2 = note
    return note1.distanceBetweenNotes(note2)
        

sticker = extractStickers(jsonWidgets)

frames = extractFrames(jsonWidgets, sticker)
groupsNotes = frames[0].groupNotes(500)

