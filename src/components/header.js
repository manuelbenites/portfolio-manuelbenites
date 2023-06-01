import MenuIcon from "./menuicon.js"
import CloseIcon from "./closeicon.js"
import Link from "next/link"

import { useState } from "react"

export default function Header() {
	const modalActive = "translate-x-0"
	const modalInactive = "-translate-x-full"
	const [modal, setModal] = useState(modalInactive)
	const handleActiveModal = () => {
		setModal(modal === modalInactive ? modalActive : modalInactive)
	}

	return (
		<header className="w-[95%] mx-auto max-w-[1100px] flex justify-between items-center h-24 text-[#e0def4]">
			<div
				className={`fixed ${modal} transition-transform top-0 left-0 w-full h-full`}
			>
				<div className="flex justify-end mx-auto items-center h-24 w-[96%] relative z-40">
					<button onClick={handleActiveModal}>
						<CloseIcon className="transition-colors fill-[#e0def4] hover:fill-[#f6c177]" />
					</button>
				</div>
				<ul className="flex absolute bg-[#191724] top-0 flex-col gap-6 justify-center items-center w-full h-full">
					<Link href="#habilidades" onClick={handleActiveModal}>
						<li className="font-semibold hover:text-[#f6c177] transition-colors">
							habilidades
						</li>
					</Link>
					<Link href="#portafolio" onClick={handleActiveModal}>
						<li className="font-semibold hover:text-[#f6c177] transition-colors">
							portafolio
						</li>
					</Link>
				</ul>
			</div>
			<Link href="/">
				<h3 className="text-lg font-bold hover:text-[#f6c177] transition-colors">
					manuelbenites
				</h3>
			</Link>
			<nav className="flex items-center">
				<ul className="hidden gap-8 sm:flex">
					<Link href="#habilidades" className="">
						<li className="font-semibold hover:text-[#f6c177] transition-colors">
							habilidades
						</li>
					</Link>
					<Link href="#portafolio">
						<li className="font-semibold hover:text-[#f6c177] transition-colors">
							portafolio
						</li>
					</Link>
				</ul>
				<div className="flex gap-4 items-center">
					<button className="sm:hidden" onClick={handleActiveModal}>
						<MenuIcon className="transition-colors fill-[#e0def4] hover:fill-[#f6c177]" />
					</button>
				</div>
			</nav>
		</header>
	)
}
