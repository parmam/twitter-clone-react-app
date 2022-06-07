
import { 
  BrowserRouter as Router, 
  Route, 
  Routes 
} from 'react-router-dom'

import { 
  HomePage, 
  LoginPage,
  ErrorPage
} from './view/pages';

const routes = [
  {
    exact: true,
    path: '/login',
    element: <LoginPage />,
  },
  {
    exact: false,
    path: '/',
    element: <HomePage />,
  },
  {
    exact: false,
    path: '*',
    element: <ErrorPage />,
  },
]

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;


