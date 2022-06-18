
import React from 'react';
import  {useState} from 'react';
import {Button, Form,Modal} from 'react-bootstrap';
import './AddMovie.css';


function AddMovie( {movies, setMovies }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newMovie, setNewMovie] = useState({
        name:"",
        posterurl:"",
        description:"",
        rating:"",
    
    })

    const handleAdd=()=>{{setMovies([...movies,newMovie])};handleClose()}
            return (

                <>
                <div className="headerCard">
                  
                    <button className="button button-1"  style={{ marginTop:"10px"}} onClick={handleShow}>Add New Movie</button>
                </div>
                <hr style={{width:"100%"}}/>
                    <Modal show={show} onHide={handleClose} >
                        <Modal.Header closeButton style={{backgroundColor:"aqua"}}>
                            <Modal.Title>Add new movie</Modal.Title>
                        </Modal.Header>
                        <Modal.Body >
                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1" >
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control  type="text" placeholder="Movie name" onChange={(e)=>setNewMovie({...newMovie, name:e.target.value})} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Label>Movie poster</Form.Label>
                                    <Form.Control  type="text" placeholder="URL movie poster" onChange={(e)=>setNewMovie({...newMovie, posterurl:e.target.value})}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="Write some description of the movie" style={{maxHeight:"100%", minHeight:"100%",textDecoration:"none"}} onChange={(e)=>setNewMovie({...newMovie, description:e.target.value})}/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                    <Form.Label>rating</Form.Label>
                                    <Form.Control as="textarea" rows={3} placeholder="rating " onChange={(e)=>setNewMovie({...newMovie, rating:e.target.value})} />
                                </Form.Group>
                            
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose} style={{backgroundColor:"red"}}>
                            Close
                        </Button>
                        
                        <Button variant="primary" onClick={handleAdd} >
                            Add
                        </Button>
                        </Modal.Footer>
                    </Modal>
                    
                </>
            )
        }
       
    ;

    export default AddMovie;