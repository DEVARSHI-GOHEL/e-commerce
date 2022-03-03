import React from 'react'

export const OrderSummery = ({ cart }) => {
    return (
        <>
            <div className="row">
                <div className="col-2" className='border-1 square border rounded pill mx-2 my-1'>
                    <div className="row">
                        <div className="col d-flex align-items-center" style={{ minHeight: '10vh' }}>
                            <img src={cart['Image']} alt="" style={{ width: '50px' }} />
                        </div>
                        <div className='col'>
                            <span className='d-flex align-items-center mx-5' style={{ minHeight: '10vh' }}>X</span>
                        </div>
                        <div className='col'>
                            <span className='d-flex align-items-center mx-5' style={{ minHeight: '10vh' }}>{cart.qty}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
