import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";


class CarouselComp extends Component {


    render() {
        return (
            // <div id='carouselMain' className='carousel slide' data-ride='carousel'>
            //     <ol className="carousel-indicators">
            //         <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
            //         <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            //         <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            //     </ol>

            //     <div className="carousel-inner">
            //         <div className="carousel-item active">
            //             <img src="https://picsum.photos/1135?random=1" alt="" />
            //         </div>
            //         <div className="carousel-item">
            //             <img src="https://picsum.photos/1135?random=11" alt="" />
            //         </div>
            //         <div className="carousel-item">
            //             <img src="https://picsum.photos/1135?random=111" alt="" />
            //         </div>
            //     </div>
            //     <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            //         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            //         <span className="sr-only">Previous</span>
            //     </a>
            //     <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            //         <span className="carousel-control-next-icon" aria-hidden="true"></span>
            //         <span className="sr-only">Next</span>
            //     </a>
            // </div>
            <>
                <Carousel indicators={true} data-bs-theme="white" interval={5000}>

                    <Carousel.Item>
                        <Carousel.Caption>
                            <h3 className='carousel-caption-a'>여러분의 경험과 함께하는 사이트 입니다.</h3>
                        </Carousel.Caption>
                        <img src="https://picsum.photos/1135?random=1" alt="" width={'100%'} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                            <h3 className='carousel-caption-a'>여러분의 이야기를 공유하십시오!</h3>
                        </Carousel.Caption>
                        <img src="https://picsum.photos/1135?random=11" alt="" width={'100%'} />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                            <h3 className='carousel-caption-a'>지금 바로 가입하세요.</h3>
                        </Carousel.Caption>
                        <img src="https://picsum.photos/1135?random=111" alt="" width={'100%'} />
                    </Carousel.Item>
                    
                </Carousel>

            </>
        );
    }
}

export default CarouselComp;