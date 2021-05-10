import React from "react";
import "./Products.css";
import "./@Shared.css";
import ClassicPrints from "../ProductList/ClassicPrints";

const Products = () => {
  // const [productList, setProductList] = useState([
  //   {
  //     title: "CLASSIC PRINTS",
  //     active: true,
  //   },
  //   {
  //     title: "SPECIAL PRINTS",
  //     active: false,
  //   },
  //   {
  //     title: "COLLAGE",
  //     active: false,
  //   },
  //   {
  //     title: "SEE ALL >",
  //     active: false,
  //   },
  // ]);

  // const handleClick = (item) => {
  //   let newList = [...productList];
  //   newList.forEach((el) => {
  //     return (el.active = false);
  //   });
  //   item.active = item.active === false ? true : true;
  //   setProductList(newList);
  // };

  // const checkActiveStatus = (item) => {
  //   return item.active === true
  //     ? "products-list-item on-active"
  //     : "products-list-item";
  // };

  return (
    <>
      <section id="products">
        <h2 className="section-title">Explore features of Photo Prints</h2>
        {/* <header className="products-header">
          <ul className="products-lists">
            {productList.map((item, index) => {
              return (
                <li
                  onClick={() => handleClick(item)}
                  key={index}
                  className={checkActiveStatus(item)}>
                  {item.title}
                </li>
              );
            })}
          </ul>
        </header> */}
        <div className="products-container">
          <ClassicPrints />
        </div>
      </section>
    </>
  );
};

export default Products;
