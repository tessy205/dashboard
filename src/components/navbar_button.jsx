import PropTypes from 'prop-types';

const NavbarButton = ({ name, image, selected }) => {
    return (
        selected ?
        <div className='flex flex-row items-center gap-5 bg-[#DEDBFF] py-8 px-16'>
            <img src={image} alt={name} className="w-6 h-6" />
            <a href="" className='text-[#2B2F42]'>{name}</a>
        </div>
        : 
        <div className='flex flex-row items-center gap-5 py-8 px-16'>
            <img src={image} alt={name} className="w-6 h-6" />
            <a href="">{name}</a>
        </div>
    );
};

export default NavbarButton;