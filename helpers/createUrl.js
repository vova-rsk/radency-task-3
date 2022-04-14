const path = require('path');

const createUrl = (urlInfo, elemDbPath) => {
    const { protocol, host } = urlInfo;

    const pathArr = elemDbPath.split(path.sep);
    const iconName = pathArr[pathArr.length - 1];
    const urlPath = path.join(...pathArr.filter((el, i, arr) => i !== arr.length - 1));

    const urlParams = {
        protocol: protocol,
        host: host,
        path: urlPath,
        iconName: iconName
    };

    const urlPrepack = Object.values(urlParams).join('/');

    return new URL(urlPrepack.toString());
};

module.exports = createUrl;