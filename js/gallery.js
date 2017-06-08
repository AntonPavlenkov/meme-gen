'use strict'


var gKeyWords = createArrOfKeys();
var gKeysCount = { happy: 4, asking: 46, sad: 15, amazed: 9, pink: 1, wonder: 18, complete: 3, mad: 19, smart: 30, man: 12, cat: 10, child: 2, victory: 15, suprised: 30, unsatisfied: 3, grass: 34, grumpy: 7, laugh: 20, sarcastic: 7 };


function filterByKeyWord(key) {

    var imgsWithKey = gImgs.filter(function (img) {
        return (img.keyWords.includes(key));
    });

    return imgsWithKey;
}

function createArrOfKeys() {

    var keyWords = [];
    gImgs.forEach(function (img) {
        keyWords = keyWords.concat(img.keyWords);
    });

    keyWords = keyWords.filter(function (key, index) {
        return keyWords.indexOf(key) === index;
    });
    return keyWords;
}

function countKeysSearch(key) {
    if (gKeysCount[key]) gKeysCount[key]++;
    else gKeysCount[key] = 1;
}

function calculatePercents(key) {
    return (gKeysCount[key] / calculateSumSearched()) * 100;
}

function calculateSumSearched() {
    var sum = 0;
    for (var key in gKeysCount) {
        if (gKeysCount.hasOwnProperty(key)) {
            sum += parseFloat(gKeysCount[key]);
        }
    }
    return sum;
}

function createFontSize(percents) {
    var className = 'least-popular';
    if (percents > 30)
        className = 'most-popular';
    else if (percents > 20)
        className = 'very-popular';
    else if (percents > 15)
        className = 'regular';
    else if (percents > 10)
        className = 'popular';
    else if (percents > 5)
        className = 'not-very-popular';

    return className;
}

function search() {
    var elGallery = document.querySelector('.gallery');
    var inputSearch = document.getElementById("search");
    var key = inputSearch.value;
    countKeysSearch(key);
    saveToStorage('keyCount', gKeysCount)
    renderKeys();
    var filteredImgs = filterByKeyWord(key);
    if (filteredImgs.length === 0) {
        elGallery.innerHTML = "Soory, not matching results"
    }
    else {
        renderGallery(filteredImgs);

    }
    inputSearch.value = "";
}

function renderKeys() {
    var keysDiv = document.querySelector('.search-tags');
    keysDiv.innerHTML = '';

    var strHtml = '';
    for (var key in gKeysCount) {
        var className = createFontSize(calculatePercents(key));
        strHtml += `<span class="${className}" onclick="renderGallery(filterByKeyWord('${key}'))"> ${key} </span>\n`;
    }
    keysDiv.innerHTML = strHtml;
}







