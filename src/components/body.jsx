import AppBar from "./appbar"
import BodyHeader from "./body_header"
import GraphCardMain from "./graph_card_main"
import ButtonsGrid from "./buttons_grid"
import BlueRect from "../assets/blue_rect.png"
import PurpleRext from "../assets/purple_rect.png"
import Stat from "../assets/stat.png"


const Body = () => {
    return (
        <div className="m-12 bg-[#FFFFFF] grow ">
            <AppBar />
            <BodyHeader />
            <div className="flex flex-col">
                <div className="flex flex-col xl:flex-row mt-12">
                    <GraphCardMain />
                    <ButtonsGrid />
                </div>
                <div className="flex flex-col xl:flex-row mt-12 gap-12">
                    <div className="flex flex-col bg-[#F6F6FB] rounded-xl p-12 grow">
                        <div className="flex flex-row items-center justify-between pb-2">
                            <h1 className="text-lg font-bold">Traffic Sources</h1>
                        </div>
                        <div className='bg-slate-200 w-full h-0.5 my-6'></div>
                        <div className="flex flex-row items-center">
                            <div className="flex flex-col grow">
                                <div className="bg-[#EFEFF8] rounded-full flex flex-row text-[#B2B2B3] text-sm px-6 py-3 justify-between">
                                    <p>Source</p>
                                    <p>Traffic Source %</p>
                                </div>
                                <div className="flex flex-row justify-between pr-16 mt-6">
                                    <div className="flex flex-row items-center gap-6">
                                        <img src={BlueRect} alt="info" className="w-4 h-4 ml-4" />
                                        <p>Direct</p>
                                    </div>
                                    <p>50</p>
                                </div>
                                <div className="flex flex-row justify-between pr-16 mt-6">
                                    <div className="flex flex-row items-center gap-6">
                                        <img src={PurpleRext} alt="info" className="w-4 h-4 ml-4" />
                                        <p>Search</p>
                                    </div>
                                    <p>50</p>
                                </div>
                            </div>
                            <img src={Stat} alt="info" className="mt-4 ml-4" />
                        </div>
                    </div>
                    <div className="flex flex-col bg-[#F6F6FB] rounded-xl p-12 grow">
                        <div className="flex flex-row items-center justify-between pb-2">
                            <h1 className="text-lg font-bold">Traffic Sources</h1>
                        </div>
                        <div className='bg-slate-200 w-full h-0.5 my-6'></div>
                        <div className="flex flex-row items-center">
                            <div className="flex flex-col grow">
                                <div className="bg-[#EFEFF8] rounded-full flex flex-row text-[#B2B2B3] text-sm px-6 py-3 justify-between">
                                    <p>Source</p>
                                    <p>Traffic Source %</p>
                                </div>
                                <div className="flex flex-row justify-between pr-16 mt-6">
                                    <div className="flex flex-row items-center gap-6">
                                        <img src={BlueRect} alt="info" className="w-4 h-4 ml-4" />
                                        <p>Direct</p>
                                    </div>
                                    <p>50</p>
                                </div>
                                <div className="flex flex-row justify-between pr-16 mt-6">
                                    <div className="flex flex-row items-center gap-6">
                                        <img src={PurpleRext} alt="info" className="w-4 h-4 ml-4" />
                                        <p>Search</p>
                                    </div>
                                    <p>50</p>
                                </div>
                            </div>
                            <img src={Stat} alt="info" className="mt-4 ml-4" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Body
