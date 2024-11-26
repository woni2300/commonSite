import React from 'react';
import './App.css';
import Header from './components/layout/Header';
import PageContainer from './components/layout/PageContainer';
import Footer from './components/layout/Footer';
import { BsArrowUp } from 'react-icons/bs';

interface AppState {
  showButton: boolean;
}
class App extends React.Component<{}, AppState> {
  private mainContainerRef: React.RefObject<HTMLDivElement>;

  constructor(props: {}) {
    super(props);
    this.state = {
      ...this.props,
      showButton: false
    }
    this.mainContainerRef = React.createRef();
  }

  componentDidMount() {
    // 스크롤 컨테이너에 이벤트 등록
    if (this.mainContainerRef.current) {
      this.mainContainerRef.current.addEventListener("scroll", this.handleScroll);
    }
  }

  componentWillUnmount() {
    // 스크롤 컨테이너에서 이벤트 제거
    if (this.mainContainerRef.current) {
      this.mainContainerRef.current.removeEventListener("scroll", this.handleScroll);
    }
  }

  handleScroll = (): void => {
    const scrollY = this.mainContainerRef.current?.scrollTop || 0; // 스크롤 컨테이너의 scrollTop 값
    this.setState({ showButton: scrollY > 200 });
  };

  scrollOnTop = (): void => {
    if (this.mainContainerRef.current) {
      this.mainContainerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  render() {
    return (
      <div className="App">
        <header>
          <Header />
        </header>
        <div className="main-content" ref={this.mainContainerRef}>
          <main>
            <PageContainer />
          </main>
          <footer>
            <Footer />
          </footer>
        </div>
        {this.state.showButton && <button type='button' className="btn btn-primary top-btn" onClick={this.scrollOnTop}><BsArrowUp /> </button>}
      </div>

    );
  };

}

export default App;
