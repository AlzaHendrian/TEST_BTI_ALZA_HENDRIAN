import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate()

    return (
        <>
        <div className="grid grid-cols-3 mt-5" >
            <button onClick={() => navigate('/responsive-web')} className="bg-blue-400 rounded-xl text-white me-3 ms-3 p-4" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}>A.CSS_TEST</button>
            <button onClick={() => navigate('/job')} className="bg-blue-400 rounded-xl text-white me-3 ms-3 p-4" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}>B.API_TEST</button>
            <button onClick={() => navigate('#')} className="bg-blue-400 rounded-xl text-white me-3 ms-3 p-4" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}>D.ERD_TEST</button>
        </div>
        <div className="bg-[#F6F4EB] p-5 mt-10 text-center ms-5 me-5 rounded-lg" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)' }}>
                <h1>Soal A.CSS TEST ada di dalam folder src</h1>
                <h1>Soal B.API TEST ada di dalam folder src</h1>
                <h1>Soal C.SQL TEST jawaban ada di dalam folder my-project</h1>
                <h1>Soal D.ERD TEST belum dikerjakan</h1>
                <h1>Soal E.ERD TEST jawaban ada di dalam folder src</h1>
                <h1>Soal F.Penjelasan jawaban ada di dalam folder my-project</h1>
                <h1>Soal G.Penjelasan jawaban ada di dalam folder my-project</h1>
        </div>
        </>
    )
}

export default Home