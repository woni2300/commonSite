import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


class Header extends React.Component {

    render(): React.ReactNode {
        return (
            <div>
                <nav className="navbar">
                    <a href="/" className="navbar-brand"> <img src='https://picsum.photos/200/300?random=1' alt='logo' width={32} height={32} ></img>My Site</a>
                    <div className="navbar-nav">
                        <a className='' href="#home">HOME</a>
                        <a href="#about">ABOUT</a>
                        <a href="#news">NEWS</a>
                        <a href="#contact">CONTRACT</a>
                    </div>
                </nav>
            </div>
        )
    }
};

export default Header;