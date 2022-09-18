// First Version
// myol-editor (MyOneList Editor)
// Copyright 2022 (c), All rights reserved
// Created by Klubuntu
var SelectedText;

//On Yesterdays Progress
// Work Functions from Toolbox (bold, italic, underline: etc:)

function changeTag(elem, newTag) {
    newEl = document.createElement(newTag);
    newEl.innerHTML = elem.innerHTML;
    elem.parentNode.replaceChild(newEl, elem);
}

function switchTag(tag){

// https://codepen.io/saigowthamr/pen/OZmWqW
// https://developer.mozilla.org/en-US/docs/Web/API/Document/execCommand
// https://levelup.gitconnected.com/using-design-mode-and-execcommand-to-fiddle-with-web-pages-6f4039f7f406

    // Headers

    if (tag == "h1"){
        document.execCommand('formatBlock', false, '<' + tag + '>');
    }
    else if (tag == "h2"){
        document.execCommand('formatBlock', false, '<' + tag + '>');
    }
    else if (tag == "h3"){
        document.execCommand('formatBlock', false, '<' + tag + '>');
    }
    else if (tag == "h4"){
        document.execCommand('formatBlock', false, '<' + tag + '>');
    }
    else if (tag == "h5"){
        document.execCommand('formatBlock', false, '<' + tag + '>');
    }
    else if (tag == "h6"){
        document.execCommand('formatBlock', false, '<' + tag + '>');
    }

    // Format Text

    if (tag == "b"){
        document.execCommand('bold', false, '');
    }    
    else if (tag == "u"){
        document.execCommand('underline', false, '');
    }    
    else if (tag == "i"){
        document.execCommand('italic', false, '');
    }


}


function replaceSelectedText(replacementText) {
    var sel, range;
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.rangeCount) {
            range = sel.getRangeAt(0);
            range.deleteContents();
            range.insertNode(document.createTextNode(replacementText));
        }
    } else if (document.selection && document.selection.createRange) {
        range = document.selection.createRange();
        range.text = replacementText;
    }
}

function BoldTextEditor(elm){
    var highlight = window.getSelection();  
     
    var span = '<span style="font-weight:bold;">' + highlight + '</span>';
     
    document.querySelector(elm).value = document.querySelector(elm).value.replace(new RegExp(highlight , 'g'), span);
}


function buildMyOLEditor(elm, options) {
    $style = "<style type='text/css'>@import url('css/external/myol-text.css'); .textarea::-webkit-scrollbar { width: 0 !important }\
    .textarea{width: 328px;height: 278px;background: transparent;border: 0;outline: none;}\
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
}

document.addEventListener('selectionchange', (e)=>{
    //console.log("Archor node - ",window.getSelection().anchorNode);
    SelectedText = window.getSelection().toString();
})