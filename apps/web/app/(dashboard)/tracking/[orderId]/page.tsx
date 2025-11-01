interface Props { params: { orderId: string } }

export default function TrackingPage({ params }: Props) {
	return (
		<section>
			<h2>Tracking — Order {params.orderId}</h2>
			<p>Live location / status (placeholder).</p>
		</section>
	);
}
