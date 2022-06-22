import React, { useState } from 'react'
import EachCategory from '../components/CategoriesPage/EachCategory'
import Footer from '../components/constants/Footer'
import Header from '../components/constants/Header'
import '../styles/style.css'
import '../styles/style2.css'

const Categories = () => {
    const [categories, setCategories] = useState([
        {
            image: '../assets/images/pic3.jpg',
            name: "Capsules"
        },
        {
            image: '../assets/images/pic4.jpg',
            name: "Tablets"
        },
        {
            image: '../assets/images/pic5.jpg',
            name: "Vitamins"
        },
        {
            image: '../assets/images/pic6.jpg',
            name: "Ointment"
        },
        {
            image: '../assets/images/pic7.jpg',
            name: "Syrup"
        },
        {
            image: '../assets/images/pic8.jpg',
            name: "Calcium"
        },
    ])
    return (
        <>
        <Header />
            <main>
                <section className="my-5 container-fluid">
                    <div className="container-fluid">
                        <div className="container my-3">
                            <div className="row m-3 p-3">
                                {
                                    categories.map((category) => <EachCategory key={category.name} info={category} />)
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        <Footer />
        </>
    )
}

export default Categories