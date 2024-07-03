import React from 'react'

type Props = {
    name: string
}
export default function InfoSection({name} : Props) {
  return (
    <div>
      <h1>InfoSection</h1>
      <p>{name}</p>
    </div>
  )
}
