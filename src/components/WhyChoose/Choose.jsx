import React from 'react'
import Work from '../Works/Work'
import { GoArrowUpRight } from "react-icons/go";
function Choose() {
  return (
    <>
    <section className='choose'>
        <div className='container' >
            <div className='row'>
                <div className='col-lg-8  mt-2 mb-3'>
              
      

        <h6  className=' group-h6 mt-2' >WHY CHOOSE US</h6>
        <h2 className='  group-h2 ' >Riding with us, your<br/> 
satisfaction is guaranteed!</h2>
<p className='text-white  p-1 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit</p>
<p className='text-white p-1 '>luctus nec ullamcorper
mattis, pulvinar dapibus leo.</p>
<div className='d-flex gap-4  mt-3 '>

  <div className='d-flex gap-1   '>
    <div>
<svg xmlns="http://www.w3.org/2000/svg" className='btn_choose' width="10" height="10" viewBox="0 0 26 26" fill="none">
  <path d="M21.6666 6.5L9.74998 18.4167L4.33331 13" stroke="#2C2E72" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
<div >
<h6 className='text-white fs-4 '>Safety & Security</h6>
    <p className='text-white '>Iaculis metus eleifend sit
.</p>
</div>
</div>
<div className='d-flex gap-1    '>
    <div>
<svg xmlns="http://www.w3.org/2000/svg" className='btn_choose' width="10" height="10" viewBox="0 0 26 26" fill="none">
  <path d="M21.6666 6.5L9.74998 18.4167L4.33331 13" stroke="#2C2E72" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
<div >
<h6 className='text-white fs-4 '>Safety & Security</h6>
    <p className='text-white '>Iaculis metus eleifend sit
.</p>
</div>
</div>
</div>
<div className='d-flex gap-4  mt-3'>

  <div className='d-flex gap-1  '>
    <div>
<svg xmlns="http://www.w3.org/2000/svg" className='btn_choose' width="26" height="26" viewBox="0 0 26 26" fill="none">
  <path d="M21.6666 6.5L9.74998 18.4167L4.33331 13" stroke="#2C2E72" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
<div >
<h6 className='text-white fs-4 '>Safety & Security</h6>
    <p className='text-white '>Iaculis metus eleifend sit</p>
</div>
</div>
<div className='d-flex gap-1    '>
    <div>
<svg xmlns="http://www.w3.org/2000/svg" className='btn_choose' width="26" height="26" viewBox="0 0 26 26" fill="none">
  <path d="M21.6666 6.5L9.74998 18.4167L4.33331 13" stroke="#2C2E72" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</div>
<div >
<h6 className='text-white fs-4 '>Safety & Security</h6>
    <p className='text-white '>Iaculis metus eleifend sit</p>
</div>
</div>
</div>


        
        
        </div>
        <div className='col-md-4  mt-5 mb-3 '>
       
        <div className="  p-3 border-line " style={{background:'#fff'}} >
                <p className='font-bold fs-5' style={{ color: "#181E76" }}>
              
                We Provide Best Bus For You
                </p>
                <p >
                  Finibus porta urna eget egestas amet nisi vel bibendum. Mi
                  litora dui scelerisque risus facilisi.
                </p>
                <div className=' d-flex '>
                  <p className="text-center more_btns d-flex  justify-content-start gap-2  mb-3">
                  View Our Bus  <GoArrowUpRight className='mt-1'/>
                  </p>
                
                  </div>
     
             
              </div>
        </div>
       
                </div>
            </div>

        
    </section>
    <Work/>
    </>
  )
}

export default Choose