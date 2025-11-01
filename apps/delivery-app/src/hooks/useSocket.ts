import { useEffect, useRef, useState } from 'react';

export default function useSocket(url?: string) {
	const wsRef = useRef<WebSocket | null>(null);
	const [connected, setConnected] = useState(false);
	const [lastMessage, setLastMessage] = useState<string | null>(null);

	useEffect(() => {
		const endpoint = url || (window as any).__DELIVERY_SOCKET_URL__ || `ws://${window.location.host}`;
		const ws = new WebSocket(endpoint);
		wsRef.current = ws;

		ws.onopen = () => setConnected(true);
		ws.onclose = () => setConnected(false);
		ws.onmessage = (ev) => setLastMessage(ev.data);

		return () => {
			ws.close();
			wsRef.current = null;
		};
	}, [url]);

	const send = (data: string) => {
		if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
			wsRef.current.send(data);
		}
	};

	return { connected, lastMessage, send };
}
