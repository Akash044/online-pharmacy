import React from 'react'
import Footer from '../components/constants/Footer'
import Header from '../components/constants/Header'
import Loading from '../components/constants/Loading'
import HomeBanner from '../components/HomePage/HomeBanner'

function HomePage() {
    return (
        <>
            <Header />
            <HomeBanner />
            <Loading />
            <Footer />
        </>
    )
}

export default HomePage