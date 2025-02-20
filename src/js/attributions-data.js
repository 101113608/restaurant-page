import restaurantIcon from "../images/icons/restaurant-icon.png";
import menuIcon from "../images/icons/menu-icon.svg";
import contactIcon from "../images/icons/contact-us-icon.svg";

class AttributionSet {
    constructor(content, author, license,) {
        this.content = content;
        this.author = author;
        this.license = license;
    }
}

class Attribution {
    constructor(name, link) {
        this.name = name;
        this.link = link;
    }
}

class ImageAttribution extends Attribution {
    constructor(path, name, link) {
        super(name, link);
        this.path = path;
    }
}

class AttributionList {
    constructor(type, list) {
        this.type = type;
        this.list = list;
    }
}

const iconAttributions = new AttributionList(
    "Icons",
    [
        new AttributionSet(
            new ImageAttribution(
                restaurantIcon
                , "Ramen free icon"
                , "https://www.flaticon.com/free-icon/ramen_6611800?term=ramen&page=1&position=25&origin=tag&related_id=6611800"),
            new Attribution("Freepik", "https://www.flaticon.com/authors/freepik"),
            new Attribution("Flaticon", "https://www.flaticon.com/legal#nav-flaticon-agreement")
        ),
        new AttributionSet(
            new ImageAttribution(
                menuIcon
                , "Shop Street Sign"
                , "https://www.streamlinehq.com/icons/download/shop-street-sign--32163"),
            new Attribution("Streamline", "https://streamlinehq.com/"),
            new Attribution("Streamline", "https://help.streamlinehq.com/en/articles/5354376-streamline-free-license")
        ),
        new AttributionSet(
            new ImageAttribution(
                contactIcon
                , "Send Email Paper Plane"
                , "https://www.streamlinehq.com/icons/download/send-email-paper-plane-1--32169"),
            new Attribution("Streamline", "https://streamlinehq.com/"),
            new Attribution("Streamline", "https://help.streamlinehq.com/en/articles/5354376-streamline-free-license")
        )
    ],
);

const imageAttributions = new AttributionList(
    "Images",
    [
        new AttributionSet(
            new ImageAttribution(
                "https://images.unsplash.com/photo-1618889482923-38250401a84e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                , "cooked food on white ceramic bowl"
                , "https://unsplash.com/photos/cooked-food-on-white-ceramic-bowl-WjdOYhgTGCM?utm_content=creditShareLink&utm_medium=referral&utm_source=unsplash"
            ),
            new Attribution("Stephen Bedase", "https://unsplash.com/@stephenkbedase"),
            new Attribution("Unsplash", "https://unsplash.com/license")
        ),
        new AttributionSet(
            new ImageAttribution(
                "https://images.unsplash.com/photo-1538128844159-f08f41bfb169?q=80&w=2044&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                , "man cooking inside kitchen"
                , "https://unsplash.com/photos/man-cooking-inside-kitchen-JCHlsKSgbSk"
            ),
            new Attribution("Anton Nazaretian", "https://unsplash.com/@anton_nazaretian"),
            new Attribution("Unsplash", "https://unsplash.com/license")
        ),
        new AttributionSet(
            new ImageAttribution(
                "https://images.pexels.com/photos/20250944/pexels-photo-20250944/free-photo-of-restaurant-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                , "Restaurant at Night"
                , "https://www.pexels.com/photo/restaurant-at-night-20250944/"
            ),
            new Attribution("Hoi Wai", "https://www.pexels.com/@hoiwaihk/"),
            new Attribution("Pexels", "https://www.pexels.com/license/")
        ),
        new AttributionSet(
            new ImageAttribution(
                "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Shoyu_Ramen_%40_Gancon_Noodle_%40_Komagome_%2813469726723%29.jpg/800px-Shoyu_Ramen_%40_Gancon_Noodle_%40_Komagome_%2813469726723%29.jpg?20240609140042"
                , "Shoyu Ramen @ Gancon Noodle @ Komagome"
                , "https://flickr.com/photos/22539273@N00/13469726723"
            ),
            new Attribution("Guilhem Vellut", "https://www.flickr.com/people/22539273@N00"),
            new Attribution("CC BY 2.0", "https://creativecommons.org/licenses/by/2.0/")
        ),
        new AttributionSet(
            new ImageAttribution(
                "https://upload.wikimedia.org/wikipedia/commons/2/22/Tonkotsu_Ramen_%40_Oreshiki_Jun_%40_Tokyo_Ramen_Street_%2813099280083%29.jpg"
                , "Tonkotsu Ramen @ Oreshiki Jun @ Tokyo Ramen Street"
                , "https://flickr.com/photos/22539273@N00/13099280083"
            ),
            new Attribution("Guilhem Vellut", "https://www.flickr.com/people/22539273@N00"),
            new Attribution("CC BY 2.0", "https://creativecommons.org/licenses/by/2.0/")
        ),
        new AttributionSet(
            new ImageAttribution(
                "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Tantan-men_%40_Kisurin_%40_Akasaka_%2811353836986%29.jpg/800px-Tantan-men_%40_Kisurin_%40_Akasaka_%2811353836986%29.jpg?20240608231011"
                , "Tantan-men @ Kisurin @ Akasaka"
                , "https://flickr.com/photos/22539273@N00/11353836986"
            ),
            new Attribution("Guilhem Vellut", "https://www.flickr.com/people/22539273@N00"),
            new Attribution("CC BY 2.0", "https://creativecommons.org/licenses/by/2.0/")
        ),
        new AttributionSet(
            new ImageAttribution(
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Nagi_Hono_no_Tsukemen_%289975558213%29.jpg/800px-Nagi_Hono_no_Tsukemen_%289975558213%29.jpg?20240608224646"
                , "Nagi Hono no Tsukemen"
                , "https://flickr.com/photos/22539273@N00/9975558213"
            ),
            new Attribution("Guilhem Vellut", "https://www.flickr.com/people/22539273@N00"),
            new Attribution("CC BY 2.0", "https://creativecommons.org/licenses/by/2.0/")
        ),
        new AttributionSet(
            new ImageAttribution(
                "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Deluxe_Miso_Ramen_%40_Misoya_Hachirou_Shoten_%289637068386%29.jpg/800px-Deluxe_Miso_Ramen_%40_Misoya_Hachirou_Shoten_%289637068386%29.jpg?20240608224121"
                , "Deluxe Miso Ramen @ Misoya Hachirou Shoten"
                , "https://flickr.com/photos/22539273@N00/9637068386"
            ),
            new Attribution("Guilhem Vellut", "https://www.flickr.com/people/22539273@N00"),
            new Attribution("CC BY 2.0", "https://creativecommons.org/licenses/by/2.0/")
        ),
        new AttributionSet(
            new ImageAttribution(
                "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Shio_Ramen_%40_Kinjito_%40_Akabane_%2814160436015%29.jpg/800px-Shio_Ramen_%40_Kinjito_%40_Akabane_%2814160436015%29.jpg?20240609142429"
                , "Shio Ramen @ Kinjito @ Akabane"
                , "https://flickr.com/photos/22539273@N00/14160436015"
            ),
            new Attribution("Guilhem Vellut", "https://www.flickr.com/people/22539273@N00"),
            new Attribution("CC BY 2.0", "https://creativecommons.org/licenses/by/2.0/")
        ),
        new AttributionSet(
            new ImageAttribution(
                "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Black_Sesame_Ramen%2C_Kodawari_Ramen%2C_Paris_001.jpg/640px-Black_Sesame_Ramen%2C_Kodawari_Ramen%2C_Paris_001.jpg"
                , "Black Sesame Ramen @ Kodawari Ramen @ Saint-Germain-des-Près @ Paris"
                , "https://www.flickr.com/photos/o_0/27916422445/"
            ),
            new Attribution("Guilhem Vellut", "https://www.flickr.com/people/22539273@N00"),
            new Attribution("CC BY 2.0", "https://creativecommons.org/licenses/by/2.0/")
        ),
        new AttributionSet(
            new ImageAttribution(
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Udon_%40_Yatta_%21_Ramen_%40_Annecy-le-Vieux_%2851417161741%29.jpg/800px-Udon_%40_Yatta_%21_Ramen_%40_Annecy-le-Vieux_%2851417161741%29.jpg"
                , "Udon @ Yatta ! Ramen @ Annecy-le-Vieux"
                , "https://www.flickr.com/photos/o_0/51417161741/"
            ),
            new Attribution("Guilhem Vellut", "https://www.flickr.com/people/22539273@N00"),
            new Attribution("CC BY 2.0", "https://creativecommons.org/licenses/by/2.0/")
        ),
        new AttributionSet(
            new ImageAttribution(
                "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Tori_Paitan_Ramen%2C_Kodawari_Ramen%2C_Paris_001.jpg/800px-Tori_Paitan_Ramen%2C_Kodawari_Ramen%2C_Paris_001.jpg"
                , "Tori Paitan Ramen @ Kodawari Ramen @ Saint-Germain-des-Près @ Paris"
                , "https://www.flickr.com/photos/o_0/27712369596/"
            ),
            new Attribution("Guilhem Vellut", "https://www.flickr.com/people/22539273@N00"),
            new Attribution("CC BY 2.0", "https://creativecommons.org/licenses/by/2.0/")
        ),
        new AttributionSet(
            new ImageAttribution(
                "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Hiyashi_Chuka_ramen_%40_Yatta_%21_Ramen_%40_Annecy-le-Vieux_%2831083939268%29.jpg/800px-Hiyashi_Chuka_ramen_%40_Yatta_%21_Ramen_%40_Annecy-le-Vieux_%2831083939268%29.jpg"
                , "Hiyashi Chuka ramen @ Yatta ! Ramen @ Annecy-le-Vieux"
                , "https://www.flickr.com/photos/o_0/31083939268/"
            ),
            new Attribution("Guilhem Vellut", "https://www.flickr.com/people/22539273@N00"),
            new Attribution("CC BY 2.0", "https://creativecommons.org/licenses/by/2.0/")
        )
    ],
);

const fontAttributions = new AttributionList(
    "Fonts",
    [
        new AttributionSet(
            new Attribution("American Karlie", "https://www.fontspace.com/american-karlie-font-f103504"),
            new Attribution("Linafisstudio", "https://www.fontspace.com/linafisstudio"),
            new Attribution("Freeware", null),
        ),
        new AttributionSet(
            new Attribution("Monday Ramen", "https://www.fontspace.com/monday-ramen-font-f103797"),
            new Attribution("Khurasan", "https://www.fontspace.com/khurasan"),
            new Attribution("Freeware", null),
        ),
        new AttributionSet(
            new Attribution("Roboto", "https://fonts.google.com/specimen/Roboto"),
            [
                new Attribution("Christian Robertson", "https://fonts.google.com/?query=Christian%20Robertson"),
                new Attribution("Paratype", "https://fonts.google.com/?query=Paratype"),
                new Attribution("Font Bureau", "https://fonts.google.com/?query=Font%20Bureau")
            ],
            new Attribution("SIL Open Font License Version 1.1", "https://openfontlicense.org/open-font-license-official-text/"),
        )
    ],
);

export { iconAttributions, imageAttributions, fontAttributions };