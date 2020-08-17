var styleButton = document.getElementsByTagName('button')[0];

function styleChange() {
    var elem = firstPar.firstElementChild;
    while (elem) {
        if (elem.tagName == 'A') {
            elem.classList.add('link-changed');
        }
        elem = elem.nextElementSibling;
    }
}

styleButton.addEventListener('click', styleChange, false);


secondPar.onclick = function (event) {
    var clickedBlock = event.target;
    if (clickedBlock.tagName == 'A') {
        event.preventDefault();
    }
    alert(clickedBlock.href);
}