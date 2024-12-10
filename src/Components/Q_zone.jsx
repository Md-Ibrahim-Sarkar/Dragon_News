import React from 'react'

function Q_zone() {
  return (
    <div className="bg-white p-4 mt-3 rounded-lg shadow-lg ">
    <h1 className="text-xl font-bold mb-4">Q-Zone</h1>
    <div className="space-y-6">
        <div className="flex flex-col items-center">
            <img src="https://placehold.co/300x200" alt="Child swimming in a pool" className="rounded-lg shadow-md" />
            <p className="mt-2 text-lg font-semibold">Swimming</p>
        </div>
        <div className="flex flex-col items-center">
            <img src="https://placehold.co/300x200" alt="Children in a classroom with a teacher" className="rounded-lg shadow-md" />
            <p className="mt-2 text-lg font-semibold">Class</p>
        </div>
        <div className="flex flex-col items-center">
            <img src="https://placehold.co/300x200" alt="Children playing in a playground" className="rounded-lg shadow-md" />
            <p className="mt-2 text-lg font-semibold">Play Ground</p>
        </div>
    </div>
</div>
  )
}

export default Q_zone