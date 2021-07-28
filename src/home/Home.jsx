import Featured from '../components/featured/Featured'
import Navbar from '../components/navbar/Navbar'
import './home.scss'

const Home = () => {
    return (
        <div className="home">
            {/* <img src="https://picsum.photos/600" width="100%"alt=""/> */}
            {/* <img src="https://via.placeholder.com/600x600" width="100%"alt=""/> */}
            <Navbar />
            <Featured />
        </div>
    )
}

export default Home
