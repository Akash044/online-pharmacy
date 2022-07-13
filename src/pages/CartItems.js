import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../App'
import Footer from '../components/constants/Footer'
import Header from '../components/constants/Header'

const CartItems = () => {
    const [store, setStore] = useContext(UserContext)
    return (<>
        <Header cart={store.cart} />
        <div style={{ height: '600px', marginTop: '50px' }}>
            {
                store.cart?.map(item =>
                    <div key={item.name} className="row align-items-center mx-5 my-2 items-div rounded"
                        style={{ border: '1px solid rgb(205, 209, 210)' }}>
                        {/* <div className="col-1 m-0 justify-content-center">
                            <div className="form-check pl-5">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">

                                </label>
                            </div>
                        </div> */}
                        <div className="col-1">
                            <img src={item.img} className="img-fluid" alt="" />
                        </div>
                        <div className="col-8">
                            <h4>{item.name}</h4>
                        </div>
                    </div>)
            }
            <div className="row align-items-center justify-content-center" style={{ marginInline: "50px" }}>
                <Link to="/checkout"><button className="btn btn-primary mb-4 mx-auto">Checkout</button></Link>
            </div>

        </div>

        <Footer />
    </>
    )
}

export default CartItems