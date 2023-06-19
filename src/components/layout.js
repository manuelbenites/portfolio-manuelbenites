import Header from "../components/header.js"
import Footer from "../components/footer.js"
import Head from "next/head.js"

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<meta name="description" content="portafolio" />
				<meta name="author" content="Manuel Benites" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="preload" as="font" />
				<link rel="preconnect" />
				<title>Portafolio | Manuel Benites</title>
			</Head>
			<Header />
			<main className="max-w-[1100px] w-[90%] mx-auto">{children}</main>
			<Footer />
		</>
	)
}
