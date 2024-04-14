import type { Site, SocialObjects, TimelineObject } from "./types";

export const SITE: Site = {
  website: "https://aali006.github.io", // replace this with your deployed domain
  author: "Asmat Ali",
  desc: "A minimal, responsive and SEO-friendly Portfolio/Blog.",
  title: "A2",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

/**
 * {
 *   name: "Facebook",
 *   href: "https://github.com/satnaing/astro-paper",
 *   linkTitle: `${SITE.title} on Facebook`,
 *   active: true,
 * },
 * {
 *   name: "Instagram",
 *   href: "https://github.com/satnaing/astro-paper",
 *   linkTitle: `${SITE.title} on Instagram`,
 *   active: true,
 * },
 * {
 *   name: "Twitch",
 *   href: "https://github.com/satnaing/astro-paper",
 *   linkTitle: `${SITE.title} on Twitch`,
 *   active: false,
 * },
 * {
 *   name: "YouTube",
 *   href: "https://github.com/satnaing/astro-paper",
 *   linkTitle: `${SITE.title} on YouTube`,
 *   active: false,
 * },
 * {
 *   name: "WhatsApp",
 *   href: "https://github.com/satnaing/astro-paper",
 *   linkTitle: `${SITE.title} on WhatsApp`,
 *   active: false,
 * },
 * {
 *   name: "Snapchat",
 *   href: "https://github.com/satnaing/astro-paper",
 *   linkTitle: `${SITE.title} on Snapchat`,
 *   active: false,
 * },
 * {
 *   name: "Pinterest",
 *   href: "https://github.com/satnaing/astro-paper",
 *   linkTitle: `${SITE.title} on Pinterest`,
 *   active: false,
 * },
 * {
 *   name: "TikTok",
 *   href: "https://github.com/satnaing/astro-paper",
 *   linkTitle: `${SITE.title} on TikTok`,
 *   active: false,
 * },
 * {
 *   name: "CodePen",
 *   href: "https://github.com/satnaing/astro-paper",
 *   linkTitle: `${SITE.title} on CodePen`,
 *   active: false,
 * },
 * {
 *   name: "Discord",
 *   href: "https://github.com/satnaing/astro-paper",
 *   linkTitle: `${SITE.title} on Discord`,
 *   active: false,
 * },
 * {
 *   name: "GitLab",
 *   href: "https://github.com/satnaing/astro-paper",
 *   linkTitle: `${SITE.title} on GitLab`,
 *   active: false,
 * },
 * {
 *   name: "Reddit",
 *   href: "https://github.com/satnaing/astro-paper",
 *   linkTitle: `${SITE.title} on Reddit`,
 *   active: false,
 * },
 * {
 *   name: "Skype",
 *   href: "https://github.com/satnaing/astro-paper",
 *   linkTitle: `${SITE.title} on Skype`,
 *   active: false,
 * },
 * {
 *   name: "Steam",
 *   href: "https://github.com/satnaing/astro-paper",
 *   linkTitle: `${SITE.title} on Steam`,
 *   active: false,
 * },
 * {
 *   name: "Mastodon",
 *   href: "https://github.com/satnaing/astro-paper",
 *   linkTitle: `${SITE.title} on Mastodon`,
 *   active: false,
 * },
 */
export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/aali006/",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/aali006/",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "ashmat.official0777@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
  
];

export const TIMELINE: TimelineObject = [

  {
    year: "Standard 9th",
    title: "Start of Coding Journey",
    duration: "",
    details:
      "Back in 9th grade, I began my coding journey by learning HTML and CSS. It was an exciting time as I discovered the world of website development and design. I found HTML easy to grasp, with its simple structure for creating web pages. CSS, on the other hand, added style and flair to my creations, allowing me to customize the look and feel of websites. Starting with these foundational languages sparked my interest in coding and set me on a path of continuous learning and exploration in the field of technology.",
  },
  {
    year: "Standard 11th",
    title: "Introduction with Coding Language C, C++",
    duration: "2 year",
    details:
      "In 11th grade, I chose Computer Science as a subject, where I dived into learning C and C++. This decision marked a significant milestone in my coding journey, as I began to cultivate a strong coding mindset. Exploring the fundamentals of programming languages like C and C++ opened up a world of possibilities for me. I found joy in solving coding challenges and building programs from scratch. When it came time for the Board Examination, I put my coding skills to the test and achieved excellent marks. This success further fueled my passion for coding and reinforced my belief in the power of technology to shape the future.",
  },
  {
    year: "2020",
    title: "Completed B.Tech.",
    duration: "4 years",
    details:
      "In 2020, I completed my B.Tech. in Electrical Engineering with flying colors, achieving excellent marks. I also successfully cleared the GATE exam on my first attempt, surpassing the cutoff score. This achievement opened doors for me, and I secured a placement in a prestigious Software multinational company (MNC). It was a proud moment for me as my hard work and dedication paid off, paving the way for exciting opportunities in my career. This accomplishment reinforced my belief in the importance of perseverance and determination in achieving ones goals.",
  },
  {
    year: "2020",
    title: "Joined TCS as System Engineer",
    duration: "2 years",
    details:
      "In 2020, I began my journey with TCS as a System Engineer, where I was assigned the role of Automation QA. During my time there, I had the opportunity to delve into various aspects of the job, including the data analysis part. Working in an Agile environment, I gained valuable insights into different technologies and honed my communication skills. Collaborating with my team, I learned the importance of teamwork and leadership in achieving collective goals. My experience at TCS provided me with a deep understanding of the work culture in a multinational company (MNC). I cherished my time there, and it helped me grow both personally and professionally. My journey with TCS concluded in July 2022, leaving me with cherished memories and invaluable lessons.",
  },
  {
    year: "2022",
    title: "Admission at IIT Bh",
    duration: "2 years",
    details:
      "After my tenure at TCS, I pursued my Master's degree in EV Technology at IIT Bh. I was drawn to this field because of its promising future in e-mobility. During the course, I gained extensive knowledge about the E-Mobility domain and its potential impact in the near future. My thesis work focused on the critical aspect of State of Health prediction for EV batteries, which holds significant importance for EV users. The project was entirely driven by Machine Learning techniques. Additionally, I undertook several projects on topics like Natural Language Processing (NLP) and Computer Vision (CV). These experiences have enriched my understanding of emerging technologies and their applications in real-world scenarios.",
  },
  {
    year: "Today",
    title: "Plan of Joining Industry again",
    duration: "",
    details:
      "I'm eager to dive back into the corporate world, this time focusing on AI/ML-based roles. With a background in this field and a drive to excel, I'm actively seeking opportunities that allow me to apply my expertise and contribute to innovative projects. Ready to tackle challenges head-on and make a positive impact, I'm excited about the possibilities that lie ahead in the AI/ML domain.",
  }
  
  
];
