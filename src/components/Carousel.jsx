import React from 'react'
import carouselImg1 from '../images/download.jfif'
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBCarouselElement, MDBCarouselCaption } from 'mdb-react-ui-kit'

export const Carousel = () => {
    return (
        <>
            <MDBCarousel interval={5000} showIndicators dark fade>
                <MDBCarouselInner>
                    <MDBCarouselItem className='active bg-light bg' >
                        <img src={carouselImg1} style={{ width:'1000px',height: '437px', visibility:'50%' }} alt='...' />
                        <MDBCarouselCaption>
                            <div className="d-flex justify-content-end">
                                <h5 >Brand new Macbook pro</h5>
                            </div>
                            <div className="d-flex justify-content-end">
                                <div >With Apple silicon</div>
                            </div>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem>
                        <MDBCarouselElement src='https://mdbootstrap.com/img/new/slides/042.webp' style={{ width: '988px', height: '437px' }} alt='...' />
                        <MDBCarouselCaption>
                            <div className="d-flex justify-content-start align-items-center">
                                <h5>Instant Camera</h5>
                            </div>
                            <div className="d-flex justify-content-start align-items-center">
                                <p>To capture every moment of your life</p>
                            </div>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                    <MDBCarouselItem>
                        <MDBCarouselElement src='https://mdbootstrap.com/img/new/slides/043.webp' style={{ width: '988px', height: '437px' }} alt='...' />
                        <MDBCarouselCaption>
                            <h5>Fresh fruit juice</h5>
                            <p>To keep your health in your control</p>
                        </MDBCarouselCaption>
                    </MDBCarouselItem>
                </MDBCarouselInner>
            </MDBCarousel>
        </>
    )
}
