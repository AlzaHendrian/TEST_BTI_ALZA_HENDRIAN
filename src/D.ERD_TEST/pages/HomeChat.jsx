const HomeChat = () => {
    return (
        <div className="grid grid-cols-2 bg-[#D8D8D8] p-4">
            <div className="ms-12 me-2 p-4 bg-white">
                <div className="grid grid-cols-2">
                    <p>Search</p>
                    <p className="bg-blue-500 text-white p-4">+</p>
                </div>
            </div>
            <div className="me-12 ms-2 p-4 bg-white">
                Chat
            </div>
        </div>
    )
}

export default HomeChat