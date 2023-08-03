import React from 'react'
import { Link } from 'react-router-dom'

const Blogcard = () => {
  return (

    <div className="blog-card">
    <div className="card-image">
    <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blog"/>
    </div>
    <div className="blog-content">
        <p className="date">29 June,2023</p>
        <h5 className="title">
        A beautiful morning renaissance
        </h5>
        <p className="desc">
        you're Only As Good As Your Last Collection,which is an Enormous Pressure.I Think There is Something About...
        </p>
        <Link to="/blog/:id" className="button">Read More</Link>
    </div>
    </div>
   
  )
}

export default Blogcard
