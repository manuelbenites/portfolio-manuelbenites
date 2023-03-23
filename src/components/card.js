import Link from "next/link"
import GithubIcon from "./githubicon.js"
import LinkIcon from "./linkicon.js"

export default function Card({ title, description, tech, code, link }) {
	return (
		<div className="p-8 bg-[#fcfcfc] flex flex-col justify-between text-center shadow-project transition-all hover:translate-y-[-5px]">
			<div>
				<h3 className="text-2xl font-black text-[#444444]">{title}</h3>
				<p className="mt-4 text-sm md:text-[16px] text-[#555555] leading-5 md:leading-6">
					{description}
				</p>
			</div>
			<div>
				<ul className="flex gap-4 text-[#444444] justify-center my-5 text-xs font-semibold">
					{tech.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
				<div>
					{code && (
						<Link href={code} target="_blank">
							<GithubIcon className="fill-[#444444] mx-2 hover:fill-[#3369ff] transition-all inline-block" />
						</Link>
					)}
					{link && (
						<Link href={link} target="_blank">
							<LinkIcon className="fill-[#444444] mx-2 hover:fill-[#3369ff] transition-all inline-block" />
						</Link>
					)}
				</div>
			</div>
		</div>
	)
}
