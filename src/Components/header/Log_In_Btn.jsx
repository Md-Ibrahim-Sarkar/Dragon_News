import React from 'react'
import user from '../../assets/user.png'
function Log_In_Btn({className}) {
    return (
        <div className={`flex items-center space-x-2 ${className}`}>
            <img src={user} alt="" />
            <button className="bg-gray-800 text-white px-4 py-2 rounded">Login</button>
        </div>
    )
}

export default Log_In_Btn