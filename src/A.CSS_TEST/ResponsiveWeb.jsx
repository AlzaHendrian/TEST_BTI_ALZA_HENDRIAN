import React from "react"
import stars from '../assets/image/stars.png'
const ResponsiveWeb = () => {
    return (
        <>
            <div className="bg-gray-500 w-[100%] p-2 text-center">
                {/* child 1 */}
                <div className="bg-white px-2 pt-2 pb-4">
                    {/* child 2 */}
                    <div className="bg-black p-2">
                        {/* child 2 ke 1 */}
                        <div className="bg-blue-600">
                            1
                        </div>
                        <div className="grid grid-cols-1 xl:grid-cols-2 mt-2">
                            <div className=" bg-blue-600 xl:me-1">
                                2
                            </div>
                            <div className="bg-blue-600 mt-2 xl:ms-1 xl:mt-0">
                                3
                            </div>
                        </div>
                        <div className="block xl:grid grid-cols-2">
                            <div>
                                <div className="bg-blue-600 p-4 mt-2 xl:me-1">
                                    <div>
                                        <div className="bg-black p-4">
                                            <div className="bg-red-800 p-10">
                                                4
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 xl:me-1">
                                    <div className="bg-blue-600 p-4 mt-2 me-4">
                                        5
                                    </div>
                                    <div className="bg-blue-600 p-4 mt-2">
                                        6
                                    </div>
                                    <div className="bg-blue-600 p-4 mt-2 ms-4">
                                        7
                                    </div>
                                </div>  
                            </div>
                            <div className="bg-blue-600 p-2 mt-2 xl:ms-1">
                                <div className="bg-black p-2">
                                    <div className="bg-red-800 p-2">
                                        8
                                    </div>
                                </div>
                                <div className="bg-black p-2 mt-4">
                                    <div className="bg-red-800 p-2">
                                        9
                                    </div>
                                </div>
                                <div className="bg-black p-2 mt-4">
                                    <div className="bg-red-800 p-2">
                                        10
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden xl:block">
                        <div className="xl:flex items-center justify-between ms:hidden">
                            <div className="bg-black p-2 mt-12 w-[50%]">
                                <div className="bg-blue-600 grid grid-cols-2">
                                    <div>
                                        <div className="bg-red-700 p-10 me-32"></div>
                                        <div className="bg-white p-10 pt-[5rem] ms-20 me-24 mt-[-30px]"></div>
                                        <div className="mt-[-2rem] ms-[7.3rem]">
                                            <div className="bg-red-700 p-10"></div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="bg-red-700 p-10 ms-[15rem]" style={{marginRight: '-8rem'}}></div>
                                        <div className="bg-red-700 p-10 mt-20 ms-[30rem]" style={{marginRight: '-23rem'}}></div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-[-8rem]">
                                <img src={stars} alt="stars" width={100} />
                                <h2 className="text-red-600 font-bold transform rotate-12 mt-[-2rem] ms-[-2rem]">FIGHTING!!!</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ResponsiveWeb