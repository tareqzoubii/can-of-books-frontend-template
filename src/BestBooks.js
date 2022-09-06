import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button'; // for buttons
import Form from 'react-bootstrap/Form';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookArr: []
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
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label style={{textAlign:"center"}}>Book Name</Form.Label>
        <Form.Control type="text" name="title" placeholder="Book Name" style={{textAlign:"center"}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label >Book Description</Form.Label>
        <Form.Control type="text" name="description" placeholder="Book Description" style={{textAlign:"center"}}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Book Status</Form.Label>
        <Form.Control type="text" name="status"  placeholder="Book Status" style={{textAlign:"center"}}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        <Carousel>
          {this.state.bookArr.map((val) => {
            return (
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://cdn.pixabay.com/photo/2015/11/19/21/10/glasses-1052010_960_720.jpg"
                  alt="First slide"
                  width="75%"
                  height="400px"
                />
                <Carousel.Caption>
                  <h2>{val.title}</h2>
                  <p>{val.description}</p>
                  <p>{val.status}</p>
                  <button onClick={() => this.deleteBooks(val._id)}>
                    Delete Book
                  </button>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </>
    );
  }
}

export default BestBooks;
