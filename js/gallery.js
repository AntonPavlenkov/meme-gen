'use strict'

// var gImgs = [
//     { id: 1, url: 'assets/img/1.jpg', keyWords: ['angery', 'Undecided', 'hesitate', 'man'] },
//     { id: 2, url: 'assets/img/2.jpg', keyWords: ['suspicious', 'Undecided', 'hesitate', 'man', 'testing'] },
//     { id: 3, url: 'assets/img/3.jpg', keyWords: ['nerd', 'man', 'child', 'smart', 'happy'] },
//     { id: 4, url: 'assets/img/4.jpg', keyWords: ['baby', 'sucsuess', 'established', 'complete', 'happy'] },
//     { id: 5, url: 'assets/img/5.jpg', keyWords: ['happy'] },
//     { id: 6, url: 'assets/img/6.jpg', keyWords: ['happy', 'smooking', 'grass', 'man'] }, 
//     { id: 7, url: 'assets/img/7.jpg', keyWords: ['happy', 'laugh', 'sarcastic'] },
//     { id: 8, url: 'assets/img/8.jpg', keyWords: ['happy', 'shocked', 'suprised', 'girl', 'amazed'] },
//     { id: 9, url: 'assets/img/9.jpg', keyWords: ['happy',  'cat', 'satisfied', 'sucsuess'] },
//     { id: 10, url: 'assets/img/10.jpg', keyWords: ['why', 'sad', 'unsatisfied', 'wonder'] },
//     { id: 11, url: 'assets/img/11.jpg', keyWords: ['sucsuess', 'man', 'victory', 'hesitates'] },
//     { id: 12, url: 'assets/img/12.jpg', keyWords: ['wonder', 'ask', 'asking', 'hesitates'] },
//     { id: 13, url: 'assets/img/13.jpg', keyWords: ['angery', 'mad'] },
//     { id: 14, url: 'assets/img/14.jpg', keyWords: ['Pokemon', 'happy','pink'] },
//     { id: 15, url: 'assets/img/15.jpg', keyWords: ['cat', 'grumpy', 'sad'] }
// ];


var gKeyWords = createArrOfKeys();
var gKeysCount = { happy: 4, sad: 2, amazed: 9 , pink:1,  wonder:18 , mad:19,  smart:30, man:12 , laugh: 40,asking:46 } ;
var gSumOfSearch;

function filterByKeyWord(key) {

    var imgsWithKey = gImgs.filter(function (img) {
        return (img.keyWords.includes(key));
    });
    console.log(imgsWithKey)
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
    return (gKeysCount[key] / calculateSumSearched())*100;
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
    if (percents > 80)
        className = 'most-popular';
    else if (percents > 50)
        className = 'very-popular';
    else if (percents > 30)
        className = 'regular';
    else if (percents > 20)
        className = 'popular';
    else if (percents > 10)
    className = 'not-very-popular';

    return className;
}


function search(key) {
    countKeysSearch(key);
    if (gKeyWords.length === 0) {

    }
    else {


    }
}

function renderKeys() {
    var keysDiv = document.querySelector('.search-tags');
  
    var strHtml = '';
    for (var key in gKeysCount) {
            var imgs = filterByKeyWord(key);
            var className = createFontSize(calculatePercents(key));

            strHtml += `<span class="${className}" onclick="renderGallery(filterByKeyWord('${key}'))"> ${key} </span>\n`;
        }
   console.log(strHtml);
     keysDiv.innerHTML = strHtml;
}

renderKeys();





