import { useNavigate } from "react-router-dom";
import "./scss/Item.scss";

const ItemInfo = ({ item }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/detail/${item.id}`);
  };
  return (
    <div className="item" onClick={handleClick}>
      <img src={item.img1} />
      <p className="name">Name : {item.name}</p>
      <p className="name">Địa chỉ : {item.address}</p>
      <p className="name">Ngày sinh : {item.birthday}</p>
    </div>
  );
};

export default ItemInfo;
