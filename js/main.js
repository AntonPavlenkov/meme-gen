'use strict';
var gImgs = [
    { id: 1, url: 'assets/img/1.jpg', keywords: ['happy'] },
    { id: 2, url: 'assets/img/2.jpg', keywords: ['happy'] },
    { id: 3, url: 'assets/img/3.jpg', keywords: ['happy'] },
    { id: 4, url: 'assets/img/1.jpg', keywords: ['happy'] },
    { id: 5, url: 'assets/img/1.jpg', keywords: ['happy'] },
    { id: 6, url: 'assets/img/1.jpg', keywords: ['happy'] },
    { id: 7, url: 'assets/img/1.jpg', keywords: ['happy'] },
    { id: 8, url: 'assets/img/1.jpg', keywords: ['happy'] },
    { id: 9, url: 'assets/img/1.jpg', keywords: ['happy'] },
    { id: 10, url: 'assets/img/1.jpg', keywords: ['happy'] },
    { id: 11, url: 'assets/img/1.jpg', keywords: ['happy'] },
    { id: 12, url: 'assets/img/1.jpg', keywords: ['happy'] },
    { id: 13, url: 'assets/img/1.jpg', keywords: ['happy'] },
    { id: 14, url: 'assets/img/1.jpg', keywords: ['happy'] },
    { id: 15, url: 'assets/img/1.jpg', keywords: ['happy'] }
];

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
