import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useState } from 'react';
const AddDoctor = () => {

    const [info , setInfo] = useState({})
    const [file,setFile] = useState(null)

    const handleBlur = e =>{
        const newInfo = {...info};
        newInfo[e.target.name]=e.target.value;
        setInfo(newInfo)
    }

    const handleFileChange =(e)=>{
        const newFile = e.target.files[0]
        setFile(newFile)
    }

    const handleSubmit =()=>{
        const formData = new FormData()
        formData.append('file', file)
        formData.append('name', info.name)
        formData.append('email', info.email)

  fetch(`https://calm-thicket-08342.herokuapp.com/addADoctor`, {
    method: 'POST',
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    console.log(data)
  })
  .catch(error => {
    console.error(error)
  })
    }

    return (
        <section className="container-fluid row">
          

            <div className="col-md-3">
            <Sidebar></Sidebar>
            </div>

    <div className="col-md-7">
                
        <form onSubmit={handleSubmit}>
  
            <div class="form-group">
            <label for="name">Name : </label>
            <input type="text" onBlur={handleBlur} class="form-control" name="name" placeholder="Name"/>
            </div>

            <div class="form-group">
            <label for="name">Email : </label>
            <input type="email" onBlur={handleBlur} class="form-control" name="email" placeholder="Email"/>
            </div>

            <div class="form-group">
            <label for="file">Image : </label>
            <input type="file" onChange={handleFileChange} class="form-control" name="file" placeholder="Upload an Image"/>
            </div>
            
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>

</section>
    );
};

export default AddDoctor;