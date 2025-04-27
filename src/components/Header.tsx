import { Link } from "@tanstack/react-router";

export default function Header() {
	return (
		<header className="p-2 flex gap-2 bg-white text-black justify-between">
			<nav className="flex flex-row">
				<div className="px-2 font-bold">
					<Link to="/" className="btn btn-primary btn-lg">Home</Link>
				</div>

				<div className="px-2 font-bold">
					<Link to="/demo/table" className="btn btn-secondary btn-lg">TanStack Table</Link>
				</div>
				
				<div className="px-2 font-bold">
					<Link to="/demo/daisy-ui" className="btn btn-accent btn-lg">DaisyUI</Link>
				</div>
			</nav>
		</header>
	);
}
