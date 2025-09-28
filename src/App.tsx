import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { MasterTemplate } from './pages/masterPage';

export const App: React.FC = () => (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<MasterTemplate />}>
				<Route index element={<Home />} />
			</Route>
		</Routes>
	</BrowserRouter>
);
