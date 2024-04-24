import React from "react";
import { CgFlag, CgWorkAlt } from "react-icons/cg";
import { FaBlog, FaReact, FaRegArrowAltCircleLeft, FaYarn } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import carhubImg from "@/public/carhub.png";
import realtorImg from "@/public/realtor.png";
import ecommerceImg from "@/public/image.png";

// Navigation links
export const LINKS = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

// External links
export const EXTRA_LINKS = {
  linkedin: "https://fr.linkedin.com/in/level-sony",
  github: "https://github.com/sony-level",
  resume: "/resume.pdf",
  source_code: "https://github.com/sony-level/me",
  email: "sony-dilane-level.mbango@isen.yncrea.fr",
  blog: "https://blogcyber.level.ovh/",
  rootMe:"https://www.root-me.org/level-818750?inc=score&lang=fr"
} as const;

// Data for work experience
export const EXPERIENCES_DATA = [ 
  {
    title: "Employé étudiant chez KFC",
    location: "Toulon, France",
    description: "En tant qu'employé étudiant chez KFC en parallèle de mes études, j'ai acquis une expérience précieuse dans le respect des règles, la gestion de l'organisation et le service clientèle. Travaillant dans un environnement dynamique et exigeant, j'ai développé la capacité à travailler efficacement sous pression, en maintenant un haut niveau de service même pendant les périodes d'affluence. Mon rôle impliquait également une forte collaboration en équipe pour garantir un environnement de travail harmonieux et une expérience client optimale.",
    icon: React.createElement(CgWorkAlt),
    date: "Juin 2023 - Aujourd'hui"
    },
    {
      title: "Administrateur d'un blog personnel",
      location: "Online",
      description:
        "En tant qu'administrateur de mon blog , je gère la creation et la gestion du contenu à mes heures libre sur une variété de sujets lié a la cybersécurité.",
      skillsAcquired: ["Création de contenu", "Gestion de blog", "Communication écrite", "Marketing de contenu"],
      icon: React.createElement(FaBlog),
      date: "Mars 2024 - Aujourd'hui",
    },
    {
      title: "HACKEVENS | Capture de Flag || ADVENS & ISEN YNCREA Méditerranée",
      location: "Lyon, France",
      description:
        "C'était l'un de mes premiers événements Capture de Flag. Cette expérience m'a permis de mettre en pratique mes prérequis en cybersécurité, d'apprendre à travailler efficacement en equipe sous pression et de collaborer avec d'autres participants. J'ai également appris l'importance du respect des règles et de l'organisation dans ce type d'événement.",
        icon: React.createElement(CgFlag),
      date: "Aout 2023",
    },
    {
      title: "Stagiaire informatique || GLOBAL SPES",
      location: "Douala, Cameroun",
      description:
        "Assistance technique : Responsable de fournir une assistance technique aux clients et aux membres de l'équipe, en résolvant les problèmes liés aux logiciels, aux réseaux, ou aux systèmes informatiques.",
      skillsAcquired: ["Respect des règles", "Organisataion", "Travail efficace sous pression", "Collaboration en équipe"],
      icon: React.createElement(LuGraduationCap),
      date: "Juin 2021 - Setp 2021",
    },
] as const;

// Data for projects
export const PROJECTS_DATA = [
  {
    title: "Dockdock-Go",
    description:
      "Création d’une solution d’entreprise axée sur la sécurité des images Docker. En cours de realisation",
    tags: ["Docker", "Firecracker", "Proxmox", "  Angular Js", "Harbor", "Kubernetes" , "Rust"],
    imageUrl: ecommerceImg,
    projectUrl: "https://github.com/Master1-Project",
  },
  {
    title: "Vérification de chaînes de certificats",
    description:  " Cette fonctionnalité permet de vérifier la validité des chaînes de certificats pour renforcer la sécurité de l'infrastructure. ",
    tags: ["Cryptographie", "Java", "Sécurité", "Chaine de Certificat"],
    imageUrl: carhubImg,
    projectUrl: "https://github.com/sony-level/cryptoProject-2024/tree/master",
  },

] as const;

// Data for skills
// Data for skills
export const SKILLS_DATA = {
  "Cybersécurité": [
    "Cryptographie",
    "Sécurité Réseau",
    "Sécurité des Applications",
    "Sécurité IoT",
    "Hacking Éthique",
    "Forensique",
   
  ],
  "Déploiement": [
    "Docker",
    "Kubernetes",
    "CI/CD",
    "Proxmox",
    "Jenkins",
    "Firecracker",
    "Grafana",
   
  ],
  "Langages de programmation": [
    "Python",
    "Java",
    "C",
    "Rust",
    "JavaScript",
    "Angular JS",
    "Bash",
  ],
} as const;

// Owner name
export const OWNER_NAME = "Level ";
