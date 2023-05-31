import Link from "next/link"
import GithubIcon from "./githubicon.js"
import LinkIcon from "./linkicon.js"

export default function Card({ title, description, tech, code, link }) {
	return (
		<div className="flex flex-col justify-center bg-[#191724] shadow-custom p-8 text-center transition-all min-h-[320px] hover:translate-y-[-5px]">
			<div className="">
				<h3 className="mb-4 text-2xl font-bold">{title}</h3>
				<p className="my-4 text-sm leading-5 md:leading-6 md:text-[16px]">
					{description}
				</p>
			</div>
			<div>
				<ul className="flex flex-wrap gap-4 justify-center my-5 text-xs font-semibold">
					{tech.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
				<div>
					{code && (
						<Link href={code} target="_blank">
							<GithubIcon className="inline-block mx-3 transition-all fill-[#8f93a2] hover:fill-[#e0def4]" />
						</Link>
					)}
					{link && (
						<Link href={link} target="_blank">
							<LinkIcon className="inline-block mx-3 transition-all fill-[#8f93a2] hover:fill-[#e0def4]" />
						</Link>
					)}
				</div>
			</div>
		</div>
	)
}
