import shoyuPhoto from "../images/menu-items/shoyu-ramen.jpg";
import tonkotsuPhoto from "../images/menu-items/tonkotsu-ramen.jpg";
import tantanPhoto from "../images/menu-items/tantan-ramen.jpg";
import tsukemenPhoto from "../images/menu-items/tsukemen-ramen.jpg";
import misoPhoto from "../images/menu-items/miso-ramen.jpg";
import shioPhoto from "../images/menu-items/shio-ramen.jpg";
import sesamePhoto from "../images/menu-items/black-sesame-ramen.jpg";
import udonPhoto from "../images/menu-items/udon-ramen.jpg";
import toriPhoto from "../images/menu-items/tori-paitan-ramen.jpg";
import hiyashiPhoto from "../images/menu-items/hiyashi-chuka-ramen.jpg";

class Dish {
    constructor(name, description, photo) {
        this.name = name;
        this.description = description;
        this.photo = photo;
    }
};

const dishes = [
    new Dish(
        "Shoyu Ramen",
        "Wheat noodles bathed in a rich, savory soy sauce-based broth. Topped with slices of marinated chashu pork, a soft-boiled egg with a creamy yolk, and vibrant scallions.",
        shoyuPhoto
    ),
    new Dish(
        "Tonkotsu Ramen",
        "A creamy, slow-cooked pork bone broth that is simmered for hours, resulting in a umami-packed base. Tender, chewy-textured ramen noodles and nestled among succulent slices of chashu pork, soft-boiled eggs with fresh scallions.",
        tonkotsuPhoto
    ),
    new Dish(
        "Tantan Ramen",
        "Tender, hand-pulled noodles bathed in a creamy, spicy sesame sauce, infused with Sichuan peppercorns and a hint of ginger. Slices of slow-braised chashu pork, nestled amongst vibrant bok choy and spring onions.",
        tantanPhoto
    ),
    new Dish(
        "Tsukemen Ramen",
        "Firm and chewy noodles served separately from a rich, savory dipping broth. Broth includes a blend of umami flavors, crafted with tender pork, aromatic vegetables and a hint of spice. Garnished with fresh green onions, nori seaweed, and a soft-boiled egg.",
        tsukemenPhoto
    ),
    new Dish(
        "Miso Ramen",
        "Rich and creamy miso broth, simmered for hours with a blend of white and red miso paste. Tender, hand-pulled noodles with slices of slow-braised chashu pork. Combined with a soft-boiled egg, vibrant green scallions and nori seaweed.",
        misoPhoto
    ),
    new Dish(
        "Shio Ramen",
        "Clear, light chicken-based broth, subtly seasoned with salt (shio), simmered for hours. With chewy ramen noodles, tender slices of chashu pork (or chicken/tofu for vegetarian options), a soft-boiled egg, green scallions, and nori seaweed.",
        shioPhoto
    ),
    new Dish(
        "Black Sesame Ramen",
        "Rich, nutty black sesame paste within a umami-rich broth, enhanced by a hint of ginger and garlic. Tender, hand-pulled noodles, complemented by cooked chashu pork. A vibrant array of fresh toppings with soft-boiled egg, finishing off with toasted sesame seeds.",
        sesamePhoto
    ),
    new Dish(
        "Udon Ramen",
        "Tender slices of chashu pork melt in your mouth, complemented by the earthy sweetness of shiitake mushrooms and the vibrant freshness of scallions. A perfectly soft-boiled egg adds a creamy richness, while a sprinkle of nori adds a subtle salty, umami depth.",
        udonPhoto
    ),
    new Dish(
        "Tori Paitan Ramen",
        "Paitan broth simmered for hours from chicken bones. Tender, slow-cooked chashu pork with hand-pulled noodles, vibrant green scallions, soft-boiled marinated egg, a sprinkle of fragrant nori seaweed for an umami punch, and finishing off with a hint of ginger.",
        toriPhoto
    ),
    new Dish(
        "Hiyashi Chuka Ramen",
        "Hand-pulled, cooked noodles that is then chilled and tossed in a savory-sweet soy-based dressing. A skewer of juicy chicken topped with black sesame seeds served along with leafy greens and baby corn.",
        hiyashiPhoto
    ),
];

function createHeading(type, text) {
    const heading = document.createElement(`${type}`);
    heading.textContent = text;

    return heading;
};

function createItemPhoto(dish) {
    const div = document.createElement("div");
    const img = document.createElement("img");
    img.src = dish.photo;
    img.alt = dish.name;

    div.classList.add("photo");
    div.append(img);

    return div;
};

function createItemDescription(dish) {
    const div = document.createElement("div");
    const heading = createHeading("h2", dish.name);
    const paragraph = document.createElement("p");

    paragraph.textContent = dish.description;

    div.classList.add("description");
    div.append(heading, paragraph);

    return div;
};

function createMenuItem(dish) {
    const div = document.createElement("div");
    const itemPhoto = createItemPhoto(dish);
    const itemDesc = createItemDescription(dish);

    div.classList.add("menu-item");
    div.append(itemPhoto, itemDesc);

    return div;
};

function createBanner() {
    const div = document.createElement("div");
    const heading = createHeading("h4", "Menu");

    div.classList.add("banner", "menu");
    div.append(heading);

    return div;
};

function createMainSection(dishesArr) {
    const div = document.createElement("div");
    dishesArr.forEach(dish => {
        const menuItem = createMenuItem(dish);
        div.append(menuItem);
    });

    div.classList.add("main", "menu");

    return div;
};

function generateMenuContent() {
    const main = createMainSection(dishes);
    const banner = createBanner();

    return [banner, main];
};

export { generateMenuContent };