import { Routes, Route } from "react-router-dom";
import AuthProvider from "./context/AuthProvider";

// Pages
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Error404 from "./pages/Error404";

export default function App() {
	return (
		<AuthProvider>
			<Routes>
				<Route index path="/" element={<Auth />} />
				<Route path="/dashboard" element={<Dashboard />} />
				<Route path="*" element={<Error404 />} />
			</Routes>
		</AuthProvider>
	);
}
