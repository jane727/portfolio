import './App.css';
import ErrorPage from './pages/ErrorPage';
import HomeView from './pages/HomeView';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomeView />,
		errorElement: <ErrorPage />,
	},
]);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
