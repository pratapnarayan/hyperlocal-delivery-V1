import React from 'react';

export default function DeliveryDetail({ id, navigate }: { id: string; navigate: (name: string, params?: any) => void }) {
	// placeholder data — replace with real fetch by id
	const delivery = { id, customer: 'Alice', address: '123 Main St', status: 'en route' };

	return (
		<section>
			<h2>Delivery {delivery.id}</h2>
			<p>Customer: {delivery.customer}</p>
			<p>Address: {delivery.address}</p>
			<p>Status: {delivery.status}</p>
			<button onClick={() => navigate('complete', { id: delivery.id })}>Mark Complete</button>
			<button onClick={() => navigate('home')}>Back</button>
		</section>
	);
}
