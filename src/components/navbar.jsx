import Logo from '../assets/logo.png'
import Home from '../assets/home.png'
import Opportunities from '../assets/opportunities.png'
import Competitors from '../assets/competitors.png'
import Briefs from '../assets/briefs.png'
import Saved from '../assets/saved.png'
import Settings from '../assets/settings.png'
import Help from '../assets/help.png'
import Logout from '../assets/logout.png'

import NavbarButton from './navbar_button'

const Navbar = () => {
    return (
        <div className="hidden xl:flex xl:flex-col bg-[#F6F6FB]" style={{height: "116vh"}}>
            {/* LOGO */}
            <div className='flex flex-row align-center items-center px-12 py-6'>
                <img src={Logo} alt="logo" className="w-20 h-20" />
                <h1 className="text-xl font-bold pt-3">Concured</h1>
            </div>

           <div className='mt-6 '>
                {/* Navbar Buttons */}
                <div>
                    <NavbarButton name='Overview' image={Home} selected={true}/>
                    <NavbarButton name='Opportunities' image={Opportunities} selected={false}/>
                    <NavbarButton name='Competitors' image={Competitors} selected={false}/>
                    <NavbarButton name='Briefs' image={Briefs} selected={false}/>
                    <NavbarButton name='Saved' image={Saved} selected={false}/>
                </div>

                <div className='mt-12'>
                    <NavbarButton name='Settings' image={Settings} selected={false}/>
                    <NavbarButton name='Help' image={Help} selected={false}/>
                    <NavbarButton name='Logout' image={Logout} selected={false}/>
                </div>
           </div>
        </div>
    )
}

export default Navbar