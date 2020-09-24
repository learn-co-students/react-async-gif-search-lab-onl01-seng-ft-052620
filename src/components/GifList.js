import React from 'react'

function GifList(props) {
    let gifArray = props.gifs.map((gifObj) => <li key={gifObj.id}><img src={gifObj.images.original.url} /></li>)
    console.log("gif array: ", gifArray)
    return (
        <ul>
            {gifArray.slice(0,3)}
        </ul>
    )
}

export default GifList