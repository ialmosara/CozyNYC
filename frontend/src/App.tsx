import './App.css'
import { RouterProvider } from 'react-router-dom';
import { routes } from './config/routes';

const Fallback = () => {
  return <p>Performing initial data load </p>
}

const App = () => {
  return (
    <RouterProvider router={routes} fallbackElement={<Fallback/>}/>
  )
}

export default App;
