import React, { useContext, useState } from 'react'
import { UserContext } from '../App'
import EachCategory from '../components/CategoriesPage/EachCategory'
import Footer from '../components/constants/Footer'
import Header from '../components/constants/Header'
import '../styles/style.css'
import '../styles/style2.css'

const Categories = () => {
    const [store, setStore] = useContext(UserContext)
    const [categories, setCategories] = useState([
        {
            image: 'https://i.postimg.cc/jj7Bm2CB/pic3.jpg',
            name: "Capsules"
        },
        {
            image: 'https://i.postimg.cc/9Qtxskht/pic4.png',
            name: "Tablets"
        },
        {
            image: 'https://i.postimg.cc/RZst31Qx/pic5.jpg',
            name: "Vitamins"
        },
        {
            image: 'https://i.postimg.cc/DzGz21xg/pic6.webp',
            name: "Ointments"
        },
        {
            image: 'https://i.postimg.cc/bYmqf6zP/pic7.jpg',
            name: "Syrups"
        },
        {
            image: 'https://i.postimg.cc/xCtVYCV5/pic8.jpg',
            name: "Calciums"
        },
    ])
    return (
        <>
            <Header cart={store.cart} />
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