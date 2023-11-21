export default function CreateMenuItem (title, description, price) {
    const menuItemContainer = document.createElement("div");
    menuItemContainer.classList.add("comp", "menu-item");
    
    const menuItemTitle = document.createElement("h3");
    menuItemTitle.classList.add("title");
    menuItemTitle.textContent = title;

    const menuItemDescription = document.createElement("p");
    menuItemDescription.classList.add("text", "desc");
    menuItemDescription.textContent = description;

    const menuItemPrice = document.createElement("h3");
    menuItemPrice.classList.add("price");
    menuItemPrice.textContent = price + " EUR";


    menuItemContainer.appendChild(menuItemTitle);
    menuItemContainer.appendChild(menuItemDescription);
    menuItemContainer.appendChild(menuItemPrice);

    return menuItemContainer
}