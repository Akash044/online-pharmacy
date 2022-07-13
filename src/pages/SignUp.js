import React, { useContext, useState } from 'react'
import { UserContext } from '../App'
import Footer from '../components/constants/Footer'
import Header from '../components/constants/Header'
import Swal from 'sweetalert2'

const SignUp = () => {

    const [store, setStore] = useContext(UserContext)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [agree, setAgree] = useState(false)



    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(firstName, lastName, email, password, agree)
        const newSignUp = {
            name: firstName + " " + lastName,
            email: email,
            password: password,
            agree: agree,

        }
        fetch("http://localhost:8080/sign-up", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newSignUp)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data) {
                    Swal.fire({
                        icon: 'success',
                        title: "Successfully Registered!",
                        text: "Done!",
                        footer: '<h4>Press the login button to login</h4>'
                    })
                    // history.replace("/home");
                }
            })

    }
    return (
        <>
            <Header cart={store.cart} />
            <section className="container-fluid justify-content-center">
                <div className="container-fluid justify-content-center" style={{ paddingBottom: '40px', paddingTop: '80px' }}>
                    <h1 style={{ textAlign: 'center' }}>Create a FREE account</h1>
                    <a href="" className="d-block" style={{ color: 'rgb(28, 28, 160)', textAlign: 'center' }}>*Terms and
                        conditions</a>
                    <br />
                    <hr style={{ width: '40%', margin: 'auto' }} />
                </div>
                {/* <!-- main form starts --> */}
                <form onSubmit={handleSubmit} className="form container-fluid justify-content-center" style={{ width: '40%', padding: '40px' }}>
                    {/* <!-- First name, last name  --> */}
                    <div className="row g-3">
                        <div className="col ">
                            <input type="text" className="form-control" placeholder="First name" aria-label="First name" required onChange={(event) => setFirstName(event.target.value)} />
                        </div>
                        <div className="col">
                            <input type="text" className="form-control" placeholder="Last name" aria-label="Last name" required onChange={(event) => setLastName(event.target.value)} />
                        </div>
                    </div>
                    {/* <!-- email password --> */}
                    <div className="row my-1 g-3 align-items-center">
                        <div className="col-12">
                            <input type="email" className="form-control" placeholder="Email" aria-label="Email address" required onChange={(event) => setEmail(event.target.value)} />
                        </div>
                        <div className="col-auto">
                            <input type="password" id="inputPassword6" className="form-control" placeholder="Password"
                                aria-describedby="passwordHelpInline" required onChange={(event) => setPassword(event.target.value)} />
                        </div>
                        <div className="col-auto">
                            <span id="passwordHelpInline" className="form-text">
                                Must be 8-20 characters long.
                            </span>
                        </div>
                    </div>

                    <br />
                    {/* <!-- Form check and submit button  --> */}
                    <div className="col-12">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required onChange={(event) => setAgree(event.target.checked)} />
                            <label className="form-check-label" for="invalidCheck2">
                                Agree to terms and conditions
                            </label>
                        </div>
                    </div>
                    <div className="col-12 my-3">

                        <button className="btn btn-primary" type="submit"> Submit</button>

                    </div>
                </form>
            </section>
            <Footer />
        </>
    )
}

export default SignUp