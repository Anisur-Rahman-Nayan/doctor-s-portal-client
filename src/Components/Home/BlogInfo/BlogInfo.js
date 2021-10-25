import React from 'react';
import pic from'../../../images/images.jfif'
import './BlogInfo.css'
const BlogINfo = (props) => {
    const blogss= props.blogss
    return (
        <div className="col-md-4 card ">
                   <div className='' >
                   <div className="img-size d-flex justify-content-center">
                          <img className="img-fluid" src={blogss.img} alt="" />
                          <div className="doctor-div">
                          <p className="docrtor-name">{blogss.name}</p>
                          <p >{blogss.time}</p>  
                          </div>
                    </div>
                   </div>
                    <div >
                        <p className="text-secondary" style={{textAlign:"center"}}>{blogss.title}</p>
                        <p className="text-secondary" style={{textAlign:"justify"}}>{blogss.description}</p>
                    </div>
           
        </div>
    );
};

export default BlogINfo;