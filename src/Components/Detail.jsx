import { Link, useNavigate, useParams } from "react-router-dom";
import data from "../Data/data";
import "./scss/Detail.scss";
const ItemDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/home");
  };
  const item = data.find((item) => item.id.toString() === id);

  if (!item) {
    return (
      <div>Không tìm thấy thông tin chi tiết cho sinh viên với ID: {id}</div>
    );
  }
  console.log("item " + item);
  return (
    <div className="item-detail">
      <img src={item.img2} alt={item.name} />
      {/* <p className="name">{item.name}</p> */}
      <div></div>
      <a className="hobbies" href={item.profile}>
        {item.name}
      </a>
      <p className="birthdate">{`Ngày sinh: ${item.birthday}`}</p>
      <p className="address">{`Địa chỉ: ${item.address}`}</p>
      <p className="hobbies">{`Sở thích: ${item.des}`}</p>
      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default ItemDetail;
