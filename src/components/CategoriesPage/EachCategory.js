import React from 'react'
import { Link, useParams } from "react-router-dom";

const EachCategory = (props) => {
    console.log(props)
    const { image, name } = props.info
    return (
        <div className="col-4 d-flex justify-content-center mb-2">
            <Link to={`/categories/${name}`} style={{ textDecoration: 'none', color: 'black' }}>
                <div className="card text-center" style={{ width: '18rem', height: '18rem' }}>
                    <img src={image} className="card-img-top" alt="..." style={{ height: '18rem' }} />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default EachCategory