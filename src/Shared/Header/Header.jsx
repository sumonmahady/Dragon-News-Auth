import moment from 'moment';
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <div className='text-center py-10'>
          <img className='mx-auto mb-4' src={logo}/>
          <p className='text-2xl mb-3'>Journalism Without Fear or Favour</p>
          <p className="text-2xl">{moment().format("dddd, MMMM Do YYYY, h:mm: a")}</p>
        </div>
    );
};

export default Header;