import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

class UpdateBooks extends React.Component {
    render(){
        return (
          <Modal show={this.props.show} onHide={this.props.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Update Book</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={this.props.UpdateBook}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Book Title</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="New Book Title"
                    name="title"
                    defaultValue={this.props.selectedBook.title}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Book Description</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="New Book Description"
                    name="description"
                    defaultValue={this.props.selectedBook.description}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Book Status</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="New Book Status"
                    name="status"
                    defaultValue={this.props.selectedBook.status}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Update the Book
                </Button>
              </Form>
            </Modal.Body>
          </Modal>
        );
    }
}
export default UpdateBooks;
