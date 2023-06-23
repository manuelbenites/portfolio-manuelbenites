import Link from "next/link"
import GithubIcon from "./githubicon.js"
import LinkIcon from "./linkicon.js"

export default function Card({ title, description, code, link, img }) {
	return (
		<li className="flex relative z-20 text-[#e0def4] overflow-hidden shadow-xl flex-col border border-[#8f93a2] border-opacity-[0.06] rounded-sm  bg-[#191724]">
			<div className="relative overflow-hidden">
				<img
					className="hover:scale-105 duration-500 opacity-60 hover:opacity-100"
					src={img}
					alt={title}
				/>
			</div>
			<div className="p-5">
				<div className="flex items-center mb-4 justify-between gap-4">
					<h3 className="text-xl font-bold">{title}</h3>
					<div>
						<ul className="flex flex-row justify-center gap-3">
							{code && (
								<Link
									href={code}
									target="_blank"
									aria-label="Redirect to Github Profile"
								>
									<li>
										<GithubIcon className="inline-block transition-colors fill-[#e0def4] hover:fill-[#f6c177]" />
									</li>
								</Link>
							)}
							{link && (
								<Link
									href={link}
									target="_blank"
									aria-label="Redirect to Linkedin Profile"
								>
									<li>
										<LinkIcon className="inline-block transition-colors fill-[#e0def4] hover:fill-[#f6c177]" />
									</li>
								</Link>
							)}
						</ul>
					</div>
				</div>
				<p className="leading-6 text-md">{description}</p>
			</div>
		</li>
	)
}
