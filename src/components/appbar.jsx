import TeamIcon from '../assets/team_icon.png'
import DropdownIcon from '../assets/dropdown_icon.png'
import AddIcon from '../assets/add_icon.png'
import User from '../assets/user.png'

const AppBar = () => {
    return (
        <div className='flex flex-col gap-5'>
            <div className="flex flex-row justify-between">
                <div className="flex flex-row items-center">
                    <img src={TeamIcon} alt="team-icon" className="w-12 h-12" />
                    <h1 className="text-xl font-bold pl-3 mr-4 ">Boro team</h1>      
                    <div className='flex flex-row gap-4 items-center'>
                        <img src={DropdownIcon} alt="dropdown-icon" className="w-6 h-6" />
                        <img src={AddIcon} alt="add-icon" className="w-12 h-12" />
                    </div>             
                </div>
                <div className='flex flex-row items-center'>
                    <img src={User} alt="user" className="w-12 h-12" />
                    <p className='text-lg font-bold mx-5'>Zahra Usman</p>
                    <img src={DropdownIcon} alt="dropdown-icon" className="w-6 h-6" />

                </div>
            </div>
            <div className='bg-slate-200 w-full h-0.5 '></div>
        </div>
    )
}

export default AppBar