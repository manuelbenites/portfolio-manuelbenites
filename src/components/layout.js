import Head from "next/head.js"
import { Poppins } from "next/font/google"
import Header from "../components/header.js"
import Footer from "../components/footer.js"

const poppins = Poppins({
	weight: ["300", "400", "500", "600", "700"],
	subsets: ["latin"],
	display: "swap",
})

export default function Layout({ children }) {
	return (
		<main className={poppins.className} role="main">
			<Head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<title>Portafolio | Manuel Benites</title>
				<meta name="description" content="portafolio" />
				<meta name="author" content="Manuel Benites" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<section id="content" className="max-w-[900px] w-[90%] mx-auto">
				{children}
			</section>
			<Footer />
		</main>
	)
}
