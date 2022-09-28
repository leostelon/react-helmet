import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./screens/Home";
import { Second } from "./screens/Second";
import { Third } from "./screens/Third";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" exact element={<Home />} />
				<Route path="/second" exact element={<Second />} />
				<Route path="/third" exact element={<Third />} />
			</Routes>
		</Router>
	);
}

export default App;
