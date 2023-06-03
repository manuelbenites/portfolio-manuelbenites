import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
	return (
		<Html lang="en" className="scroll-smooth">
			<Head />
			<body className="bg-[#191724] pt-[120px] sm:pt-[140px] md:pt-[160px] snap-y font-poppins scroll-smooth">
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}
