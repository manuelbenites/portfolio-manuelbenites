import { projects } from "@/lib/userinfo"
import dynamic from "next/dynamic"

const Card = dynamic(() => import("../components/card"))

export default function Projects() {
	return (
		<section className="mt-10 scroll-my-[80px] text-[#e0def4]" id="proyectos">
			<h2 className="pt-10 text-4xl font-bold text-center capitalize mb-[32px]">
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
	)
}
