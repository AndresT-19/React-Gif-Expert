
import {useState,useEffect} from 'react';
import { getGifs } from '../Helpers/getGif';
import { GifItem } from './GifItem';


export const GifGrid = ({category}) => {

const [images, setImages] = useState([]);

useEffect(() => {
    getGifs(category)
    .then(newImages => setImages(newImages))
}, [])


  return (
    <div>
        <h3>{category}</h3>
        <div className ='card-grid'>{
          images.map((image) => (
            //<li key={id}> {title} </li>
            <GifItem 
              key={image.id} 
              {... image}
            />
          ))
          
          }
        </div> 
    </div>
  )
}
