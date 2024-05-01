import './App.css';
import Homepage from './components/Homepage';
function App() {
  const title = ["Sartre's List", "Better-Dressed People"]
  const topNav = ["Women's", "Men's", "On the Street", "The Catwalk", "AdWatch", "About"]
  const contentSection1 = ['11/12/20', "On The Street in Brooklyn", "https://ps-react-curriculum.herokuapp.com/fashionblog/blog-image-1.jpg","C","ray ipsum, dolor sit amet consectetur adipisicing elit. Repellat quidem deserunt nemo dignissimos fuga veniam inventore eligendi magnam aperiam odit mollitia cupiditate eveniet velit officiis magni aliquid, laborum dolor? Quasi? Veniam amet rerum ducimus est ea at neque alias. Temporibus perspiciatis at impedit voluptas aut voluptates facere totam aliquid debitis rerum, ex consequuntur, nulla eius quae corrupti optio atque ut. Repellendus molestiae doloribus recusandae, itaque voluptatibus placeat repellat deserunt amet eaque dignissimos, iste sapiente magnam doloremque. Fugit, cum, cupiditate aliquam, mollitia quisquam sed nulla eveniet doloribus neque optio odio qui! Id architecto impedit consequatur rem quaerat voluptatibus pariatur quas, quod quisquam quo ab molestiae."]
  return (
    <div className="App">
    <Homepage title = {title} topNav = {topNav} contentSection1 = {contentSection1}/>
    </div>
  );
}

export default App;
