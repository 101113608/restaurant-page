import "../styles.css";
import { generateHomeContent } from "./home.js";

const contentDiv = document.querySelector("#content");

function displayContent(tabName, generateContentFn) {
    contentDiv.textContent = "";
    contentDiv.removeAttribute("class");

    contentDiv.classList.add(tabName);
    contentDiv.append(generateContentFn());
}

function initContent() {
    displayContent("home", generateHomeContent);
}

initContent();