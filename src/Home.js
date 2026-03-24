import a1 from "./ba.jpg"
import BlogList from "./BlogList";
import Blog from "./Blog";
const Home = () =>{

return(
<>
<img src={a1} className="banner"/>

<div className="in-btw t2">
    <h2> Read Blogs </h2>
</div>
<BlogList/>

<br/> <br/> <br/> <br/>
</>
);
}
export default Home;