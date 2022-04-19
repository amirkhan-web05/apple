import React from 'react'
import { useParams } from 'react-router-dom'

export const DetailsPage:React.FC = () => {
  const {id, cartId} = useParams()

  return (
    <div>
      <h1>Details</h1>
      <p>{id}</p>
      <h3>{cartId}</h3>
    </div>
  )
}
