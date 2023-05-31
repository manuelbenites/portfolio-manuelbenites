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
				<p className="mx-auto text-sm leading-5 md:leading-6 mt-[38px] max-w-[600px] md:text-[16px]">
					Apasionado por el desarrollo web con conocimientos en HTML5, CSS3 y
					JavaScript, tecnologías como React y Sass. Neovim es el editor de
					código que uso actualmente. En mi tiempo libre práctico calistenia y
					escuchar música (Rock and Pop).
				</p>
				<div className="flex gap-5 justify-center mt-8">
					<Link href="https://github.com/manuelbenites" target="_blank">
						<GithubIcon className="transition-colors fill-[#8f93a2] hover:fill-[#e0def4]" />
					</Link>
					<Link
						href="https://www.linkedin.com/in/manuelbenites/"
						target="_blank"
					>
						<LinkedinIcon className="transition-colors fill-[#8f93a2] hover:fill-[#e0def4]" />
					</Link>
				</div>
			</section>
			<section className="mt-10 text-[#e0def4]" id="habilidades">
				<h2 className="pt-10 mb-8 text-3xl font-bold text-center uppercase dark:text-snow">
					habilidades
				</h2>
				<ul className="flex flex-wrap justify-center mx-auto max-w-md text-[14px]">
					{skills.map((skill, index) => (
						<li
							key={index}
							className="inline-block py-3 px-7 m-2 transition-transform shadow-custom hover:translate-y-[-5px]"
						>
							{skill}
						</li>
					))}
				</ul>
			</section>
			<section className="mt-10 text-[#e0def4]" id="portafolio">
				<div className="pt-10 text-3xl font-bold text-center uppercase mb-[32px]">
					portafolio
				</div>
				<div className="grid grid-cols-1 gap-10 sm:px-10 md:grid-cols-2 bg-[#191724]">
					{projects.map((project, index) => (
						<Card
							key={index}
							title={project.title}
							description={project.description}
							tech={project.tech}
							code={project.code}
							link={project.link}
						/>
					))}
				</div>
			</section>
		</>
	)
}
