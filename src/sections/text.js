export default function CreateTextSection (content) {
    const textContainer = document.createElement("div");
    textContainer.classList.add("section", "text");

    const text = document.createElement("p");
    text.classList.add("text");
    text.textContent = content;

    textContainer.appendChild(text);

    return textContainer;
}