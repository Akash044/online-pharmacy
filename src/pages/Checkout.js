import React, { useContext, useState } from 'react'
import { UserContext } from '../App'
import Footer from '../components/constants/Footer'
import Header from '../components/constants/Header'
import Swal from 'sweetalert2'

const Checkout = (props) => {
    const [store, setStore] = useContext(UserContext);
    const [orderInfo, setOrderInfo] = useState({});
    const [isOnline, setIsOnline] = useState(false)
    console.log(props)
    const handleInputFields = (e) => {
        if (e.target.name != 'cashOn') {

            setOrderInfo({ ...orderInfo, [e.target.name]: e.target.value })
        }
        else {
            setOrderInfo({ ...orderInfo, [e.target.name]: true })
        }

        console.log(e.target.name, e.target.value)
        console.log(e.target.name, e.target.checked)

    }
    const handleCheckoutForm = (e) => {

        e.preventDefault()
        console.log(orderInfo, store.cart)
        fetch("http://localhost:8080/addOrder", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ orderInfo: orderInfo, cartItems: store.cart })
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                if (data) {
                    Swal.fire({
                        icon: 'success',
                        title: "Successfully placed order!",
                        text: "Done!",
                    })
                }
            })
    }
    return (<>
        <Header cart={store.cart} />
        <form onSubmit={handleCheckoutForm} className="input-group container mt-4">
            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">Username</span>
                <input type="text" name="username" className="form-control" placeholder="" aria-label="Username" aria-describedby="basic-addon1" required onChange={(e) => handleInputFields(e)} />
            </div>

            <div className="input-group mb-3">
                <span className="input-group-text">Email</span>
                <input type="text" name="email" className="form-control" placeholder="" aria-label="Recipient's email" aria-describedby="basic-addon2" required onChange={(e) => handleInputFields(e)} />

            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Mobile</span>
                <input type="text" name="mobile" className="form-control" placeholder="" aria-label="Recipient's mobile number" aria-describedby="basic-addon2" required onChange={(e) => handleInputFields(e)} />

            </div>


            <div className="input-group mb-3">
                <span className="input-group-text">Postal code</span>
                <input type="number" name="postalCode" className="form-control" placeholder="" aria-label="postalCode" required onChange={(e) => handleInputFields(e)} />

            </div>

            <div className="input-group">
                <span className="input-group-text">Enter shipping address in details</span>
                <textarea className="form-control" name="address" aria-label="With textarea" required onChange={(e) => handleInputFields(e)}></textarea>
            </div>
            <div className="input-group mt-4">
                <div className="form-check pl-5">
                    <input className="form-check-input" name="cashOn" type="checkbox" value="" id="flexCheckDefault" onClick={(e) => handleInputFields(e)} />
                    <label className="form-check-label" for="flexCheckDefault">
                        Cash on delivery
                    </label>
                </div>
            </div>
            <div className="input-group">
                <div className="form-check pl-5">
                    <input className="form-check-input" name="online" type="checkbox" value="" id="flexCheckDefault" onClick={() => setIsOnline(!isOnline)} />
                    <label className="form-check-label" for="flexCheckDefault">
                        Online payment
                    </label>
                </div>
            </div>
            {
                isOnline &&
                <>
                    <div className="input-group mt-2">
                        <span className="input-group-text">Enter Bkash Transaction Number</span>
                        <input type="text" name="trxID" className="form-control" placeholder="" aria-label="Username" required onChange={(e) => handleInputFields(e)} />
                    </div>
                    <div className="input-group mt-2">
                        <span className="input-group-text">Enter mobile Number</span>
                        <input type="number" name="bkashNo" className="form-control" placeholder="" aria-label="Username" required onChange={(e) => handleInputFields(e)} />
                    </div>
                </>
            }
            <button type="submit" className="btn btn-primary m-4">Proceed</button>
        </form>
        <Footer />
    </>
    )
}

export default Checkout