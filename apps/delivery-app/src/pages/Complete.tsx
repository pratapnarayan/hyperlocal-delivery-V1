import React from 'react';

export default function Complete({ id, navigate }: { id: string; navigate: (name: string, params?: any) => void }) {
	const handleComplete = () => {
		// placeholder: call API to mark complete
		alert(`Delivery ${id} marked complete (placeholder)`);
		navigate('home');
	};

	return (
		<section>
			<h2>Complete Delivery {id}</h2>
			<button onClick={handleComplete}>Confirm Complete</button>
			<button onClick={() => navigate('detail', { id })}>Cancel</button>
		</section>
	);
}
