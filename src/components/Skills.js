import { mySkills } from "@/lib/userinfo"

export default function Skills() {
	return (
		<section className="mt-10 scroll-my-[80px] text-[#e0def4]" id="habilidades">
			<h2 className="pt-10 mb-8 text-3xl font-bold capitalize">habilidades</h2>
			<ul className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 justify-center">
				{mySkills.map((skill, index) => (
					<li key={index} className="flex flex-col items-center justify-center">
						<div className="h-10 w-10 mb-3">
							<img src={skill.path} />
						</div>
						<p className="font-medium text-sm">{skill.title}</p>
					</li>
				))}
			</ul>
		</section>
	)
}
