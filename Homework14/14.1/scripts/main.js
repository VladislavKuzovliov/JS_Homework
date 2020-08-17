var addRowButton = document.getElementById('add-row');
addRowButton.onclick = function () {
    var tableRow = document.createElement('tr');
    var i = 0
    while (i < 3) {
        tableRow.append(document.createElement('td'));
        tableRow.lastElementChild.classList.add('usual');
        i++;
    }
    document.getElementsByTagName("TBODY")[0].prepend(tableRow);
}


var deleteRowButton = document.getElementById('delete-row');
deleteRowButton.onclick = function () {
    if (document.getElementsByTagName('tr')[0] != document.getElementById('bed-row')) {
        document.getElementsByTagName('tr')[0].remove();
    }
}


var tbl = document.getElementsByTagName('table')[0];
tbl.onclick = function (event) {
    var currentCell = event.target;
    if (currentCell.classList.contains('usual')) {
        var text = currentCell.textContent;
        currentCell.innerHTML = '<input type="text" value="">';
        currentCell.childNodes[0].value = text;
        currentCell.childNodes[0].focus();

        currentCell.childNodes[0].onblur = function () {
            currentCell.innerHTML = currentCell.childNodes[0].value;
        }
    }
}

