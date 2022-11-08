import { ShoppingCartOutlined, SearchOutlined, FavoriteBorderOutlined } from '@material-ui/icons';
import styled from 'styled-components';


const Container = styled.div`
    flex-grow: 1;
    margin: 5px;
    min-width: 250px;
    max-width: 370px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5fbfd;
    position: relative;
`;
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
   
`;
const Image = styled.img`
    height: 75%;
    z-index: 1;
`;
const Info = styled.div`
    width: 100%;
    height: 100%;
    position:absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0, 0.1);
    z-index: 2;
    opacity:0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: opacity .3s ease;

    &:hover {
        opacity: 1;
    }
`;
const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius:50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    cursor: pointer;
    transition: all .3s linear;
    
    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
  
`;



const Product = ({ img }) => {
    

    const zoomIn = () => {
        
    }

    return ( 
        <Container>
            <Circle/>
            <Image src={img}/>
            <Info>
                <Icon>
                    <ShoppingCartOutlined/>
                </Icon>
                <Icon onClick={zoomIn}>
                    <SearchOutlined />
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined/>
                </Icon>
            </Info>
        </Container>
     );
}
 
export default Product;