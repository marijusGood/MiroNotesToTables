import math

class StickyNote:
    def __init__(self, id, color, text, x, y):
        self.id = id
        self.color = color
        self.text = text
        self.x = x
        self.y = y
    
    def distanceBetweenNotes(self, stickyNote):
        return math.sqrt(((self.x - stickyNote.x)**2 + (self.y - stickyNote.y)**2))

    def __str__(self):
        return  f"ID: {self.id}\n" \
                f"color: {self.color}\n" \
                f"text: {self.text}\n" \
                f"X: {self.x}\n" \
                f"Y: {self.y}\n"

    def __repr__(self):
        return  f"ID: {self.id}\n" \
                f"color: {self.color}\n" \
                f"text: {self.text}\n" \
                f"X: {self.x}\n" \
                f"Y: {self.y}\n"