import { CiSearch, CiCalendar } from "react-icons/ci"; // Ensure these imports are correct

function HomePage() {
    return (
        <div className="flex flex-col items-center p-4">
            {/* Welcome content */}
            <div className="text-4xl font-serif mb-4 mt-20">Good afternoon, Brian</div>
            
            {/* Main portion start here */}
            <div className="bg-white border shadow-md p-10 mt-10 rounded-md w-full max-w-5xl">
                {/* 1st portion of main */}
                <div className="text-xl font-semibold mb-6">Flights</div>
                
                {/* 2nd portion of main */}
                <div className="flex space-x-4 mb-6">
                    <div className="relative flex-1">
                        <CiSearch className="absolute left-3 top-3 text-gray-400" />
                        <input 
                            type="text" 
                            placeholder="Where from?" 
                            className="border rounded-md pl-10 pr-3 py-2 w-full" 
                        />
                    </div>
                    <div className="relative flex-1">
                        <CiSearch className="absolute left-3 top-3 text-gray-400" />
                        <input 
                            type="text" 
                            placeholder="Where to?" 
                            className="border rounded-md pl-10 pr-3 py-2 w-full" 
                        />
                    </div>
                    <div className="relative flex-1">
                        <CiCalendar className="absolute left-3 top-3 text-gray-400" />
                        <input 
                            type="text" 
                            placeholder="Departure" 
                            className="border rounded-md pl-10 pr-3 py-2 w-full" 
                        />
                    </div>
                    <div className="relative flex-1">
                        <CiCalendar className="absolute left-3 top-3 text-gray-400" />
                        <input 
                            type="text" 
                            placeholder="Return" 
                            className="border rounded-md pl-10 pr-3 py-2 w-full" 
                        />
                    </div>
                </div>
                
                {/* Button Section */}
                <div className="flex justify-end">
                    <button className="bg-green-950 text-white py-3 px-14 mt-4 rounded-lg flex items-center">
                        <CiSearch className="mr-2" />
                        Search Flights
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
