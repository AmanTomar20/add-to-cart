import {useSelector} from 'react-redux'
import {FaShoppingCart} from 'react-icons/fa'
const Header =()=>{
    const result = useSelector((state)=>state.cartData);
    return(
        <div className="header">
            <div className="bg-slate-600 flex mr-auto px-12 py-3">
                <div className='text-white bg-amber-600 rounded-full w-6 h-6 flex justify-center align-center absolute right-16 top-2'>{result.length}</div>
                <FaShoppingCart className='ml-auto' size={32} color={'white'}/>
            </div>
        </div>
    )
}

export default Header;