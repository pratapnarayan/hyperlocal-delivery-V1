export default function DashboardLayout({ children }: { children: React.ReactNode }) {
	return (
		<html>
			<body>
				<div style={{ display: 'flex', minHeight: '100vh' }}>
					<aside style={{ width: 220, padding: 16, borderRight: '1px solid #eee' }}>
						<nav>
							<ul>
								<li><a href="/(dashboard)">Home</a></li>
								<li><a href="/(dashboard)/orders">Orders</a></li>
								<li><a href="/(dashboard)/tracking">Tracking</a></li>
							</ul>
						</nav>
					</aside>
					<main style={{ flex: 1, padding: 16 }}>{children}</main>
				</div>
			</body>
		</html>
	);
}
