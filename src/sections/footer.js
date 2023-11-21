export default function CreateFooterSection (links) {
    const footerContainer = document.createElement("div");
    footerContainer.classList.add("footer");

    const credits = document.createElement("a");
    credits.href = "https://github.com/aslanhudajev";
    credits.classList.add("credits");
    credits.textContent = "Copyright © 2023 @aslanhudajev";

    footerContainer.appendChild(credits);

    return footerContainer;
}