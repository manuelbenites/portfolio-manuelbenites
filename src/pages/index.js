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
			<section className="mt-6 text-center sm:mt-16">
				<div className="font-black md:text-6xl leading-tight text-[#444444] -tracking-wider font-poppins text-[40px]">
					Hola, Soy
					<span className="text-[#3369FF]"> Manuel Benites.</span>
				</div>
				<h2 className="mt-[38px] font-black text-[30px] text-[#444444] -tracking-wider leading-[1.2]">
					Programador Front End.
				</h2>
				<p className="mt-[38px] text-sm md:text-[16px] leading-5 md:leading-6 text-[#555555] max-w-[600px] mx-auto text-justify">
					Apasionado por el desarrollo web con conocimientos en HTML5, CSS3 y
					JavaScript, tecnologías como React y Sass. Neovim es el editor de
					codigo que uso actualmente.
				</p>
				<div className="flex gap-5 justify-center mt-8">
					<Link href="https://github.com/manuelbenites" target="_blank">
						<GithubIcon className="fill-[#444444] hover:fill-[#3369ff] transition-colors" />
					</Link>
					<Link
						href="https://www.linkedin.com/in/manuelbenites/"
						target="_blank"
					>
						<LinkedinIcon className="fill-[#444444] hover:fill-[#3369ff] transition-colors" />
					</Link>
				</div>
			</section>
			<section className="mt-20" id="habilidades">
				<h2 className="text-3xl font-black text-center mb-8 uppercase text-[#444444]">
					habilidades
				</h2>
				<ul className="flex flex-wrap justify-center mx-auto max-w-md text-[14px]">
					{skills.map((skill, index) => (
						<li
							key={index}
							className="text-[#444444] inline-block py-2 px-5 m-2 cursor-pointer shadow-skill"
						>
							{skill}
						</li>
					))}
				</ul>
			</section>
			<section className="mt-20" id="portafolio">
				<div className="text-3xl font-black uppercase text-[#444444] mb-[32px] text-center">
					portafolio
				</div>
				<div className="grid gap-8 grid-cols-autofit">
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
