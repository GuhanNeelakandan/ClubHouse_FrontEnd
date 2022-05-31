import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';

function CreateRoom() {
    const navigate = useNavigate();
    let formik = useFormik({
        initialValues: {
            name: "",
        },
        validate: (values) => {
            const errors = {}
            if (!values.name) {
                errors.name = "Requried";
            } else if (values.name.length > 15) {
                errors.name = "must be 15 characters or less"
            }
            return errors;
        },
        onSubmit: async (values) => {
            try {
                await axios.post('https://clubhouse-signin.herokuapp.com/createRoom', values,{
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
                    <span style={{ color: "red" }}>*{formik.errors.name}</span>
                    <input type="text" class="form-control col-sm-12 look" name="name" value={formik.values.name} onChange={formik.handleChange} placeholder='Room Name'/>
                    <div className="mt-4">
                        <input type="submit" className="btn btn-primary mb-4" value="Create Room" disabled={Object.keys(formik.errors).length !== 0} />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CreateRoom