import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import EditorPage from './pages/EditorPage';
import { Toaster } from 'react-hot-toast';

function App() {
	return (
		<>
			<Toaster
				position='top-right'
				toastOptions={{
					success: {
						duration: 2500,
						theme: {
							primary: '#4aed88',
						},
					},
				}}
			></Toaster>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/editor/:roomId' element={<EditorPage />}></Route>
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
