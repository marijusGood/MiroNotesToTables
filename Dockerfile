FROM linuxserver/code-server

COPY requirements.txt /

RUN apt update -yy
RUN apt upgrade -yy
RUN apt install python3-pip -yy
RUN pip install -r /requirements.txt

COPY ./ /MiroNotesToTables/
WORKDIR /MiroNotesToTables/MTTFront-End/
RUN npm install
RUN npm install -g @angular/cli
RUN npm run build
EXPOSE 4200