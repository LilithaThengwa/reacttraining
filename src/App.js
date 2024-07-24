// App.js
import './App.css';
import Calculator from './component/Calculator';
import About from './screens/About/About';
import About2 from './screens/About2/About';
import Education from './screens/Education/Education';
import Skills from './screens/Skills/Skills';
import Contact from './screens/Contact/Contact';
import Home from './screens/Home/Home';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
// Functional Component - the function which return the UI/html
// Unidirectional means putting the brain/logic from the javascript, and not giving the control to the UI/html
 
// function allows us to exploit the hoisting functionality
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/calculator',
    element: <Calculator />
  },
  {
    path: '/Education',
    element: <Education />
  },
  {
    path: '/about2',
    element: <About2 />
  },
  {
    path: '/Contact',
    element: <Contact />
  },
  {
    path: '/Skills',
    element: <Skills />
  }
]);
 
function App() {
  return (
    <RouterProvider router={router} />
  );
}
 
export default App;
 
 
