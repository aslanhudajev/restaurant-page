import CreateIconTextComp from "../components/icontext";

export default function CreateInformationSection (address, email, phoneNumber) {
    const informationContainer = document.createElement("div");
    informationContainer.classList.add("section", "info");

    informationContainer.appendChild(CreateIconTextComp("", address));
    informationContainer.appendChild(CreateIconTextComp("", email));
    informationContainer.appendChild(CreateIconTextComp("", phoneNumber));

    return informationContainer;
}