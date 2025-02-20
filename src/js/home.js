class SubsectionItem {
    constructor(element, text) {
        this.element = element;
        this.text = text;
    }
}

const tradingHoursSubsection = [
    new SubsectionItem(
        "h2",
        "Trading Hours",
    ),
    new SubsectionItem(
        "ul",
        [
            "Monday: Closed",
            "Tuesday - Friday: 11:00 - 22:00",
            "Saturday - Sunday: 17:00 - 01:00",
        ]
    ),
];

const addressSubsection = [
    new SubsectionItem(
        "h2",
        "Location",
    ),
    new SubsectionItem(
        "ul",
        [
            "123 Seaside Avenue",
            "Atlantis City",
            "Planet Earth",
        ]
    ),
];

const descriptionSubsection = [
    new SubsectionItem(
        "h1",
        "A Bowl of Happiness Awaits!"
    ),
    new SubsectionItem(
        "p",
        "A new Japanese Ramen Store located on planet Earth, come and enjoy a delicious bowl of ramen at deliciously low prices!"
    ),
    new SubsectionItem(
        "button",
        "View Menu"
    ),
];

function createListElement(subsectionItem) {
    const listElement = document.createElement(`${subsectionItem.element}`);
    subsectionItem.text.forEach(string => {
        const listItemElement = document.createElement("li");
        listItemElement.textContent = string;
        listElement.append(listItemElement);
    });

    return listElement;
}

function createSubsection(subsection) {
    const subsectionDiv = document.createElement("div");
    subsection.forEach(subsectionItem => {
        let element;
        if (subsectionItem.element === "ul" && Array.isArray(subsectionItem.text)) {
            element = createListElement(subsectionItem);
        } else {
            element = document.createElement(`${subsectionItem.element}`)
            element.textContent = subsectionItem.text;
        }
        subsectionDiv.append(element);
    });

    subsectionDiv.classList.add("subsection");

    return subsectionDiv;
}

function generateHomeContent() {
    const divElement = document.createElement("div");
    const descriptionElement = createSubsection(descriptionSubsection);
    const tradingHoursElement = createSubsection(tradingHoursSubsection);
    const addressElement = createSubsection(addressSubsection);

    divElement.classList.add("section");

    divElement.append(descriptionElement, tradingHoursElement, addressElement);

    return divElement;
}

export { generateHomeContent };