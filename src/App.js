import logo from './logo.svg';
import './App.css';
import WebCamera from './WebCamera';
function App() {
  return (
    <div className="App">
      <WebCamera audio={true} />
    </div>
  );
}

export default App;
