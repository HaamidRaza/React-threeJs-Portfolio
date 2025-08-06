import React from 'react'
import Swal from 'sweetalert2'

const Footer = () => {
  return (
    <section className='c-space pt-7 mb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
        <div className='text-white-500 flex gap-2'>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target='_blank' className='hover:text-white-700'>
            <p>Terms & Conditions</p>
            </a>
            <p>|</p>
            <a href='assets/Privacy.webp' target='_blank' className='hover:text-white-700'>
            <p>Privacy Policy</p>
            </a>
        </div>
        <div className='flex gap-3'>
            <>
                <a href="https://github.com/HaamidRaza" target='_blank' className='social-icon hover:bg-black-100'>
                <img src="assets/github.svg" alt="github" className='w-1/2 h-1/2'/>
                </a>
            </>
            <a href="https://www.instagram.com/achahai309/" target='_blank' className='social-icon hover:bg-black-100'>
                
                <img src="assets/instagram.svg" alt="Insta" className='w-1/2 h-1/2'/>
            </a>
            <a href="https://www.linkedin.com/in/haamid-raza-shaikh-687468378/" target='_blank' className='social-icon hover:bg-black-100'>
                <img src="assets/linkedin.svg" alt="linkedIn" className='w-1/2 h-1/2'/>
            </a>
        </div>
        <p className='text-white-500'>Ⓒ 2025 Haamid, All rights reserved.</p>
    </section>
  )
}

export default Footer