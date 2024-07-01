import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from './pages/NotFound'

function App() {
	return (
			<Routes>
				<Route path="/Intern-Login" element={<Home />} />
				<Route path="/notfound" element={<NotFound />} />
			</Routes>
	);
}

export default App;
