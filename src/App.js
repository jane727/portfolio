import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import HomeView from './pages/HomeView';
import { useEffect } from 'react';
import link from './utils/link';
import lenis from './utils/lenis';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeView />,
		// errorElement: <ErrorPage />,
	},
]);
function App() {
	useEffect(() => {
		lenis();
		link();
	}, []);
	return <RouterProvider router={router} />;
}

export default App;
