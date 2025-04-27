import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/demo/daisy-ui")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<section className="hero bg-base-200 min-h-screen">
			<main className="hero-content text-center">
      <div className="max-w-md">
      <h1 className="text-5xl font-bold">Hello there</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary" type="button">Get Started</button>
    </div>
			</main>
		</section>
	);
}
