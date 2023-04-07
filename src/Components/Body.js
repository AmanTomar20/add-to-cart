import { addToCart, emptyCart, removeToCart } from '../redux/action';
import { useDispatch } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';

function Main() {
  const dispatch = useDispatch();
  const product = {
    name: 'i Phone',
    category: 'mobile',
    price: 10000,
    color: 'red'
  }
  return (
    <div className='flex flex-col gap-16 w-full h-screen justify-center'>
      <div className='flex justify-center'>
        <Button className='w-48' variant="primary" onClick={() => dispatch(addToCart(product))}>Add To Cart</Button>
      </div>
      <div className='flex justify-center'>
        <Button className='w-48' variant="secondary" onClick={() => dispatch(removeToCart(product.name))}>Remove from Cart</Button>
      </div>
      <div className='flex justify-center'>
        <Button className='w-48' variant="success" onClick={() => dispatch(emptyCart())}>Empty Cart</Button>
      </div>
    </div>
  );
}

export default Main;