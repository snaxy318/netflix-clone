import {Link} from "react-router-dom"

const SignUpPage = () => {
  return <div className='h-screen w-full hero-bg'>
    <header className="max-w-6xl mx-auto flex items-center justify-between p-4">

        <Link to={"/"}>
            <img src='/netflix-logo.png' alt='logo' className="w-52"/>
        </Link>
    </header>

    <div className="flex justify-center items-center mt-20 mx-3">
            <div className="w-full max-w-md p-8 space-y-6 bg-black/60 rounde-lg shadow-md">
                <h1 className="text-center text-white text-2xl font-bold mb-4">Sign Up</h1>

                <form className="space-y-4">
                    <div>
                        <label htmlFor="email" className="text-sm font-medium text-gray-300 block">
                            Email
                        </label>
                        <input 
                        type="email" 
                        className="w-full px-3 py-2 mt-1 border border-grey-700 rounded-md bg-transparent focus:outline-none focus:ring"
                        placeholder="you@example.com"
                        id="email"
                        />
                    </div>

                    <div>
                        <label htmlFor="username" className="text-sm font-medium text-gray-300 block">
                            Username
                        </label>
                        <input 
                        type="text" 
                        className="w-full px-3 py-2 mt-1 border border-grey-700 rounded-md bg-transparent focus:outline-none focus:ring"
                        placeholder="jhondoe"
                        id="username"
                        />
                    </div>
                        
                    <div>
                        <label htmlFor="password" className="text-sm font-medium text-gray-300 block">
                            Password
                        </label>
                        <input 
                        type="password" 
                        className="w-full px-3 py-2 mt-1 border border-grey-700 rounded-md bg-transparent text-gray-300 focus:outline-none focus:ring"
                        placeholder="*******"
                        id="username"
                        />
                    </div>

                    <div className="w-full py-2 mt-2 rounded-md bg-red-600 text-gray-300 text-center cursor-pointer hover:bg-red-700 px-">
                        Sign Up
                    </div>

                    <div className="text-center text-gray-400">
                        Already a member?{" "}
                        <Link to={"/login"} className="text-red-500 hover:underline">Sign in</Link>
                    </div>  
                </form>
            </div>

        </div>
  </div>
}

export default SignUpPage