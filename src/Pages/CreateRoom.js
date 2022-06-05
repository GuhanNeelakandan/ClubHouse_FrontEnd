import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function CreateRoom() {
    const navigate = useNavigate();
    function fetchData() {
        if (!localStorage.getItem("myapptoken")) {
            navigate("/");
        }
    }
    useEffect(() => {
        fetchData()
    })
    let formik = useFormik({
        initialValues: {
            room: "",
        },
        validate: (values) => {
            const errors = {}
            if (!values.room) {
                errors.room = "Requried";
            } else if (values.room.length > 15) {
                errors.room = "must be 15 characters or less"
            }
            return errors;
        },
        onSubmit: async (values) => {
            try {
                await axios.post('https://clubhouse-clone-rooms.herokuapp.com/room/createRoom', values, {
                    headers: {
                        Authorization: window.localStorage.getItem('myapptoken'),
                    },
                });
                navigate('/room');
                alert("Successfully created")
            } catch (error) {
                console.log(error);
                alert('Something went wrong');
            }
        },
    });
    return (
        <div className='container projects'>
            <p>
                <h4 className='text-center pt-5'>Hey! buddy create your own room and share to your friends and enjoy the club!!!!!!!!!</h4>
            </p>
            <form onSubmit={formik.handleSubmit}>
                <div className="d-flex justify-content-between mt-4 create-room">
                    <span style={{ color: "red" }}>*{formik.errors.room}</span>
                    <input type="text" class="form-control col-sm-12 look" name="room" value={formik.values.room} onChange={formik.handleChange} placeholder='Room Name' />
                    <div className="mt-4">
                        <input type="submit" className="btn btn-primary mb-4" value="Create Room" disabled={Object.keys(formik.errors).length !== 0} />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateRoom