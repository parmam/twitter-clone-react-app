
import { 
  BrowserRouter as Router, 
  Route, Routes 
} from 'react-router-dom'
import { 
  HomePage, 
} from './view/pages';

const routes = [
  {
    exact: false,
    path: '/',
    element: <HomePage />,
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


