import './App.css';
import { ReactDOM } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <div>main</div>,
	},
]);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
