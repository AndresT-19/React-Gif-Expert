import { useState } from "react"
import { AddCategory } from "./Component/AddCategory";
import { GifGrid } from "./Component/GifGrid";


export const GifExpertApp = () => {

const [categories, setCategories] = useState([]);

const onAddCategory =(newCategory)=>{
   if (categories.includes(newCategory)) return;
   setCategories([newCategory,...categories]);

}
    return(
        <>
        {/*titulo*/}
        <h1>GifExpertApp</h1>
        
        {/*Input*/}
        <AddCategory 
        
        //setCategories={setCategories} 
            onNewCategory={event => onAddCategory(event)}
        />
        {/*Listado de Gif*/}
         
        {
            categories.map((category) => 
                (
                <GifGrid 
                    key={category}
                    category={category}
                />
            ))   
        }   
        
        {/*Gif Item*/}

        </>

    )
}