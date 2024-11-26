import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselComp from '../carousel/CarouselComp';


interface PageContainerState {
    showButton: boolean;
  }
class PageContainer extends Component<{},PageContainerState> {
  

    constructor(props:{}) {
        super(props);
        this.state = {
          ...this.props,
          showButton: false
        };
     
      }


    render() {
        return (
            <div className="container-fluid">                
                
                <div className="row">
                    {/* 메인 콘텐츠 */}
                    <main className="col-md-12 bg-dimgrey p-3" >
                    
                        <section className="col-md-12 bg-dimgrey p-3">
                            <h2 className='' >My Contents #1 </h2>
                            <CarouselComp />
                        </section>
                        <section className="col-md-12 bg-dimgrey p-3">
                            <h2 className='' >My Contents #2 </h2>
                            <img src="https://picsum.photos/1135?random=2" alt="" width={'100%'}/>
                        </section>
                        <section className="col-md-12 bg-dimgrey p-3">
                            <h2 className='' >My Contents #3 </h2>
                            <img src="https://picsum.photos/1135?random=3" alt="" width={'100%'} />
                        </section>
                        <section className="col-md-12 bg-dimgrey p-3">
                            <h2 className='' >My Contents #4 </h2>
                            <img src="https://picsum.photos/1135?random=4" alt="" width={'100%'}/>
                        </section>
                        <section className="col-md-12 bg-dimgrey p-3">
                            <h2 className='' >My Contents #5 </h2>
                            <img src="https://picsum.photos/1135?random=5" alt="" width={'100%'}/>
                        </section>
                    </main>
                </div>
                
            </div>
        );
    }
}


export default PageContainer;