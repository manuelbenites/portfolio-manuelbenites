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
			<section className="mt-6 text-center sm:mt-16 text-dark-slate-gray">
				<div className="font-black leading-tight md:text-6xl -tracking-wider font-poppins text-[40px] dark:text-snow">
					Hola, Soy
					<span className="text-royal-blue dark:text-aqua-marine">
						{" "}
						Manuel Benites.
					</span>
				</div>
				<h2 className="font-black mt-[38px] text-[30px] -tracking-wider leading-[1.2] dark:text-snow">
					Programador Front End.
				</h2>
				<p className="mx-auto text-sm leading-5 text-justify md:leading-6 mt-[38px] max-w-[600px] md:text-[16px] dark:text-silver">
					Apasionado por el desarrollo web con conocimientos en HTML5, CSS3 y
					JavaScript, tecnologías como React y Sass. Neovim es el editor de
					codigo que uso actualmente. En mi tiempo libre práctico calistenia y
					escuchar musica (Rock and Pop).
				</p>
				<div className="flex gap-5 justify-center mt-8">
					<Link href="https://github.com/manuelbenites" target="_blank">
						<GithubIcon className="transition-colors fill-dark-slate-gray dark:fill-snow dark:hover:fill-aqua-marine hover:fill-royal-blue" />
					</Link>
					<Link
						href="https://www.linkedin.com/in/manuelbenites/"
						target="_blank"
					>
						<LinkedinIcon className="transition-colors fill-dark-slate-gray dark:fill-snow dark:hover:fill-aqua-marine hover:fill-royal-blue" />
					</Link>
				</div>
			</section>
			<section className="mt-20 text-dark-slate-gray" id="habilidades">
				<h2 className="mb-8 text-3xl font-black text-center uppercase dark:text-snow">
					habilidades
				</h2>
				<ul className="flex flex-wrap justify-center mx-auto max-w-md text-[14px]">
					{skills.map((skill, index) => (
						<li
							key={index}
							className="inline-block py-3 px-7 m-2 transition-transform shadow-skill dark:bg-navy dark:text-snow hover:translate-y-[-5px]"
						>
							{skill}
						</li>
					))}
				</ul>
			</section>
			<section className="mt-20" id="portafolio">
				<div className="text-3xl font-black text-center uppercase mb-[32px] dark:text-snow">
					portafolio
				</div>
				<div className="grid gap-10 grid-cols-autofit">
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
