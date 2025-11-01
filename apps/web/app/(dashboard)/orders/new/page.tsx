export default function NewOrderPage() {
	return (
		<section>
			<h2>Create Order</h2>
			{/* Replace with order creation form */}
			<form>
				<label>
					Customer
					<input name="customer" />
				</label>
				<label>
					Address
					<input name="address" />
				</label>
				<button type="submit">Create</button>
			</form>
		</section>
	);
}
