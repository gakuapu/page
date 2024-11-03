function sidebarEN () {

    fetch("sidebar_en.html")
        .then(response => response.text())
        .then(html => {
            document.getElementById("en-sidebar-container").innerHTML = html;
        })

};

sidebarEN ();