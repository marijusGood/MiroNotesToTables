class Frame:
    def __init__(self, title):
        self.title = title
        self.backroundColorChildren = {}

    def addChildren(self, backroundColor, newChild):
        if backroundColor in self.backroundColorChildren:
            self.backroundColorChildren[backroundColor].append(newChild)
        else:
            self.backroundColorChildren[backroundColor] = [newChild]

    def getAllNotes(self):
        notesList = []
        for notes in self.backroundColorChildren.values():
            for note in notes:
                notesList.append(note)
        return notesList

    def findInList(lists, toFind):
        for item in lists:
            if type(item) == list:
                output = Frame.findInList(item, toFind)
                if len(output) > 0:
                    return output
            elif item == toFind.text:
                return lists
        return []

    def groupNotes(self, distanceValue):
        backroundColorGrouped = {}
        for key in dict.keys(self.backroundColorChildren):
            notes = self.backroundColorChildren[key]
            noteGroups = []
            for note in notes:
                isNewList = True
                tempList = Frame.findInList(noteGroups, note)
                if len(tempList) > 0:
                    isNewList = False
                for note2 in notes:
                    if note.distanceBetweenNotes(note2) < distanceValue:
                        output = Frame.findInList(tempList, note2)
                        if len(output) == 0:
                            tempList.append(note2.text)
                if isNewList:
                    noteGroups.append(tempList)
            backroundColorGrouped[key] = noteGroups
        return backroundColorGrouped

    def getAllColours(self):
        return [*self.backroundColorChildren]

    def __str__(self):
        return  f"title: {self.title}\n" \
                f"children: {self.backroundColorChildren}\n"

    def __str__(self):
        return  f"title: {self.title}\n" \
                f"children: {self.backroundColorChildren}\n"