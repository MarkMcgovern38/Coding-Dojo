import './App.css'
import { useState } from 'react'

function App() {
  const [personList, setPersonList] = useState([])
  const [firstName, setFirstName] = useState("")
  const [firstNameError, setFirstNameError] = useState("");

  const [lastName, setLastName] = useState("")
  const [lastNameError, setLastNameError] = useState("")

  const [email, setEmail] = useState("")
  const [emailError, setEmailError] = useState("")

  const [password, setPassword] = useState("")
  const [passwordError, setPasswordError] = useState("")

  const [confirmPassword, setConfirmPassword] = useState("")
  const [confirmPasswordError, setConfirmPasswordError] = useState("")

  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

  const submitHandler = (e)=>{
    e.preventDefault();

    setPersonList((prevPersonList)=>[...prevPersonList, {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      confirmPassword: confirmPassword
    }])

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");

    setHasBeenSubmitted(true);

  };

  const formMessage = () => {
    if (hasBeenSubmitted) {
      return "Thank you for submitting the form!";
    } else {
      return "Welcome, please submit the form";
    }
  };

  // Must be at least two characters long
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    if (e.target.value.length < 1) {
      setFirstNameError("First name is required!");
    } else if (e.target.value.length < 3) {
      setFirstNameError("First name must be 3 characters or longer!");
    } else {
      // an empty string is considered a "falsy" value
      setFirstNameError("");
    }
  }

  const handleLastName = (e) => {
    setLastName(e.target.value);
    if (e.target.value.length < 1) {
      setLastNameError("Last name is required!");
    } else if (e.target.value.length < 3) {
      setLastNameError("Last name must be 3 characters or longer!");
    } else {
      setLastNameError("");
    }
  }

  // Must be at least eight characters long
  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length < 9) {
      setEmailError("Email needs to be more than 8 characters!");
    } else {
      setEmailError("");
    }
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 9) {
      setPasswordError("Password needs to be more than 8 characters!");
    } else {
      setPasswordError("");
    }
  }

  //Confirm password must match password
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value !== password) {
      setConfirmPasswordError("Confirm password does not match!");
    } else {
      setConfirmPasswordError("");
    }
  }


  return (
    <>
      <div className='container'>
        {/* Title for submit form*/}
        <div className="row text-center">
          <h1> { formMessage() } </h1>
        </div>

        {/* First Name submit form*/}
        <form onSubmit={submitHandler}>
          <div className='row mt-4 '>
            <label htmlFor="formControlInput" className='bg-secondary col-1'>First Name:</label>
            <input value={firstName} onChange={(e)=>setFirstName(e.target.value), handleFirstName} id='firstName' type="text" placeholder="Please enter first name" className='col-11'></input>
            {
              firstNameError ?
                <p>{firstNameError}</p> :
                " "
            }
          </div>

          {/* Last Name submit form*/}
          <div className='row mt-4 '>
            <label htmlFor="formControlInput" className='col-1 bg-secondary'>Last Name:</label>
            <input value={lastName} onChange={(e) => setLastName(e.target.value), handleLastName} id='lastName' type="text" placeholder="Please enter last name" className='col-11'></input>
            {
              lastNameError ?
                <p>{lastNameError}</p> :
                " "
            }
          </div>

          {/* Email submit form*/}
          <div className='row mt-4 '>
            <label htmlFor="formControlInput" className='col-1 bg-secondary'>Email Address:</label>
            <input value={email} onChange={(e) => setEmail(e.target.value), handleEmail}  id='email' type="text" placeholder="Please enter email address" className='col-11'></input>
            {
              emailError ?
                <p>{emailError}</p> :
                " "
            }
          </div>

          {/* Password submit form*/}
          <div className='row mt-4 '>
            <label htmlFor="formControlInput" className='col-1 bg-secondary'>Password:</label>
            <input value={password} onChange={(e) => setPassword(e.target.value), handlePassword}  id='password' type="text" placeholder="Please enter password" className='col-11'></input>
            {
              passwordError ?
                <p>{passwordError}</p> :
                " "
            }
          </div>

          {/* Confirm password submit form*/}
          <div className='row mt-4 '>
            <label htmlFor="formControlInput" className='col-1 bg-secondary'>Confirm Password:</label>
            <input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value), handleConfirmPassword} id='confirmPassword' type="text" placeholder="Please confirm password" className='col-11'></input>
            {
              confirmPasswordError ?
                <p>{confirmPasswordError}</p> :
                " "
            }
          </div>
          <button className='text-center mt-4'>Submit</button>
        </form>

        <div className="row mt-5">
          <h1 className='text-center'>Users</h1>
        </div>
        <div className="row">
          {personList.map((person, index) => (
            <div key={index} className="col-12 mt-3">
              <p><strong>Name:</strong> {person.firstName} {person.lastName}</p>
              <p><strong>Email:</strong> {person.email}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
