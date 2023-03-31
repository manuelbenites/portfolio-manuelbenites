import MenuIcon from "./menuicon.js"
import CloseIcon from "./closeicon.js"
import SunIcon from "./sunicon.js"
import MoonIcon from "./moonicon.js"
import Link from "next/link"

import { useState, useEffect } from "react"
import { useThemes } from "../hooks/useThemes.js"

export default function Header() {
	const [theme, setThemes] = useThemes()
	const [themeIconMode, setThemeIconMode] = useState("")
	const modalActive = "translate-x-0"
	const modalInactive = "-translate-x-full"
	const [modal, setModal] = useState(modalInactive)
	const handleActiveModal = () => {
		setModal(modal === modalInactive ? modalActive : modalInactive)
	}
	useEffect(() => {
		setThemeIconMode(theme)
	}, [theme])

	return (
		<header className="w-[95%] mx-auto max-w-[1100px] flex justify-between items-center h-24 text-dark-slate-gray">
			<div
				className={
					"fixed " +
					modal +
					" transition-transform top-0 left-0 bg-snow dark:bg-midnight-blue w-full h-full"
				}
			>
				<div className="flex justify-end mx-auto items-center h-24 w-[96%] relative z-40">
					<button onClick={handleActiveModal}>
						<CloseIcon className="transition-colors fill-dark-slate-gray dark:fill-snow dark:hover:fill-aqua-marine hover:fill-royal-blue" />
					</button>
				</div>
				<ul className="flex absolute top-0 flex-col gap-6 justify-center items-center w-full h-full dark:text-snow">
					<Link href="#habilidades" onClick={handleActiveModal}>
						<li className="font-semibold transition-colors dark:hover:text-aqua-marine hover:text-royal-blue">
							habilidades
						</li>
					</Link>
					<Link href="#portafolio" onClick={handleActiveModal}>
						<li className="font-semibold transition-colors dark:hover:text-aqua-marine hover:text-royal-blue">
							portafolio
						</li>
					</Link>
				</ul>
			</div>
			<Link href="/">
				<h3 className="text-lg font-black transition-color dark:text-snow dark:hover:text-aqua-marine hover:text-royal-blue">
					manuelbenites
				</h3>
			</Link>
			<nav className="flex items-center">
				<ul className="hidden gap-8 sm:flex dark:text-snow">
					<Link href="#habilidades">
						<li className="font-semibold transition-colors dark:hover:text-aqua-marine hover:text-royal-blue">
							habilidades
						</li>
					</Link>
					<Link href="#portafolio">
						<li className="font-semibold transition-colors dark:hover:text-aqua-marine hover:text-royal-blue">
							portafolio
						</li>
					</Link>
					<button
						onClick={() => setThemes(theme === "light" ? "dark" : "light")}
					>
						{themeIconMode === "light" ? (
							<MoonIcon className="fill-midnight-blue" />
						) : (
							<SunIcon className="fill-snow" />
						)}
					</button>
				</ul>
				<div className="flex gap-4 items-center">
					<button
						onClick={() => setThemes(theme === "light" ? "dark" : "light")}
						className="sm:hidden"
					>
						{themeIconMode === "light" ? (
							<MoonIcon className="fill-midnight-blue" />
						) : (
							<SunIcon className="fill-snow" />
						)}
					</button>
					<button className="sm:hidden" onClick={handleActiveModal}>
						<MenuIcon className="transition-colors fill-dark-slate-gray dark:hover:fill-[#72E2AE] hover:fill-royal-blue dark:fill-[#ffffff]" />
					</button>
				</div>
			</nav>
		</header>
	)
}
