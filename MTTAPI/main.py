from typing import Optional, Dict
from fastapi import FastAPI, status, Response
from pydantic import BaseModel

import requests
import json
from StickyNote import StickyNote
from Frame import Frame

class NamedNotesFromFrame(BaseModel):
    frameName: str
    distance: Optional[int] = 300
    colorsName: Dict[str, str]

def listAllWidgets(token, board):
    board = board[:-1]
    url = f"https://api.miro.com/v1/boards/{board}%3D/widgets/"

    headers = {
        "Accept": "application/json",
        "Authorization": f"Bearer {token}"
    }

    response = requests.request("GET", url, headers=headers)

    return (response.text, response.status_code)

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
    frames = {}
    for element in jsonWidgets["data"]:
        if element["type"] == "frame":
            tempFrame = Frame(element["title"])

            for children in element["children"]:
                if children in stickyNotes:
                    tempFrame.addChildren(stickyNotes[children].color, stickyNotes[children])

            frames[tempFrame.title] = tempFrame
    return frames

def getDistanceBetweenTwoNotes(noteText1, noteText2, framename, frames):
    for frame in frames.values():
        if framename == frame.title:
            note1 = None
            note2 = None
            for note in frame.getAllNotes():
                if noteText1 == note.text:
                    note1 = note
                if noteText2 == note.text:
                    note2 = note
            if note1 == None or note2 == None:
                return "notes not found"
            return note1.distanceBetweenNotes(note2)
    return "Frame not found"
        
        
def framesListToJSON(frames):
    framesJSON = {}
    for frame in frames.values():
        frameDict = {}
        frameDict["FrameName"] = frame.title
        frameDict["Colors"] = []
        for colour in frame.backroundColorChildren.keys():
            frameDict["Colors"].append(colour)
        framesJSON[frame.title] = frameDict
    return framesJSON

def getJSONData(token, board, response):
    (jsonRaw, statusCode) = listAllWidgets(token, board)
    if statusCode != 200:
        response.status_code = status.HTTP_404_NOT_FOUND
        return "Token or board is incorrect"

    return json.loads(jsonRaw)

def grouptedNotesToJSON(namedNotes, groupedNotes):
    tableJSON = {}
    for key in groupedNotes.keys():
        if key in namedNotes.colorsName:
            tableJSON[namedNotes.colorsName[key]] = groupedNotes[key]
    return cleanUpLableNotes(namedNotes, tableJSON)
    
def cleanUpLableNotes(namedNotes, tableJSON):
    for lists in tableJSON.values():
        for noteName in namedNotes.colorsName.values():
            if [noteName] in lists:
                lists.remove([noteName])
                break

    return tableJSON



app = FastAPI()

@app.get("/frames/")
async def test(token: str, board: str, response: Response):
    jsonWidgets = getJSONData(token, board, response)
    sticker = extractStickers(jsonWidgets)
    frames = extractFrames(jsonWidgets, sticker)

    return framesListToJSON(frames)

@app.get("/distance-between-notes/{frameName}")
async def test(frameName:str, note1: str, note2: str, token: str, board: str, response: Response):
    jsonWidgets = getJSONData(token, board, response)
    sticker = extractStickers(jsonWidgets)
    frames = extractFrames(jsonWidgets, sticker)
    return getDistanceBetweenTwoNotes(note1, note2, frameName, frames)

@app.post("/table/")
async def compileTable(token: str, board: str, namedNotes: NamedNotesFromFrame, response: Response):
    jsonWidgets = getJSONData(token, board, response)
    sticker = extractStickers(jsonWidgets)
    frames = extractFrames(jsonWidgets, sticker)

    groupedNotes = frames[namedNotes.frameName].groupNotes(namedNotes.distance)
    
    return grouptedNotesToJSON(namedNotes, groupedNotes)