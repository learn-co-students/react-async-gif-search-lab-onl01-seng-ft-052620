import React from 'react'

function GifList(props) {
    console.log(props)
    let gifArray = props.gifs.map((gifObj) => <li><img src={gifObj.images.original.url} key={gifObj.id} /></li>)
    // console.log("gif array: ", gifArray)
    return (
        <ul>
            {gifArray}
        </ul>
    )
}

export default GifList