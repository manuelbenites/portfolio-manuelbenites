import MenuIcon from "./menuicon.js"
import CloseIcon from "./closeicon.js"
import Link from "next/link"

import { useState } from "react"

export default function Header() {
	const modalActive = "translate-x-0"
	const modalInactive = "-translate-x-full"
	const [modal, setModal] = useState(modalInactive)
	const handleActiveModal = () => {
		if (modal === modalInactive) {
			setModal(modalActive)
		} else {
			setModal(modalInactive)
		}
	}
	return (
		<header className="w-[95%] mx-auto max-w-[1100px] flex justify-between items-center h-24 text-dark-slate-gray">
			<div
				className={
					"fixed " +
					modal +
					" transition-transform top-0 left-0 bg-snow w-full h-full"
				}
			>
				<div className="flex justify-end mx-auto items-center h-24 w-[96%] relative z-40">
					<button onClick={handleActiveModal}>
						<CloseIcon className="transition-colors fill-dark-slate-gray hover:fill-royal-blue" />
					</button>
				</div>
				<ul className="flex absolute top-0 flex-col gap-6 justify-center items-center w-full h-full">
					<Link href="#habilidades" onClick={handleActiveModal}>
						<li className="font-semibold transition-colors hover:text-royal-blue">
							habilidades
						</li>
					</Link>
					<Link href="#portafolio" onClick={handleActiveModal}>
						<li className="font-semibold transition-colors hover:text-royal-blue">
							portafolio
						</li>
					</Link>
				</ul>
			</div>
			<Link href="/">
				<h3 className="text-lg font-black transition-color hover:text-royal-blue">
					manuelbenites
				</h3>
			</Link>
			<nav className="flex items-center">
				<ul className="hidden gap-8 sm:flex">
					<Link href="#habilidades">
						<li className="font-semibold transition-colors hover:text-royal-blue">
							habilidades
						</li>
					</Link>
					<Link href="#portafolio">
						<li className="font-semibold transition-colors hover:text-royal-blue">
							portafolio
						</li>
					</Link>
				</ul>
				<button className="sm:hidden" onClick={handleActiveModal}>
					<MenuIcon className="transition-colors fill-dark-slate-gray hover:fill-royal-blue" />
				</button>
			</nav>
		</header>
	)
}
