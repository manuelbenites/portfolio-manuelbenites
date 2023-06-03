import Head from "next/head"
import Link from "next/link"
import GithubIcon from "../components/githubicon.js"
import LinkedinIcon from "../components/linkedinicon.js"
import Card from "../components/card.js"
import { skills, projects } from "../lib/userinfo.js"
export default function Home() {
	return (
		<>
			<Head>
				<title>Manuel Benites</title>
				<meta name="description" content="My portfolio" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<section className="mt-6 sm:mt-16 text-[#e0def4]">
				<div className="font-bold leading-tight sm:text-center md:text-6xl -tracking-wider text-[40px]">
					Hola, Soy
					<span className="text-[#f6c177]"> Manuel Benites.</span>
				</div>
				<h2 className="font-bold sm:text-center mt-[38px] text-[30px] -tracking-wider leading-[1.2]">
					Programador Front End.
				</h2>
				<p className="mx-auto mt-8 leading-5 sm:text-center text-start text-md max-w-[600px] font-azeret">
					Autodidacta y apasionado por el desarrollo web, actualmente
					resolviendo desafíos de{" "}
					<a
						href="https://www.frontendmentor.io/"
						target="_blank"
						rel="noreferrer"
					>
						<span className="font-bold hover:text-[#f6c177]">
							Frontend Mentor
						</span>
					</a>{" "}
					para mejorar y mostrar mis habilidades.
				</p>
				<p className="mx-auto mt-5 leading-5 sm:text-center text-start text-md max-w-[600px] font-azeret">
					Tengo un gusto particular por las papas fritas y el café. También
					otros de mis pasatiempos son caminar, escuchar música sobre todo
					Rock&Pop, jugar videojuegos de estrategia y practicar calistenia.
				</p>
				<ul className="flex gap-8 justify-start mt-8 font-bold sm:justify-center font-azeret">
					<Link href="https://github.com/manuelbenites" target="_blank">
						<li className="flex gap-2 hover:text-[#f6c177] transition-colors fill-[#e0def4] hover:fill-[#f6c177]">
							<GithubIcon className="" />
							<span>GitHub</span>
						</li>
					</Link>
					<Link
						href="https://www.linkedin.com/in/manuelbenites/"
						target="_blank"
					>
						<li className="flex gap-2 hover:text-[#f6c177] transition-colors fill-[#e0def4] hover:fill-[#f6c177]">
							<LinkedinIcon className="" />
							<span>Linkedin</span>
						</li>
					</Link>
				</ul>
			</section>
			<section className="mt-10 text-[#e0def4]" id="habilidades">
				<h2 className="pt-10 mb-8 text-4xl font-bold text-center uppercase dark:text-snow">
					habilidades
				</h2>
				<p className="mx-auto mb-6 leading-5 sm:text-center text-start text-md mt-[38px] max-w-[600px] font-azeret">
					Aquí están todas las tecnologías y herramientas utilizadas en mis
					proyectos.
				</p>
				<ul className="flex flex-wrap justify-center mx-auto max-w-lg text-[14px]">
					{skills.map((skill, index) => (
						<li
							key={index}
							className="inline-block border font-bold border-[#8f93a2] border-opacity-[0.03] py-2 px-4 m-3 transition-transform shadow-skill hover:translate-y-[-5px]"
						>
							{skill}
						</li>
					))}
				</ul>
			</section>
			<section className="mt-10 text-[#e0def4]" id="proyectos">
				<h2 className="pt-10 text-4xl font-bold text-center uppercase mb-[32px]">
					proyectos
				</h2>
				<ul className="grid grid-cols-1 gap-10 sm:px-10 md:grid-cols-2 bg-[#191724]">
					{projects.map((project, index) => (
						<Card
							key={index}
							title={project.title}
							description={project.description}
							tech={project.tech}
							code={project.code}
							link={project.link}
							img={project.img}
						/>
					))}
				</ul>
			</section>
		</>
	)
}
