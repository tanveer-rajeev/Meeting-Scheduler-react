import React, {useContext, useState} from 'react';
import {Form, FormControl} from "react-bootstrap";
import {BookingController} from "../Booking/BookingController";
import {UserContext} from "../../App";
import './Room.css';

const Room = (props) => {
    const {id, handleSchedule} = props;
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [room, setRoom] = useState({
        bookingDate: new Date(),
        startTime: '',
        endTime: '',
        roomName: '',
    })
    console.log(id)
    const handleSubmit = (event) => {
        event.preventDefault();
        BookingController(id, room, JSON.stringify(loggedInUser.name))
            .then((response) => {
                 handleSchedule(false);
            })
        console.log("submit")
    }

    return (
        <div>
            <Form onSubmit={handleSubmit} className="room-section">

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

        </div>
    );
};

export default Room;