export default function CreateHoursSection (title, opening, closing, openingWE, closingWE) {
    const hoursContainer = document.createElement("div");
    hoursContainer.classList.add("section", "hours");

    const hoursTitle = document.createElement("h2");
    hoursTitle.classList.add("title");
    hoursTitle.textContent = title;

    const hours = document.createElement("p");
    hours.classList.add("text");
    hours.textContent = `Mon - Fri: ${opening}am - ${closing}pm`;

    const hoursSat = document.createElement("p");
    hoursSat.classList.add("text");
    hoursSat.textContent = `Saturday: ${openingWE}am - ${closingWE}pm`;

    const hoursSun = document.createElement("p");
    hoursSun.classList.add("text");
    hoursSun.textContent = `Sunday: ${openingWE}am - ${closingWE}pm`;

    hoursContainer.appendChild(hoursTitle);
    hoursContainer.appendChild(hours);
    hoursContainer.appendChild(hoursSat);
    hoursContainer.appendChild(hoursSun);

    return hoursContainer;
}