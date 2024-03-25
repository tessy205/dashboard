const TabButton = ({ selected, text }) => {
    return (
        selected ? 
        <button className="bg-[#7166F9] text-white px-6 py-4 rounded-full mr-4 font-bold">{text}</button> : <button className="bg-[#F6F6FB] text-[#4D4D4D] px-6 py-4 rounded-full mr-4 font-bold">{text}</button>

    )
}

export default TabButton
