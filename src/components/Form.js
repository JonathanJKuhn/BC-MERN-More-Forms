import React, {useState} from 'react'

const Form = () => {
    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [conPass, setConPass] = useState('')

    return (
        <div>
            <form>
                <div>
                    <label htmlFor="fname">First Name: </label>
                    <input type="text" name="fname" onChange={(e) => setFname(e.target.value)} />
                    {
                        !fname
                        ? ''
                        : fname.length < 2
                            ? <p>First Name must be at least 2 characters</p>
                            : ''
                            
                    }
                </div>
                <div>
                    <label htmlFor="lname">Last Name: </label>
                    <input type="text" name="lname" onChange={(e) => setLname(e.target.value)} />
                    {
                        !lname
                        ? ''
                        : lname.length < 2
                            ? <p>Last Name must be at least 2 characters</p>
                            : ''
                            
                    }
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" onChange={(e) => setEmail(e.target.value)} />
                    {
                        !email
                        ? ''
                        : email.length < 2
                            ? <p>Email must be at least 2 characters</p>
                            : ''
                            
                    }
                </div>
                <div>
                    <label htmlFor="pass">Password: </label>
                    <input type="password" name="pass" onChange={(e) => setPass(e.target.value)} />
                    {
                        !pass
                        ? ''
                        : pass.length < 2
                            ? <p>Password must be at least 8 characters</p>
                            : ''
                            
                    }
                </div>
                <div>
                    <label htmlFor="conPass">Confirm Password: </label>
                    <input type="password" name="conPass" onChange={(e) => setConPass(e.target.value)} />
                    {
                        !conPass
                        ? ''
                        : conPass !== pass
                            ? <p>Passwords must match</p>
                            : ''
                            
                    }
                </div>
            </form>
            <div>
                <p>Your Form Data</p>
                <p>First Name:    {fname}</p>
                <p>Last Name:    {lname}</p>
                <p>Email:    {email}</p>
                <p>Password:    {pass}</p>
                <p>Confirm Password:    {conPass}</p>
            </div>
        </div>
    )
}

export default Form