import { Add, PlayArrow, ThumbDownOutlined, ThumbUpAltOutlined } from '@material-ui/icons'
import './listItem.scss'

export default function ListItem() {
    return (
        <div className="listItem">
            <img src="https://www.themoviedb.org/t/p/original/fF4dOdQk6hUew6KYrjIPrZavZWV.jpg" alt=""/>
            <div className="itemInfo">
                <div className="icons">
                    <PlayArrow/>
                    <Add/>
                    <ThumbUpAltOutlined />
                    <ThumbDownOutlined />
                </div>
            </div>
        </div>
    )
}
