import React, {useState} from 'react';
import {Button, Card, Table} from "react-bootstrap";
import './RoomCard.css'
import BookedInfo from "./BookedInfo";
import Room from "./Room";

const RoomCard = ({room}) => {
    const {id, roomName, capacity, startTime, endTime, booking} = room
    const [schedule, setSchedule] = useState(false);

    const handleSchedule = () => {
        setSchedule(false);
    }

    return (
        <div className="m-3">

            <Card className=" w-100">
                <Card.Body>
                    <Card.Title>{roomName}</Card.Title>
                    <Card.Text>
                       This room for {capacity} person.
                    </Card.Text>
                    <Card.Text>

                        <Table striped bordered hover size="sm">
                            <thead>
                            <tr>
                                <th>Start Time</th>
                                <th>End Time</th>
                                <th>User</th>
                                <th>Department</th>
                                <th>Contact No.</th>
                                <th>Booking Date</th>
                            </tr>
                            </thead>
                            <tbody>
                            {booking.map((booking) => (
                                <BookedInfo {...booking} key={booking.id}/>
                            ))}
                            </tbody>
                        </Table>
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted  p-5">Room available for booking {startTime} am to {endTime} pm </small>

                    <Button onClick={() => setSchedule(true)}>Booking</Button>
                    {
                        schedule && <Room handleSchedule={handleSchedule} id={id}/>
                    }
                </Card.Footer>
            </Card>

        </div>
    );
};

export default RoomCard;