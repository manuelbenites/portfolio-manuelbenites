import dynamic from "next/dynamic"

const Resume = dynamic(() => import("../components/Resume"))
const Skills = dynamic(() => import("../components/Skills"))
const Projects = dynamic(() => import("../components/Projects"))

export default function Home() {
	return (
		<>
			<Resume />
			<Skills />
			<Projects />
		</>
	)
}
