FROM kalilinux/kali-rolling
RUN apt update && apt upgrade -y && apt install git -y && apt install python3 -y && apt install nodejs -y && apt install npm -y && apt install curl -y && apt install wget -y
RUN git clone https://github.com/Krakinz/YouTify.git
RUN cd YouTify
WORKDIR /YouTify
RUN PATH="$PATH"
RUN apt update && apt upgrade -y
RUN npm install
RUN apt update && apt upgrade -y
CMD node ʏօʊȶɨʄɨ🍏ƈɨօʊֆ.js