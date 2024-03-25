import Graph from '../assets/graph.png'

const GraphCardMain = () => {
    return (
        <div className="bg-[#F6F6FB] rounded-xl p-12">
            <div className="flex flex-row items-center justify-between pb-2">
                <h1 className="text-lg font-bold">Total visits</h1>
                <h1 className="text-3xl font-bold text-[#7166F9]">42,43M</h1>
            </div>
            <div className='bg-slate-200 w-full h-0.5 my-2'></div>
            <img src={Graph} alt="graph" className="" />
        </div>
    )
}

export default GraphCardMain
