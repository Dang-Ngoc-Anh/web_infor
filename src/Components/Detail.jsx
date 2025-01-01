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
      <img src={item.img} alt={item.name} />
      <p className="name">{item.name}</p>
      <p className="birthdate">{`Ngày sinh: ${item.birtday}`}</p>
      <p className="address">{`Địa chỉ: ${item.address}`}</p>
      <p className="hobbies">{`Sở thích: ${item.des}`}</p>
      <a className="hobbies" href={item.profile}>{`Facebook`}</a>
      <button onClick={handleBack}>Back</button>
    </div>
  );
};

export default ItemDetail;
