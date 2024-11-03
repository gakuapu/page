function sidebarEN () {

    fetch("https://gakuapu.github.io/page/sidebar_en.html")
    .then(response => response.text())
    .then(html => {
        document.getElementById("en-sidebar-container").innerHTML = html;
    })

    $enLinkContainer1 = document.getElementById("en-link-container1");
    $enLinkContainer2 = document.getElementById("en-link-container2");
    $enLinkContainer3 = document.getElementById("en-link-container3");
    $enLinkContainer4 = document.getElementById("en-link-container4");
    let p_ensb = Math.floor(Math.random()) * 4;

    switch (p_ensb) {
        case "0":
            $enLinkContainer1.style.display = "block";
            $enLinkContainer2.style.display = "none";
            $enLinkContainer3.style.display = "none";
            $enLinkContainer4.style.display = "none";
            break;
        case "1":
            $enLinkContainer1.style.display = "none";
            $enLinkContainer2.style.display = "block";
            $enLinkContainer3.style.display = "none";
            $enLinkContainer4.style.display = "none";
            break;
        case "2":
            $enLinkContainer1.style.display = "none";
            $enLinkContainer2.style.display = "none";
            $enLinkContainer3.style.display = "block";
            $enLinkContainer4.style.display = "none";
            break;
        case "3":
            $enLinkContainer1.style.display = "none";
            $enLinkContainer2.style.display = "none";
            $enLinkContainer3.style.display = "none";
            $enLinkContainer4.style.display = "block";
            break;
        default:
            alert("リロードして下さい");
    };

    document.getElementById("en-menu-toggle").addEventListener("click", () => {
        const $enSidebar = document.getElementById("en-sidebar-container");
        $enSidebar.classList.toggle("en-sidebar-visible");
    });

};

sidebarEN ();