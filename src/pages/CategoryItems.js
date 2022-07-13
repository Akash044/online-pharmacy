import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import { UserContext } from '../App';
import Footer from '../components/constants/Footer';
import Header from '../components/constants/Header';

const items = [
  {
    category: 'Capsules',
    catItems: [
      {
        name: 'Amoxycillin Capsule',
        img: 'https://i.postimg.cc/Vsg5FdRk/amoxycillin-capsules.jpg'
      },
      {
        name: 'Dextroamphetamine Sulfate ER Capsule',
        img: 'https://i.postimg.cc/y8ZV2dF9/dextroamphetamine-sulfate-ER-capsule.jpg'
      },
      {
        name: 'Doxycycline',
        img: 'https://i.postimg.cc/nLVnr1yK/doxycycline.jpg'
      },
    ]
  },
  {
    category: 'Tablets',
    catItems: [
      {
        name: 'Acetaminophen',
        img: 'https://i.postimg.cc/dV6Kbyhh/acetaminophen.jpg'
      },
      {
        name: 'Napa',
        img: 'https://i.postimg.cc/SKKpkx9D/napa.jpg'
      },
      {
        name: 'Oradin',
        img: 'https://i.postimg.cc/tTK03dMM/Oradin.jpg'
      },
    ]
  },
  {
    category: 'Syrups',
    catItems: [
      {
        name: 'Citra-K',
        img: 'https://i.postimg.cc/sXcSSKxV/Citra-K.jpg'
      },
      {
        name: 'Basok',
        img: 'https://i.postimg.cc/FsKbbt0w/basok.jpg'
      },
      {
        name: 'Tusca Plus',
        img: 'https://i.postimg.cc/bJ3DdJVr/Tusca-Plus.jpg'
      },
    ]
  },
  {
    category: 'Vitamins',
    catItems: [
      {
        name: 'Calcitriol',
        img: 'https://i.postimg.cc/Y992nx82/calcitriol.jpg'
      },
      {
        name: 'Phytonadione',
        img: 'https://i.postimg.cc/NjkrZp8R/phytonadione.jpg'
      },
      {
        name: 'Pyridoxine',
        img: 'https://i.postimg.cc/KvnKgJHC/pyridoxine.jpg'
      },
    ]
  },
  {
    category: 'Ointments',
    catItems: [
      {
        name: 'Fusidic Acid Cream',
        img: 'https://i.postimg.cc/8CFNLCCs/Fusidic-Acid-Cream.jpg'
      },
      {
        name: 'Neodporin',
        img: 'https://i.postimg.cc/mr9Kb1D3/Neodporin.jpg'
      },
      {
        name: 'Terrasil',
        img: 'https://i.postimg.cc/wvVfvXdN/terrasil.jpg'
      },
    ]
  },
  {
    category: 'Calciums',
    catItems: [
      {
        name: 'Carbamide Forte Calcium',
        img: 'https://i.postimg.cc/Hsf2TZ7K/Carbamide-Forte-Calcium.jpg'
      },
      {
        name: 'HealthKart HK Vitals Calcium',
        img: 'https://i.postimg.cc/fbMYb6WH/Health-Kart-HK-Vitals-Calcium.jpg'
      },
      {
        name: 'Naturyz Calcium Plus',
        img: 'https://i.postimg.cc/HWrvH7hr/Naturyz-Calcium-Plus.jpg'
      },
    ]
  },
]


const CategoryItems = () => {
  let params = useParams();
  console.log(params.id);
  const [allItems, setAllItems] = useState(items)
  const [selectedItems, setSelectedItems] = useState([])
  const [cartItems, setCartItems] = useState([])
  const [store, setStore] = useContext(UserContext)

  useEffect(() => {
    const filteredItems = allItems.filter(item => item.category === params.id)
    setSelectedItems(filteredItems[0].catItems)
  }, [params.id])
  // console.log(selectedItems)




  const handleInput = (e, item) => {

    console.log(e.target.checked, item.name)
    if (e.target.checked) {
      setCartItems([...cartItems, item])
    }
    if (!e.target.checked) {
      const restItems = cartItems.filter(it => it.name !== item.name)
      setCartItems(restItems)
    }

  }
  console.log(cartItems)

  const handleAddCartBtn = () => {

    setStore({ cart: cartItems })
  }

  return (
    <>
      {/* <div>{params.id}</div> */}
      <Header cart={store.cart} />
      <main>
        <section className="my-5 container-fluid">
          <div className="container-fluid">
            <div className="p-3 mx-5">
              <h2>Available Now</h2>
            </div>
            {
              selectedItems?.map(item =>
                <div key={item.name} className="row align-items-center mx-5 my-2 items-div rounded"
                  style={{ border: '1px solid rgb(205, 209, 210)' }}>
                  <div className="col-1 m-0 justify-content-center">
                    <div className="form-check pl-5">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onClick={(e) => handleInput(e, item)} />
                      <label className="form-check-label" for="flexCheckDefault">

                      </label>
                    </div>
                  </div>
                  <div className="col-1">
                    <img src={item.img} className="img-fluid" alt="" />
                  </div>
                  <div className="col-8">
                    <h4>{item.name}</h4>
                  </div>
                </div>)
            }

          </div>
          <div className="my-5 container">
            <button type="button" className="btn btn-primary" onClick={handleAddCartBtn}>Add To Cart</button>
          </div>
        </section>
      </main>
      <Footer />
    </>

  )
}

export default CategoryItems