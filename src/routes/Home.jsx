import Navbar from "../components/Navbar/Navbar"
import ImageAssets from "../UI/ImageAssets/ImageAssets"
import TextContent from "../UI/TextContent/TextContent"
import CardA from '../UI/CardA/CardA'
import CardB from '../UI/CardB/CardB'
import "./Home.scss"

const Home = () => {
    return (
        <div className='Home'>
            <Navbar />
            <TextContent/>
            <ImageAssets />
            <CardA />
            <CardB />
        </div>
    )
}

export default Home
