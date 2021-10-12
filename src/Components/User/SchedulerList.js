import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Converter} from "../Common/Converter";
import {Button} from "react-bootstrap";
import EditScheduler from "./EditScheduler";

const SchedulerList = ({booking}) => {
    const {id, startTime, endTime, bookingDate} = booking;
    const [room, setRoom] = useState('');
    const startTimeInt = parseInt(startTime.substr(0, 2));
    const endTimeInt = parseInt(endTime.substr(0, 2));
    const [modalShow, setModalShow] = useState(false);

    console.log()
    useEffect(() => {
        axios
            .get(`http://localhost:8080/booking/room/${id}`, {
                headers: {
                    "Pragma": sessionStorage.getItem('token')
                }
            })
            .then((res) => {
                setRoom(res.data)
            })
            .catch((err) => console.log(err));
    }, [id])

    return (
        <>
            <tr>
                <td>{room.roomName}</td>
                <td>{Converter(startTimeInt, startTime)}</td>
                <td>{Converter(endTimeInt, endTime)}</td>
                <td>{bookingDate}</td>
                <td><Button variant="secondary" size={"sm"} onClick={() => setModalShow(true)}>
                    Edit
                </Button>
                </td>
            </tr>
            {
                modalShow && <EditScheduler
                    id={id}
                    roomName={room.roomName}
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                />
            }

        </>
    );
};

export default SchedulerList;