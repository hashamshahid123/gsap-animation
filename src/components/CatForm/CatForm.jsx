import React from 'react'
import './CatForm.css'

const CatForm = () => {
  return (
    <div className='container'>
        <div className='cat-form'>
        <div className='row'>
            <div className='col-lg-6'>
                <div className='form-input'>
                <div className='flex-input'>
                    <input type="text" placeholder='Full Name'/>
                    <input type="text" placeholder='Company'/>
                </div>
                <input type="email" placeholder='Email'/>
                <input type="number" placeholder='WhatsApp Number'/>
                <textarea name="" placeholder='Hy Dokmeh,  can you help me creat a creative bad ass website' id="" cols="70" rows="10" style={{marginLeft: '2rem', marginTop: '2rem'}}></textarea>
                </div>
            </div>
            <div className='col-lg-6'>
                <img src="https://hidokmeh.com/media/2023/12/gif-cat.webp" className='cat-img' alt="" />
            </div>
        </div>
        </div>
    </div>
  )
}

export default CatForm