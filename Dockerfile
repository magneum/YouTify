FROM ubuntu/redis
RUN apt update && apt upgrade -y && apt install git -y && apt install python3 -y && apt install python3-pip -y && apt install -y ffmpeg opus-tools bpm-tools && apt install nodejs -y && apt install npm -y
RUN git clone https://github.com/Krakinz/YouTify.git
RUN cd YouTify
WORKDIR /YouTify
RUN npm install
RUN npm install -g n
RUN n latest
CMD node ʏօʊȶɨʄɨ🍏ƈɨօʊֆ.js