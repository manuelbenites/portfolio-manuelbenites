import Link from "next/link"
import GithubIcon from "./githubicon.js"
import LinkIcon from "./linkicon.js"

export default function Card({ title, description, tech, code, link }) {
	return (
		<div className="flex flex-col justify-between p-8 text-center transition-all bg-snow text-dark-slate-gray shadow-project hover:translate-y-[-5px]">
			<div>
				<h3 className="text-2xl font-black">{title}</h3>
				<p className="mt-4 text-sm leading-5 md:leading-6 md:text-[16px]">
					{description}
				</p>
			</div>
			<div>
				<ul className="flex gap-4 justify-center my-5 text-xs font-semibold">
					{tech.map((item, index) => (
						<li key={index}>{item}</li>
					))}
				</ul>
				<div>
					{code && (
						<Link href={code} target="_blank">
							<GithubIcon className="inline-block mx-2 transition-all fill-dark-slate-gray hover:fill-royal-blue" />
						</Link>
					)}
					{link && (
						<Link href={link} target="_blank">
							<LinkIcon className="inline-block mx-2 transition-all fill-dark-slate-gray hover:fill-royal-blue" />
						</Link>
					)}
				</div>
			</div>
		</div>
	)
}
