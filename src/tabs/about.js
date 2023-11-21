import CreateLogoComponent from "../components/logo";
import CreateTextSection from "../sections/text";
import CreateHoursSection from "../sections/hours";
import CreateInformationSection from "../sections/information";


const About = (function () {
    let tab = document.createElement("div");
    tab.classList.add("tab")

    function CreateTab () {
        tab.appendChild(CreateLogoComponent());
        tab.appendChild(CreateTextSection("Le Krug is an exclusive restaurant based in the heart of Paris. For booking, please email or call us using the contact information below."));
        tab.appendChild(CreateInformationSection("Rue Le Krug 88", "info@lekrug.fr", "+33135242732"));
        tab.appendChild(CreateHoursSection("Opening hours", 8, 9, 10, 11));
    }

    function GetTab () {
        if (tab === null) {
            console.log("About tab has yet to be created. Run CreateTab() to cache the tab first.");
        }

        return tab;
    }

    return { CreateTab, GetTab }
})()

export default About;