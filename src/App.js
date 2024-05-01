import './App.css';
import Homepage from './components/Homepage';
function App() {
  const title = ["Sartre's List", "Better-Dressed People"]
  const topNav = ["Women's", "Men's", "On the Street", "The Catwalk", "AdWatch", "About"]
  return (
    <div className="App">
    <Homepage title = {title} topNav = {topNav}/>
    </div>
  );
}

export default App;
