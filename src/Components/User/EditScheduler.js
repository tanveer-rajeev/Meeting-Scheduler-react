import React, {useState} from 'react';
import {Button, Form, FormControl, Modal} from "react-bootstrap";
import axios from "axios";

const EditScheduler = (props) => {
    const {id,roomName} = {...props};

    const [room, setRoom] = useState({
        bookingDate: new Date(),
        startTime: '',
        endTime: '',
        roomName: '',
    })

    const handleSubmit = () => {
        console.log(id,roomName)

        const bookingAPI = `http://localhost:8080/booking/${id}`
         axios.post(bookingAPI, {
            roomName: roomName,
            bookingDate: room.bookingDate,
            startTime: room.startTime,
            endTime: room.endTime
        }, {
            headers: {
                "Pragma": sessionStorage.getItem('token')
            }
        }).then((response) => {
            console.log(response.data);

        }).catch(err => {
            console.log(err.response.data);
        })

    }
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Edit Booking
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit} className="room-section">
                    {/*<legend className="p-2 ">Room</legend>*/}
                    {/*<select size="lg" className="mb-2"*/}
                    {/*        value={room.roomName}*/}
                    {/*        onChange={(e) => setRoom({...room, roomName: e.target.value})} id="rooms">*/}
                    {/*    <option value="Official">Official Meeting</option>*/}
                    {/*    <option value="Team">Team Meeting</option>*/}
                    {/*    <option value="Client">Client Meeting</option>*/}
                    {/*    <option value="Interview">Interview</option>*/}
                    {/*</select>*/}
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
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default EditScheduler;