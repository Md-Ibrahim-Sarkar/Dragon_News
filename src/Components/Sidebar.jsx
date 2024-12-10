import sidebarImage from '../assets/sidebar 1.png'
import { MdOutlineDateRange } from "react-icons/md";
function Sidebar({ className }) {
    return (
        <div className={`${className}`}>
            <div className="flex flex-col p-4">
                <div className="w-full mb-4 md:mb-0">
                    <h2 className="mb-4 font-bold">All Category</h2>
                    <ul>
                        <li className="mb-2">
                            <button className="w-full px-4 py-2 text-left bg-gray-200 rounded">National News</button>
                        </li>
                        <li className="mb-2">
                            <button className="w-full px-4 py-2 text-left">Breaking News</button>
                        </li>
                        <li className="mb-2">
                            <button className="w-full px-4 py-2 text-left">Regular News</button>
                        </li>
                        <li className="mb-2">
                            <button className="w-full px-4 py-2 text-left">International News</button>
                        </li>
                        <li className="mb-2">
                            <button className="w-full px-4 py-2 text-left">Sports</button>
                        </li>
                        <li className="mb-2">
                            <button className="w-full px-4 py-2 text-left">Entertainment</button>
                        </li>
                        <li className="mb-2">
                            <button className="w-full px-4 py-2 text-left">Culture</button>
                        </li>
                        <li className="mb-2">
                            <button className="w-full px-4 py-2 text-left">Arts</button>
                        </li>
                        <li className="mb-2">
                            <button className="w-full px-4 py-2 text-left">All News</button>
                        </li>
                    </ul>
                </div>
                <div className="w-full ">
                    <div className="mb-4">
                        <img src={sidebarImage} alt="News item 1" className="object-cover w-full mb-2 rounded" />
                        <h3 className="font-bold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h3>
                        <div className="flex items-center text-sm text-gray-500">
                            <span>Sports</span>
                            <span className="mx-2">|</span>
                            <MdOutlineDateRange />
                            <span>Jan 4, 2022</span>
                        </div>
                    </div>
                    <div className="mb-4">
                        <img src={sidebarImage} alt="News item 1" className="object-cover w-full mb-2 rounded" />
                        <h3 className="font-bold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h3>
                        <div className="flex items-center text-sm text-gray-500">
                            <span>Sports</span>
                            <span className="mx-2">|</span>
                            <MdOutlineDateRange />
                            <span>Jan 4, 2022</span>
                        </div>
                    </div>
                    <div className="mb-4">
                        <img src={sidebarImage} alt="News item 1" className="object-cover w-full mb-2 rounded" />
                        <h3 className="font-bold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h3>
                        <div className="flex items-center text-sm text-gray-500">
                            <span>Sports</span>
                            <span className="mx-2">|</span>
                            <MdOutlineDateRange />
                            <span>Jan 4, 2022</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar