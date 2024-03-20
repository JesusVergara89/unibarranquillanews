import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css';
const Editor = ({ setDescription }) => {
    const [value, setValue] = useState();
    /* configuración del editor  */
    const toolbarOptions = [
        ['bold', 'italic', 'underline'],
        ['blockquote'],
        ['link', 'formula'],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }]
    ];
    const modules = {
        toolbar: toolbarOptions
    }
    //console.log(value)
    return (
        <>
            <ReactQuill
                modules={modules}
                theme="snow"
                value={value}
                onChange={setValue}
                onBlur={()=>setDescription(value)}
                placeholder="description"
                className="form-article-textarea"
            />
        </>
    )
}

export default Editor