export default function LoginPage() {
	return (
		<main>
			<h2>Login</h2>
			{/* Replace with real login form */}
			<form>
				<label>
					Email
					<input type="email" name="email" />
				</label>
				<label>
					Password
					<input type="password" name="password" />
				</label>
				<button type="submit">Sign in</button>
			</form>
		</main>
	);
}
