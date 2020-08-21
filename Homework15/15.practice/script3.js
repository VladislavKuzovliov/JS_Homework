localStorage.clear();

secondPar.onclick = function (event) {
    var target = event.target;
    if (target.tagName == 'A') {
        event.preventDefault();
        if (localStorage.getItem(target.text) == null) {
            localStorage.setItem(target.text, JSON.stringify({path: target.href}));
            target.href = '#';
            alert('Ref wax saved');
            alert(JSON.parse(localStorage.getItem(target.text)).path);
        } else {
            alert(JSON.parse(localStorage.getItem(target.text)).path);
        }

    }
}