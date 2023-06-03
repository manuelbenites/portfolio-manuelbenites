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
		<header className="w-full h-24 flex items-center fixed z-40 backdrop-blur-lg top-0 text-[#e0def4]">
			<div className="mx-auto w-[90%] max-w-[1000px] flex justify-between items-center">
				<div
					className={`fixed  ${modal} transition-transform top-0 left-0 w-full h-screen`}
				>
					<div className="flex justify-end mx-auto items-center h-24 w-[90%] relative z-40">
						<button onClick={handleActiveModal}>
							<CloseIcon className="transition-colors fill-[#e0def4] hover:fill-[#f6c177]" />
						</button>
					</div>
					<ul className="flex absolute bg-[#191724] text-2xl capitalize top-0 flex-col gap-6 justify-center items-center w-full h-full">
						<Link href="#habilidades" onClick={handleActiveModal}>
							<li className="font-normal hover:text-[#f6c177] px-16 py-6 transition-colors">
								habilidades
							</li>
						</Link>
						<Link href="#proyectos" onClick={handleActiveModal}>
							<li className="font-normal hover:text-[#f6c177] px-16 py-6 transition-colors">
								proyectos
							</li>
						</Link>
					</ul>
				</div>
				<Link href="/">
					<h3 className="text-xl capitalize font-bold hover:text-[#f6c177] transition-colors">
						manuel benites
					</h3>
				</Link>
				<nav className="flex items-center">
					<ul className="hidden gap-8 font-normal tracking-wider capitalize sm:flex">
						<Link href="#habilidades" className="">
							<li className="hover:text-[#f6c177] transition-colors">
								habilidades
							</li>
						</Link>
						<Link href="#proyectos">
							<li className="hover:text-[#f6c177] tracking-wider transition-colors">
								proyectos
							</li>
						</Link>
					</ul>
					<div className="flex gap-4 items-center">
						<button className="sm:hidden" onClick={handleActiveModal}>
							<MenuIcon className="transition-colors fill-[#e0def4] hover:fill-[#f6c177]" />
						</button>
					</div>
				</nav>
			</div>
		</header>
	)
}
