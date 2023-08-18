interface IBigBtn {
	bgColor: string;
}

export default function BigBtn({ bgColor }: IBigBtn) {
	return (
		<div
			className={`text-white rounded-lg p-6 ${bgColor} h-[1fr]
       flex flex-col items-center text-5xl shadow-2xl`}>
			<p>번호표</p>
			<p>발행</p>
		</div>
	);
}
