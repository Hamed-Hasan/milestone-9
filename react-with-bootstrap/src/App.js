
import './App.css';
import CardGroup from './component/CardGroup/CardGroup';
import CardGroup2 from './component/CardGroup2/CardGroup2';

function App() {
  return (
    <div className="App container mt-5">
      <h3>using bootstrap cdn</h3>
    <CardGroup/>
    <h3>using react bootstrap npm</h3>
    <CardGroup2/>
    </div>
  );
}

export default App;
