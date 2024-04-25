// client-side component
"use client";

// Import necessary dependencies and components.
import { motion } from "framer-motion";

import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";

// Define the About component.
const About = () => {
  // Use the useSectionInView custom hook to track when the "About" section is in view.
  const { ref } = useSectionInView("About");

  // Return the About section, which uses framer-motion for animations.
  // Return the About section, which uses framer-motion for animations.
  return (
    <motion.section
      ref={ref}
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    >
      {/* Display the section heading for "About me." */}
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3">
        🎓 Je suis un étudiant passionné par la <b className="font-medium text-blue-500">🔒 Cybersécurité</b> et 
        le <b className="font-medium text-blue-500">💻 développement web</b> à mon temps libre. J'ai décidé de suivre ma  
        passion à l'<b className="font-medium text-blue-500">🏫 Isen Yncrea Mediterranée de Toulon</b> où 
        je suis inscrit en <b className="font-medium text-blue-500">🎓 Master 1 Cybersécurité</b>. Cette formation 
        m'initie aux fondamentaux de la sécurité des systèmes d'information et me permet de les mettre en pratique au travers 
        de projets à réaliser en <b className="font-medium text-blue-500">👥 équipe</b> ou <b className="font-medium text-blue-500">👤 individuellement</b>.
      </p>

      <p className="mb-3">
        🛡️ Personnellement, ce que je préfère dans la cybersécurité et au quotidien, c'est l'aspect de résolution de problèmes 
        et de détection des menaces. C'est comme un <b className="font-medium text-blue-500">jeu de stratégie</b> {" "}
        constant où l'on doit anticiper les mouvements des attaquants et trouver des moyens créatifs de protéger 
        les systèmes et les données. De plus, le domaine évolue constamment, ce qui signifie qu'il y a toujours 
        de nouvelles technologies à apprendre et des défis intéressants à reléver. Et bien sûr, savoir que vous 
        contribuez à protéger les informations sensibles et les infrastructures critiques est une source de grande 
        satisfaction. 
      </p>
      <p className="mb-3">
         💭 <b className="font-medium text-blue-500">Et vous 😊, qu'est-ce qui vous attire dans la cybersécurité ou l'informatique ?</b> 
      </p>
      
     

      <p className="mb-3">
        💻  Parfois difficile à appréhender en fonction des situations, {" "}
        <b className="font-medium text-blue-500">j'adore</b> le sentiment de finalement trouver une solution à un problème. {" "}<br />

        <br ></br>
       <SectionHeading>Mon stack de base comprend :</SectionHeading> 

        <ul className="list-disc ml-5">
    <li><b className="font-medium text-blue-500">🐍 Python :</b> pour l'automatisation, l'analyse de données, et le développement d'outils de sécurité.</li>
    <li><b className="font-medium text-blue-500">Bash :</b> pour la gestion des scripts et des tâches d'administration système.</li>
    <li><b className="font-medium text-blue-500"> 🐧 Linux :</b> comme Kali Linux pour les tests de pénétration et Ubuntu pour le développement, et <b className="font-medium text-blue-500">Windows :</b> pour comprendre les environnements couramment utilisés et leurs vulnérabilités.</li>
  </ul>
</p>{" "}

<p className="mb-3">
  <strong>En ce qui concerne les <b className="font-medium text-green-500">Concepts de sécurité</b> : </strong>
  <ul className="list-disc ml-5">
    <li><b className="font-medium text-blue-500">Cryptographie :</b> pour comprendre les principes de base de la cryptographie et son utilisation dans la sécurité des données.</li>
    <li><b className="font-medium text-blue-500">Sécurité des Réseaux :</b> pour comprendre les protocoles réseau, les pare-feu, et les techniques de sécurisation des réseaux.</li>
    <li><b className="font-medium text-blue-500">Sécurité des Applications :</b> pour comprendre les principes de base de la sécurité des applications, y compris les injections SQL, les attaques XSS, etc.</li>
  </ul>
</p>

<p className="mb-3">
  Je m'efforce également de rester à jour avec les dernières tendances en matière de sécurité en faisant une <b className="font-medium text-green-500">veille technologique</b> régulière sur les nouvelles vulnérabilités, les attaques récentes, et les développements dans le domaine de la cybersécurité.
</p>
<br ></br>
      <p className="mb-3">
  <SectionHeading>Ce que je recherche</SectionHeading>
  Je suis familiarisé avec les concepts de la cybersécurité. Je cherche toujours à apprendre de nouvelles technologies. 
  Je suis actuellement à la recherche d'un <b className="font-medium text-blue-500">stage en cybersécurité</b> d'une durée de <b className="font-medium text-blue-500">4 mois</b> à partir de <b className="font-medium text-blue-500">juin 2024</b> {" "}
  pouvant donner suite à une possibilité de poursuivre un <b className="font-medium text-blue-500">contrat de professionnalisation</b> dès <b className="font-medium text-blue-500">septembre 2024 😊</b> .
</p>
<br ></br>
       <p className="mb-3">   
       <SectionHeading>Hobbies</SectionHeading>
            <i className="italic">👨‍💻 A mes heures libres</i>, j'aime regarder des films 🎥 & documentaires 🎬,  participé aux CTF (Capture The Flag) 🏁 afin de m'améliorer.  J'aime aussi{" "}
        <b className="font-medium">📚 apprendre de nouvelles choses</b>. Actuellement,
        je concois la redaction d'un <b className="font-medium">blog</b>.
        J'adore aussi voyager ✈️ découvrir de nouveaux horizons .
    </p>
    </motion.section>
  );
};

// Export the About component.
export default About;
