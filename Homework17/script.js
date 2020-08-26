localStorage.clear();
var qwntt;
var getButton = document.getElementById('get-button');
var tabs = document.getElementById('tabs');

var activeTab = function (targetTab) {
    var i = 0;
    var usersData = JSON.parse(localStorage.getItem('usersData'));
    while (i < qwntt) {
        if (usersData[i].id == targetTab.id) {
            document.getElementById('userpic').src = usersData[i].avatar;
            document.getElementById('firstname').innerHTML = 'First Name: ' + usersData[i].last_name;
            document.getElementById('lastname').innerHTML = 'Last Name: ' + usersData[i].first_name;
            targetTab.classList.add('tab-active');
        } else {
            if (tabs.childNodes[i].classList.contains('tab-active')) {
                tabs.childNodes[i].classList.remove('tab-active');
            }
        }
        i++;
    }
}

var getUsersList = function () {
    tabs.innerHTML = null;
    if (localStorage.getItem('usersData') == null) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://reqres.in/api/users?page=2', true);
        xhr.send();
        xhr.onload = function () {
            var statusType = +String(this.status)[0];
            alert(statusType);
            if (statusType === 2) {
                try {
                    localStorage.setItem('usersData', JSON.stringify(JSON.parse(this.responseText).data));
                    qwntt = JSON.parse(this.responseText).data.length;
                    alert(JSON.stringify(JSON.parse(this.responseText).data));
                    addTabs();


                } catch (e) {
                    alert('Request was not successful.\rWrong data received :(');
                }
            } else alert('Request was not successful:\rXHR status:' + this.status);
        }
    } else {
        addTabs();
    }
}





function addTabs() {
    var i = 0;
    var usersData = JSON.parse(localStorage.getItem('usersData'));
    while (i < qwntt) {
        var tabDiv = document.createElement('div');
        tabDiv.id = usersData[i].id;
        tabDiv.classList.add('tab')
        tabs.append(tabDiv);
        tabDiv.innerHTML = 'User ' + ++i;
    }
    activeTab(tabs.firstElementChild);
    tabs.onclick = function (event) {
        var target = event.target;
        if (tabs == target.parentNode) {
            activeTab(target);
        }
    }
}


getButton.addEventListener('click', getUsersList);
