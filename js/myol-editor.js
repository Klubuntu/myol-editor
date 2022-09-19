// Working Version
// myol-editor (MyOneList Editor)
// Copyright 2022 (c), All rights reserved
// Created by Klubuntu
var SelectedText;


function switchTag(tag) {

    // https://codepen.io/saigowthamr/pen/OZmWqW
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand
    // https://levelup.gitconnected.com/using-design-mode-and-execcommand-to-fiddle-with-web-pages-6f4039f7f406

    // Headers

    if (tag == "h1") {
        document.execCommand('formatBlock', false, '<' + tag + '>');
    }
    else if (tag == "h2") {
        document.execCommand('formatBlock', false, '<' + tag + '>');
    }
    else if (tag == "h3") {
        document.execCommand('formatBlock', false, '<' + tag + '>');
    }
    else if (tag == "h4") {
        document.execCommand('formatBlock', false, '<' + tag + '>');
    }
    else if (tag == "h5") {
        document.execCommand('formatBlock', false, '<' + tag + '>');
    }
    else if (tag == "h6") {
        document.execCommand('formatBlock', false, '<' + tag + '>');
    }

    // Format Text

    if (tag == "b") {
        document.execCommand('bold', false, '');
    }
    else if (tag == "u") {
        document.execCommand('underline', false, '');
    }
    else if (tag == "i") {
        document.execCommand('italic', false, '');
    }


}

function buildMyOLEditor(elm, options) {
    $style = "<style type='text/css'>@import url('css/external/myol-text.css'); .textarea::-webkit-scrollbar { width: 0 !important }\
    .textarea{width: 313px;height: 282px;background: transparent;border: 0;outline: none;margin-left: 9px;display: inline-block;overflow: hidden;}\
    .editor{width: 330px;height: 330px;background: antiquewhite;border-radius: 8px;}\
    .toolbox img{width: 11.5%;;display:inline-flex;}\
    .toolbox img:hover{background: #c1bcbcc4;border-radius: 4px;}\
    .toolbox .bold, .toolbox .italic, .toolbox .underline {width: 10%;position: relative;top: -2px;}\
    </style>";
    $editorCode = '<div class="editor"><span class="edittext"><div class="toolbox">\
    <img src="js/img/bold.svg" class="bold" alt="bold"/>\
    <img src="js/img/italic.svg" class="italic" alt="italic"/>\
    <img src="js/img/underline.svg" class="underline" alt="underline"/>\
    <img src="js/img/h1.svg" class="h1" alt="h1"/>\
    <img src="js/img/h2.svg" class="h2" alt="h2"/>\
    <img src="js/img/h3.svg" class="h3" alt="h3"/>\
    <img src="js/img/h4.svg" class="h4" alt="h4"/>\
    <img src="js/img/h5.svg" class="h5" alt="h5"/>\
    </div><p class="textarea" contenteditable="true"></p></span></div>';
    document.querySelector(elm).innerHTML = $style + $editorCode;
    buildButtons();
}

document.addEventListener('selectionchange', (e) => {
    //console.log("Archor node - ",window.getSelection().anchorNode);
    SelectedText = window.getSelection().toString();
})

/* Add Events to buttons */
function buildButtons() {
    document.querySelectorAll('.bold').forEach(occurence => {
        occurence.addEventListener('click', (e) => {
            switchTag("b")
        });
    });
    document.querySelectorAll('.italic').forEach(occurence => {
        occurence.addEventListener('click', (e) => {
            switchTag("i")
        });
    });
    document.querySelectorAll('.underline').forEach(occurence => {
        occurence.addEventListener('click', (e) => {
            switchTag("u")
        });
    });
    document.querySelectorAll('.h1').forEach(occurence => {
        occurence.addEventListener('click', (e) => {
            switchTag("h1")
        });
    });
    document.querySelectorAll('.h2').forEach(occurence => {
        occurence.addEventListener('click', (e) => {
            switchTag("h2")
        });
    });
    document.querySelectorAll('.h3').forEach(occurence => {
        occurence.addEventListener('click', (e) => {
            switchTag("h3")
        });
    });
    document.querySelectorAll('.h4').forEach(occurence => {
        occurence.addEventListener('click', (e) => {
            switchTag("h4")
        });
    });
    document.querySelectorAll('.h5').forEach(occurence => {
        occurence.addEventListener('click', (e) => {
            switchTag("h5")
        });
    });
}