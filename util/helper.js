const charactersArrayToFormRandomString = [
    '0','1','2','3','4','5','6','7','8','9',
    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
    'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];

const patternToIdentifyURL = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
    "i"
);


const checkIfUrl = (str) => {

    return patternToIdentifyURL.test(str);

};

const makeId = () => {
    let result = "";
    let length = charactersArrayToFormRandomString.length;

    for (let i = 0; i < 5; i++) {
        result +=
            charactersArrayToFormRandomString[
                Math.floor(Math.random() * length)
            ];
    }
    return result;
};

module.exports = { checkIfUrl, makeId };
