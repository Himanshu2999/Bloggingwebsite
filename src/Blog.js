import React, { useEffect, useState } from 'react';
import { CKEditor, useCKEditorCloud } from '@ckeditor/ckeditor5-react';



const Blog = () => {

    

    const [title, setitle] = useState("");
    const [blog, setblog] = useState("");
    const [coverimg, setimg] = useState(null);
    const [catg, setcatg] = useState("");


const [selected, setSelected] = useState("");
    const handlechange = (e) => {
        setimg(e.target.files[0])
    }

    const blogchang = (event, editor) => {
        const data = editor.getData();
        setblog(data);
    }
    const publishblog = async () => {
        const form = new FormData();
        form.append("title", title);
        form.append("blog", blog);
        form.append("coverimg", coverimg);
        form.append("catg", catg);
        const resp = await fetch("http://localhost:9000/api/publish",
            {
                method: "post",
                body: form,
            }
        )

        if (resp.ok) {
            let res = await resp.json();
            if (res.statuscode == 1) {
                alert("success")
            }
        }
    }

    const cloud = useCKEditorCloud({
        version: '47.6.1',
        premium: true
    });

    if (cloud.status === 'error') {
        return <div>Error!</div>;
    }

    if (cloud.status === 'loading') {
        return <div>Loading...</div>;
    }

    const {
        ClassicEditor,
        Essentials,
        Paragraph,
        Bold,
        Italic,
        Heading,
    } = cloud.CKEditor;

    const { FormatPainter } = cloud.CKEditorPremiumFeatures;


const oncatg = (cat) => {
    selected === cat ? setSelected("") : setSelected(cat); 
    setcatg(cat) ;

}

    let upldcvr = () => {
        document.getElementById("cvpho").click();
    }

    return (
        <>


            <div className='cont'>



                <div className='boxinp t'>
                    <div className='boxin '>
                        <label> Title: <input type='text' onChange={(e) => setitle(e.target.value)} /> </label> <br /> <br />
                    </div>
                    <br /> <br />
                    <CKEditor
                        editor={ClassicEditor}
                        data={'<p>Hello world!</p>'}
                        config={{
                            licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3NzUyNjA3OTksImp0aSI6IjYxNmE0NmEwLTRiNmMtNDQ2OS04NWNmLWFjOGZjM2IwNmJkOSIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6IjdkOTg4MjQyIn0.zH8OeLyJIIZAWNsVJ8pnRpBtzzxRHFH3aD0iRpy9QS8tWDUYKnVgBH-orlOmkSXNf9ZOLjtqbQHsDVloivYlHA',
                            plugins: [Essentials, Paragraph, Bold, Italic, FormatPainter, Heading],
                            toolbar: ['undo', 'redo', '|', 'bold', 'italic', '|', 'formatPainter', 'heading']
                        }

                        } onChange={blogchang}
                    />

                    <div className='in-btw t'>
                        <img src='gallery.png' onClick={upldcvr} />
                    </div>
                    <div className='in-btw'>
                        <h2> Upload cover photo </h2>
                    </div>

                    <h3> Choose Category: </h3>

                    <div className='catgbtn'>
                        <button onClick={() => oncatg("Entertainment")} style={{ background: selected === "Entertainment" ? "green" : "gray", color: "white" }}> Entertainment </button>
                        <button onClick={() => oncatg("Technology")} style={{ background: selected === "Technology" ? "green" : "gray", color: "white" }}> Technology </button>
                        <button onClick={() => oncatg("News")} style={{ background: selected === "News" ? "green" : "gray", color: "white" }}> News </button>
                        <button onClick={() => oncatg("Fashion")} style={{ background: selected === "Fashion" ? "green" : "gray", color: "white" }}> Fashion </button>
                    </div>


                </div>

                <input id='cvpho' style={{ display: "none" }} type='file' onChange={(e) => handlechange(e)} />
                Enter



                <div className='in-btw'>
                    <button onClick={publishblog}> Publish </button>
                </div>

            </div>
        </>
    );
};

export default Blog;