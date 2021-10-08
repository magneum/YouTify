FROM kalilinux/kali-rolling
RUN apt update && apt upgrade -y && apt install git -y && apt install python3 -y && apt install nodejs -y && apt install npm -y && apt install curl -y && apt install wget -y
RUN git clone https://github.com/Krakinz/YouTify.git
RUN cd YouTify
WORKDIR /YouTify
RUN npm install
RUN npm install -g n
RUN n latest
CMD node ʏօʊȶɨʄɨ🍏ƈɨօʊֆ.js