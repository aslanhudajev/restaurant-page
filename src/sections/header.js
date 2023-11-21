export default function CreateHeaderSection (links) {
    const headerContainer = document.createElement("div");
    headerContainer.classList.add("header");

    const linkList = document.createElement("ul");
    linkList.classList.add("nav");


    for (const link of links) {
        const navLink = document.createElement("li");
        navLink.classList.add("nav-link");
        navLink.id = link;
        navLink.textContent = link;

        linkList.appendChild(navLink);
    }

    headerContainer.appendChild(linkList);

    return headerContainer;
}