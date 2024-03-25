import Info from '../assets/info.png'
import TabButton from './tab_button'

const BodyHeader = () => {
    return (
        <div className="flex justify-between items-center mt-12">
            <div className="flex flex-row items-center">
                <h1 className="text-3xl font-bold">Project statistic</h1>
                <img src={Info} alt="info" className="w-8 h-8 ml-4" />
            </div>
            <div className="flex items-center">
                <TabButton selected={true} text="30 days" />
                <TabButton selected={false} text="90 days" />
                <TabButton selected={false} text="6 months" />
                <TabButton selected={false} text="12 months" />
            </div>
        </div>
    )
}

export default BodyHeader