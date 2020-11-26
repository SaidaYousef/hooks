import React from 'react'
import {moviesData} from '../MoviesData'


export default function Description() {
  
    return (
        <div>
            <h1>{moviesData.name}</h1>
            <h3>Description</h3>
            <p>{moviesData.description}</p>
            <video><iframe title="trailer" width="665" height="374" src={moviesData.trailer} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></video>
        </div>
    )
}
