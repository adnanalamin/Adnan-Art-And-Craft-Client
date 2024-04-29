import {  useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import SubCategoryCard from "../../components/SubCategoryCard/SubCategoryCard";


const CategoryPage = () => {
    const {subcategory} = useParams()

    const [category, setCategory] = useState([])
  
  useEffect(() => {
    fetch(`https://adnan-art-and-craft-server.vercel.app/subcategoryProduct/${subcategory}`)
    .then(res => res.json())
    .then(data => {
        setCategory(data)
      console.log(data)
    })
  },[subcategory])
    return (
        <div className="mt-4">
            {category.length > 0 ? (
                <div className="grid md:grid-cols-3">
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