import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import HomeView from './pages/HomeView';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeView />,
		// errorElement: <ErrorPage />,
	},
]);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
