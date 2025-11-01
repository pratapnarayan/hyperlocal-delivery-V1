import React from 'react';
import Login from './pages/Login';
import Home from './pages/Home';
import DeliveryDetail from './pages/DeliveryDetail';
import Complete from './pages/Complete';
import useAuth from './hooks/useAuth';

type Route = { name: 'login' | 'home' | 'detail' | 'complete'; params?: any };

export default function App(): JSX.Element {
	// simple auth hook (uses localStorage)
	const { user, logout } = useAuth();
	const [route, setRoute] = React.useState<Route>(user ? { name: 'home' } : { name: 'login' });

	React.useEffect(() => {
		if (!user) setRoute({ name: 'login' });
	}, [user]);

	const navigate = (name: Route['name'], params?: any) => setRoute({ name, params });

	return (
		<div style={{ fontFamily: 'system-ui, sans-serif', padding: 16 }}>
			<header style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 16 }}>
				<h3>Delivery App</h3>
				{user ? (
					<div>
						<span style={{ marginRight: 8 }}>Driver: {user?.id}</span>
						<button onClick={() => { logout(); navigate('login'); }}>Logout</button>
					</div>
				) : null}
			</header>

			{route.name === 'login' && <Login onLogin={() => navigate('home')} />}
			{route.name === 'home' && <Home navigate={navigate} />}
			{route.name === 'detail' && <DeliveryDetail id={route.params?.id} navigate={navigate} />}
			{route.name === 'complete' && <Complete id={route.params?.id} navigate={navigate} />}
		</div>
	);
}
