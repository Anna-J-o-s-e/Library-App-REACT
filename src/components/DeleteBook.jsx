import React from 'react'
import NavBar from './NavBar'

const DeleteBook = () => {
  return (
    <div>
        <NavBar/>
<br />
<center><h1>Delete Book</h1>
<br /><br />
                <div className="container">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <div className="row">
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                                    <label htmlFor="" className="form-label">Book Title</label>
                                    <input type="text" className="form-control" />

                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                    <button className="btn btn-success">Delete</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


</center>
    </div>
  )
}

export default DeleteBook