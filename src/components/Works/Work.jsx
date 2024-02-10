import React from 'react'
import Review from '../Reviews/Review'

function Work() {
  return (
    <>
  <section  className='mt-3 mb-4'>
    <div className='container'>
    <div className="d-flex align-items-center justify-content-center">
            <div>
              <h6 className="text-center  mb-3 heading-h5">HOW IT WORKS</h6>
              <h2 className=" text-center group-h">
              4 Steps To Booking Our Bus
              </h2>
              <p className="text-center p-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper <br/>
mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
          <div className=' main-box' >
        
            <div className=" mb-3 border-select p-2  box-sm mt-3 "  >
            
              <div className="d-flex   mb-2 mt-3 justify-content-center align-items-center">
                <span className='group-h6 fs-2'>1</span>
                </div>
                <p className="text-center fs-4">
                Select Your Bus
                </p>
                <p className="text-center">
                Iaculis metus eleifend sit <br/>
vivamus finibus dictumst<br/> 
himenaeos.
                </p>
              
              
            </div>
            <div className=" mb-3  mt-3 border-shadow p-2 box-sm "  >
          
              <div className="d-flex  mb-2 mt-3 justify-content-center align-items-center">
              <span className='group-h6 fs-2'> 2</span>
                </div> 
                <p  className="text-center fs-4">
                Booking & Confirm
                </p>
                <p className="text-center ">
                Iaculis metus eleifend sit vivam<br/>
us finibus dictumst <br/>
himenaeos.
                </p>
             
          
            </div>
            <div className=" mb-3  mt-3 border-shadow p-2 box-sm " >
         
              <div className="d-flex   mb-2 mt-3 justify-content-center align-items-center">
              <span className='group-h6 fs-2'> 3</span>
                </div>
                <p className="text-center fs-4">
                Booking Payment
                </p>
                <p className="text-center p-2 mb-3">
                Iaculis metus eleifend sit viva
mus finibus dictumst himena
eos.
                </p>
             
           
            </div>
            <div className="  mb-3 mt-3  border-shadow p-2 box-sm" > 
              <div className="d-flex  mb-2 mt-3 justify-content-center align-items-center">
              <span className='group-h6 fs-2'> 4</span>
                </div>
                <p className="text-center fs-4">
                Start Your Roadtrip
                </p>
                <p className="text-center p-2 mb-3">
                Iaculis metus eleifend sit viva
mus finibus dictumst himena
eos.
                </p>
          
              </div>
           
        
          </div>
    </div>

  </section>
  <Review/>
  </>
  )
}

export default Work