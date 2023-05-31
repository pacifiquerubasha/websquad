import { images } from "./images";

export const  menuItems = [
    { name: "About", link: "/about" },
    { name: "News", link: "/news" },
    { name: "Contact", link: "/contact" }
];


/**
 * HERO CONTENT
 */

export const hero = {
    title:"Lorem, ipsum dolor sit amet.",
    subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reprehenderit itaque mollitia sequi nisi sit.",
    cta:"EXPLORE NOW FOR FREE",
    video:images.heroVideo
}


/**
 * ABOUT CONTENT
 */

export const about = {
    title:"About The Platform",
    subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reprehenderit itaque mollitia sequi nisi sit.",
    aboutBoxes : [
        {
            icon:"fas fa-user",
            box_title:"Box Title",
            box_content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, quas."
        },
        {
            icon:"fas fa-user",
            box_title:"Box Title",
            box_content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, quas."
        },
        {
            icon:"fas fa-user",
            box_title:"Box Title",
            box_content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, quas."
        },
        {
            icon:"fas fa-user",
            box_title:"Box Title",
            box_content:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro, quas."
        }
    ]
}



/**
 * CEO CONTENT
 */

export const ceo = {
    name:"John Doe",
    role:"CEO - JobMetrix",
    message:`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem nam corporis perferendis
     veritatis consequatur pariatur maiores rerum accusantium velit tempore omnis in accusamus incidunt, 
     voluptatem mollitia perspiciatis voluptatibus aspernatur sit.`
}


/**
 * SECTION 2 CONTENT
 */

export const section2 = {
    image:images.hero,
    title:"Lorem, ipsum dolor sit amet.",
    subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reprehenderit itaque mollitia sequi nisi sit.",
    cta:"EXPLORE NOW FOR FREE"
}


/**
 * SECTION 3 CONTENT
 */

export const section3 = {
    title:"Lorem, ipsum dolor sit amet.",
    subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reprehenderit itaque mollitia sequi nisi sit.",
    stats:[
        {total:"5000", label:"Description"},
        {total:"18+", label:"Description"}

    ],

    section3Boxes:[
        {
            icon:"fas fa-user-md",
            title:"Box Title",
            subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reprehenderit itaque mollitia sequi nisi sit.",
        },
        {
            icon:"fas fa-user-md",
            title:"Box Title",
            subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reprehenderit itaque mollitia sequi nisi sit.",
        },
        {
            icon:"fas fa-user-md",
            title:"Box Title",
            subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reprehenderit itaque mollitia sequi nisi sit.",
        }
    ]
}


/**
 * NEWS CONTENT
 */

export const news = {
    title:"Latest News",
    subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reprehenderit itaque mollitia sequi nisi sit.",
    cta:"EXPLORE ALL NEWS",
    newsItems:[
        {
            image:images.hero,
            author:"John Doe",
            title:"News Title",
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reprehenderit itaque mollitia sequi nisi sit.",
            date:"12/12/2020",
            link:"/news/7GmT2p-DEkL-f6R0tW9i1x-bLs4P8hA3T",
            icon:"fas fa-user"           
        },
        {
            image:images.hero,
            author:"John Doe",
            title:"News Title",
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reprehenderit itaque mollitia sequi nisi sit.",
            date:"12/12/2020",
            link:"/news/Xn3o5M-jzHU-2KdCv4QY7l-yRqO1AeD3I",
            icon:"fas fa-user"           
        },
        {
            image:images.hero,
            author:"John Doe",
            title:"News Title",
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reprehenderit itaque mollitia sequi nisi sit.",
            date:"12/12/2020",
            link:"/news/NlV6gJ-rIyB-d9HcF8RvYk-tZ2iS4wP0Q",
            icon:"fas fa-user"           
        },
        {
            image:images.hero,
            author:"John Doe",
            title:"News Title",
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reprehenderit itaque mollitia sequi nisi sit.",
            date:"12/12/2020",
            link:"/news/e5NjL2-Fqo7-AaBbCcDdEe-FfGgHhIiJj",
            icon:"fas fa-user"           
        }
    ]
}


/**
 * CTA CONTENT
 */

export const cta = {
    question:"WHAT ARE YOU WAITING FOR?",
    title:"Let's collaborate!",
    desc:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.`,
    cta:"EXPLORE NOW FOR FREE"
}


/**
 * CTA CONTENT
 */

export const testimonials = {
    title:"About The Platform",
    subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reprehenderit itaque mollitia sequi nisi sit.",
    testimonials:[
        {
            image:images.react,
            name:"John Doe",
            role:"CEO - JobMetrix",
            message:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore deserunt velit dolores, alias ratione quae."
        },
        {
            image:images.react,
            name:"John Doe",
            role:"CEO - JobMetrix",
            message:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore deserunt velit dolores, alias ratione quae."
        },
        {
            image:images.react,
            name:"John Doe",
            role:"CEO - JobMetrix",
            message:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore deserunt velit dolores, alias ratione quae."
        },
        {
            image:images.react,
            name:"John Doex",
            role:"CEO - JobMetrix",
            message:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore deserunt velit dolores, alias ratione quae."
        }
    ]
}