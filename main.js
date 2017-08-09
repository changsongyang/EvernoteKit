'use strict';

function preview() {
    try {

        var title = document.getElementById('gwt-debug-NoteTitleView-textBox').value;
        var content = document.getElementById('en-note').innerHTML;
        var mainView = window.open('', "mainView"), doc = mainView.document;
        doc.write(content);
        doc.title = title;
        doc.close();

    } catch (error) {
        alert(error);
        console.log(error);
    }
}