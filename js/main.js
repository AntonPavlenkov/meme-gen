'use strict';
var gImgs = [
    { id: 1, url: 'assets/img/1.jpg', keyWords: ['anngery', 'Undecided','hesitate', 'man'] },
    { id: 2, url: 'assets/img/2.jpg', keyWords: ['suspicious', 'Undecided','hesitate', 'man'  , 'testing' ] },
    { id: 3, url: 'assets/img/3.jpg', keyWords: ['nerd', 'man', 'child', 'smart'] },
    { id: 4, url: 'assets/img/1.jpg', keyWords: ['baby' , 'sucsuess', 'established', 'complete'] },
    { id: 5, url: 'assets/img/1.jpg', keyWords: ['happy'] },
    { id: 6, url: 'assets/img/1.jpg', keyWords: ['happy'] },
    { id: 7, url: 'assets/img/1.jpg', keyWords: ['happy'] },
    { id: 8, url: 'assets/img/1.jpg', keyWords: ['happy'] },
    { id: 9, url: 'assets/img/1.jpg', keyWords: ['happy'] },
    { id: 10, url: 'assets/img/1.jpg', keyWords: ['happy'] },
    { id: 11, url: 'assets/img/1.jpg', keyWords: ['happy'] },
    { id: 12, url: 'assets/img/1.jpg', keyWords: ['happy'] },
    { id: 13, url: 'assets/img/1.jpg', keyWords: ['happy'] },
    { id: 14, url: 'assets/img/1.jpg', keyWords: ['happy'] },
    { id: 15, url: 'assets/img/1.jpg', keyWords: ['happy'] }
];
console.log(gImgs[0].keyWords);

var gState = {
    selectedImgId: 5,
    txts: [
        {
            text: 'I never eat Falafel',
            size: 4,
            align: 'left',
            color: 'red'
        }
    ]
}


function renderGallery (){
    document.querySelector('.gallery').innerHTML= `<img src="${gImgs[0].url}" />`;

}
