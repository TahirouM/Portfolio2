import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { LightRays } from '@/components/ui/light-rays';
import { DotPattern } from '@/components/ui/dot-pattern';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6 py-20">
      <DotPattern className="opacity-30" />
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-center gap-12 lg:flex-row lg:items-center lg:justify-center">
        {/* Photo */}
        <div className="flex-shrink-0">
          <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-zinc-200 bg-gradient-to-br from-zinc-100 to-zinc-200 shadow-xl dark:border-zinc-800 dark:from-zinc-800 dark:to-zinc-900 lg:h-80 lg:w-80">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/Tahirou2.png"
                alt="Tahirou Moreau"
                width={320}
                height={320}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col items-center gap-6 text-center">
          <Badge variant="primary">Disponible pour travailler</Badge>

          <div className="space-y-4">
            <h1 className="text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl lg:text-7xl">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Tahirou Moreau
              </span>
            </h1>
            <p className="text-2xl font-medium text-zinc-700 dark:text-zinc-300">
              Lead Developer Full-Stack & Cloud Engineer
            </p>
            <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              Passionné par les nouvelles technologies, l&apos;IA et l&apos;innovation
            </p>
            <p className="flex items-center gap-2 text-base text-zinc-500 dark:text-zinc-500">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Lyon, France | 20 ans
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button variant="primary" href="#contact">
              Me contacter
            </Button>
            <Button variant="outline" href="/cv.pdf" download>
              <svg className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Télécharger mon CV
            </Button>
            <Button variant="outline" href="#projects">
              Voir mes projets
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com"
              className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              className="text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
