import React from 'react'
import { Link ,useParams } from "react-router-dom";

const CategoryItems = () => {
    let params = useParams();
    console.log(params.id);
  return (
    <div>CategoryItems</div>
  )
}

export default CategoryItems