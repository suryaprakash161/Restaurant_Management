import React, { useState } from 'react';
import { TextField, Button } from '@material-ui/core';
import './RegisterForm.css';
import { useNavigate } from 'react-router-dom';
import signUpSchema from '../../Schema/signUpSchema';
import { useFormik } from 'formik';
import UserService from '../../Schema/API';
import Swal from 'sweetalert2';


const Form = () => {

    const [role, setRole] = useState("user"); 
    const onOptionChange = (e) => {
        setRole(e.target.value);
      };
      
    const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    
    
    }
     
    const { values, errors, handleChange, handleBlur, handleSubmit, touched } = useFormik({
        initialValues: initialState,
        validationSchema: signUpSchema,
        onSubmit: (values, action) => {
            console.log(values);
            eventRegister();
            action.resetForm();
        },
    })

  
    console.log(values," ",role);
    const eventRegister = async () => {
        values.role = role;
        try {
          const response = await UserService.saveUser(values);
          console.log(response);
          const target = "Error";
          const target1 = "Email Already Exists !!";
    
          if (response.data === target) { 
            throw target;
          } else if (response.data === target1) {
            throw target1;
          } else {
            let timerInterval;
            Swal.fire({
              title: "Registered",
              html: "Redirecting in <b></b> milliseconds.",
              timer: 1000,
              timerProgressBar: true,
              didOpen: () => {
                Swal.showLoading();
                const b = Swal.getHtmlContainer().querySelector("b");
                timerInterval = setInterval(() => {
                  b.textContent = Swal.getTimerLeft();
                }, 100);
              },
              willClose: () => {
                clearInterval(timerInterval);
              },
            }).then((result) => {
              
              if (result.dismiss === Swal.DismissReason.timer) {
                console.log("I was closed by the timer");
              }
            });
            setTimeout(() => {
              navigate("/LoginPage");
            }, 3000);
          }
        } catch (error) {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: `${error}`,
          });
          console.log(error);
        }
      };


    const navigate = useNavigate();
    return (
        <div className='whole'>
            <div>
                <div className="mob">
                   
                </div>
                {/* <div>
                    <img src='images/CLERA.png' className="logo" alt="a-logo" width="10%"></img>
                </div> */}
                <div className="para1">
                 
                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
              
                <div className="kl" style={{ width: "30%", margin: "80px" }}>
                    <form className="registration-form" onSubmit={handleSubmit}>
                        <title>USER REGISTRATION</title>
                        <h1>Sign-up</h1>
                        <TextField
                            label="First Name"
                            value={values.firstName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name='firstName'
                            required
                        />
                        {errors.firstName && touched.firstName ? <p>{errors.firstName}</p> : null}
                        <br />
                        <TextField
                            label="Last Name"
                            value={values.lastName}
                            onBlur={handleBlur}
                            onChange={handleChange}
                            name="lastName"
                            required
                        />
                        {errors.lastName && touched.lastName ? <p>{errors.lastName}</p> : null}
                        <br />
                       
                        
                        <TextField
                            label="Email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                        />
                        {errors.email && touched.email ? <p>{errors.email}</p> : null}
                        <br />
                        <TextField
                            label="Password"
                            name='password'
                            type="password"
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            // onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        {errors.password && touched.password ? <p>{errors.password}</p> : null}
                        <br />
                        
                        <Button
                        type='submit' 
                            style={{ marginLeft: "7px", borderRadius: "15px", color: "WHITE" }}
                            key="services"
                            color='primary'
                            variant='contained'
                            // onClick={() => navigate('/login')}

                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            REGISTER
                        </Button>

                    </form>

                </div >
                {/* <div className="merits">
                    <p>
                    Offer clients the convenience of a 24x7 Online booking portal.
                    </p>
                    <p>
                    Get additional business with a free Google listing.
                    </p>
                    <p>
                    Reduce no shows with automatic text/email reminders.
                    </p>
                    <p>
                    Accept credit cards anywhere with Square Payments.
                    </p>
                 </div> */}
            </div >
        </div>
    );
};

export default Form;