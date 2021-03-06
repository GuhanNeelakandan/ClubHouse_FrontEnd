import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function SignUp() {
    let navigate = useNavigate()
    let formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
        },
        validate: (values) => {
            const errors = {}
            if (!values.username) {
                errors.username = "Required";
            }
            if (!values.email) {
                errors.email = "Email Missing";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = "Password  missing";
            }
            return errors;
        },
        onSubmit: async (values) => {
            try {
                let signupData = await axios.post('https://clubhouse-clone-rooms.herokuapp.com/room/signup', values);
                if (signupData.data) {
                    localStorage.setItem("club-app-user",JSON.stringify(signupData.data.user))
                    alert("Successfull")
                    navigate("/invite");
                  }
                else {
                    alert("Already email exist & please use another email id")
                }

            } catch (error) {
                console.log(error);
                alert('Something went wrong');
            }
        },
    })
    return (
        <div className="phone-container">
            <h1 className="mb-3">Register</h1>

            <form  onSubmit={formik.handleSubmit}>
                <div class="form-group">
                    <input type="name" class="form-control mb-3" name="username" placeholder="User Name" onChange={formik.handleChange} value={formik.values.username} />
                </div>
                <div class="form-group">
                    <input type="email" class="form-control mb-3" name="email" placeholder="Email" onChange={formik.handleChange} value={formik.values.email}/>
                </div>
                <div class="form-group">
                    <input type="password" class="form-control mb-3" name="password" placeholder="Create Password" onChange={formik.handleChange} value={formik.values.password} />
                </div>
                <input type="submit" class="form-control btn btn-primary btn-sm mb-3" value={"Signup"} />
                
            </form>
            <p>
                By entering your data, you're agreeing to our <span>Terms of Service and Privacy Policy</span>.Thanks!
            </p>
            <div>
                <Link to={"/"} className="btn btn-outline-primary btn-sm mt-3 rounded-circle"><i class="fa fa-chevron-left" aria-hidden="true"></i></Link>
            </div>
        </div>
    )
}

export default SignUp