import { useEffect, useState } from 'react';

type User = { id: string } | null;

export default function useAuth() {
	const [user, setUser] = useState<User>(() => {
		try {
			const raw = localStorage.getItem('delivery_user');
			return raw ? JSON.parse(raw) : null;
		} catch {
			return null;
		}
	});

	useEffect(() => {
		// keep localStorage in sync
		if (user) localStorage.setItem('delivery_user', JSON.stringify(user));
		else localStorage.removeItem('delivery_user');
	}, [user]);

	const login = async (phone: string, otp?: string) => {
		// placeholder: replace with real OTP verification call
		const u = { id: phone || 'driver-unknown' };
		setUser(u);
		return u;
	};

	const logout = () => setUser(null);

	return { user, login, logout };
}
