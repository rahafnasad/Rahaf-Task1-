import React from 'react'

export default function Product(props) {
  return (
    <>
    <div className="col-md-4">
        <div className="product mt-5 text-center">
            <h4 className='mb-2'>{props.name}</h4>
            <img src={props.photo} alt="" />
        </div>

    </div>
    </>
  )
}
