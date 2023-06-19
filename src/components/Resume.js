import Link from "next/link"
import GithubIcon from "./githubicon"
import LinkedinIcon from "./linkedinicon"

export default function Resume() {
	return (
		<section className="text-[#e0def4]">
			<h1 className="font-bold sm:text-center lg:text-6xl leading-[1.3] -tracking-wider text-[40px]">
				Hola, Soy
				<span className="text-[#f6c177]"> Manuel Benites.</span>
			</h1>
			<h2 className="font-bold sm:text-center mt-[38px] text-[30px] -tracking-wider leading-[1.2]">
				Programador Front End.
			</h2>
			<p className="mx-auto mt-8 leading-6 text-start text-md max-w-[650px]">
				Autodidacta y apasionado por el desarrollo web, actualmente resolviendo
				desafíos de{" "}
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
			<p className="mx-auto mt-1 leading-6 text-start text-md max-w-[650px]">
				Tengo un gusto particular por las papas fritas y el café. También otros
				de mis pasatiempos son caminar, escuchar música sobre todo Rock&Pop,
				jugar videojuegos de estrategia y practicar calistenia.
			</p>
			<ul className="flex gap-8 justify-start mt-8 font-semibold sm:justify-center">
				<Link href="https://github.com/manuelbenites" target="_blank">
					<li className="flex gap-2 hover:text-[#f6c177] transition-colors fill-[#e0def4] hover:fill-[#f6c177]">
						<GithubIcon className="" />
						<span>GitHub</span>
					</li>
				</Link>
				<Link href="https://www.linkedin.com/in/manuelbenites/" target="_blank">
					<li className="flex gap-2 hover:text-[#f6c177] transition-colors fill-[#e0def4] hover:fill-[#f6c177]">
						<LinkedinIcon className="" />
						<span>Linkedin</span>
					</li>
				</Link>
			</ul>
		</section>
	)
}
