import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { GoProjectRoadmap } from "react-icons/go";
import { IoMdHome } from "react-icons/io";
import { LuFileSpreadsheet } from "react-icons/lu";

export const navLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Contact",
    href: "/contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Front-end Developer",
    company: "Proxima Robotics",
    date: "April 2024 - July 2024",
    description:
      "Developed an interactive web application for real-time monitoring of laser scans and visualizing points detected by a robot's camera, displayed in both 2D and 3D environments using React, Konva.js, and React Three Fiber.",
  },
] as const;

export const projectsData = [
  {
    title: "Easy Car Rental",
    description:
      "Easy Car Rental is a web application designed to provide a seamless and luxurious car rental experience. The platform offers a wide range of premium vehicles, allowing users to easily browse, select, and reserve the perfect car for their journey.",
    tags: ["Next.js", "Tailwind", "Supabase", "Auth.js"],
    imageUrl: "/easy-car-rental.png",
    githubUrl: "https://github.com/lucchesilorenzo/easy-car-rental",
    liveUrl: "https://easy-car-rental.vercel.app/",
  },
  {
    title: "Contact Manager",
    description:
      "Contact Manager is a personal project designed to experiment with creating, reading, updating, and deleting (CRUD) operations for managing contacts.",
    tags: ["React", "Tailwind", "Supabase"],
    imageUrl: "/contact-manager.png",
    githubUrl: "https://github.com/lucchesilorenzo/contact-manager",
    liveUrl: "",
  },
  {
    title: "React Pizzeria",
    description:
      "React Pizzeria is a web application for ordering pizzas. The app provides an intuitive interface to browse the pizza menu, add items to the cart, create new orders, and view the status of existing orders.",
    tags: ["React", "Tailwind", "React Router", "Redux"],
    imageUrl: "/react-pizzeria.png",
    githubUrl: "https://github.com/lucchesilorenzo/react-pizzeria",
    liveUrl: "",
  },
  {
    title: "WatchWise",
    description:
      "WatchWise is a full-stack project designed for tracking movies and TV shows.",
    tags: ["Python", "Django", "Bootstrap"],
    imageUrl: "/watchwise.png",
    githubUrl: "https://github.com/lucchesilorenzo/watchwise",
    liveUrl: "",
  },
  {
    title: "E-Commerce Management API",
    description: "A mock API created for practicing with endpoints in Express.",
    tags: ["Node.js", "Express", "MongoDB"],
    imageUrl: "",
    githubUrl: "https://github.com/lucchesilorenzo/e-commerce-management-api",
    liveUrl: "",
  },
  {
    title: "Bank Account Manager",
    description:
      "Bank Account Manager is a web application that allows you to manage your bank account by performing various operations such as deposits, withdrawals, loan requests, and creating new customers. ",
    tags: ["React", "Redux"],
    imageUrl: "",
    githubUrl: "https://github.com/lucchesilorenzo/bank-account-manager",
    liveUrl: "",
  },
  {
    title: "The Energy Bulletin",
    description:
      "This project is a simple post manager that manages posts, including adding new posts, filtering posts based on a search query, and clearing all posts.",
    tags: ["React", "Context API"],
    imageUrl: "",
    githubUrl: "https://github.com/lucchesilorenzo/the-energy-bulletin",
    liveUrl: "",
  },
  {
    title: "Travel Tracker",
    description:
      "Travel Tracker is a web application that allows you to track your travels by marking locations on a map. You can get your current position, add markers manually by clicking on the map, and clear all markers.",
    tags: ["React", "React Router"],
    imageUrl: "",
    githubUrl: "https://github.com/lucchesilorenzo/travel-tracker",
    liveUrl: "",
  },
] as const;

export const skillsData = [
  {
    title: "Languages",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript"],
  },
  {
    title: "Frameworks and libraries",
    skills: ["React", "Next.js"],
  },
  {
    title: "JavaScript libraries",
    skills: [
      "Redux",
      "React Router",
      "Tanstack Query",
      "React Hook Form",
      "Zod",
      "Auth.js",
    ],
  },
  {
    title: "Style frameworks and component libraries",
    skills: ["Tailwind", "Shadcn/ui"],
  },
  {
    title: "Back-end stack",
    skills: ["Node.js", "Express", "MongoDB", "Supabase"],
  },
] as const;

export const footerLinks = [
  {
    name: "Home",
    href: "/",
    icon: React.createElement(IoMdHome, { size: 24 }),
  },
  {
    name: "Projects",
    href: "/projects",
    icon: React.createElement(GoProjectRoadmap, { size: 24 }),
  },
  {
    name: "CV",
    href: "https://rxresu.me/lorenzolucchesi/cv-lorenzo-lucchesi-en",
    icon: React.createElement(LuFileSpreadsheet, { size: 24 }),
  },
] as const;

export const contactsData = [
  {
    name: "GitHub",
    url: "https://github.com/lucchesilorenzo",
    icon: React.createElement(FaGithub, { size: 24 }),
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/lorenzolucchesi",
    icon: React.createElement(FaLinkedinIn, { size: 24 }),
  },
];
