
import { Link } from 'react-router-dom';
import errorimg from '../assets/images/404/404.gif'
const Error = () => {
    return (
        <div className='w-4/5 m-auto justify-center flex flex-col text-center capitalize md:pt-10'>
            <h2 className='text-4xl'> this page is not found </h2>
            <img src={errorimg} alt="" />
            <Link className='btn btn-primary w-auto'>back to home</Link>
            
        </div>
    );
};

export default Error;