import CreateMenuItem from "../components/menuitem";
import CreateLogoComponent from "../components/logo";
import MenuItems from "../assets/menu-items.json"

const Menu = (function () {
    let tab = document.createElement("div");
    tab.classList.add("tab")

    function CreateTab () {
        tab.appendChild(CreateLogoComponent());
        //tab.appendChild(CreateMenuItem("The Amphibian", "Frog legs served with white wine reduction sauce.", 95));
        console.log(MenuItems);

        MenuItems.forEach((item) => {
            tab.appendChild(CreateMenuItem(item.name, item.desc, item.price));
        });
    }

    function GetTab () {
        if (tab === null) {
            console.log("Menu tab has yet to be created. Run CreateTab() to cache the tab first.");
        }

        return tab;
    }

    return { CreateTab, GetTab }
})()

export default Menu;