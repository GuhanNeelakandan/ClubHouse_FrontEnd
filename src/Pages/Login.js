import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
    let navigate = useNavigate()
    let formik = useFormik({
        initialValues: {
            username: '',
            password: ''
        },
        validate: (values) => {
            const errors = {}
            if (!values.username) {
                errors.username = "Email Missing";
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.username)) {
                errors.username = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = "Password  missing";
            }
            return errors;
        },
        onSubmit: async (values) => {
            try {
              let loginData = await axios.post('https://clubhouse-signin.herokuapp.com/login', values);
              window.localStorage.setItem('myapptoken', loginData.data.token);
              {loginData.data.message==="login successfully"? navigate('/chat'):alert("Does not match")}
            } catch (error) {
              console.log(error);
              alert('Something went wrong');
            }
          },
    })
    return (
        <div className="phone-container">
            <h1 className="mb-3">Login</h1>
            <form onSubmit={formik.handleSubmit}>
                <div class="form-group">
                    <span style={{ color: "red" }}>{formik.errors.username}</span>
                    <input type="email" class="form-control mb-3" name="username" placeholder="Enter email" onChange={formik.handleChange} value={formik.values.username} />
                </div>
                <div class="form-group">
                    <span style={{ color: "red" }}>{formik.errors.password}</span>
                    <input type="password" class="form-control mb-3" name="password" placeholder="Enter Password" onChange={formik.handleChange} value={formik.values.password} />
                </div>
                <input type="submit" class="form-control btn btn-primary btn-sm mb-3" value={"Login"} />
                
            </form>
            <p>
                By entering your data, you're agreeing to our <span>Terms of Service and Privacy Policy</span>.Thanks!
            </p>
            <p className='mt-4 fs-5'>
                username:test@gmail.com<br/>
                password:123456
            </p>
            <Link to={'/signup'}><input type="submit" class="form-control btn btn-primary btn-sm mt-3" value={"Signup"} /></Link>
            <div>
                <Link to={"/"} className="btn btn-outline-primary btn-sm mt-3 rounded-circle"><i class="fa fa-chevron-left" aria-hidden="true"></i></Link>
            </div>
        </div>
    )
}

export default Login