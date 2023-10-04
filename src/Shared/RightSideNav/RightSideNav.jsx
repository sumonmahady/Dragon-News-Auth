import { FaGoogle,  FaLinkedin, FaFacebook, FaTwitter,FaInstagram} from 'react-icons/fa';

import qzone1 from '../../assets/qZone1.png'
import qzone2 from '../../assets/qZone2.png'
import qzone3 from '../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div className='p-4 '>
            <h2 className="text-3xl mb-3 text-center">Login With</h2>
            <button className="btn btn-outline w-full">
                <FaGoogle></FaGoogle>
                
                Google
            </button>
            <button className="btn btn-outline w-full mt-4">
                <FaLinkedin></FaLinkedin>
                
                Linkedin
            </button>

            <div>
            <h2 className="text-3xl mb-3 text-center mt-4">Find Us</h2>

            <a className='p-4 flex text-lg items-center border rounded-t-lg' href="">
                <FaFacebook className='mr-3'></FaFacebook>
                <p>Facebook</p>
            </a>
            <a className='p-4 flex text-lg items-center border-x' href="">
                <FaTwitter className='mr-3'></FaTwitter>
                <p>Twitter</p>
            </a>
            <a className='p-4 flex text-lg items-center border rounded-b-lg' href="">
               <FaInstagram className='mr-3'></FaInstagram>
                <p>Instagram</p>
            </a>
            </div>

            <div className='p-4'>
                <h2 className="text-3xl text-center mb-5">Q-Zone</h2>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />

            </div>
        </div>

         
       
    );
};

export default RightSideNav;