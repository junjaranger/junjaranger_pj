import { useState } from "react";

import Link from "next/link";

import BigBtn from "@/components/bigBtn";


export default function Home() {
	const [waitingCount, setWaitingCount] = useState(0);
	const [waitingSeconds, setWaitingSeconds] = useState(0);
	return (
		<div className={`flex flex-col justify-between h-[90vh]`}>
			<div className="grid grid-cols-1 gap-4">
				<div className="grid grid-cols-1 gap-y-4 text-7xl text-[#365bf7]">
					{
						<div className={`flex justify-between`}>
							<div className={`p-4 pl-0 pb-0`}>
								<Link href={`/login`} className={`text-lg text-black`}>
									로그인
								</Link>
							</div>
							<div></div>
						</div>
					}
					<p>시간을</p>
					<p>설정해</p>
					<p>주세요</p>
				</div>
				<div>
					<div className="grid grid-cols-1 text-2xl">
						<span>현재 대기 인원: {waitingCount}</span>
						<span>예상 대기시간: {waitingSeconds}</span>
					</div>
				</div>
			</div>
			<div className={`flex flex-col justify-around h-full`}>
				<div className="flex justify-center items-center text-8xl bg-white rounded-lg p-6 h-fit shadow-2xl">
					02:00
				</div>
				<BigBtn bgColor="bg-[#365bf7]" />
			</div>
		</div>
	);
}
