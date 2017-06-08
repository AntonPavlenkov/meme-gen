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
            size: 40,
            align: 'left',
            color: 'red',
            font: 'Arial',
            textDecor: ''
        }
    ]
}
function init() {
    renderGallery(gImgs);
    // if (loadFromStorage('keyCount') !== null || loadFromStorage('keyCount') !== undefined)
    //     gKeysCount = loadFromStorage('keyCount');
    renderKeys();



}
function renderGallery(imgs) {
    var strHtml;
    var elGallery = document.querySelector('.gallery');
    elGallery.innerHTML = '';
    var count = 0;
    while (count < imgs.length) {
        var meme = document.createElement('div');
        for (var i = 0; i < 4; i++) {
            meme.setAttribute('onclick', 'memeClicked(' + imgs[count].id + ')');
            var urlString = 'url(' + imgs[count].url + ')';
            meme.style.backgroundImage = urlString;
            count++;
            elGallery.appendChild(meme);
        }


    }
}


function renderGallery(imgs) {
    var strHtml;
    var elGallery = document.querySelector('.gallery');
    elGallery.innerHTML = '';
    for (var i = 0; i < imgs.length; i++) {
        var meme = document.createElement('div');
        meme.className = 'meme';
        meme.setAttribute('onclick', 'memeClicked(' + imgs[i].id + ')');
        var urlString = 'url(' + imgs[i].url + ')';
        meme.style.backgroundImage = urlString;
        elGallery.appendChild(meme);
    }
}


function showEditor(param) {
    var elEditor = document.querySelector('.editor');
    elEditor.style.top = param + 'vh';
    renderCanvas();
    console.log(elEditor);
}

function memeClicked(idx) {

    gState.selectedImgIdx = idx - 1;
    showEditor(-3);
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
    elCanvas.width = elCanvas.scrollWidth;
    elCanvas.height = elCanvas.scrollHeight;
    var imageObj = new Image();
    var x;
    var y;
    imageObj.onload = function () {
        context.drawImage(imageObj, 0, 0, elCanvas.width, elCanvas.height);
        for (var i = 0; i < gState.txts.length; i++) {
            if (gState.txts[i].align === 'center') {
                x = elCanvas.width / 2;
            } else if (gState.txts[i].align === 'left') {
                x = 20;
            } else {
                x = elCanvas.width - 20;
            }
            if (i === 0) {
                y = 40;
            } else if (i === 2) {
                y = elCanvas.height - 40;
            } else {
                y = (elCanvas.height) / 2
            }


            context.textAlign = gState.txts[i].align;
            context.fillStyle = gState.txts[i].color;
            context.font = gState.txts[i].textDecor + gState.txts[i].size + 'px ' + gState.txts[i].font;
            context.fillText(gState.txts[i].text, x, y);
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
        size: 40,
        align: 'left',
        color: 'white',
        font: 'Arial',
        textDecor: ''
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
                        <button class="size+" onclick="changeSize('true', this)"><i class="fa fa-plus"></i></button>
                        <button class="color-picker jscolor {valueElement:null,value:'66ccff'}" onclick="updateColor(this)"><i class="fa fa-paint-brush"></i></button>
                        <button class="font-border" onclick="addBorder(this)" ><i class="fa fa-bold"></i></button>
                        <button class="font" onclick="changeFont(this)">
                                <select class="selecth1FontFamily" name="selectFontFamily" onchange="updateh1family(this);">
                                  <option value="cursive"> Serif </option>
                                  <option value="fantasy"> Arial </option>
                                  <option value="monospace"> Sans </option>                                  
                                  <option value="serif"> Tahoma </option>
                                  <option value="unset"> Verdana </option>
                                  <option value="cursive"> Lucida </option>                               
                                </select>
                          <i class="fa fa-font"></i></button>   
                        <button class="remove-text-editor" onclick="removeTextEditor(this)"><i class="fa fa-trash"></i></button>
                </span>
            </div>`
    elTextArea.innerHTML += strHtml;

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
    (direction === 'true') ? gState.txts[element].size++ : gState.txts[element].size--;
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
    var picker = new jscolor(element);
    var color = element;
    element = element.parentElement;
    element = element.parentElement.classList;
    element = element[1];
    gState.txts[element].color = color.style.backgroundColor;
    renderCanvas();
}

function addBorder(element) {
    element = element.parentElement;
    element = element.parentElement.classList;
    element = element[1];
    (gState.txts[element].textDecor) ? gState.txts[element].textDecor = '' : gState.txts[element].textDecor = 'bold ';
    renderCanvas();
}


function changeFont(element) {
    element.firstElementChild.style.display = 'block';
}

function updateh1family(element) {
    element.style.display = 'none';
    var family = element.options[element.selectedIndex].value;
    element = element.parentElement;
    element = element.parentElement;
    element = element.parentElement.classList;
    gState.txts[element[1]].font = family;
    renderCanvas();
}