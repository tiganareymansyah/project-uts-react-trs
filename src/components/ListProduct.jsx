import { BsCartPlusFill } from "react-icons/bs";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

export default function ListProduct({ name, image, price, category, setEditedProduct }) {
  return (
    <div className="div-product">
      <img src={image} alt={name} />
      <p>Name : {name}</p>
      <p>
        Price :{" "}
        {price.toLocaleString("id-ID", {
          style: "currency",
          currency: "IDR",
          maximumFractionDigits: 0,
        })}
      </p>
      <p>Category : {category}</p>
      <div className="div-button-beh">
        <div>
          <button onClick={() => setEditedProduct({name, image, price, category})}>
            <BsCartPlusFill className="logo-beli" />
          </button>
        </div>
        <div className="div-button-edde">
          <button><AiFillEdit className="logo-edit" /></button>
          <button><AiFillDelete className="logo-delete" /></button>
        </div>
      </div>
    </div>
  );
}
