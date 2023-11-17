import logo from './logo.svg';
import './App.css';
import React, { useState, useRef } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { FaPlay, FaPause } from 'react-icons/fa';

const spanStyle = {
  padding: '20px',
  background: '#efefef',
  color: '#000000',
  top: "0px"
}

const divStyle = {
  // position: 'absolute',
  top: '50%',
  left: '50%',
  // transform: 'translate(-80%, 0%)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '600px',
  // width: '1200px',
  textAlign: "center",
  borderRadius: '150px 0px 150px 0px',
}
const slideImages = [
  {
    url: 'https://reading-time.co.kr/resources/img/main/vis1.jpg',
    caption: 'Slide 1'
  },
  {
    url: 'https://reading-time.co.kr/resources/img/main/vis2.jpg',
    caption: 'Slide 2'
  },
  {
    url: 'https://reading-time.co.kr/resources/img/main/vis4_210906.jpg',
    caption: 'Slide 3'
  },
];
const customPrevArrow = (
  <div style={{ 
    position: 'absolute',
    top: '100%',
    left: '42%',
    transform: 'translateY(-50%)', // Center the button vertically
    cursor: 'pointer',
    background: 'white',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px', // Adjust the font size as needed
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', // Add a subtle box shadow
  }}>
    &lt;
  </div>
);
const customNextArrow = (
  <div style={{ 
    position: 'absolute',
    top: '100%',
    right: '42%',
    transform: 'translateY(-50%)', // Center the button vertically
    cursor: 'pointer',
    background: 'white',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px', // Adjust the font size as needed
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', // Add a subtle box shadow
  }}>
    {/* Your custom next arrow content */}
    &gt;
  </div>
);
const playButtonStyle = {
  position: 'absolute',
  bottom: '20px',
  left: '50%',
  transform: 'translateX(-50%)',
  background: 'white',
  borderRadius: '50%',
  width: '50px',
  height: '50px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '24px', // Adjust the font size as needed
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)', // Add a subtle box shadow
  top: "57%"
};
const menuBarStyle = {
  position: 'fix',
  top: '0',
  width: '100%',
  height: '100px', // Adjust the height of the menu bar as needed
  background: '#fff', // Adjust the background color as needed
  color: '#fff', // Adjust the text color as needed
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: '100', // Set a higher z-index to ensure the menu is above the slides
};

function App() {
  const [isPlaying, setIsPlaying] = useState(true);
  // const [isHovered, handleHover] = useState(true);
  const [isHovered, setHovered] = useState(false);

  const handleHover = (value) => {
    setHovered(value);
  };

  const slideRef = useRef();

  const handlePlayPauseClick = () => {
    setIsPlaying(!isPlaying);
    if (slideRef.current) {
      // If transitioning from paused to play, start from the current slide
      if (!isPlaying) {
        slideRef.current.goTo(slideRef.current.state?.currentSlide);
      }
    }
  };
  return (
    <div style={{ position: 'relative', height: '1250px' }}>
      <div style={{ textAlign: "center", margin: "auto" }}>

        <div className="menu-bar" style={menuBarStyle}>
          <div  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: "1200px"}}>
            <img src="https://reading-time.co.kr/themes/readingtime/img/header-logo.png" alt="Your Image" style={{ height: '40px' }} />
            <div className="menu-items">
              <p className="menu-item" >리딩타임이란</p>
             
              {/* <div className="sub-menu">
                <p>Sub-Menu Item 1</p>
                <p>Sub-Menu Item 2</p>
                <p>Sub-Menu Item 2</p>
                <p>Sub-Menu Item 2</p>
                <p>Sub-Menu Item 2</p>
              </div> */}
            
              <p className="menu-item" >수업후기</p>
              <p className="menu-item" >무료체험 신청</p>
              <p className="menu-item" >이용권 구매</p>
              <p className="menu-item" >고객센터</p>
            </div>
          </div>
        </div>

        <div className="slide-container" style={{height: "750px"}}>
          <div style={playButtonStyle} onClick={handlePlayPauseClick}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </div>
          <Slide
            style={{width: "1200px"}}
            ref={slideRef}
            prevArrow={customPrevArrow}
            nextArrow={customNextArrow}
            autoplay={isPlaying}
            duration={3000} 
            transitionDuration={500} // Set the transition duration between slides
            indicators={false} // Disable indicators
          // arrows={false} // Disable default arrows
          >
          {slideImages.map((slideImage, index)=> (
              <div key={index}>
                <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
                  <span style={spanStyle}>{slideImage.caption}</span>
                  <span style={spanStyle}>{slideImage.caption}</span>
                </div>
              </div>
            ))} 
          </Slide>
        </div>

        <div className="slide-container" style={{}}>
          <div style={{alignItems: 'center', display:"flex", justifyContent: "flex-start" }}>
            <div style={{ width: "1200px" }}>
              <img src="https://reading-time.co.kr/resources/img/main/why1.png" alt="Your Image" style={{ borderRadius: '150px 0px 150px 0px',height: "200px",width: "400px"  }} />
            </div>
            <div style={{ width: "1200px", marginLeft: "20%" }}>
              <p style={{  marginRight: "20%" }}>외국어 학습에 있어 책 읽기는 필수입니다.
                    특히 어린 아이일수록 언어 습득이 빠르기 때문에 영어를 전부 익히지 않았더라도
                    그림을 통해 내용을 유추함으로써 Reading Comprehension Skill을 향상시킬 수 있습니다.

                    단순 말하기 보다 다양한 표현과 구조를 습득할 수 있는
                    독서야말로 영어 학습에 있어 최고의 방법 중 하나입니다.

                    (Moeller & Meyer, 1995)</p>
            </div>
          </div>
        </div>

        <div className="slide-container" style={{}}>
          <div style={{ display: "flex", alignItems: 'center', justifyContent: "flex-start" }}>
            <div style={{ width: "1200px", marginRight: "20%" }}>
              <p style={{ marginLeft: "20%" }}>리딩타임은 미국/캐나다 공교육에서 사용하는 라즈키즈,에픽 도서를 활용하고 있으며,
그 중에서 학습에 적합한 내용만 엄선하였습니다.
독서전문선생님과 책 읽기부터 토론까지 하며 자연스럽게 영어와 친해지는 경험을 해보세요!.</p>
            </div>
            <div style={{ width: "1200px" }}>
              <img src="https://reading-time.co.kr/resources/img/main/why2.png" alt="Your Image" style={{ borderRadius: '150px 0px 150px 0px', height: "200px", width: "400px" }} />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default App;
