import React from 'react';
import BlogInfo from '../BlogInfo/BlogInfo'
import pic1 from '../../../images/doctor-character-background_1270-84.jpg'
import pic2 from '../../../images/istockphoto-1209936855-612x612.jpg'
const blogs = [
    {
        name:"Dr. Anisur Rahman Nayan",
        time:"07 sept , 2021",
        title:"2 times of brush in a day can keep your healthy",
        description:"The American Dental Association recommends brushing your teeth twice a day with fluoride toothpaste for two minutes each time. When you brush your teeth, you help remove food and plaque — a sticky white film that forms on your teeth and contains bacteria.",
        img: pic1
    },
    {
        name:"Dr. Mahima Akter Himu",
        time:"21 october,2021",
        title:"The Tooth cancer is taking a challenge",
        description:"Mouth cancer, also known as oral cancer or cancer of the oral cavity, is often used to describe a number of cancers that start in the region of the mouth. These most commonly occur on the lips, tongue and floor of the mouth but can also start in the cheeks, gums, roof of the mouth, tonsils and salivary glands.",
        img: pic2
    }
]
const Blog = () => {
    return (
        <div >
            <div >
                    <h2 style={{color:"aqua",textAlign:"center",marginBottom:"25px"}}  >OUR BLOG</h2>
                    <h1 style={{textAlign:"center",marginBottom:"60px"}}>From Our Blog News</h1>
            </div>
            <div className="row  justify-content-center">
            {
                blogs.map(blogss=> <BlogInfo  blogss={blogss}></BlogInfo> )
            }
        </div>
        </div>
    );
};

export default Blog;