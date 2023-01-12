import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./componets/navbar";
import { PokeData } from "./views/PokeData";
import { Search } from "./views/Search";
import App from "./views/App";


const Layout = () => {

	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<App />} />
					<Route path="/pokemon/:id" element={<PokeData />} />
					<Route path="/search/:pokeName" element={<Search />} />
					<Route path="*" element={<h1>Not found!</h1>} />
				</Routes>
			</BrowserRouter>
		</div>

	)
}

export default Layout;