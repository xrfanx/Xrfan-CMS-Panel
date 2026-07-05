import "./Product.css";
import { Link, useParams } from "react-router-dom";
import Chart from "./../../components/Chart/Chart";
import { products } from "../../datas";
import { productsData } from "../../datas";
import PublishIcon from "@mui/icons-material/Publish";

export default function Product() {
  const { productId } = useParams();
  const product = products.find((product) => product.id === Number(productId));
console.log(import.meta.env.BASE_URL);
console.log(`${import.meta.env.BASE_URL}images/${product.avatar}`);
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to="/newProduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>

      <div className="productTop">
        <div className="productTopLeft">
          <Chart title="Sale in Month" data={productsData} dataKey="sales" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={`${import.meta.env.BASE_URL}${product.avatar}`} className="productInfoImg" />
            <span className="productName">{product.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <div className="productInfoKey">ID:</div>
              <div className="productInfoValue">{product.id}</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Name:</div>
              <div className="productInfoValue">{product.title}</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Sales:</div>
              <div className="productInfoValue">${product.price}</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Active:</div>
              <div className="productInfoValue">{product.status}</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">In Stock:</div>
              <div className="productInfoValue">{product.active}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Product Name</label>
            <input type="text" placeholder={product.title} />

            <label>In Stock</label>
            <div className="selectWrapper">
              <select id="inStock" className="productSelect">
                <option value="in Stock">in Stock</option>
                <option value="out of Stock">out of Stock</option>
              </select>
            </div>

            <label>Active</label>
            <div className="selectWrapper">
              <select id="active" className="productSelect">
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </select>
            </div>
          </div>

          <div className="productFormRight">
            <div className="productUploader">
              <img src={`${import.meta.env.BASE_URL}${product.avatar}`} className="productUploaderImg" />
              <label>
                <PublishIcon></PublishIcon>
              </label>
              <input type="file" style={{ display: "none" }} />
            </div>
            <button className="productButton">Upload</button>
          </div>
        </form>
      </div>
    </div>
  );
}
