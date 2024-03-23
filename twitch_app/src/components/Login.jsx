import React from 'react';

const Login = () => {
    return (
        <div className="flex flex-1 flex-col items-center justify-center px-10 relative">
            <div className="flex lg:hidden justify-between items-center w-full py-4">
                <div className="flex items-center justify-start space-x-3">
                    <span className="bg-black rounded-full w-6 h-6"></span>
                    <a href="#" className="font-medium text-lg">Brand</a>
                </div>
                <div className="flex items-center space-x-2">
                    <span>Not a member? </span>
                    <a href="#" className="underline font-medium text-[#070eff]">
                        Sign up now
                    </a>
                </div>
            </div>

            {/* login box */}
            <div className="flex flex-1 flex-col justify-center space-y-5 max-w-md ml-40">
                <div className="flex flex-col space-y-2 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#000000]">Sign in to your account</h2>
                    <p className="text-md md:text-xl text-[#000000]">Sign up or log in to use the application, no password required</p>
                </div>
                <div className="flex flex-col max-w-md space-y-5">
                    <input type="text" placeholder="Email"
                    
                        className="flex px-3 py-2 md:px-4 md:py-3 border-2 border-black rounded-lg font-medium placeholder:font-normal" />
                    <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">Sign-in</button>
                    <div className="flex justify-center items-center">
                        <span className="w-full border border-black"></span>
                        <span className="px-8 text-[#000000]">Or</span>
                        <span className="w-full border border-black"></span>
                    </div>
                    <button className="flex items-center justify-center flex-none px-3 py-2 md:px-4 md:py-3 border-2 rounded-lg font-medium border-black bg-black text-white">
                        <span>Sign in with Google</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Login;
