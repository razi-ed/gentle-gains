import { useHaptic } from "@/shared/hooks/useHaptic";
import { useCounterStore } from "@/stores/counterStore";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/demo/daisy-ui")({
	component: RouteComponent,
});

function RouteComponent() {
	const bears = useCounterStore((state) => state.bears);
	const increasePopulation = useCounterStore(
		(state) => state.increasePopulation,
	);
	const removeAllBears = useCounterStore((state) => state.removeAllBears);
  const {triggerHaptic} = useHaptic(200)
  const handleRemoveAllBears = () => {
    triggerHaptic()
    removeAllBears()
  }

	return (
		<section className="hero bg-base-200 min-h-screen">
			<article className="hero-content text-center">
				<main className="max-w-md">
					<h1 className="text-5xl font-bold">Hello there</h1>
					<p className="py-6">
						Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
						excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
						a id nisi.
					</p>
          <button className="btn btn-secondary" type="button" onClick={increasePopulation}>{bears} - Add a Bear</button>
          <button className="btn btn-error" type="button" onMouseDown={triggerHaptic} onMouseUp={removeAllBears}>Reset Count</button>
          <button className="btn btn-error" type="button" onMouseDown={triggerHaptic} onMouseUp={handleRemoveAllBears}>Reset Count 2</button>
				</main>
			</article>
		</section>
	);
}
