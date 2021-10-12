import React, {useState} from 'react';
import {Button, Form, FormControl, Modal} from "react-bootstrap";

const CreateRoom = ({modal}) => {
    const [modalShow, setModalShow] = useState(false);


    const openModal = () => {
        setModalShow(true);
    }
    const closeModal =()=>{
        setModalShow(false);
    }

    const [room, setRoom] = useState({
        bookingDate: new Date(),
        startTime: '',
        endTime: '',
        roomName: '',
    })

    const handleSubmit = () => {

    }

    return (
        <Modal
            show={()=>setModalShow(modal)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add New Room
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit} className="room-section">
                    <legend className="p-2 ">Room</legend>
                    <select size="lg" className="mb-2"
                            value={room.roomName}
                            onChange={(e) => setRoom({...room, roomName: e.target.value})} id="rooms">
                        <option value="Official">Official Meeting</option>
                        <option value="Team">Team Meeting</option>
                        <option value="Client">Client Meeting</option>
                        <option value="Interview">Interview</option>
                    </select>
                    <legend className="p-2 ">Booking Date</legend>
                    <br/>
                    <FormControl value={room.bookingDate}
                                 onChange={(e) => setRoom({...room, bookingDate: e.target.value})}
                                 className="p-2" type="date"
                                 placeholder="/ /"
                                 required/>
                    <br/>
                    <fieldset>
                        <legend className="p-2 "> Start Time</legend>
                        <FormControl className="p-2 " type="time" value={room.startTime}
                                     onChange={(e) => setRoom({...room, startTime: e.target.value})}/>
                    </fieldset>
                    <br/>
                    <fieldset>
                        <legend className="p-2 "> End Time</legend>
                        <FormControl className="p-2 " type="time" value={room.endTime}
                                     onChange={(e) => setRoom({...room, endTime: e.target.value})}/>
                    </fieldset>

                    <br/>
                    <FormControl type="submit"/>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={()=>setModalShow(false)}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateRoom;