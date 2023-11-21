import CreateHeroSection from "../sections/hero";
import CreateHoursSection from "../sections/hours";

const About = (function () {
    let tab = document.createElement("div");
    tab.classList.add("tab")

    function CreateTab () {
        tab.appendChild(CreateHeroSection("An exclusive gastronomical experience", "Our menu"));
        tab.appendChild(CreateHoursSection("Opening hours", 8, 9, 10, 11));
    }

    function GetTab () {
        if (tab === null) {
            console.log("Home tab has yet to be created. Run CreateTab() to cache the tab first.");
        }

        return tab;
    }

    return { CreateTab, GetTab }
})()

export default About;