    // DOM Manipulation using JavaScript
    document.getElementById('sidebarList').addEventListener('click', function (event) {
        var section = document.querySelector('section');
        section.innerHTML = '<h2>Section 1</h2><p>Content changed by clicking on ' + event.target.textContent + '.</p>';
    });

    function changeColorScheme() {
        document.body.style.backgroundColor = '#e74c3c';
        document.body.style.color = '#fff';
    }

    function addItem() {
        var newItem = prompt('Enter the new item:');
        if (newItem) {
            var sidebarList = document.getElementById('sidebarList');
            var li = document.createElement('li');
            li.textContent = newItem;
            sidebarList.appendChild(li);
        }
    }

    function removeItem() {
        var sidebarList = document.getElementById('sidebarList');
        if (sidebarList.children.length > 0) {
            sidebarList.removeChild(sidebarList.lastElementChild);
        }
    }
let alertshown=false;
    document.querySelector('header').addEventListener('mouseover', function () {
        if(!alertshown)
        {
            alert('Welcome to My Portfolio');
            alertshown=true;
        }
    });

    function changeImage(imageid)
    {
        console.log("CHANGE IMAGE TO: " + imageid);
        document.getElementById("myimage").src = "./assests/Image_" + imageid + ".png";
        document.getElementById("imagelabel").innerHTML=imagelabels[imageid-1]
    }
    const imagelabels = ["services","California","Niagra"];
    function toggleFunction() {
        var element = document.body;
        element.classList.toggle("dark-mode");
     }
