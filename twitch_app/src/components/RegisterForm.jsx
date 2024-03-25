import React from "react"
import LogoHeader from "./LogoHeader";

{/*TODO: Entire page needs styling to fit general theme of app */}
const RegisterForm = () =>  {
    return (
    <>
        <LogoHeader /> 
        <div className="grid min-h-screen place-items-center">
            <div className="w-96 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
                <h1 className="text-xl font-semibold text-black">Welcome!</h1>
                <span className="font-normal text-black">Please fill in your information to create an account.</span>
                <form className="mt-6">
                    <div className="flex justify-between gap-3">
                        <span className="w-1/2">
                        <label for="firstname" className="block text-xs font-semibold text-gray-600 uppercase">Firstname</label>
                        <input id="firstname" type="text" name="firstname" placeholder="John" autocomplete="given-name" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                        </span>
                        <span className="w-1/2">
                        <label for="lastname" className="block text-xs font-semibold text-gray-600 uppercase">Lastname</label>
                        <input id="lastname" type="text" name="lastname" placeholder="Doe" autocomplete="family-name" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                        </span>
                    </div>
                    <label for="email" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">E-mail</label>
                    <input id="email" type="email" name="email" placeholder="john.doe@company.com" autocomplete="email" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                    <label for="password" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
                    <input id="password" type="password" name="password" placeholder="********" autocomplete="new-password" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                    <label for="password-confirm" className="block mt-2 text-xs font-semibold text-gray-600 uppercase">Confirm password</label>
                    <input id="password-confirm" type="password" name="password-confirm" placeholder="********" autocomplete="new-password" className="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                    <button type="submit" className="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
                            Sign up
                    </button>
                </form>
            </div>
        </div>
    </>
    )    
}

export default RegisterForm;