'use strict'

function saveToStorage(key, any) {
    localStorage.setItem(key, JSON.stringify(any));
}

function loadFromStorage(key) {
    return JSON.parse(localStorage.getItem(key));
}