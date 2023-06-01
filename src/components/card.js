import Link from "next/link"
import GithubIcon from "./githubicon.js"
import LinkIcon from "./linkicon.js"

export default function Card({ title, description, tech, code, link }) {
	return (
		<li className="flex text-[#e0def4] flex-col border border-[#8f93a2] border-opacity-[0.03] justify-center bg-[#191724] shadow-card p-8 text-center transition-all min-h-[320px] hover:translate-y-[-5px]">
			<div className="">
				<h3 className="mb-4 text-2xl font-bold">{title}</h3>
				<p className="my-4 text-sm leading-5 md:leading-6 md:text-[16px]">
					{description}
				</p>
			</div>
			<div>
				<ul className="flex flex-wrap gap-4 justify-center my-5 text-xs font-normal">
					{tech.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
				<ul className="flex flex-row justify-center pt-4">
					{code && (
						<li>
							<Link href={code} target="_blank">
								<GithubIcon className="inline-block mx-3 transition-colors fill-[#e0def4] hover:fill-[#f6c177]" />
							</Link>
						</li>
					)}
					{link && (
						<li>
							<Link href={link} target="_blank">
								<LinkIcon className="inline-block mx-3 transition-colors fill-[#e0def4] hover:fill-[#f6c177]" />
							</Link>
						</li>
					)}
				</ul>
			</div>
		</li>
	)
}
