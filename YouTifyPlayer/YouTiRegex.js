const YouTiRegex = {
  YouTifyiedVID: /^[a-zA-Z0-9-_]{11}$/,
  YouTifyiedVURL:
    /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$/,
  YouTifyiedPVID: /(PL|UU|LL|RD)[a-zA-Z0-9-_]{16,41}/,
  YouTifyiedPURL:
    /https?:\/\/(www.)?youtube.com\/playlist\?list=((PL|UU|LL|RD)[a-zA-Z0-9-_]{16,41})/,
  YouTifyiedSCURL:
    /^https?:\/\/(soundcloud\.com|snd\.sc)\/([A-Za-z0-9_-]+)\/([A-Za-z0-9_-]+)\/?$/,
  YouTifyiedSCPL:
    /^https?:\/\/(soundcloud\.com|snd\.sc)\/([A-Za-z0-9_-]+)\/sets\/([A-Za-z0-9_-]+)\/?$/,
  YouTifyiedSP: /^(spotify:|https:\/\/[a-z]+\.spotify\.com\/)/,
};

module.exports = {
  YouTiRegex,
};
