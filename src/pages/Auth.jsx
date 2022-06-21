import RoundedButton from "../components/buttons/RoundedButton";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { GoogleIcon } from "../../public/svg/Icons";

export default function Auth() {
	return (
		<div className="relative flex justify-between items-center flex-col bg-gradient-to-br from-sky-50 to-gray-200 h-screen">
			<div className="relative flex justify-center items-center w-full h-full">
				<div className="m-auto w-[90%] max-w-[500px] p-16 rounded-xl bg-white shadow-xl">
					<div className="space-y-4">
						<img
							src="https://tailus.io/sources/blocks/social/preview/images/icon.svg"
							loading="lazy"
							className="w-10"
							alt="tailus logo"
						/>
						<h2 className="mb-8 text-2xl text-cyan-900 font-bold">
							Sign in to unlock the <br />{" "}
							<span>Content Planner</span>
						</h2>
					</div>
					<div className="mt-16 grid space-y-4">
						<RoundedButton
							icon={<GoogleIcon className="w-6 h-6" />}
							text="Continue with Google"
						/>
						<RoundedButton
							icon={<FaGithub className="text-xl" />}
							text="Continue with Github"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
