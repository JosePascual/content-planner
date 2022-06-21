import { useState } from "react";
import ReactLoading from "react-loading";

const RoundedButton = ({ icon = null }) => {
	const [loading, setLoading] = useState(false);

	return (
		<button
			onClick={() => {
				setLoading(!loading);
			}}
			className={`${
				loading
					? "flex justify-center items-center border-blue-400"
					: "group"
			} text-center h-14 px-6 border-2 border-gray-300 rounded-full transition duration-300 
            hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100`}
		>
			{loading ? (
				<ReactLoading
					type="spin"
					color="#3584e3"
					height={25}
					width={25}
				/>
			) : (
				<div className="relative flex items-center space-x-4 justify-center">
					{icon && (
						<span className="absolute left-0 text-gray-700">
							{icon}
						</span>
					)}
					<span className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
						Continue with Github
					</span>
				</div>
			)}
		</button>
	);
};

export default RoundedButton;
