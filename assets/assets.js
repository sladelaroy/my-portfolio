import user_image from "./user_image.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import mongodb from "./mongodb.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.svg";
import logo_dark from "./logo_dark.svg";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import profile_img from "./profile-img.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import web_icon from "./web-icon.png";
import mobile_icon from "./mobile-icon.png";
import ui_icon from "./ui-icon.png";
import graphics_icon from "./graphics-icon.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import webIcon from "./webIcon.png";
import api_icon from "./apiIcon.png";
import database_icon from "./databaseIcon.png";
import deployment_icon from "./deploymentIcon.png";
import webIcon_dark from "./webIconDark.png";
import api_icon_dark from "./apiIconDark.png";
import database_icon_dark from "./databaseIconDark.png";
import deployment_icon_dark from "./deploymentIconDark.png";
import React from "react";

export const assets = {
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
  webIcon,
  api_icon,
  database_icon,
  deployment_icon,
  webIcon_dark,
  api_icon_dark,
  database_icon_dark,
  deployment_icon_dark
};

export const workData = [
  {
    title: "Edemy",
    description:
      "Built a full-featured LMS using the MERN stack with secure authentication, real-time progress tracking, and video streaming integration for courses. ",
    thumbnail: "/edemy.jpg",
    link: "https://edemy-lms-eta.vercel.app/",
    technologies: "React.js, Javascript, TailwindCSS, Express, Node.js, MongoDB, Clerk, Stripe"
  },
  {
    title: "Tech Store",
    description:
      "Developed an e-commerce platform for electronics with clerk for easy user management, and Next.js for SEO friendliness and scalability.",
    thumbnail: "/tech_store.jpg",
    link: "https://quick-cart-two-ochre.vercel.app/",
    technologies: "Next.js, Clerk, Javascript, TailwindCSS, MongoDB, Stripe"
  },
  {
    title: "Food Delivery",
    description:
      "Built a food delivery platform using the MERN stack with order tracking, payment gateway integration, and a responsive UI.",
    thumbnail: "/food_delivery.jpg",
    link: "https://food-delivery-wine-theta.vercel.app/",
    technologies: "React.js, TailwindCSS, Javascript, TailwindCSS, Express, Node.js, MongoDB, Stripe"
  },
  {
    title: "Fashion Shop",
    description:
      "Developed a complete e-commerce platform with secure authentication, product filtering, and Stripe payment integration.",
    thumbnail: "/fashion_store.jpg",
    link: "https://forever-frontend-drab.vercel.app/",
    technologies: "React.js, Express, Node.js, MongoDB, Stripe"
  },
  // {
  //   title: "Workout buddy",
  //   description: "MERN Project",
  //   thumbnail: "/workout_buddy.jpg",
  //   link: "https://workout-buddy-azure.vercel.app/",
  //   technologies: "React.js"
  // }
];

export const serviceData = [
  {
    icon: assets.webIcon,
    iconDark: assets.webIcon_dark,
    title: "Web & Mobile App Development",
    description:
      "Designing and building dynamic applications using front-end and back-end technologies, ensuring a seamless user experience.",
    link: ""
  },
  {
    icon: assets.api_icon,
    iconDark: assets.api_icon_dark,
    title: "API Development and Integration",
    description:
      " Creating and integrating RESTful or GraphQL APIs to enable communication between the front-end and back-end systems, enhancing functionality.",
    link: ""
  },
  {
    icon: assets.database_icon,
    iconDark: assets.database_icon_dark,
    title: "Database Management",
    description:
      "Designing and maintaining databases (SQL or NoSQL) to efficiently store, retrieve, and manipulate data, ensuring data integrity and security.",
    link: ""
  },
  {
    icon: assets.deployment_icon,
    iconDark: assets.deployment_icon_dark,
    title: "Deployment and Maintenance",
    description:
      " Managing the deployment of applications to cloud platforms, handling updates, bug fixes, and performance optimization to ensure the application runs smoothly.",
    link: ""
  }
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Technologies and Languages",
    description:
      "React, Next.js, Node.js, Express.js, MongoDB, PostgreSQL"
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "Bachelor’s Degree"
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built more than 5 projects"
  }
];

export const toolsData = [
  assets.vscode,
  assets.firebase,
  assets.mongodb,
  assets.figma,
  assets.git
];
