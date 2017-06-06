'use strict'

function search(key) {
    var imgOnKeys = [];
    console.log(imgOnKeys.length);
    var index = gImgs.reduce(function (acc, img, index) {
        if (isKeyWordExists(img.keyWords, key)) {
            return index;
        }
    }, -1);

    if (index !== -1) {
        imgOnKeys.push(gImgs[index]);
    }
    else {

    }
}

function isKeyWordExists(imgKeys, key) {
    return imgKeys.some(function (keyword) {
        return keyword === key;
    });
}

search('happy');





