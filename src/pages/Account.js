import React, { useContext, useEffect } from 'react'
import { UserContext } from '../App'
import Footer from '../components/constants/Footer'
import Header from '../components/constants/Header'

const Account = () => {
    const [store, setStore] = useContext(UserContext)


    useEffect(() => {
        fetch(`http://localhost:8080/orders`)
            .then(res => res.json())
            .then(data => {
                console.log("user CART", data)

                const userOrderedItems = data.filter(item => item.orderInfo.email === store.user.email)
                console.log(userOrderedItems)

                // if (data.length) {

                //     setStore({ ...store, userCart: data[0].cartItems })
                // }
            })
    }, [store.user?.email])

    console.log(store.user)
    return (<>
        <Header cart={store.cart} />
        <div>
            <h4>User: {store.user?.name}</h4>
            <h4>Email:{store.user?.email}</h4>
        </div>

        <div style={{ height: '550px', marginTop: '50px' }}>
            <h3>Ordered Items:</h3>
            {
                store.userCart?.map(item =>
                    <div key={item.name} className="row align-items-center mx-5 my-2 items-div rounded"
                        style={{ border: '1px solid rgb(205, 209, 210)' }}>
                        <div className="col-1">
                            <img src={item.img} className="img-fluid" alt="" />
                        </div>
                        <div className="col-8">
                            <h4>{item.name}</h4>
                        </div>
                    </div>
                )
            }
            {
                !store.userCart?.length && <h3> You did not order any item!</h3>
            }
        </div>
        <Footer />
    </>
    )
}

export default Account