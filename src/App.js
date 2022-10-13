import './App.scss';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import BirthdayRallyMap from './BirthdayRallyMap';

const router = createBrowserRouter([
  {
    path: "/",
    element: <BirthdayRallyMap />,
  },
]);

function App() {
  return(
    <RouterProvider router={router} />
  );
}

function Home() {
  return <h1 className='text-3xl font-bold underline'>Home</h1>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
