import {  useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import SubCategoryCard from "../../components/SubCategoryCard/SubCategoryCard";


const CategoryPage = () => {
    const {subcategory} = useParams()

    const [category, setCategory] = useState([])
  
  useEffect(() => {
    fetch(`http://localhost:5000/subcategoryProduct/${subcategory}`)
    .then(res => res.json())
    .then(data => {
        setCategory(data)
      console.log(data)
    })
  },[subcategory])
    return (
        <div>
            {category.length > 0 ? (
                <div>
                    {
                        category.map(item => <SubCategoryCard key={item._id} item={item}></SubCategoryCard>)
                    }
                </div>
            ) : (
                <>
                <div>
                <h3>Data Not Found</h3>
                </div>
                </>
            )}
        </div>
    );
};

export default CategoryPage;