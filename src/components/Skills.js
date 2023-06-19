import { skills } from "@/lib/userinfo"

export default function Skills() {
	return (
		<section className="mt-10 scroll-my-[80px] text-[#e0def4]" id="habilidades">
			<h2 className="pt-10 mb-8 text-4xl font-bold text-center capitalize">
				habilidades
			</h2>
			<p className="mx-auto mb-6 leading-6 text-start text-md mt-[38px] max-w-[650px]">
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
	)
}
