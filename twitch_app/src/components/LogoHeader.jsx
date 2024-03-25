import React from "react"

const LogoHeader = () => {
    return (
        <>
        <div className='hidden md:flex flex-col justify-between mr-10 lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg'>
                <div className="flex items-center justify-start space-x-3">
                    <span className="bg-black rounded-full w-8 h-8"></span>
                    {/* TODO: Have this send to landing or analytics page */}
                    <a href="#" className="font-medium text-xl text-white">Our Logo</a>
                </div>
        </div>
        </>
    )
}

export default LogoHeader