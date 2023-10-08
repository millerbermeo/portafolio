import React from 'react'

function Float() {
    
    return (
        <>
         <div className="hidden lg:block absolute top-24 right-[8%] w-36 h-36 rounded-full transform translate-x-4 translate-y-4">
      <div className="w-full h-full bg-yellow-300 rounded-full opacity-70 animate-float-flash"></div>
    </div>
        </>
    )
}

export default Float
