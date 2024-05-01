import './App.css';
import Homepage from './components/Homepage';
function App() {
  const title = ["Sartre's List", "Better-Dressed People"]
  return (
    <div className="App">
    <Homepage title = {title}/>
    </div>
  );
}

export default App;
