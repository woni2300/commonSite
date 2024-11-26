import React, { Component } from 'react';
import { BsArrowUp } from "react-icons/bs";





class Footer extends React.Component {






    render() {
        

        return (
            <div className='footer'>
                
                <section className='license'>
                    Bootstrap
                    Bootstrap 팀이 기여자 분들의 도움과 세상의 모든 사랑을 받아 디자인되고 빌드되었습니다.
                    Arumduri 기여자 분들의 도움을 받아 한국어로 번역되었습니다.
                    코드 라이선스는 MIT이며 문서 라이선스는 CC BY 3.0입니다.
                    현재 v5.3.3입니다.
                </section>
                <section className='license'>
                    <div className="navbar-nav">
                        <div>
                            Quick Menu
                        </div>
                        <div>
                            <a href='#about' >About</a>
                        </div>
                        <div>
                            <a href='#news' >News</a>
                        </div>
                        <div>
                            <a href='#contract' >Contract</a>
                        </div>
                    </div>
                </section>


            </div>
        );
    }
}

export default Footer;