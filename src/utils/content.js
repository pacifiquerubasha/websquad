import { images } from "./images";

export const  menuItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Services", link: "/" },
    { name: "Products", link: "/" },
    { name: "Contact", link: "/" }
];


/**
 * HERO CONTENT
 */

export const hero = {
    title:"Lorem, ipsum dolor sit amet.",
    subtitle:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reprehenderit itaque mollitia sequi nisi sit.",
    cta:"EXPLORE NOW FOR FREE"
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
            link:"/",
            icon:"fas fa-user"           
        },
        {
            image:images.hero,
            author:"John Doe",
            title:"News Title",
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reprehenderit itaque mollitia sequi nisi sit.",
            date:"12/12/2020",
            link:"/",
            icon:"fas fa-user"           
        },
        {
            image:images.hero,
            author:"John Doe",
            title:"News Title",
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reprehenderit itaque mollitia sequi nisi sit.",
            date:"12/12/2020",
            link:"/",
            icon:"fas fa-user"           
        },
        {
            image:images.hero,
            author:"John Doe",
            title:"News Title",
            content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora reprehenderit itaque mollitia sequi nisi sit.",
            date:"12/12/2020",
            link:"/",
            icon:"fas fa-user"           
        }
    ]
}