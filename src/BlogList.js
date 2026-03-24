import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BlogList = () => {

    const [blogs, setblogs] = useState([])

    const fetchblogs = async () => {
        const resp = await fetch("http://localhost:9000/api/getblogs")
        if (resp.ok) {
            let res = await resp.json();
            if (res.statuscode == 1) {
                setblogs(res.blgs)
            }
        }
    }

    const nav = useNavigate();

    useEffect(() => {
        fetchblogs();
    }, [])
    return (
        <>

            {
                blogs.map((data, ind) => (
                    <>
                        <div className="cont t2">

                            <div className="blist">
                                    <div className="np" key={ind}> <p>  {data.Title} <br /> <button onClick={() => nav(`/readblog?blog=${data._id}`)}> Read Blog </button></p>  </div>
                                    <div className="np" key={ind}> <img src={`uploads/${data.Cover}`} /> </div>
                              
                            </div>
                        </div>

                    </>
                ))
            }

        </>
    );
}
export default BlogList;