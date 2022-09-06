import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button'; // for buttons
import Form from 'react-bootstrap/Form';
import UpdateBooks from './UpdateBooks';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookArr: [],
      showForm: false,
      selectedBook: {}
    }
  }
  componentDidMount = () => {
    console.log(process.env.REACT_APP_URL)
    axios
    .get(`${process.env.REACT_APP_URL}getBooks`)
    .then(result =>{
      console.log(result.data);
      this.setState({
        bookArr : result.data
      })
    })
    .catch(err=>{
      console.log(err);
    }) 
  }

  addNewBook = (event) => {
    event.preventDefault();
    const obj = {
      title : event.target.title.value,
      description : event.target.description.value,
      status: event.target.status.value
    }
    axios
    .post(`${process.env.REACT_APP_URL}addNewBook`, obj)
    .then(result => {
      this.setState({
        bookArr : result.data
      })
    })
    .catch(err=>{
      console.log(err);
    })
  }
  
  deleteBooks = (id) => {
    axios
    .delete(`${process.env.REACT_APP_URL}deleteBooks/${id}`)
    .then(result => {
      console.log("---->", result.data);
      this.setState({
        bookArr : result.data
      })
    })
    .catch(err=>{
      console.log(err);
    })
  }

  openForm = (val) => {
    this.setState({
      showForm : true,
      selectedBook : val
    })
  }

  handleClose = () => {
    this.setState({
      showForm: false
    })
  }

  UpdateBook = (event) => {
    //event.preventDefault();
    // alert("HELLO!");
    let obj = {
      title : event.target.title.value,
      description : event.target.description.value,
      status: event.target.status.value
    }
    //console.log(obj);
    const id = this.state.selectedBook._id;
    //console.log(id);
    axios
    .put(`${process.env.REACT_APP_URL}updateBook/${id}`, obj)
    .then(result => {
      this.setState({
        bookArr: result.data
        //console.log(result.data);
      })
      this.handleClose();
    })
    .catch(err=>{
      console.log(err);
    })
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        {/* <form onSubmit={this.addNewBook}>
          <input type="text" name="title" placeholder="Book Name" />
          <input
            type="text"
            name="description"
            placeholder="Book Description"
          />
          <input type="text" name="status" placeholder="Book Status" />
          <button type="submit">Add</button>
        </form> */}
         <Form onSubmit={this.addNewBook} style={{textAlign:"center"}}>
          <div style={{display:"flex" , justifyContent:"space-around" , margin:"25px"}}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" name="title" placeholder="Book Name" style={{ textAlign: "center", margin: "auto", width: "auto" }}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" name="description" placeholder="Book Description" style={{textAlign:"center"}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" name="status"  placeholder="Book Status" style={{textAlign:"center"}}/>
      </Form.Group>
      </div>
      <Button variant="primary" type="submit" style={{padding:"10px 30px", marginBottom:"15px", backgroundColor:"black"}}>
        Submit
      </Button>
    </Form>
        <Carousel>
          {this.state.bookArr.map((val) => {
            return (
              <Carousel.Item style={{width:"100%" , alignItem:"center"}} >
                <img
                  className="d-block w-100"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Solid_black.svg/768px-Solid_black.svg.png"
                  alt="First slide"
                  width="75%"
                  height="350px"
                  
                />
                <Carousel.Caption>
                  <h2 style={{color:"white"}}>{val.title}</h2>
                  <p style={{color:"white"}}>{val.description}</p>
                  <p style={{color:"white"}}>{val.status}</p>
                  <button onClick={() => this.deleteBooks(val._id)}>
                    Delete Book
                  </button>
                  <button onClick={() => this.openForm(val)}> Update Book </button>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
        <UpdateBooks 
        show = {this.state.showForm}
        handleClose = {this.handleClose}
        UpdateBook = {this.UpdateBook}
        selectedBook = {this.state.selectedBook}
        />
      </>
    );
  }
}

export default BestBooks;
