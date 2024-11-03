import { useState } from "react"

export const AddCategory =({onNewCategory}) =>{

    const [inputValue, setInputValue] = useState([])
    
    const OnInputChange = (event)=>{
        setInputValue(event.target.value);
    }

    const onSubmit=(event)=>{
        event.preventDefault();
        if (inputValue.length <=1) return;
        console.log(inputValue);
       // onNewCategory(categories => [inputValue,...categories]);
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return(
        <form onSubmit={(event)=> onSubmit(event) }>
            <input type ="text"
            placeholder = "Buscar gifs"
            value ={inputValue}
            onChange={event => OnInputChange(event)}
            />
        </form>
    )    
} 