import axios from "axios";
import React, {useState} from "react";

export const BookingController = (id, {bookingDate, startTime, endTime, roomName}, name) => {
    const token = sessionStorage.getItem("token");
    const [errorMessage, setErrorMessage] = useState('');
    const header = {
        "pragma": token
    }
    const userName = name.slice(1, name.length - 1);

    const handleError =(err)=>{
        setErrorMessage(err.response.data);
    }

    console.log(userName)
    const bookingAPI = `http://localhost:8080/booking/userName/${userName}/roomId/${id}`
    return axios.post(bookingAPI, {
        bookingDate: bookingDate,
        startTime: startTime,
        endTime: endTime
    }, {
        headers: header
    }).then((response) => {
        console.log(response.data);

    }).catch(err => {

        return <div>{
                 errorMessage && <p>{errorMessage}</p>
              } </div>
    })

}
