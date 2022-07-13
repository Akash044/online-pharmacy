import React, { useContext } from 'react'
import { UserContext } from '../App'
import Footer from '../components/constants/Footer'
import Header from '../components/constants/Header'
import Loading from '../components/constants/Loading'
import HomeBanner from '../components/HomePage/HomeBanner'

const HomePage = () => {
    const [store, setStore] = useContext(UserContext)
    return (
        <>
            <Header cart={store.cart} />
            <HomeBanner />
            {/* <Loading /> */}
            <Footer />
        </>
    )
}

export default HomePage