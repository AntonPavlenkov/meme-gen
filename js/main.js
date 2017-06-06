'use strict';
var gImgs = [
    { id: 1, url: 'assets/img/1.jpg', keyWords: ['anngery', 'Undecided','hesitate', 'man'] },
    { id: 2, url: 'assets/img/2.jpg', keyWords: ['suspicious', 'Undecided','hesitate', 'man'  , 'testing' ] },
    { id: 3, url: 'assets/img/3.jpg', keyWords: ['nerd', 'man', 'child', 'smart'] },
    { id: 4, url: 'assets/img/4.jpg', keyWords: ['baby' , 'sucsuess', 'established', 'complete'] },
    { id: 5, url: 'assets/img/5.jpg', keyWords: ['happy'] },
    { id: 6, url: 'assets/img/6.jpg', keyWords: ['happy'] },
    { id: 7, url: 'assets/img/7.jpg', keyWords: ['happy'] },
    { id: 8, url: 'assets/img/8.jpg', keyWords: ['happy'] },
    { id: 9, url: 'assets/img/9.jpg', keyWords: ['happy'] },
    { id: 10, url: 'assets/img/10.jpg', keyWords: ['happy'] },
    { id: 11, url: 'assets/img/11.jpg', keyWords: ['happy'] },
    { id: 12, url: 'assets/img/12.jpg', keyWords: ['happy'] },
    { id: 13, url: 'assets/img/13.jpg', keyWords: ['happy'] },
    { id: 14, url: 'assets/img/14.jpg', keyWords: ['happy'] },
    { id: 15, url: 'assets/img/15.jpg', keyWords: ['happy'] }
];
console.log(gImgs[0].keyWords);

var gState = {
    selectedImgIdx: 0,
    txts: [
        {
            text: 'I never eat Falafel',
            size: 20,
            align: 'left',
            color: 'red',
            font: 'Arial'
        }
    ]
}
function init(){
    renderGallery(gImgs);
}

function renderGallery (imgs){
     var strHtml;
    var elGallery = document.querySelector('.gallery');
    for (var i = 0; i < imgs.length; i++) {
        // strHtml += '<div class="meme" background-image: url('+ imgs[i].url+'); onclick="memeClicked('+i+');"></div>;'
        var meme = document.createElement('div');
        meme.className = 'meme';
        meme.setAttribute('onclick', 'memeClicked('+i+')');
        // meme.setAttribute('background-image', 'url('+ imgs[i].url+')')
        // 'url(buttons/' + imagePrefix + '.png)';
        var urlString = 'url('+ imgs[i].url+')';
        meme.style.backgroundImage =  urlString;
        elGallery.appendChild(meme);
    }
    // elGallery.innerHTML = strHtml;
}




function showEditor(param){
    var elEditor = document.querySelector('.editor');
    elEditor.style.top = param +'vw';
    console.log(elEditor);
}

function memeClicked(idx){
    gState.selectedImgIdx = idx;
    drawMemeImg(idx);
    showEditor(5);

    
}


function textOnCanvas(element){
    drawMemeImg(gState.selectedImgIdx);
    gState.txts[0].text = element.value;
    var elCanvas = document.querySelector('#canvas');
    var context = elCanvas.getContext('2d');
    context.font = gState.txts[0].size+'px' + gState.txts[0].font;
    context.fillText(gState.txts[0].text ,20,20);
}

function drawMemeImg(idx){
     var elCanvas = document.querySelector('#canvas');
    var context = elCanvas.getContext('2d');
    var imageObj = new Image();
    imageObj.onload = function() {
        context.fillStyle = gState.txts[0].color;
        context.drawImage(imageObj, 0, 0, elCanvas.width , elCanvas.height);
        context.font = gState.txts[0].size+'px ' + gState.txts[0].font;
    context.fillText(gState.txts[0].text ,20,20);
      };
      imageObj.src = gImgs[idx].url;
}
