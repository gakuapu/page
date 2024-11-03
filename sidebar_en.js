function sidebarEN () {

    fetch("https://gakuapu.github.io/page/sidebar_en.html")
    .then(response => response.text())
    .then(html => {
        document.getElementById("en-sidebar-container").innerHTML = html;
    });

    document.getElementById("en-menu-toggle").addEventListener("click", () => {
        const $enSidebar = document.getElementById("en-sidebar-container");
        $enSidebar.classList.toggle("en-sidebar-visible");
    });

};

sidebarEN ();