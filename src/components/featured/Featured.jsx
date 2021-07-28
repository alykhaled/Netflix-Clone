import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import './featured.scss'

const Featured = () => {
    return (
        <div className="featured">
            {/*Get random movies title image in png*/}
            <img src="https://picsum.photos/600" width="100%"alt=""/>
            <div className="info">
                <img src="https://www.themoviedb.org/t/p/original/7dQ61kA469sXRrH52HxMOa2KaqD.png" alt="" />
                <span className="desc">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    In dignissimos laborum nihil atque adipisci, placeat, tenetur porro, quam sed consequatur 
                    sit dolorum hic aliquid! Reprehenderit maxime accusamus soluta vitae dolor?
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured
