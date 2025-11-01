import React from 'react';

const mockDeliveries = [
	{ id: 'd1', customer: 'Alice', address: '123 Main St', status: 'en route' },
	{ id: 'd2', customer: 'Bob', address: '456 Oak Ave', status: 'pickup' },
];

export default function Home({ navigate }: { navigate: (name: string, params?: any) => void }) {
	return (
		<section>
			<h2>Active Deliveries</h2>
			<ul>
				{mockDeliveries.map((d) => (
					<li key={d.id} style={{ marginBottom: 8 }}>
						<div><strong>{d.customer}</strong> — {d.address}</div>
						<div>Status: {d.status}</div>
						<button onClick={() => navigate('detail', { id: d.id })}>View</button>
					</li>
				))}
			</ul>
		</section>
	);
}
