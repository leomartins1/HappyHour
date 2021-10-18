import { DrinksProvider } from './context/DrinksProvider';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <DrinksProvider>
      <Home />
    </DrinksProvider>
  );
}

export default App;
