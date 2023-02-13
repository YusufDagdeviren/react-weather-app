import './App.css';
import Contents from './Components/Contents';
import { WeatherProvider } from './Context/WeatherContext';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div>
      <WeatherProvider>
        <Contents/>
      </WeatherProvider>
    </div>
  );
}

export default App;
