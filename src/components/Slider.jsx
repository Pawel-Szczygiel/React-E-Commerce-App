import { useState, useEffect } from 'react';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import styled from 'styled-components';
import{ sliderItems } from '../data';



const Container = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 100vh;
    overflow: hidden;
`;

const Arrow = styled.div`
    position:absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    left: ${props => props.direction === 'left' && '10px'};
    right: ${props => props.direction === 'right' && '10px'};
    background-color: #d3d1d1;
    border-radius: 50%;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    transition: all 1.5s ease;
    transform:translateX(${props => props.slideIndex * -100}vw);
`;




const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height:  100vh ;
    background-color: #${props => props.bg};
    `;

const ImgContainer = styled.div`
    flex-grow: 1;
    `;

const Image = styled.img`
    width: 100%;
    height: 500px;
    object-fit: cover;
    `;

const InfoContainer = styled.div`
    flex-grow: 1;
    padding: 50px;
`; 

const Title = styled.h1`
    text-transform: uppercase;
    font-size: 70px;
    `;

const Desc = styled.p`
    text-transform: uppercase;
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
    `;

const Button = styled.button`
    text-transform: uppercase;
    letter-spacing: 2px;
    border-radius: 5px;
    padding: 10px;
    font-size: 20px;
    background: transparent;
    cursor: pointer;
    box-shadow: 1px 3px 6px rgba(0,0,0,.5);
    transition: all .5s ease;

    &:hover {
    transform: translateY(-7px);
    box-shadow: 1px 10px 12px 2px rgba(0,0,0,.2);
}
`;



const Slider = () => {
    
    const [slideIndex, setslideIndex] = useState(0);

    const handleClick = direction => {
        
        switch (direction) {
            case 'left':
                setslideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length -1);
                break;
            case 'right':
                setslideIndex(slideIndex < sliderItems.length -1 ? slideIndex + 1 : 0);
                break;    
            default:
                break;
        }
    };

  


    return ( 
        
        <Container>
            <Arrow direction='left' onClick={() => handleClick('left')}>
                <ArrowLeftOutlined style={{fontSize:'40px'}}/>
            </Arrow>
            <Wrapper slideIndex={slideIndex} >
                {sliderItems.map(item => {
                    const {title, desc, img, bg, id} = item;
                    return  ( 
                    <Slide key={id} bg={bg}>
                        <ImgContainer>
                            <Image src={img}/>
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{title}</Title>
                            <Desc>{desc}</Desc>
                            <Button>show now</Button>
                        </InfoContainer>
                    </Slide>
                    )
                })}
               
            </Wrapper>
            <Arrow direction='right' onClick={() => handleClick('right')}>
                <ArrowRightOutlined style={{fontSize:'40px'}}/>
            </Arrow>
        </Container>
      
     );
}
 
export default Slider;