import { useEffect } from "react"
import useLocalStorage from "./useLocalStorage.js"

export const useThemes = () => {
	const [theme, setTheme] = useLocalStorage("theme", "light")
	useEffect(() => {
		const className = "dark"
		const htmlClass = document.documentElement.classList

		theme === "dark" ? htmlClass.add(className) : htmlClass.remove(className)
	}, [theme])
	return [theme, setTheme]
}

export default useThemes
