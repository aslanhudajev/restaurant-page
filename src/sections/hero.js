import CreateLogoComponent from "../components/logo.js"

export default function CreateHeroSection (content, buttonContent) {
    const heroContainer = document.createElement("div");
    heroContainer.classList.add("section", "hero");

    const subTitle = document.createElement("p");
    subTitle.classList.add("text");
    subTitle.textContent = content;

    const menuButton = document.createElement("button");
    menuButton.id = "menu";
    menuButton.classList.add("sec-btn");
    menuButton.textContent = buttonContent;

    heroContainer.appendChild(CreateLogoComponent());
    heroContainer.appendChild(subTitle);
    heroContainer.appendChild(menuButton);

    return heroContainer;
}