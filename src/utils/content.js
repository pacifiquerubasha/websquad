import { images } from "./images";

export const  menuItems = [
    { name: "About", link: "/about" },
    { name: "News", link: "/news" },
    { name: "Jobs", link: "/jobs" },
    { name: "Visualisations", link: "/visualisations" },
    { name: "Matching", link: "/matching" },
    { name: "Contact", link: "/contact" }
];


/**
 * HERO CONTENT
 */

export const hero = {
    title:"Unlock Boundless Opportunities",
    subtitle:"JobMagnetix gives you the opportunity to discover jobs worldwide with ease!",
    cta:"EXPLORE NOW FOR FREE",
    video:images.heroVideo
}


/**
 * ABOUT CONTENT
 */

export const about = {
    title:"About The Platform",
    subtitle:"Our platform seamlessly connects you to a vast network of employment opportunities that span across continents, providing access to a world of career possibilities.",
    aboutBoxes : [
        {
            icon:"fas fa-user",
            box_title:"Diverse Industries",
            box_content:"Creates opportunities in diverse sectors, allowing you to explore your passion and expertise on a global scale."
        },
        {
            icon:"fas fa-user",
            box_title:"International Connections",
            box_content:"Forge valuable connections with employers and professionals from around the world."
        },
        {
            icon:"fas fa-user",
            box_title:"Remote Work",
            box_content:"Features remote job listings that provide flexibility and the opportunity to work from anywhere."
        },
        {
            icon:"fas fa-user",
            box_title:"Expatriate Assignments",
            box_content:"Our platform connects you with international organizations seeking talented individuals who are willing to relocate"
        }
    ]
}



/**
 * CEO CONTENT
 */

export const ceo = {
    name:"John Doe",
    role:"CEO - JobMetrix",
    message:`Unleash your potential and explore these diverse global career opportunities through our platform. 
    Let your ambitions soar and discover a world of professional growth and fulfillment.`
}


/**
 * SECTION 2 CONTENT
 */

export const section2 = {
    image:images.hero,
    title:"Embrace a Borderless Future",
    subtitle:`Join our global community of job seekers, where borders fade and opportunities abound. 
    Empower your career, embrace diversity, and take the leap towards a limitless future. 
    Start your journey today and let your dreams know no boundaries!"`,
    cta:"EXPLORE NOW FOR FREE"
}


/**
 * SECTION 3 CONTENT
 */

export const section3 = {
    title:"Enhancing Website Experience",
    subtitle:` Our user-friendly platform empowers you to take control of your career journey, ensuring a
    smooth and efficient job search experience from start to finish`,
    stats:[
        {total:"5000", label:"Visitors"},
        {total:"18+", label:"Impressions"}

    ],

    section3Boxes:[
        {
            icon:"fas fa-user-md",
            title:"Streamlined Job Search",
            subtitle:`Simplify your job search process with our intuitive interface. Our platform offers a user-friendly experience, 
            enabling you to effortlessly navigate through job listings, refine your search criteria, and discover 
            relevant opportunities worldwide.`,
        },
        {
            icon:"fas fa-user-md",
            title:"Extensive Database of Opportunities",
            subtitle:` Whether you're seeking local or international employment, our platform provides a wealth of options to 
            explore and apply for, ensuring you have a wide range of opportunities to choose from.`,
        },
        {
            icon:"fas fa-user-md",
            title:"Enhanced Job Insights",
            subtitle:`Our platform provides comprehensive information to help you make informed decisions about which
            opportunities align with your skills, interests, and career goals.`,
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
    desc:`Collaboration goes beyond just job search advice; it opens doors to valuable networking opportunities. 
    Connect with professionals from various backgrounds, industries, and regions who can offer guidance, referrals, 
    or even potential job leads. Through our collaborative platform, you can build meaningful connections, 
    expand your professional network globally, and increase your chances of landing your dream job.`,
    cta:"EXPLORE NOW FOR FREE"
}


/**
 * CTA CONTENT
 */

export const testimonials = {
    title:"About The Platform",
    subtitle:`At our platform, we are committed to empowering individuals in their quest for global career opportunities.
     With a user-centric approach, we provide a comprehensive and intuitive platform that connects job seekers with a vast
      network of employment options spanning across continents.`,
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