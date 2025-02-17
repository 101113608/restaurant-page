class FormInput {
    constructor(id, type = null, label) {
        this.id = id;
        this.type = type;
        this.label = label;
    }
}

const formInputs = [
    new FormInput(
        "contactName",
        "text",
        "Name"
    ),
    new FormInput(
        "contactEmail",
        "email",
        "Email"
    ),
    new FormInput(
        "contactMessage",
        "textarea",
        "Message"
    )
]

function createLabel(formInput) {
    const label = document.createElement("label");
    label.setAttribute("for", formInput.id);
    label.textContent = formInput.label;

    return label;
}

function createInput(formInput) {
    let input;
    if (formInput.type === "textarea") {
        input = document.createElement("textarea");

    } else {
        input = document.createElement("input");
        input.type = formInput.type;
    }

    input.id = formInput.id;
    input.name = formInput.id;

    return input;
}

function createFieldset(formInputArr) {
    const fieldset = document.createElement("fieldset");

    formInputArr.forEach(formInput => {
        const inputSection = document.createElement("div");
        inputSection.classList.add("form-input-section");

        const input = createInput(formInput);
        const label = createLabel(formInput);

        input.required = true;

        inputSection.append(label, input);
        fieldset.append(inputSection);
    });

    return fieldset;
}

function createFormElement() {
    const form = document.createElement("form");
    form.id = "contactForm";
    form.action = "/";
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Your message has been sent!");
        form.reset();
    })

    return form;
}

function createHeading(text) {
    const heading = document.createElement("h2");
    heading.textContent = text;

    return heading;
}

function createSubmitButton(text) {
    const button = document.createElement("button");
    button.textContent = text;
    button.type = "submit";

    return button;
}

function generateForm() {
    const form = createFormElement();
    const heading = createHeading("Got a Question? Leave a message!");
    const fieldset = createFieldset(formInputs);
    const submitButton = createSubmitButton("Submit");

    form.append(heading, fieldset, submitButton);

    return form;
}

function createBanner() {
    const div = document.createElement("div");
    const heading = document.createElement("h4");

    div.classList.add("banner", "contact-us")
    heading.textContent = "Contact Us";

    div.append(heading);

    return div;
}

function createMainSection() {
    const main = document.createElement("div");
    const form = generateForm();

    main.classList.add("main", "contact-us");
    main.append(form);

    return main;
}

function generateContactContent() {
    const main = createMainSection();
    const banner = createBanner();

    return [banner, main];
}

export { generateContactContent };