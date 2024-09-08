'use client'
import React from 'react'
import axios from 'axios'


const Categories = async() => {
    const {data} = await axios.get('https://api.escuelajs.co/api/v1/categories')
    console.log(data)
    // const categories = data
  return (
    <div>Categories</div>
  )
}

export default Categories