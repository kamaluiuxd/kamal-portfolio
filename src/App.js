import "./App.css";

function App() {
	const NavLinks = [
		{ id: 1, link: "Home" },
		{ id: 2, link: "About" },
		{ id: 3, link: "Portfolio" },
		{ id: 4, link: "Projects" },
		{ id: 5, link: "Contact" },
	];
	return (
		<div className="App">
			<div>Logo</div>
			<ul>
				{NavLinks.map(({ id, link }) => (
					<li key={id}>{link}</li>
				))}
			</ul>
		</div>
	);
}

export default App;
