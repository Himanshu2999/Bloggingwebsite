import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const ReadBlog = () => {
    const [blog, setblog] = useState(null);
    const [params] = useSearchParams();
    const bid = params.get("blog");
    const [comt, setcomt] = useState('');

    const fetchblog = async () => {
        try {
            const resp = await fetch(`http://localhost:9000/api/viewblog/${bid}`);
            if (resp.ok) {
                let res = await resp.json();
                console.log(res);
                if (res.statuscode == 1) {
                    setblog(res.wblog);
                }
            }
        } catch (err) {
            console.error("Fetch error:", err);
        }
    };

    const addcomnt = async () => {
        try {
            const data = { comt };
            const resp = await fetch(`http://localhost:9000/api/addcomment/${bid}`,
                {
                    method: "put",
                    body: JSON.stringify(data),
                    headers: { 'Content-type': 'application/json' },
                }
            );
            if (resp.ok) {
                let res = await resp.json();
                if (res.statuscode == 1) {
                    fetchblog();
                }
            }
        } catch (err) {
            console.error("Fetch error:", err);
        }
    };




    useEffect(() => {
        fetchblog();
    }, []);

    if (!blog) return <p>Loading...</p>;

    return (
        <>
            <div className="cont t2 readblog">
                <h1>{blog.Title}</h1>
                <img src={`uploads/${blog.Cover}`} />

                <div dangerouslySetInnerHTML={{ __html: blog.Blogtext }} />


                <div className="">
                    <h4>Add Comment</h4>
                    <textarea rows="4" placeholder="Share your thoughts..." onChange={(e) => setcomt(e.target.value)} />
                    <button onClick={addcomnt}>Post Comment</button>
                </div>

                 <br/> <br/>
         {
    blog.Comments?.map((data, ind) => (
        <div key={ind} className="comt">{data}</div>
    ))
} 

            </div>
            <br/> <br/> <br/>
        </>
    );
};

export default ReadBlog;