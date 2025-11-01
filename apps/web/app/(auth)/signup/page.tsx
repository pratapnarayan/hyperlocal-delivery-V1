export default function SignupPage() {
	return (
		<main>
			<h2>Sign up</h2>
			{/* Replace with real signup form */}
			<form>
				<label>
					Store name
					<input name="name" />
				</label>
				<label>
					Email
					<input type="email" name="email" />
				</label>
				<button type="submit">Register</button>
			</form>
		</main>
	);
}
