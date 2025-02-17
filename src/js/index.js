import "../styles.css";
import { generateHomeContent } from "./home.js";
import { generateContactContent } from "./contact-us.js";

const contentDiv = document.querySelector("#content");

function appendToContentDiv(content) {
    if (Array.isArray(content)) {
        content.forEach(section => contentDiv.append(section));
    } else {
        contentDiv.append(content);
    };
}

function setContentDivClass(tabName) {
    if (Array.isArray(tabName)) {
        tabName.forEach(name => contentDiv.classList.add(`${name}`));
    } else {
        contentDiv.classList.add(tabName);
    };
}

function displayContent(tabName, generateContentFn) {
    contentDiv.textContent = "";
    contentDiv.removeAttribute("class");

    setContentDivClass(tabName);

    const content = generateContentFn();
    appendToContentDiv(content);
}

displayContent(["banner-page", "contact-us"], generateContactContent);

// function initContent() {
//     displayContent("home", generateHomeContent);
// }

// initContent();