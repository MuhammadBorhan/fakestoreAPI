import { Card } from 'react-bootstrap';
import Reactmodal from '../reactmodal/Reactmodal';

const Product = (props) => {
    const { image, category, price, description } = props.product;
    return (
        <div className="col-md-4">
            <Card className='text-center p-2'>
                <Card.Img className='w-50 mx-auto' variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{category}</Card.Title>
                    <Card.Title>{price} $</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <div className='d-flex align-items-center justify-content-center'>
                        <button onClick={props.setcount} className='btn btn-success m-2 fw-bold'>Add to Cart</button>
                        <Reactmodal details={props.product}></Reactmodal>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Product;