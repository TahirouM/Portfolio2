import Card from '../ui/Card';
import { File, Search, Settings } from "lucide-react"
import { OrbitingCircles } from "@/components/ui/orbiting-circles"
import ClaudeLogo from "@/public/Svg/IA/Claude-logo.svg"
import GithubLogo from "@/public/Svg/IA/Icone-GitHub-Copilot.svg"
import GoogleAILogo from "@/public/Svg/IA/Icone-google-AI.svg"
import CursorLogo from "@/public/Svg/IA/Icone-Cursor.svg"
import MakeLogo from "@/public/Svg/IA/Icone-make.svg"
import ManusLogo from "@/public/Svg/IA/Icone-manus.svg"
import MidjourneyLogo from "@/public/Svg/IA/Icone-Midjourney.svg"
import N8NLogo from "@/public/Svg/IA/Icone-n8n.svg"
import OpenaiLogo from "@/public/Svg/IA/Icone-OpenAI.svg"
import PerplexityLogo from "@/public/Svg/IA/Icone-perplexity.svg"
import SoraLogo from "@/public/Svg/IA/Icone-Sora.svg"
import AnsibleLogo from "@/public/Svg/Dev/Ansible SVG Icon.svg"
import AwsLogo from "@/public/Svg/Dev/Aws SVG Vectors.svg"
import DockerLogo from "@/public/Svg/Dev/Docker SVG Icons.svg"
import GoogleCloudLogo from "@/public/Svg/Dev/Google Cloud Icons.svg"
import KubernetesLogo from "@/public/Svg/Dev/Kubernetes Icons.svg"
import AngularLogo from "@/public/Svg/Dev/Logo Angular.svg"
import JavaScriptLogo from "@/public/Svg/Dev/Logo JavaScript.svg"
import PythonLogo from "@/public/Svg/Dev/Logo Python.svg"
import ReactLogo from "@/public/Svg/Dev/Logo React.svg"
import TypeScriptLogo from "@/public/Svg/Dev/Logo TypeScript.svg"
import VueLogo from "@/public/Svg/Dev/Logo Vue.svg"
import NextjsLogo from "@/public/Svg/Dev/Next.js Icon.svg"
import NodejsLogo from "@/public/Svg/Dev/Node.js Logo.svg"
import RubyLogo from "@/public/Svg/Dev/Ruby SVG Icons.svg"
import CppLogo from "@/public/Svg/Dev/c++.svg"
import CLogo from "@/public/Svg/Dev/c.svg"
import Cinema4DLogo from "@/public/Svg/Perso/Cinema4D.svg"
import IllustratorLogo from "@/public/Svg/Perso/Logo Adobe Illustrator.svg"
import PhotoshopLogo from "@/public/Svg/Perso/Photoshop SVG Icons.svg"
import VegasLogo from "@/public/Svg/Perso/Sony Vegas Logo Icon.svg"
import UnrealLogo from "@/public/Svg/Perso/Unreal Engine Icon.svg"
import Features from "@/components/features-2"

export default function About() {
  return (
    <section id="about" className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">À Propos de Moi</h2>
        </div>

        <div className="space-y-12">
          {/* Sous-titre principal */}
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-zinc-700 dark:text-zinc-300 leading-relaxed">
              Développeur Full-Stack et Cloud Engineer de 20 ans basé à Lyon, je suis constamment en quête de nouvelles technologies et d&apos;apprentissage.
            </h3>
          </div>

          {/* Paragraphe 1 - Texte à gauche, Image à droite */}
          <div className="grid md:grid-cols-2 gap-16 md:gap-16 items-center">
            <Card>
              <h4 className="text-xl font-semibold text-zinc-700 dark:text-zinc-300 leading-relaxed">
                Avant mes études
              </h4>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Mon parcours reflète une curiosité insatiable : avant même mes études en développement, j&apos;ai exploré le design et la 3D (Cinema 4D, Photoshop, Adobe Illustrator), le montage vidéo (Vegas Pro) et même le développement de jeux (Unreal Engine) au lycée.
              </p>
            </Card>
            <div className="rounded-lg aspect-video flex items-center justify-center relative">
            <OrbitingCircles radius={100} reverse>
              <img src={Cinema4DLogo.src || Cinema4DLogo} alt="Cinema 4D Logo" className="w-6 h-6" />
              <img src={PhotoshopLogo.src || PhotoshopLogo} alt="Photoshop Logo" className="w-6 h-6" />
              <img src={IllustratorLogo.src || IllustratorLogo} alt="Illustrator Logo" className="w-6 h-6" />
              <img src={VegasLogo.src || VegasLogo} alt="Vegas Pro Logo" className="w-6 h-6" />
              <img src={UnrealLogo.src || UnrealLogo} alt="Unreal Engine Logo" className="w-6 h-6" />
            </OrbitingCircles>
            </div>
          </div>

          {/* Paragraphe 2 - Image à gauche, Texte à droite */}
          <div className="grid md:grid-cols-2 gap-16 md:gap-16 items-center">
            <Card className="order-1 md:order-2">
              <h4 className="text-xl font-semibold text-zinc-700 dark:text-zinc-300 leading-relaxed">
                Mon parcours
              </h4>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Durant mes années à Epitech, j&apos;ai expérimenté une large palette de technologies : du bas niveau au haut niveau, en passant par le no-code. Aujourd&apos;hui, je me spécialise dans le développement Full-Stack et le Cloud, tout en restant à la pointe de l&apos;innovation.
              </p>
            </Card>
            <div className="aspect-video flex items-center justify-center order-2 md:order-1 relative">
            <OrbitingCircles path={true}>
              <img src={ReactLogo.src || ReactLogo} alt="React Logo" className="w-6 h-6" />
              <img src={VueLogo.src || VueLogo} alt="Vue Logo" className="w-6 h-6" />
              <img src={AngularLogo.src || AngularLogo} alt="Angular Logo" className="w-6 h-6" />
              <img src={NextjsLogo.src || NextjsLogo} alt="Next.js Logo" className="w-6 h-6" />
              <img src={NodejsLogo.src || NodejsLogo} alt="Node.js Logo" className="w-6 h-6" />
              <img src={TypeScriptLogo.src || TypeScriptLogo} alt="TypeScript Logo" className="w-6 h-6" />
              <img src={JavaScriptLogo.src || JavaScriptLogo} alt="JavaScript Logo" className="w-6 h-6" />
              <img src={PythonLogo.src || PythonLogo} alt="Python Logo" className="w-6 h-6" />
            </OrbitingCircles>
            <OrbitingCircles radius={100} reverse>
              <img src={DockerLogo.src || DockerLogo} alt="Docker Logo" className="w-6 h-6" />
              <img src={KubernetesLogo.src || KubernetesLogo} alt="Kubernetes Logo" className="w-6 h-6" />
              <img src={AwsLogo.src || AwsLogo} alt="AWS Logo" className="w-6 h-6" />
              <img src={GoogleCloudLogo.src || GoogleCloudLogo} alt="Google Cloud Logo" className="w-6 h-6" />
              <img src={AnsibleLogo.src || AnsibleLogo} alt="Ansible Logo" className="w-6 h-6" />
              <img src={RubyLogo.src || RubyLogo} alt="Ruby Logo" className="w-6 h-6" />
              <img src={CLogo.src || CLogo} alt="C Logo" className="w-6 h-6" />
              <img src={CppLogo.src || CppLogo} alt="C++ Logo" className="w-6 h-6" />
            </OrbitingCircles>
            </div>
          </div>

          {/* Paragraphe 3 - Texte à gauche, Image à droite */}
          <div className="grid md:grid-cols-2 gap-16 md:gap-16 items-center">
            <Card>
              <h4 className="text-xl font-semibold text-zinc-700 dark:text-zinc-300 leading-relaxed">
                Mon intérêt pour l&apos;IA
              </h4>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                Je m&apos;intéresse particulièrement à l&apos;intelligence artificielle et ses applications pratiques : outils en CLI (Claude Code, Cursor), agents IA, automatisations et context engineering. Cette passion pour l&apos;IA me permet d&apos;optimiser continuellement mes workflows et d&apos;explorer de nouvelles façons de développer.
              </p>
            </Card>
            <div className="aspect-video flex items-center justify-center relative">
            <OrbitingCircles path={true}>
              <img src={ClaudeLogo.src || ClaudeLogo} alt="Claude Logo" className="w-6 h-6" />
              <img src={GithubLogo.src || GithubLogo} alt="Github Logo" className="w-6 h-6" />
              <img src={GoogleAILogo.src || GoogleAILogo} alt="Google AI Logo" className="w-6 h-6" />
              <img src={CursorLogo.src || CursorLogo} alt="Cursor Logo" className="w-6 h-6" />
              <img src={MakeLogo.src || MakeLogo} alt="Make Logo" className="w-6 h-6" />
              
            </OrbitingCircles>
            <OrbitingCircles radius={100} reverse>
              <img src={ManusLogo.src || ManusLogo} alt="Manus Logo" className="w-6 h-6" />
              <img src={MidjourneyLogo.src || MidjourneyLogo} alt="Midjourney Logo" className="w-6 h-6" />
              <img src={N8NLogo.src || N8NLogo} alt="N8N Logo" className="w-6 h-6" />
              <img src={OpenaiLogo.src || OpenaiLogo} alt="OpenAI Logo" className="w-6 h-6" />
              <img src={PerplexityLogo.src || PerplexityLogo} alt="Perplexity Logo" className="w-6 h-6" />
              <img src={SoraLogo.src || SoraLogo} alt="Sora Logo" className="w-6 h-6" />
            </OrbitingCircles>
            </div>
          </div>

          {/* Citation finale */}
          <Card className="pt-16">
            <div className="py-4">
              <p className="text-xl font-semibold text-zinc-900 dark:text-zinc-50 italic text-center">
                &quot;Toucher à tout pour mieux innover&quot;
              </p>
              <p className="text-right text-sm text-zinc-600 dark:text-zinc-400 mt-2">
                moi - 2024
              </p>
            </div>
          </Card>

          <Features />

          
          
        </div>
      </div>
    </section>
  );
}
