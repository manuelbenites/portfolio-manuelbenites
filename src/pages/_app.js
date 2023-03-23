import "@/styles/main.css"
import Layout from "../components/layout.js"
import Header from "../components/header.js"
import Footer from "../components/footer.js"

export default function App({ Component, pageProps }) {
	return (
		<Layout>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</Layout>
	)
}
