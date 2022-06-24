import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

const Error404 = () => {
	return (
		<div className="flex flex-col justify-center items-center min-h-screen">
			<div className="w-64 h-40 bg-blue-200 rounded-lg"></div>
			<div className="my-14">
				<h1 className="text-5xl font-bold my-2">
					<span className="block text-center uppercase font-semibold text-lg tracking-wide text-blue-600">
						404 Error
					</span>
					This page does not exist.
				</h1>
				<p className="text-slate-500 text-lg">
					The page you are looking for could not be found.
				</p>
			</div>
			<Link
				to="/"
				className="flex justify-center items-center leading-none text-sm font-semibold text-blue-600"
			>
				<BiArrowBack className="relative top-[1px] mr-1 text-lg" />
				go back home
			</Link>
		</div>
	);
};

export default Error404;
