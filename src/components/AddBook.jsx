import React from 'react'
import NavBar from './NavBar'

const AddBook = () => {
  return (
    <div>
        <NavBar/>
<center><h1>Add Book</h1></center>
<br />
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

<div className="row g-3">
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

        <label htmlFor="" className="form-label">Book title</label>
        <input type="text" className="form-control" />

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

        <label htmlFor="" className="form-label">Category</label>
        <select className="form-control">
            <option className="Romance">Romance</option>
            <option className="Thriller">Thriller</option>
            <option className="History">History</option>
            <option className="Fiction">Fiction</option>
            <option className="Science">Science</option>
        </select>

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

        <label htmlFor="" className="form-labrl">Year Of Publishing</label>
        <input type="date" name="" id="" className="form-control" />

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

        <label htmlFor="" className="form-label">Author Name</label>
        <input type="text" className="form-control" />

    </div>
    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

        <label htmlFor="" className="form-label">Description</label>
        <textarea name="" id="" className="form-control"></textarea>

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

        <label htmlFor="" className="form-label">Distributor Name</label>
        <input type="text" className="form-control" />

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

        <label htmlFor="" className="form-label">Publisher Name</label>
        <input type="text" className="form-control" />

    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
        <label htmlFor="" className="form-label">Price</label>
        <input type="number" name="" id="" className="form-control" />
    </div>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

        <label htmlFor="" className="form-label">Edition</label>
        <input type="number" name="" id="" className="form-control" />

    </div>
    <center>
    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

        <button className="btn btn-success">Add Book</button>

    </div>
    </center>
</div>

        </div>
    </div>
</div>

    </div>
  )
}

export default AddBook