import styled from 'styled-components';
import { popularProducts } from '../data'; 
import Product from './Product';

const Container = styled.div`
      display: flex;
      justify-content: space-evenly;
      flex-wrap: wrap;
      padding: 20px;
`;

const Products = () => {
    return ( 
        <Container>
            {popularProducts.map(item => (
                <Product key={item.id} {...item} />
            ))}
        </Container> 
    );
}
 
export default Products;