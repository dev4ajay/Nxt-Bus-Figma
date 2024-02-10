import React from 'react'
import Rectangle from '../Rectangle/Rectangle'

function HomeBanner() {
    return (<>
        <section  className="home-banner d-flex align-items-center mb-5 ">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 d-flex flex-column justify-content-center pt-4 pt-lg-0  aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                        <h2 className='banner-heading group-h2' >Charter With Us <br/>
                            For An Adventure-<br/>
                            Filled Journey</h2>
                        <p className='banner-text mt-2 p-2 Align-justify'>Luctus nisi pharetra mollis aliquet iaculis tempus<br/>
                            potenti. Dictumst vestibulum luctus eget sit sagittis et.</p>
                            <div className='more_button mt-3 '>
    <button className='Get_btn' >Get Started</button>
</div>
                    </div>

                    <div className="col-lg-7 justify-content-end order-1 order-lg-2 hero-img aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
                        <img src="assets/images/busimage.png"  className="bus-image img-fluid animated" alt="hero-img" />
                        </div>
                </div>
            </div>
        </section>
        <Rectangle/>
        </>
    )
}

export default HomeBanner