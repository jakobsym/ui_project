const LoginSidebar = () => {
    return (
        <>
            <div className='hidden lg:flex flex-col justify-between bg-[#523c7c] mr-30 lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg'>
                <div className="flex items-center justify-start space-x-3">
                    <span className="bg-black rounded-full w-8 h-8"></span>
                    {/* TODO: Have this send to landing or analytics page */}
                    <a href="#" className="font-medium text-xl text-white">Our Logo</a>
                </div>
                <div className='space-y-5'>
                    <h1 className="lg:text-3xl xl:text-5xl xl:leading-snug font-extrabold">Create an account to download your analytics!</h1>
                    <p className="text-lg">Dont have an account?</p>
                    <button
                        className="inline-block flex-none px-4 py-3 border-2 rounded-lg font-medium border-black bg-black text-white">Create
                        account here</button>
                </div>
                <p className="font-medium">©2024 ui project</p>
            </div>
        </>
    );
}

export default LoginSidebar;