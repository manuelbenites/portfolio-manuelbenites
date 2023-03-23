import MenuIcon from "./menuicon.js"
import CloseIcon from "./closeicon.js"
import Link from "next/link"

import { useState } from "react"

export default function Header() {
	const modalActive = "translate-x-[0]"
	const modalInactive = "translate-x-[-100%]"
	const [modal, setModal] = useState(modalInactive)
	const handleActiveModal = () => {
		if (modal === modalInactive) {
			setModal(modalActive)
		} else {
			setModal(modalInactive)
		}
	}
	return (
		<header className="flex justify-between items-center w-full h-24">
			<div
				className={
					"fixed " +
					modal +
					" transition-transform top-0 left-0 bg-[#ffffff] w-full h-full"
				}
			>
				<div className="flex justify-end mx-auto items-center h-24 w-[96%] relative z-40">
					<button onClick={handleActiveModal}>
						<CloseIcon className="fill-[#444444] hover:fill-[#4e33ff] transition-colors" />
					</button>
				</div>
				<ul className="flex absolute top-0 flex-col gap-6 justify-center items-center w-full h-full">
					<Link href="#habilidades" onClick={handleActiveModal}>
						<li className="text-[#444444]  hover:text-[#4e33ff] transition-colors font-semibold">
							habilidades
						</li>
					</Link>
					<Link href="#portafolio" onClick={handleActiveModal}>
						<li className="text-[#444444]  hover:text-[#4e33ff] transition-colors font-semibold">
							portafolio
						</li>
					</Link>
				</ul>
			</div>
			<Link href="/">
				<h3 className="text-[#444444] hover:text-[#4e33ff] transition-colors text-lg font-black">
					manuelbenites
				</h3>
			</Link>
			<nav className="flex items-center">
				<ul className="hidden gap-8 sm:flex">
					<Link href="#habilidades">
						<li className="text-[#444444]  hover:text-[#4e33ff] transition-colors font-semibold">
							habilidades
						</li>
					</Link>
					<Link href="#portafolio">
						<li className="text-[#444444]  hover:text-[#4e33ff] transition-colors font-semibold">
							portafolio
						</li>
					</Link>
				</ul>
				<button className="sm:hidden" onClick={handleActiveModal}>
					<MenuIcon className="fill-[#444444] hover:fill-[#4e33ff] transition-colors" />
				</button>
			</nav>
		</header>
	)
}
