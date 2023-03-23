import Header from "../components/header.js"
import Footer from "../components/footer.js"

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<main className="max-w-[1100px] w-[95%] mx-auto">{children}</main>
			<Footer />
		</>
	)
}
