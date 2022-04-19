import { BrowserRouter } from 'react-router-dom';
import { AppRouter } from './components/AppRouter/AppRouter';
import { Header } from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  );
}

export default App;
