import React, {useState}  from 'react'
import {Modal,Button} from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"


const AddMovie = ({addMovie}) => {

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

const [inputs, setInputs] = useState(
    {
name: "",
image: "",
rating: 1,
year:"",
}
);
const handleChange = (e) => {
    setInputs({...inputs, [e.target.name] : e.target.value})
    
}


return (
  <>
    <Button variant="primary" onClick={handleShow}>
      Add movie
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add movie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <label>title:</label>
          <input name="name" onChange={handleChange} value={inputs.name}></input>
          <br/>
          <label >image:</label>
          <input name="image" onChange={handleChange} value={inputs.image}></input>
          <br/>
          <label >rating:</label>
          <input name="rating" onChange={handleChange} value={inputs.rating}></input>
          <br/>
          <label >year:</label>
          <input name="year" onChange={handleChange} value={inputs.year}></input>
          

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => {addMovie(inputs);handleClose({
         name: "",
         image: "",
         rating: 1,
         year:"",   
        });}}>
          Add a movie
        </Button>
      </Modal.Footer>
    </Modal>
  </>
);        
    

}
export default AddMovie;