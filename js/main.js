'use strict';
var gImgs = [
    { id: 1, url: 'assets/img/1.jpg', keyWords: ['angery', 'Undecided', 'hesitate', 'man'] },
    { id: 2, url: 'assets/img/2.jpg', keyWords: ['suspicious', 'Undecided', 'hesitate', 'man', 'testing'] },
    { id: 3, url: 'assets/img/3.jpg', keyWords: ['nerd', 'man', 'child', 'smart', 'happy'] },
    { id: 4, url: 'assets/img/4.jpg', keyWords: ['baby', 'sucsuess', 'established', 'complete', 'happy'] },
    { id: 5, url: 'assets/img/5.jpg', keyWords: ['happy'] },
    { id: 6, url: 'assets/img/6.jpg', keyWords: ['happy', 'smooking', 'grass', 'man'] },
    { id: 7, url: 'assets/img/7.jpg', keyWords: ['happy', 'laugh', 'sarcastic'] },
    { id: 8, url: 'assets/img/8.jpg', keyWords: ['happy', 'shocked', 'suprised', 'girl', 'amazed'] },
    { id: 9, url: 'assets/img/9.jpg', keyWords: ['happy', 'cat', 'satisfied', 'sucsuess'] },
    { id: 10, url: 'assets/img/10.jpg', keyWords: ['why', 'sad', 'unsatisfied', 'wonder'] },
    { id: 11, url: 'assets/img/11.jpg', keyWords: ['sucsuess', 'man', 'victory', 'hesitates'] },
    { id: 12, url: 'assets/img/12.jpg', keyWords: ['wonder', 'ask', 'asking', 'hesitates'] },
    { id: 13, url: 'assets/img/13.jpg', keyWords: ['angery', 'mad'] },
    { id: 14, url: 'assets/img/14.jpg', keyWords: ['Pokemon', 'happy', 'pink'] },
    { id: 15, url: 'assets/img/15.jpg', keyWords: ['cat', 'grumpy', 'sad'] }
];


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
function init() {
    renderGallery(gImgs);
}

function renderGallery(imgs) {
    var strHtml;
    var elGallery = document.querySelector('.gallery');
    elGallery.innerHTML = '';
    for (var i = 0; i < imgs.length; i++) {
        var meme = document.createElement('div');
        meme.className = 'meme';
        meme.setAttribute('onclick', 'memeClicked(' + i + ')');
        var urlString = 'url(' + imgs[i].url + ')';
        meme.style.backgroundImage = urlString;
        elGallery.appendChild(meme);
    }
}


function showEditor(param) {
    var elEditor = document.querySelector('.editor');
    elEditor.style.top = param + 'vw';
    renderCanvas();
    console.log(elEditor);
}

function memeClicked(idx) {
    gState.selectedImgIdx = idx;
    showEditor(5);
}


function textOnCanvas(element) {
    var text = element.value;
    element = element.parentElement.classList[1];
    gState.txts[element].text = text;
    renderCanvas();
}


function renderCanvas() {
    var elCanvas = document.querySelector('#canvas');
    var context = elCanvas.getContext('2d');
    var imageObj = new Image();
    imageObj.onload = function () {
        context.drawImage(imageObj, 0, 0, elCanvas.width, elCanvas.height);
        for (var i = 0; i < gState.txts.length; i++) {
            context.textAlign = gState.txts[i].align;
            context.fillStyle = gState.txts[i].color;
            context.font = gState.txts[i].size + 'px ' + gState.txts[i].font;
            context.fillText(gState.txts[i].text, 20, 20 + i * 50);
        };
    }
    imageObj.src = gImgs[gState.selectedImgIdx].url;
}


function saveMeme() {
    var canvas = document.getElementById("canvas");
    var img = canvas.toDataURL("image");
    var url = img.replace(/^data:image\//, 'data:application/octet-stream');
    window.location = url;


    location.href = url;

}

function addTextBox() {
    var newText = {
        text: '',
        size: 20,
        align: 'left',
        color: 'white',
        font: 'Arial'
    }
    gState.txts.push(newText);
    var strHtml;
    var elTextArea = document.querySelector('.text-box');

    strHtml = `
    <div class="text-editor ${gState.txts.length - 1}">
              text${gState.txts.length}
              <input type="text" oninput="textOnCanvas(this);">
               <span class="buttons-style">
                        <button class="align-right" onclick="alignText('right',this)"><i class="fa fa-align-right"></i></button>
                        <button class="align-center" onclick="alignText('center', this)"><i class="fa fa-align-center"></i></button>
                        <button class="align-left" onclick="alignText('left' ,this)"><i class="fa fa-align-left"></i></button>
                        <button class="size-" onclick="changeSize('false', this)"><i class="fa fa-minus"></i></button>
                        <button class="size+" onclick="changeSize('true', this)"><i class="fa fa-plus"></i></button><script>jscolor.init();</script>
                        <button class="color-picker${gState.txts.length - 1} jscolor {valueElement:null,value:'6${gState.txts.length - 1}ccff'}" onclick="updateColor(this)"><i class="fa fa-paint-brush"></i></button>
                        <button class="font-border" onclick="addBorder()" ><i class="fa fa-bold"></i></button>
                        <button class="font" onclick="changeFont()"><i class="fa fa-font"></i></button>
                        <button class="remove-text-editor" onclick="removeTextEditor(this)"><i class="fa fa-trash"></i></button>
                </span>
            </div>`
    elTextArea.innerHTML += strHtml;
    jscolor.init();

}

function alignText(direction, element) {
    element = element.parentElement;
    element = element.parentElement.classList;
    element = element[1];
    gState.txts[element].align = direction;
    renderCanvas();
}

function changeSize(direction, element) {
    element = element.parentElement;
    element = element.parentElement.classList;
    element = element[1];
    if (direction === 'true') {
        gState.txts[element].size++;
    } else
        gState.txts[element].size--;
    renderCanvas();
}

function removeTextEditor(element) {
    element = element.parentElement;
    element = element.parentElement;
    gState.txts[element.classList[1]].text = '';
    element.remove();
    renderCanvas();

}

function updateColor(element) {
    var color = element;
    element = element.parentElement;
    element = element.parentElement.classList;
    element = element[1];
    gState.txts[element].color = color.style.backgroundColor;
    renderCanvas();
}