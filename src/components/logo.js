export default function CreateLogoComponent () {
    const logoContainer = document.createElement("div");
    logoContainer.classList.add("comp", "logo");
    
    const logoTitle = document.createElement("h1");
    logoTitle.classList.add("logo");
    logoTitle.textContent = "Le Krug";

    logoContainer.appendChild(logoTitle);

    return logoContainer
}