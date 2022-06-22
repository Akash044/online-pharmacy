import React from 'react'
import '../../styles/style.css'
import '../../styles/style2.css'
import { Link } from "react-router-dom";

function HomeBanner() {
    return (
        <main>
            <section>
                <div className="container-fluid p-0">
                    <div className="pharmacyimg">
                        <div className="pharmacytext">
                            <h1 style={{fontSize:"50px"}}>Online Medical Store</h1>
                        </div>
                        <Link to="/categories"><button className="btn" id="order-btn">Order Medicine now</button></Link>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default HomeBanner