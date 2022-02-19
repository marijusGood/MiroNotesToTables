FROM linuxserver/code-server

COPY requirements.txt /

RUN apt update -yy
RUN apt upgrade -yy
RUN apt install python3-pip -yy
RUN pip install -r /requirements.txt

RUN npm install -g @angular/cli