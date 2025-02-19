import "../styles.css";
import { generateHomeContent } from "./home.js";
import { generateContactContent } from "./contact-us.js";

const contentDiv = document.querySelector("#content");
const navMenu = document.querySelector("nav ul");

function highlightCurrentTab(tabName) {
    const navButtons = navMenu.querySelectorAll("button");
    navButtons.forEach(button => {
        button.removeAttribute("class");
        if (tabName === button.dataset.tab) {
            button.classList.add("highlight-tab");
        }
    });
}

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

navMenu.addEventListener("click", event => {
    if (event.target.dataset.tab) {
        switch (event.target.dataset.tab) {
            case 'home':
                displayContent(event.target.dataset.tab, generateHomeContent);
                break;
            case 'contact-us':
                displayContent(["banner-page", event.target.dataset.tab], generateContactContent);
                document.querySelector("form").addEventListener("submit", () => initContent());
                break;
            default:
                console.error("Error with selecting nav menu item");
                break;
        }
        highlightCurrentTab(event.target.dataset.tab);
    }
});

function initContent() {
    displayContent("home", generateHomeContent);
    highlightCurrentTab("home");
}

// initContent();