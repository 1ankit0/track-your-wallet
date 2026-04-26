import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div className='flex-1 h-screen'>
            <div className='flex flex-col justify-start h-full bg-blue-500'>
                <div className="">
                    <p>Navbar</p>
                </div>

                <div className="flex flex-col gap-3">
                    <div className="">
                        <Link to="/dashboard">Dashboard</Link>
                    </div>
                    <div className="">
                        <Link to="/expenses">Expenses</Link>
                    </div>
                    <div className="">
                       <Link to="/dashboard">Categories</Link>
                    </div>
                    <div className="">
                       <Link to="/recurring">Recurring Expenses</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Navbar