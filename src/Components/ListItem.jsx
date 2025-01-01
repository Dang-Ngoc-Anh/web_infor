import data from "../Data/data";
import ItemInfo from "./Item";
import "./scss/Litem.scss";
const ListItem = () => {
  return (
    <div className="container_item">
      {data.map((item) => (
        <ItemInfo key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ListItem;
