import './index.css'
import {AiOutlineDelete} from 'react-icons/ai'

const SongItem = props => {
  const {initialTracksList, onDeleteTrack} = props
  const {id, imageUrl, name, genre, duration} = initialTracksList

  const onDelete = () => {
    onDeleteTrack(id)
  }

  return (
    <li className="list-item">
      <div className="card-details">
        <img src={imageUrl} alt="track" className="img" />
        <div className="name-card">
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="card-track">
        <p className="name">{duration}</p>
        <button
          className="button"
          type="button"
          data-testid="delete"
          onClick={onDelete}
        >
          <AiOutlineDelete />
        </button>
      </div>
    </li>
  )
}

export default SongItem
