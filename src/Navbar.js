import { useNavigate } from "react-router-dom";

const Navbar = () =>{
    
    let navslid = () =>{
        document.getElementById("navk").classList.toggle('open')

    }

    const nav = useNavigate();

    return(
        <>
        <div id="navk" className="navbar">
            <div className="nvitem" onClick={()=>nav("/")}  > Home </div>
            <div className="nvitem" onClick={()=>nav("/list")} > Read Blogs </div>
            <div className="nvitem" onClick={()=>nav("/write")} > Write Blog </div>
        </div>
        <div className="log">
            <img src="blogt.jpg" onClick={navslid} />
        </div>
        </>
    );
}

export default Navbar;