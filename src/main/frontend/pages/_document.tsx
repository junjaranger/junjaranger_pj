import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="kr">
			<Head />
			<body className="p-4 flex flex-col items-center bg-[#f2f2f2]">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
