import { iconAttributions, imageAttributions, fontAttributions } from "./attributions-data";

function createLicenseAttr(attribution) {
    let licenseElement;
    if (attribution.license.link !== null) {
        licenseElement = createAnchorElement(attribution.license.name, attribution.license.link);
    } else {
        licenseElement = attribution.license.name;
    }

    return licenseElement;
}

function createAnchorElement(name, link) {
    const anchor = document.createElement("a");
    anchor.href = link;
    anchor.textContent = name;

    anchor.rel = "noopener noreferrer";
    anchor.target = "_blank";

    return anchor;
}

function createAuthorAttr(attribution) {
    let authorAttr;

    if (!Array.isArray(attribution.author)) {
        authorAttr = createAnchorElement(attribution.author.name, attribution.author.link);
    } else {
        authorAttr = []
        attribution.author.forEach(author => {
            authorAttr.push(createAnchorElement(author.name, author.link));
        });
    }

    return authorAttr;
}

function createAttribution(attribution) {
    const paragraphElement = document.createElement("p");
    const contentAttr = createAnchorElement(attribution.content.name, attribution.content.link);
    const licenseAttr = createLicenseAttr(attribution);
    const authorAttr = createAuthorAttr(attribution);

    paragraphElement.append(`"`, contentAttr, `"`, ` by `);

    if (!Array.isArray(authorAttr)) {
        paragraphElement.append(authorAttr, ", ");
    } else {
        authorAttr.forEach(author => {
            paragraphElement.append(author, ", ")
        })
    }

    paragraphElement.append(`licensed by `, licenseAttr);

    return paragraphElement;
}

function createAttributionSection(attributionList) {
    const attributionSection = document.createElement("div");
    attributionSection.classList.add("attribution-section");

    const headingElement = document.createElement("h2");
    const listElement = document.createElement("ul");

    headingElement.textContent = attributionList.type;

    attributionList.list.forEach(attr => {
        const listItemElement = document.createElement("li");
        const paragraphElement = createAttribution(attr);

        if (attributionList.type === "Fonts") {
            const fontNameAnchor = paragraphElement.querySelector("a:nth-of-type(1)");
            fontNameAnchor.classList.add(`${attr.content.name.replace(" ", "-").toLowerCase()}-font`);

            if (attr.content.name === "American Karlie") {
                fontNameAnchor.classList.add("two-rem-size");
            }

        } else {
            const imageElement = document.createElement("img");
            imageElement.src = attr.content.path;
            imageElement.alt = attr.content.name;

            if (attributionList.type === "Icons") {
                imageElement.width = "64";
            } else {
                imageElement.width = "200";
            }

            listItemElement.append(imageElement);
        }

        listItemElement.append(paragraphElement);
        listElement.append(listItemElement);
    });

    attributionSection.append(headingElement, listElement);

    return attributionSection;
}

function generateAttributionsModal() {
    const modalElement = document.createElement("dialog");
    const divContent = document.createElement("div");
    const modalHeading = document.createElement("h1");
    const iconAttrSection = createAttributionSection(iconAttributions);
    const imageAttrSection = createAttributionSection(imageAttributions);
    const fontAttrSection = createAttributionSection(fontAttributions);

    modalHeading.textContent = "Attributions/Credits for Assets Used";

    divContent.classList.add("content", "roboto-font");
    divContent.append(modalHeading, iconAttrSection, imageAttrSection, fontAttrSection);

    modalElement.id = "modal";
    modalElement.append(divContent);

    return modalElement;
}

export { generateAttributionsModal };