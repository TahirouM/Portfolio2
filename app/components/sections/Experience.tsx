import { Timeline } from '@/components/ui/timeline';
import Badge from '../ui/Badge';

export default function Experience() {
  const experiences = [
    {
      id: 'eemi-2025',
      company: 'EEMI',
      position: 'Mastère Lead Dev - Full-Stack',
      period: 'Octobre 2025 - 2027',
      location: 'Lyon',
      description: 'En cours - Spécialisation en architecture logicielle et leadership technique.',
      achievements: [
        'Formation axée sur l\'architecture logicielle moderne',
        'Leadership technique et gestion d\'équipes de développement',
        'Projets pratiques avec des entreprises partenaires',
      ],
      technologies: ['Architecture', 'Leadership', 'Full-Stack'],
      type: 'education',
    },
    {
      id: 'taker-2024',
      company: 'Junior Conseil Taker',
      position: 'Directeur Régional',
      period: 'Octobre 2024 - Juillet 2025',
      location: 'Lyon',
      description: 'Dynamisation de l\'antenne lyonnaise de la junior entreprise et participation au pôle SI de la structure.',
      achievements: [
        'Dynamisation de l\'antenne lyonnaise',
        'Participation active au pôle Système d\'Information',
        'Gestion d\'équipe et coordination de projets',
      ],
      technologies: ['Management', 'SI', 'Gestion de projet'],
      type: 'work',
    },
    {
      id: 'nemitis-2025',
      company: 'Nemitis',
      position: 'Développeur Full-Stack',
      period: 'Mars 2025 - Juillet 2025',
      location: 'À distance',
      description: 'Création de fonctionnalités front-end et back-end pour un SaaS dédié aux avocats indépendants.',
      achievements: [
        'Développement de fonctionnalités SaaS complètes',
        'Collaboration en environnement startup agile',
        'Mise en place de solutions adaptées aux besoins métier',
      ],
      technologies: ['Full-Stack', 'SaaS', 'Agile'],
      type: 'work',
    },
    {
      id: 'ready-2023',
      company: 'Ready',
      position: 'Développeur Full-Stack',
      period: 'Septembre 2023 - Décembre 2023',
      location: 'Lyon',
      description: 'Développement full-stack de logiciel web SaaS et prise en main d\'outils DevOps et création de micro-services.',
      achievements: [
        'Développement de logiciel web SaaS',
        'Implémentation de micro-services',
        'Utilisation d\'outils DevOps modernes',
      ],
      technologies: ['SaaS', 'DevOps', 'Microservices'],
      type: 'work',
    },
    {
      id: 'epitech-2022',
      company: 'Epitech',
      position: 'Expert en Développement Logiciel',
      period: '2022 - 2025',
      location: 'Lyon',
      description: 'Formation en développement logiciel avec focus sur l\'innovation et les méthodologies agiles.',
      achievements: [
        'Projets innovants en développement logiciel',
        'Apprentissage du bas niveau au haut niveau',
        'Expérience avec une large palette de technologies',
      ],
      technologies: ['C', 'C++', 'Python', 'JavaScript', 'Agile'],
      type: 'education',
    },
    {
      id: 'balagne-2019',
      company: 'Lycée de Balagne',
      position: 'Baccalauréat - Mention Bien',
      period: '2019 - 2022',
      location: 'Corse',
      description: 'Spécialités : Mathématiques et Numérique et Sciences de l\'Informatique.',
      achievements: [
        'Mention Bien au Baccalauréat',
        'Spécialité Mathématiques',
        'Spécialité NSI (Numérique et Sciences de l\'Informatique)',
      ],
      technologies: ['Mathématiques', 'Informatique', 'Python'],
      type: 'education',
    },
  ];

  const timelineData = experiences.map((exp) => ({
    id: exp.id,
    title: exp.period,
    content: (
      <div className="space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                {exp.position}
              </h3>
              <Badge variant={exp.type === 'work' ? 'primary' : 'secondary'}>
                {exp.type === 'work' ? 'Travail' : 'Formation'}
              </Badge>
            </div>
            <p className="mt-1 font-medium text-zinc-700 dark:text-zinc-300">
              {exp.company}
            </p>
            <div className="mt-2 flex items-center gap-1 text-sm text-zinc-500 dark:text-zinc-500">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {exp.location}
            </div>
          </div>
        </div>

        <p className="text-zinc-600 dark:text-zinc-400">{exp.description}</p>

        <div className="space-y-2">
          <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Réalisations Clés:
          </p>
          <ul className="space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
            {exp.achievements.map((achievement, i) => (
              <li key={i} className="flex items-start gap-2">
                <svg
                  className="mt-1 h-4 w-4 flex-shrink-0 text-green-600 dark:text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {achievement}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2">
          {exp.technologies.map((tech) => (
            <Badge key={tech} variant="default">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    ),
  }));

  return (
    <section id="experience">
      <Timeline data={timelineData} />
    </section>
  );
}
