
        window.onload = () => {
            var body = document.getElementById("main");
            //body.innerHTML += "<p><strong>hellllooooooo</strong></p>"
            navBar = document.createElement("nav");
            navBar.innerHTML = '<nav class="navbar navbar-expand-lg navbar-dark navbar-fixed">\
                <a class="navbar-brand" href="home.html">My Website</a>\
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">\
                <span class="navbar-toggler-icon"></span></button>\
                <div class="collapse navbar-collapse" id="navbarNavDropdown"><ul class="navbar-nav">\
                <li class="nav-item"><a class="nav-link" href="game-library.html">Game Library<span class="sr-only">(current)</span></a></li>\
                <li class="nav-item"><a class="nav-link" href="page1.html">CSS Playground</a></li>\
                <li class="nav-item"><a class="nav-link" href="index.html">HTML Playground</a></li>\
                <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown link</a>\
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">\
                <a class="dropdown-item" href="#">Action</a>\
                <a class="dropdown-item" href="#">Another action</a>\
                <a class="dropdown-item" href="#">Something else here</a></div></li></ul></div></nav>';
                
            body.insertBefore(navBar, body.firstChild);
        
        }
        var loadButton = document.getElementById("loadNav");
        //loadButton.addEventListener("click", loadNavBar);

        // function loadNavBar() {
        //     var body = document.getElementById("main");
        //     //body.innerHTML += "<p><strong>hellllooooooo</strong></p>"
        //     navBar = document.createElement("nav");
        //     navBar.innerHTML = '<nav class="navbar navbar-expand-lg navbar-dark navbar-fixed"><a class="navbar-brand" href="home.html">My Website</a><button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button><div class="collapse navbar-collapse" id="navbarNavDropdown"><ul class="navbar-nav"><li class="nav-item"><a class="nav-link" href="game-library.html">Game Library<span class="sr-only">(current)</span></a></li><li class="nav-item"><a class="nav-link" href="page1.html">CSS Playground</a></li><li class="nav-item"><a class="nav-link" href="index.html">HTML Playground</a></li><li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown link</a><div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink"><a class="dropdown-item" href="#">Action</a><a class="dropdown-item" href="#">Another action</a><a class="dropdown-item" href="#">Something else here</a></div></li></ul></div></nav>';
        //     body.insertBefore(navBar, body.firstChild);
        // }