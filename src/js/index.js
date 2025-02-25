import "../styles.css";
import { generateHomeContent } from "./home.js";
import { generateContactContent } from "./contact-us.js";
import { generateMenuContent } from "./menu.js";
import { generateAttributionsModal } from "./attributions.js";

const contentDiv = document.querySelector("#content");
const navMenu = document.querySelector("nav ul");
const body = document.querySelector("body");
const dialog = generateAttributionsModal();

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
            case 'menu':
                displayContent(["banner-page", event.target.dataset.tab], generateMenuContent);
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

contentDiv.addEventListener("click", event => {
    if (event.target.textContent.toLowerCase() === "view menu") {
        displayContent(["banner-page", "menu"], generateMenuContent);
        highlightCurrentTab("menu");
    }
});

body.addEventListener("click", event => {
    if (event.target.id === "attributions") {
        body.classList.add("open-modal");
        dialog.showModal();
    }
});

dialog.addEventListener("click", event => {
    // Clicking outside of the modal's contents (dialog backdrop)
    if (event.target.id === "modal") {
        dialog.close();
        body.classList.remove("open-modal")
    }
});

function initContent() {
    displayContent("home", generateHomeContent);
    highlightCurrentTab("home");
    body.append(dialog);
}

initContent();