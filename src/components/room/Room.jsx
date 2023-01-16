import "./style.scss";
import { Link } from "react-router-dom";
import { BsArrowsFullscreen, BsPeople } from "react-icons/bs";

const Room = ({ room }) => {
  const { id, name, image, size, maxPerson, description, price } = room;
  return (
    <div className="card">
      <div>
        <img src={image} alt={name} />
      </div>
      <div className="info">
        <div className="flex gap-8 items-center">
          <div className="icon">
            <BsArrowsFullscreen />
          </div>
          <div>size {size}M2</div>
        </div>
        <div className="flex gap-8 items-center">
          <div className="icon">
            <BsPeople />
          </div>
          <div>Max People {maxPerson}</div>
        </div>
      </div>
      {/* name  */}
      <div className="details">
        <Link to={`/room/${id}`}>
          <h3 className="h3">{name}</h3>
        </Link>
        <p className="text">{description.slice(0, 55)}</p>
      </div>
      <Link to={`/room/${id}`} className="btn btn-secondary btn-sm mx-auto">Book now from ${price}</Link>
    </div>
  );
};

export default Room;
