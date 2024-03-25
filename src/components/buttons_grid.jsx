import GraphSmall from "../assets/graph_small.png"
import GreenIcon from "../assets/green_icon.png"
import CalendarMini from "../assets/calendar_mini.png"
import RedIcon from "../assets/red_icon.png"
import PersonMini from "../assets/person_mini.png"
import TimerMini from "../assets/timer_mini.png"
import Info from '../assets/info.png'

const ButtonsGrid = () => {
    return (
        <div className="flex flex-col grow gap-12">
                    <div className="flex flex-row justify-between pt-12 xl:pl-12 gap-12 grow">
                        <div class="bg-gradient-to-br from-[#E17CFD] via-[#4CD7F6] to-[#E17CFD] rounded-3xl p-6 flex flex-col w-full">
                            <div className="flex flex-row justify-between">
                                <img src={GraphSmall} alt="graph" className="w-6 h-6" />
                                <div className="flex flex-row items-center">
                                    <img src={GreenIcon} alt="green-icon" className="w-2 h-2" />
                                    <p className="text-white font-bold ml-2">23%</p>
                                </div>
                            </div>
                            <h1 className="text-white font-bold text-3xl mt-6">42.34%</h1>
                            <div className="flex flex-row mt-4">
                                <p className="text-white">Bounce Rate</p>
                                <p className="text-white font-bold ml-2">+23%</p>
                            </div>
                        </div>
                        <div class="rounded-3xl p-6  flex flex-col w-full bg-[#F6F6FB]">
                            <div className="flex flex-row justify-between">
                                <img src={CalendarMini} alt="graph" className="w-6 h-6" />
                            </div>
                            <h1 className="font-bold text-3xl mt-6">42.34%</h1>
                            <div className="flex flex-row mt-4 items-center">
                                <p>Pages per visit</p>
                                <img src={Info} alt="info" className="w-4 h-4 ml-4" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between xl:pl-12 gap-12 grow">
                        <div class="rounded-3xl p-6  flex flex-col w-full bg-[#F6F6FB]">
                            <div className="flex flex-row justify-between">
                                <img src={PersonMini} alt="graph" className="w-6 h-6" />
                                <div className="flex flex-row items-center">
                                    <img src={RedIcon} alt="green-icon" className="w-2 h-2" />
                                    <p className="font-bold ml-2">2.1%</p>
                                </div>
                            </div>
                            <h1 className="font-bold text-3xl mt-6">326.60K</h1>
                            <div className="flex flex-row mt-4">
                                <p>Total Monthly Visit</p>
                            </div>
                        </div>
                        <div class="rounded-3xl p-6  flex flex-col w-full bg-[#F6F6FB]">
                            <div className="flex flex-row justify-between">
                                <img src={TimerMini} alt="graph" className="w-6 h-6" />
                                <div className="flex flex-row items-center">
                                    <img src={RedIcon} alt="green-icon" className="w-2 h-2" />
                                    <p className="font-bold ml-2">2.4%</p>
                                </div>
                            </div>
                            <h1 className="font-bold text-3xl mt-6">00:03:27</h1>
                            <div className="flex flex-row mt-4 items-center">
                                <p>Avg. Visit Duration</p>
                            </div>
                        </div>
                    </div>
                </div>
    )
}

export default ButtonsGrid