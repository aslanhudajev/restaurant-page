export default function CreateIconTextComp (icon, content) {
    const iconTextContainer = document.createElement("div");
    iconTextContainer.classList.add("comp", "icon-text");
    
    const iconTextImage = document.createElement("img");
    const iconTextContent = document.createElement("p");
    iconTextContent.textContent = content;

    iconTextContainer.appendChild(iconTextImage);
    iconTextContainer.appendChild(iconTextContent);

    return iconTextContainer
}