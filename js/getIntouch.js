function search() {
    var elGallery = document.querySelector('.gallery');
    var inputSearch = document.getElementById("search");
    var key = inputSearch.value;
    countKeysSearch(key);
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


function sendDetails() {

    var senderName = document.querySelector('#sender-name');
    var senderEmail = document.querySelector('#sender-email');
    var senderSubject = document.querySelector('#sender-subject');
    var senderMessage = document.querySelector('#sender-message');
    var senderRequest = { 'senderName': senderName.value, 'senderEmail': senderEmail.value, 'senderSubject': senderSubject.value, 'senderMessage': senderMessage.value }
    senderName.className = '';
    senderEmail.className = '';

    if (senderName.value == '' || senderEmail.value === '') {
        if (senderName.value == '') {
            senderName.className = 'required';

        }
        if (senderEmail.value == '')
            senderEmail.className = 'required';
    }

    else {
        saveToStorage('getInToch', senderRequest);
        senderEmail.value = ''
        senderName.value = '';
        senderSubject.value = '';
        senderMessage.value = '';


    }



}