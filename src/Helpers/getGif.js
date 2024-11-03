


export const getGifs=async(category)=>{
    const gifUrl=`https://api.giphy.com/v1/gifs/search?api_key=g2qNyeA2DXmJjcUCQ7Wg8d7A5uTXmUDf&q=${category}&limit=10`;
    const resp = await fetch(gifUrl);
    const {data} = await resp.json();

        const gifs = data.map(img =>({
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url,
        }
        ));
        console.log(gifs);
        return gifs;
    }