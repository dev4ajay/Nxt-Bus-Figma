import React from 'react'
import Maskgroup from "../../assets/images/Maskgroup.jpg"
import Groupbus from '../GroupBus/Groupbus'
function Rectangle() {
  return (
    <>
    <section className='rectangle mt-4 mb-3'>
        <div className='container'>
            <div className='row'>
                <div className='col-lg-6 d-flex flex-column justify-content-center mb-3 mt-3'>
<h2 className='group-h' >A bus rental that's<br/> affordable and comfortable
</h2>
<p className='mt-2 Align-justify'>Letius quis dui at lectus congue natoque et adipiscing curabitur molestie. Mattis magnis mollis ultricies eros tortor vivamus venenatis. Mauris iaculis amet porta lobortis dictum cubilia et ex.</p>
<div className='d-flex justify-content-between'>
<div >
<h4 className='font-bold main-25 '  >25+</h4>
<h6 className='fs-5' style={{color: "#4E4E4E" , fontWeight:'500' }}>Bus Ready</h6>
<p>Sed nunc si consectetur convallis 
</p>

</div>
<div >
<h4 className='font-bold  main-25' >86%</h4>
<h6  className='fs-5' style={{color: "#4E4E4E" , fontWeight:'500'}}>Satisfied Customer</h6>
<p>Sed nunc si consectetur convallis 
</p>

</div>
</div>
                </div>

                <div className='col-lg-6 justify-content-end d-flex mb-5  mt-3'>
                <img src={Maskgroup} className="  animated" alt="heroimg" />
</div>
            </div>

        </div>

    </section>
    <Groupbus/>
    </>
  )
}

export default Rectangle