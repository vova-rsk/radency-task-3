import path from 'path';

type UrlFn = (urlHost: string, elemPath: string ) => object;

const createUrl:UrlFn = (urlHost, elemDbPath) => {
    const pathArr = elemDbPath.split(path.sep);
    const iconName = pathArr[pathArr.length - 1];
    const urlPath = path.join(...pathArr.filter((el, i, arr) => i!=0 && i !== arr.length - 1));

    const urlParams = {
        protocol: 'http:',
        host: urlHost,
        path: urlPath,
        iconName: iconName
    };

    const urlPrepack = Object.values(urlParams).join('/');

    return new URL(urlPrepack.toString());
};

export default createUrl;