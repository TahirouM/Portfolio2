'use client';

import Badge from '../ui/Badge';
import Card from '../ui/Card';
import { NumberTicker } from '@/components/ui/number-ticker';
import { Tooltip } from '@/components/ui/tooltip-card';
import React, { useEffect, useId, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { useOutsideClick } from '@/hooks/use-outside-click';
import Image from 'next/image';

export default function Skills() {
  // Mapping between skill names and SVG file paths
  const skillLogos: Record<string, string> = {
    // Frontend
    'React JS': '/Svg/Dev/Logo React.svg',
    'Vue.js': '/Svg/Dev/Logo Vue.svg',
    'Next JS': '/Svg/Dev/Next.js Icon.svg',
    'React Native': '/Svg/Others/React Native 1.svg',
    'JavaScript': '/Svg/Dev/Logo JavaScript.svg',
    'TypeScript': '/Svg/Dev/Logo TypeScript.svg',
    // Backend
    'Nest JS': '/Svg/Others/NestJS (1).svg',
    'Node.js': '/Svg/Dev/Node.js Logo.svg',
    'Golang': '/Svg/Others/Logo Go.svg',
    'Python': '/Svg/Dev/Logo Python.svg',
    'Ruby': '/Svg/Dev/Ruby SVG Icons.svg',
    // DevOps & Cloud
    'Kubernetes': '/Svg/Dev/Kubernetes Icons.svg',
    'Docker': '/Svg/Dev/Docker SVG Icons.svg',
    'Ansible': '/Svg/Dev/Ansible SVG Icon.svg',
    'Jenkins': '/Svg/Others/Jenkins.svg',
    'AWS': '/Svg/Dev/Aws SVG Vectors.svg',
    'Google Cloud': '/Svg/Dev/Google Cloud Icons.svg',
    // Databases & Languages
    'PostgreSQL': '/Svg/Others/PostgreSQL (1).svg',
    'GraphQL': '/Svg/Others/GraphQL Logo.svg',
    'C': '/Svg/Dev/c.svg',
    'C++': '/Svg/Dev/c++.svg',
    // Tools & Architecture
    'GitHub': '/Svg/Others/Icône GitHub.svg',
    'Git': '/Svg/Others/Git (1).svg',
    'Infrastructure as Code': '/Svg/Others/Infrastructure As Code Icon.svg',
    'Microservices': '/Svg/Others/Microservice Icon.svg',
    'REST APIs': '/Svg/Others/Icône API REST.svg',
  };

  // Descriptions for each skill
  const skillDescriptions: Record<string, string> = {
    // Frontend
    'React JS': 'Bibliothèque JavaScript pour créer des interfaces utilisateur interactives et performantes',
    'Vue.js': 'Framework JavaScript progressif pour construire des applications web modernes',
    'Next JS': 'Framework React pour le développement d&apos;applications web avec SSR et SSG',
    'React Native': 'Framework pour développer des applications mobiles natives avec React',
    'JavaScript': 'Langage de programmation essentiel pour le développement web moderne',
    'TypeScript': 'Superset de JavaScript avec typage statique pour un code plus robuste',

    // Backend
    'Nest JS': 'Framework Node.js progressif pour construire des applications serveur évolutives',
    'Node.js': 'Environnement d\'exécution JavaScript côté serveur basé sur V8',
    'Golang': 'Langage de programmation performant et concurrentiel développé par Google',
    'Python': 'Langage polyvalent pour le développement web, data science et automation',
    'Ruby': 'Langage élégant et expressif, populaire avec le framework Rails',

    // DevOps & Cloud
    'Kubernetes': 'Plateforme d\'orchestration de conteneurs pour automatiser le déploiement',
    'Docker': 'Plateforme de conteneurisation pour empaqueter et distribuer des applications',
    'Ansible': 'Outil d\'automatisation pour la configuration et le déploiement d\'infrastructure',
    'Jenkins': 'Serveur d\'automatisation pour l\'intégration et le déploiement continu',
    'AWS': 'Plateforme cloud d\'Amazon offrant des services d\'infrastructure évolutifs',
    'Google Cloud': 'Plateforme cloud de Google avec services compute, storage et ML',
    'CI/CD': 'Pratiques d\'intégration et déploiement continu pour livrer du code rapidement',

    // Databases & Languages
    'PostgreSQL': 'Base de données relationnelle open-source puissante et fiable',
    'GraphQL': 'Langage de requête pour APIs, alternative flexible à REST',
    'C': 'Langage de programmation système, rapide et proche du matériel',
    'C++': 'Extension orientée objet de C pour des applications haute performance',

    // Tools & Architecture
    'GitHub': 'Plateforme de gestion de code source et collaboration avec Git',
    'Git': 'Système de contrôle de version distribué pour suivre les modifications de code',
    'Infrastructure as Code': 'Gestion d\'infrastructure via code pour automatisation et reproductibilité',
    'Microservices': 'Architecture découplant une application en services indépendants',
    'REST APIs': 'Architecture pour créer des services web stateless et évolutifs',
  };

  const [active, setActive] = useState<(typeof skillCategories)[number] | boolean | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setActive(false);
      }
    }

    if (active && typeof active === 'object') {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  const skillCategories = [
    {
      title: 'Frontend',
      description: 'Technologies pour interfaces utilisateur',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: 'blue',
      skills: ['React JS', 'Vue.js', 'Next JS', 'React Native', 'JavaScript', 'TypeScript'],
    },
    {
      title: 'Backend',
      description: 'Technologies côté serveur',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      color: 'green',
      skills: ['Nest JS', 'Node.js', 'Golang', 'Python', 'Ruby'],
    },
    {
      title: 'DevOps & Cloud',
      description: 'Infrastructure et déploiement',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      color: 'purple',
      skills: ['Kubernetes', 'Docker', 'Ansible', 'Jenkins', 'AWS', 'Google Cloud', 'CI/CD'],
    },
    {
      title: 'Databases & Languages',
      description: 'Bases de données et langages système',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
      color: 'orange',
      skills: ['PostgreSQL', 'GraphQL', 'C', 'C++'],
    },
    {
      title: 'Tools & Architecture',
      description: 'Outils et patterns de développement',
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: 'red',
      skills: ['GitHub', 'Git', 'Infrastructure as Code', 'Microservices', 'REST APIs'],
    },
  ];

  return (
    <section id="skills" className="bg-zinc-50 px-6 py-20 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">Compétences & Technologies</h2>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            Les outils et technologies que j&apos;utilise
          </p>
        </div>

        {/* Expandable Cards */}
        <>
          <AnimatePresence>
            {active && typeof active === 'object' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/20 h-full w-full z-10"
              />
            )}
          </AnimatePresence>
          <AnimatePresence>
            {active && typeof active === 'object' ? (
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
                  <div>
                    <div className="flex justify-between items-start p-6 border-b border-zinc-200 dark:border-zinc-800">
                      <div className="flex items-center gap-3">
                        <motion.div
                          layoutId={`icon-${active.title}-${id}`}
                          className={`rounded-lg p-3 ${
                            active.color === 'blue' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400' :
                            active.color === 'green' ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400' :
                            active.color === 'purple' ? 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400' :
                            active.color === 'orange' ? 'bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-400' :
                            'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400'
                          }`}
                        >
                          {active.icon}
                        </motion.div>
                        <div>
                          <motion.h3
                            layoutId={`title-${active.title}-${id}`}
                            className="font-bold text-xl text-neutral-700 dark:text-neutral-200"
                          >
                            {active.title}
                          </motion.h3>
                          <motion.p
                            layoutId={`description-${active.description}-${id}`}
                            className="text-sm text-neutral-600 dark:text-neutral-400"
                          >
                            {active.description}
                          </motion.p>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 relative">
                      <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-neutral-600 text-sm md:text-base max-h-[60vh] overflow-auto dark:text-neutral-400 [scrollbar-width:thin]"
                      >
                        <div className="flex flex-wrap gap-3">
                          {active.skills.map((skill) => (
                            <div key={skill} className="w-full">
                              <div className="flex items-start gap-3 p-3 rounded-lg bg-zinc-50 dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 transition-colors">
                                {skillLogos[skill] ? (
                                  <img
                                    src={skillLogos[skill]}
                                    alt={skill}
                                    className="w-8 h-8 shrink-0 object-contain"
                                  />
                                ) : (
                                  <Badge variant="default" className="text-sm px-3 py-1 shrink-0">
                                    {skill}
                                  </Badge>
                                )}
                                <div className="flex-1">
                                  <p className="font-medium text-sm text-zinc-800 dark:text-zinc-200 mb-1">
                                    {skill}
                                  </p>
                                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                    {skillDescriptions[skill] || skill}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ) : null}
          </AnimatePresence>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-12">
            {skillCategories.map((category) => (
              <motion.div
                layoutId={`card-${category.title}-${id}`}
                key={`card-${category.title}-${id}`}
                onClick={() => setActive(category)}
                className="p-6 flex flex-col items-start bg-white dark:bg-neutral-900 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer border border-zinc-200 dark:border-zinc-800 transition-colors"
              >
                <div className="flex items-center gap-3 w-full mb-3">
                  <motion.div
                    layoutId={`icon-${category.title}-${id}`}
                    className={`rounded-lg p-3 ${
                      category.color === 'blue' ? 'bg-blue-100 text-blue-600 dark:bg-blue-900 dark:text-blue-400' :
                      category.color === 'green' ? 'bg-green-100 text-green-600 dark:bg-green-900 dark:text-green-400' :
                      category.color === 'purple' ? 'bg-purple-100 text-purple-600 dark:bg-purple-900 dark:text-purple-400' :
                      category.color === 'orange' ? 'bg-orange-100 text-orange-600 dark:bg-orange-900 dark:text-orange-400' :
                      'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400'
                    }`}
                  >
                    {category.icon}
                  </motion.div>
                  <div>
                    <motion.h3
                      layoutId={`title-${category.title}-${id}`}
                      className="font-semibold text-lg text-neutral-800 dark:text-neutral-200"
                    >
                      {category.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${category.description}-${id}`}
                      className="text-sm text-neutral-600 dark:text-neutral-400"
                    >
                      {category.description}
                    </motion.p>
                  </div>
                </div>
                <motion.button
                  className="mt-3 px-4 py-2 text-sm rounded-full font-medium bg-zinc-100 hover:bg-blue-600 hover:text-white text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-blue-500 transition-all w-full"
                >
                  Voir les compétences ({category.skills.length})
                </motion.button>
              </motion.div>
            ))}
          </div>
        </>

        {/* Additional Stats */}
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <Card>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">
                <NumberTicker value={3} className="text-blue-600 dark:text-blue-400" />+
              </div>
              <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Années d&apos;Expérience</div>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">
                <NumberTicker value={30} className="text-purple-600 dark:text-purple-400" />+
              </div>
              <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Projets Académiques</div>
            </div>
          </Card>
          <Card>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400">
                <NumberTicker value={10} className="text-green-600 dark:text-green-400" />+
              </div>
              <div className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Technologies Maîtrisées</div>
            </div>
          </Card>
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
