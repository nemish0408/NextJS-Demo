import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>Product List
        <Link href='products/1/reviews/1'><h1>Product 1</h1></Link>
        <Link href='products/2/reviews/1'><h1>Product 2</h1></Link>
        <Link href='products/3/reviews/1'><h1>Product 3</h1></Link>
    </div>
  )
}

export default page