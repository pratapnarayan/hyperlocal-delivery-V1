import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
if (!container) {
	throw new Error('Root element #root not found. Create an index.html with a <div id="root"></div>.');
}
createRoot(container).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
