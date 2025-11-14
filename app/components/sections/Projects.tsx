"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

interface Project {
  title: string;
  description: string;
  category: string;
  src: string;
  tags: string[];
  ctaText: string;
  ctaLink: string;
  content: () => React.JSX.Element;
}

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const projects: Project[] = [
    // Web Projects
    {
      title: "AREA",
      description: "Action REAction Platform",
      category: "Web",
    src: "/Projects/Area.webp",
      tags: ["Vue.js", "React Native", "Nest.js", "Golang", "PostgreSQL", "Kubernetes"],
      ctaText: "Voir le code",
      ctaLink: "https://github.com/EpitechPromo2027/B-DEV-500-LYN-5-1-area-leo.filmon",
      content: () => (
        <div className="space-y-4">
          <p>
            Application permettant de créer des automatisations entre services populaires (Google, Discord, GitHub, Spotify).
            Inspirée d'IFTTT, cette plateforme permet aux utilisateurs de connecter différents services et de créer des workflows automatisés.
          </p>
          <p>
            Architecture microservices complète déployée sur Kubernetes, avec une application mobile React Native et un backend scalable.
            Le projet intègre OAuth pour l'authentification avec les différents services et propose une interface intuitive pour la création de workflows.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Vue.js", "React Native", "Nest.js", "Golang", "PostgreSQL", "Kubernetes"].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Landing Page Architect",
      description: "Architecture Portfolio",
      category: "Web",
      src: "/Projects/Architect.webp",
      tags: ["React", "Next.js", "Tailwind CSS", "Architecture"],
      ctaText: "Visiter le site",
      ctaLink: "https://landing-page-architect-puce.vercel.app/",
      content: () => (
        <div className="space-y-4">
          <p>
            Site vitrine moderne pour un cabinet d'architecture, mettant en valeur les projets et l'expertise de l'équipe.
            Design élégant et épuré avec des animations fluides et une navigation intuitive.
          </p>
          <p>
            Développé avec Next.js pour optimiser les performances et le SEO, le site offre une expérience utilisateur exceptionnelle
            avec un temps de chargement minimal et une présentation visuelle des projets architecturaux.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {["React", "Next.js", "Tailwind CSS", "Architecture"].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Blindtest",
      description: "Music Guessing Game",
      category: "Web",
      src: "/Projects/Blindtest.webp",
      tags: ["React", "Node.js", "WebSocket", "Spotify API"],
      ctaText: "Visiter le site",
      ctaLink: "https://blindtest-zeta.vercel.app/",
      content: () => (
        <div className="space-y-4">
          <p>
            Application de blindtest multijoueur en temps réel utilisant l'API Spotify. Les joueurs s'affrontent pour deviner
            les titres et artistes le plus rapidement possible dans différentes catégories musicales.
          </p>
          <p>
            Système de rooms multijoueurs avec WebSocket pour une expérience fluide et réactive. Intégration complète avec
            l'API Spotify pour accéder à des millions de morceaux et créer des parties personnalisées selon les goûts musicaux.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {["React", "Node.js", "WebSocket", "Spotify API"].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    // DevOps Projects
    {
      title: "Whanos",
      description: "DevOps Platform",
      category: "DevOps",
      src: "/Projects/whanos.webp",
      tags: ["Docker", "Kubernetes", "Jenkins", "CI/CD", "Automation"],
      ctaText: "Voir le code",
      ctaLink: "https://github.com/EpitechPromo2027/B-DOP-500-LYN-5-1-whanos-yanis.boumedad",
      content: () => (
        <div className="space-y-4">
          <p>
            Plateforme DevOps complète automatisant le cycle de développement, du code source au déploiement en production.
            Whanos détecte automatiquement le langage de programmation et configure le pipeline approprié.
          </p>
          <p>
            Intégration de Jenkins pour l'automatisation CI/CD, containerisation avec Docker, et orchestration sur Kubernetes.
            La plateforme supporte plusieurs langages (Node.js, Python, Java, etc.) et gère automatiquement le build, les tests
            et le déploiement des applications.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Docker", "Kubernetes", "Jenkins", "CI/CD", "Automation"].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Bernstein",
      description: "Infrastructure Deployment",
      category: "DevOps",
      src: "/Projects/Bernstein.webp",
      tags: ["Terraform", "Ansible", "AWS", "Infrastructure as Code"],
      ctaText: "Voir le code",
      ctaLink: "https://github.com/EpitechPromo2027/B-DOP-500-LYN-5-1-bernstein-tahirou.moreau",
      content: () => (
        <div className="space-y-4">
          <p>
            Projet d'infrastructure as code pour le déploiement automatisé d'environnements cloud. Bernstein permet de provisionner
            et configurer des infrastructures complexes de manière reproductible et versionnée.
          </p>
          <p>
            Utilisation de Terraform pour la création des ressources cloud et Ansible pour la configuration des serveurs.
            Le projet inclut des modules réutilisables pour différents types d'infrastructures (web, base de données, cache)
            et supporte le multi-cloud (AWS, GCP, Azure).
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Terraform", "Ansible", "AWS", "Infrastructure as Code"].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Octopus",
      description: "Multi-Service Orchestration",
      category: "DevOps",
      src: "/Projects/Octopus.webp",
      tags: ["Docker", "Docker Compose", "Microservices", "Monitoring"],
      ctaText: "Voir le code",
      ctaLink: "https://github.com/EpitechPromo2027/B-DOP-400-LYN-4-1-octopus-tahirou.moreau",
      content: () => (
        <div className="space-y-4">
          <p>
            Système d'orchestration de services multiples avec Docker Compose. Octopus gère le déploiement et la coordination
            de plusieurs microservices, bases de données, et services de cache dans un environnement containerisé.
          </p>
          <p>
            Le projet inclut la configuration de réseaux Docker, volumes persistants, et health checks pour assurer la disponibilité
            des services. Monitoring et logging centralisés pour faciliter le debugging et l'observation du système en production.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Docker", "Docker Compose", "Microservices", "Monitoring"].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    // Low Level Graphic Projects
    {
      title: "R-Type",
      description: "Multiplayer Arcade Game",
      category: "Low Level Graphic",
      src: "/Projects/rtype.webp",
      tags: ["C++", "SFML", "Network", "ECS", "Game Engine"],
      ctaText: "Voir le code",
      ctaLink: "https://github.com/EpitechPromo2027/B-CPP-500-LYN-5-2-rtype-yanis.boumedad",
      content: () => (
        <div className="space-y-4">
          <p>
            Clone multijoueur du jeu d'arcade classique R-Type. Le projet implémente une architecture client-serveur robuste
            permettant à plusieurs joueurs de s'affronter en temps réel contre des vagues d'ennemis.
          </p>
          <p>
            Développé avec une architecture ECS (Entity Component System) pour une gestion optimale des entités de jeu.
            Le moteur réseau utilise UDP pour minimiser la latence et assurer une expérience de jeu fluide. Inclut un système
            de synchronisation avancé pour gérer l'état du jeu entre tous les clients connectés.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {["C++", "SFML", "Network", "ECS", "Game Engine"].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Zappy",
      description: "Network Game with AI",
      category: "Low Level Graphic",
      src: "/Projects/zappy.webp",
      tags: ["C", "Network", "AI", "OpenGL", "Multithreading"],
      ctaText: "Voir le code",
      ctaLink: "https://github.com/EpitechPromo2027/B-YEP-400-LYN-4-1-zappy-bryan.bole",
      content: () => (
        <div className="space-y-4">
          <p>
            Jeu réseau où des équipes d'IA s'affrontent sur une carte pour collecter des ressources et évoluer.
            Le projet comprend un serveur gérant la logique du jeu, plusieurs clients IA, et une interface graphique 3D.
          </p>
          <p>
            Architecture client-serveur avec gestion de multiples connexions simultanées. Les clients IA implémentent des
            stratégies de collecte de ressources et d'évolution. L'interface graphique OpenGL permet de visualiser l'état
            du jeu en temps réel avec une vue 3D de la carte et des joueurs.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {["C", "Network", "AI", "OpenGL", "Multithreading"].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "MyRPG",
      description: "2D RPG Game",
      category: "Low Level Graphic",
      src: "/Projects/myrpg.webp",
      tags: ["C", "CSFML", "Game Development", "Animation"],
      ctaText: "Voir le code",
      ctaLink: "https://github.com/EpitechPromo2027/B-MUL-200-LYN-2-1-myrpg-mathys.torres",
      content: () => (
        <div className="space-y-4">
          <p>
            Jeu vidéo RPG complet développé en C avec la bibliothèque graphique CSFML. Le joueur explore un monde ouvert,
            combat des ennemis, collecte des objets et progresse dans une quête épique.
          </p>
          <p>
            Système de combat au tour par tour avec gestion des statistiques (HP, MP, attaque, défense). Inventaire complet
            avec équipement et objets consommables. Système de sauvegarde permettant de reprendre la partie. Maps générées
            avec un éditeur de niveau custom et animations fluides des personnages.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {["C", "CSFML", "Game Development", "Animation"].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    // C Projects
    {
      title: "myTeams",
      description: "Microsoft Teams Clone",
      category: "C Project",
      src: "/Projects/myteams.webp",
      tags: ["C", "Network", "TCP/IP", "CLI", "Protocol Design"],
      ctaText: "Voir le code",
      ctaLink: "https://github.com/EpitechPromo2027/B-NWP-400-LYN-4-1-myteams-franck.poletti",
      content: () => (
        <div className="space-y-4">
          <p>
            Clone de Microsoft Teams en ligne de commande. Application client-serveur permettant la création d'équipes,
            de canaux, de threads de discussion et l'envoi de messages privés entre utilisateurs.
          </p>
          <p>
            Architecture réseau TCP/IP avec protocole de communication custom. Le serveur gère plusieurs clients simultanément
            et maintient l'état des équipes, canaux et messages. Système de notifications en temps réel pour les nouveaux
            messages et événements. Persistance des données avec sauvegarde sur disque.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {["C", "Network", "TCP/IP", "CLI", "Protocol Design"].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "MyFTP",
      description: "FTP Server Implementation",
      category: "C Project",
      src: "/Projects/myftp.webp",
      tags: ["C", "Network", "FTP Protocol", "Socket Programming"],
      ctaText: "Voir le code",
      ctaLink: "https://github.com/EpitechPromo2027/B-NWP-400-LYN-4-1-myftp-tahirou.moreau",
      content: () => (
        <div className="space-y-4">
          <p>
            Serveur FTP (File Transfer Protocol) complet implémentant la RFC 959. Le serveur gère l'authentification,
            la navigation dans le système de fichiers, et le transfert de fichiers en mode ASCII et binaire.
          </p>
          <p>
            Support des commandes FTP standard (USER, PASS, LIST, RETR, STOR, etc.) et gestion des modes actif et passif.
            Architecture multi-clients avec sockets pour gérer plusieurs connexions simultanées. Système de permissions
            et d'utilisateurs pour sécuriser l'accès aux fichiers.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {["C", "Network", "FTP Protocol", "Socket Programming"].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "42sh",
      description: "POSIX Shell Implementation",
      category: "C Project",
      src: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&auto=format&fit=crop",
      tags: ["C", "POSIX", "Shell", "System Programming", "Parser"],
      ctaText: "Voir le code",
      ctaLink: "https://github.com/EpitechPromo2027/B-PSU-200-LYN-2-1-42sh-mathys.torres",
      content: () => (
        <div className="space-y-4">
          <p>
            Shell POSIX complet avec scripting avancé, clone fonctionnel de bash. Implémente un parseur de commandes,
            l'exécution de processus, la redirection I/O, les pipes, et de nombreux built-ins.
          </p>
          <p>
            Support des opérateurs logiques (&amp;&amp;, ||), redirections (&lt;, &gt;, &gt;&gt;), pipes (|), background jobs (&amp;), et job control.
            Gestion complète des variables &apos;environnement et substitution de commandes. Historique de commandes et
            autocomplétion. Parser robuste gérant les guillemets, échappements et sous-shells.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {["C", "POSIX", "Shell", "System Programming", "Parser"].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Corewar",
      description: "Virtual Machine Battle",
      category: "C Project",
      src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&auto=format&fit=crop",
      tags: ["C", "VM", "Assembly", "Algorithms", "Parser"],
      ctaText: "Voir le code",
      ctaLink: "https://github.com/EpitechPromo2027/B-CPE-200-LYN-2-1-corewar-tahirou.moreau",
      content: () => (
        <div className="space-y-4">
          <p>
            Machine virtuelle où des programmes en assembleur s'affrontent pour le contrôle de la mémoire. Le projet comprend
            un assembleur pour compiler les programmes champions et une VM pour les exécuter en bataille.
          </p>
          <p>
            Implémentation d'un langage assembleur custom avec 16 instructions (live, ld, st, add, etc.). La VM exécute
            plusieurs champions simultanément dans une arène mémoire circulaire. Le dernier champion à exécuter l'instruction
            'live' remporte la victoire. Inclut un désassembleur et un mode debug pour visualiser l'exécution.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {["C", "VM", "Assembly", "Algorithms", "Parser"].map((tag) => (
              <span key={tag} className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 rounded-full text-xs">
                {tag}
              </span>
            ))}
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="projects" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">Mes Projets</h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Une sélection de mes projets académiques et personnels
          </p>
        </div>

        <AnimatePresence>
          {active && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 h-full w-full z-10"
            />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {active ? (
            <div className="fixed inset-0 grid place-items-center z-[100]">
              <motion.button
                key={`button-${active.title}-${id}`}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.05 } }}
                className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                onClick={() => setActive(null)}
              >
                <CloseIcon />
              </motion.button>
              <motion.div
                layoutId={`card-${active.title}-${id}`}
                ref={ref}
                className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
              >
                <motion.div layoutId={`image-${active.title}-${id}`}>
                  <img
                    width={200}
                    height={200}
                    src={active.src}
                    alt={active.title}
                    className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-center"
                  />
                </motion.div>

                <div>
                  <div className="flex justify-between items-start p-4">
                    <div>
                      <motion.h3
                        layoutId={`title-${active.title}-${id}`}
                        className="font-bold text-neutral-700 dark:text-neutral-200"
                      >
                        {active.title}
                      </motion.h3>
                      <motion.p
                        layoutId={`description-${active.description}-${id}`}
                        className="text-neutral-600 dark:text-neutral-400"
                      >
                        {active.description}
                      </motion.p>
                    </div>

                    <motion.a
                      layoutId={`button-${active.title}-${id}`}
                      href={active.ctaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-3 text-sm rounded-full font-bold bg-blue-500 hover:bg-blue-600 text-white transition-colors"
                    >
                      {active.ctaText}
                    </motion.a>
                  </div>
                  <div className="pt-4 relative px-4">
                    <motion.div
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                    >
                      {active.content()}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          ) : null}
        </AnimatePresence>

        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {["Web", "DevOps", "Low Level Graphic", "C Project"].map((category) => {
              const categoryProjects = projects.filter(p => p.category === category);
              if (categoryProjects.length === 0) return null;

              return (
                <div key={category} className="mb-4">
                  <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 mb-6 px-4">
                    {category}
                  </h3>
                  <ul className="gap-4">
                    {categoryProjects.map((project) => (
                      <motion.div
                        layoutId={`card-${project.title}-${id}`}
                        key={`card-${project.title}-${id}`}
                        onClick={() => setActive(project)}
                        className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer mb-4"
                      >
                        <div className="flex gap-4 flex-col md:flex-row">
                          <motion.div layoutId={`image-${project.title}-${id}`}>
                            <img
                              width={100}
                              height={100}
                              src={project.src}
                              alt={project.title}
                              className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-center"
                            />
                          </motion.div>
                          <div>
                            <motion.h3
                              layoutId={`title-${project.title}-${id}`}
                              className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                            >
                              {project.title}
                            </motion.h3>
                            <motion.p
                              layoutId={`description-${project.description}-${id}`}
                              className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                            >
                              {project.description}
                            </motion.p>
                          </div>
                        </div>
                        <motion.button
                          layoutId={`button-${project.title}-${id}`}
                          className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-blue-500 hover:text-white text-black mt-4 md:mt-0 transition-colors"
                        >
                          {project.ctaText}
                        </motion.button>
                      </motion.div>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
