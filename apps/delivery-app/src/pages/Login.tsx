import React from 'react';
import useAuth from '../hooks/useAuth';

export default function Login({ onLogin }: { onLogin?: () => void }) {
	const { login } = useAuth();
	const [phone, setPhone] = React.useState('');
	const [otp, setOtp] = React.useState('');
	const [stage, setStage] = React.useState<'phone' | 'otp'>('phone');
	const [loading, setLoading] = React.useState(false);

	const sendOtp = () => {
		// placeholder: in real app call API to send OTP
		setStage('otp');
	};

	const handleVerify = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		try {
			await login(phone, otp); // placeholder verifies instantly
			onLogin?.();
		} finally {
			setLoading(false);
		}
	};

	return (
		<section>
			<h2>Driver Login (OTP)</h2>

			{stage === 'phone' ? (
				<form onSubmit={(e) => { e.preventDefault(); sendOtp(); }}>
					<label>
						Phone
						<input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+123..." />
					</label>
					<br />
					<button type="submit">Send OTP</button>
				</form>
			) : (
				<form onSubmit={handleVerify}>
					<label>
						OTP
						<input value={otp} onChange={(e) => setOtp(e.target.value)} />
					</label>
					<br />
					<button type="submit" disabled={loading}>{loading ? 'Verifying...' : 'Verify & Login'}</button>
				</form>
			)}
		</section>
	);
}
