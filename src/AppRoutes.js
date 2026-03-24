import { Route, Routes } from "react-router-dom";
import App from "./App";
import BlogList from "./BlogList";
import Blog from "./Blog";
import ReadBlog from "./ReadBlog";
import Home from "./Home";

const AppRoutes = () =>{
return(
<>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/list" element={<BlogList/>}/>
        <Route path="/readblog" element={<ReadBlog/>}/>
        <Route path="/write" element={<Blog/>}/>
    </Routes>
</>
);
}
export default AppRoutes;