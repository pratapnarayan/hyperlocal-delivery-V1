import { useEffect, useRef, useState } from 'react';

type Coords = { latitude: number; longitude: number } | null;

export default function useGeolocation(enable = true) {
	const [coords, setCoords] = useState<Coords>(null);
	const watchId = useRef<number | null>(null);

	useEffect(() => {
		if (!enable || !('geolocation' in navigator)) return;
		watchId.current = navigator.geolocation.watchPosition(
			(pos) => setCoords({ latitude: pos.coords.latitude, longitude: pos.coords.longitude }),
			(err) => console.warn('Geolocation error', err),
			{ enableHighAccuracy: true, maximumAge: 10000, timeout: 10000 }
		);
		return () => {
			if (watchId.current !== null) navigator.geolocation.clearWatch(watchId.current);
		};
	}, [enable]);

	return { coords };
}
