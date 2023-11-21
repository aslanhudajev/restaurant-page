import Home from "./tabs/home.js";
import Menu from "./tabs/menu.js";
import About from "./tabs/about.js";

import CreateHeaderSection from "./sections/header.js";
import CreateFooterSection from "./sections/footer.js";

import "./assets/style.css";

const MainPage = (function () {
    //Init
    //// Header section
    const headerSection = CreateHeaderSection(["home", "menu", "about"]);
    document.body.appendChild(headerSection);
    
    //// Header section bindings
    const headerLinks = Array.from(headerSection.querySelectorAll(".nav-link"));
    for (const link of headerLinks) {
        link.addEventListener("click", ChangeTab);
    }

    //// Div where all the content will be imported.
    const mainContent = document.createElement("div");
    mainContent.id = "content";
    document.body.appendChild(mainContent);

    //// Footer section
    document.body.appendChild(CreateFooterSection());

    //// Content generated and cached
    Home.CreateTab();
    Menu.CreateTab();
    About.CreateTab();

    //// Contentpushed
    mainContent.appendChild(Home.GetTab());

    function ChangeTab(e) {
        const tabToChangeTo = e.target.id;
        console.log(typeof(mainContent));

        switch (tabToChangeTo) {
            case "home":
                mainContent.replaceChildren(Home.GetTab());
                break;
            case "menu":
                mainContent.replaceChildren(Menu.GetTab());
                break;
            case "about":
                mainContent.replaceChildren(About.GetTab());
                break;
        }
    }

})()