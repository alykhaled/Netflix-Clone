import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import './featured.scss'

export default function Featured({type}){
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === 'movie' ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="action">Action</option>
                        <option value="horror">Horror</option>
                        <option value="comedy">Comedy</option>
                    </select>
                </div>
            )}
            <img src="https://www.themoviedb.org/t/p/original/qjGrUmKW78MCFG8PTLDBp67S27p.jpg" width="100%"alt=""/>
            <div className="info">
                <img src="https://www.themoviedb.org/t/p/original/xhPL1PDIweY7WTHC4fwGYgtGzvU.png" alt="" />
                <span className="desc">
                Tanjirō Kamado, joined with Inosuke Hashibira, a boy raised by boars who wears a boar's head, and Zenitsu Agatsuma, a scared boy who reveals his true power when he sleeps, boards the Infinity Train on a new mission with the Fire Hashira, Kyōjurō Rengoku, to defeat a demon who has been tormenting the people and killing the demon slayers who oppose it!
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

