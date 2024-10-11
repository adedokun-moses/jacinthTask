import { useParams } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Navbar from "./Nav";
import featuredimg from "./featuredimg.png";
import Bestselling from "./bestselling";
import Mainfooter from "./mainfooter";
import Modal from "./components/modal";
import book from "./book.png";
const shoppingCart = () => {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);

  const [quantity, setQuantity] = useState(0);
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <Navbar></Navbar>

      <div className="infoPage p-12">
        <div class="flex p-10 space-x-14">
          <div
            class="basis-1/2"
            style={{
              borderRight: "1px solid whitesmoke",
              padding: "10px 20px",
            }}
          >
            <div style={{ borderBottom: "1px solid whitesmoke" }}>
              <h1 style={{ fontSize: "34px" }}>
                Shopping Cart{" "}
                <span style={{ float: "right", fontSize: "24px" }}>Price</span>
              </h1>
              <div class="grid grid-cols-4 gap-4 mb-4">
                <div>
                  <img src={book} />
                </div>
                <div className="cartItem col-span-2">
                  <h1>Really realy good, actually</h1>
                  <h6>By John Doe</h6>
                  <h5>In Stock</h5>
                  <div className="flex justify-between items-center">
                    <button className="quantityBtn" onClick={handleIncrement}>
                      Qtr <span className="pl-5">{quantity}{" "}</span> 
                   
                    </button>

                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 21C6.45 21 5.97933 20.8043 5.588 20.413C5.19667 20.0217 5.00067 19.5507 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.8043 20.021 18.413 20.413C18.0217 20.805 17.5507 21.0007 17 21H7ZM17 6H7V19H17V6ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z"
                        fill="white"
                      />
                    </svg>

                    <h5 style={{ fontWeight: "bold" }}>Move to favourite</h5>
                  </div>
                </div>
                <div>
                  <p style={{float: 'right'}}>$30.00</p>
                </div>
              </div>
            </div>
            <h3>Subtotal $30.50</h3>
            <button onClick={handleOpenModal}>Proceed to checkout</button>

            <Modal show={showModal} onClose={handleCloseModal}>
              <div
                style={{
                  width: "60%",
                  borderRight: "2px solid whitesmoke",
                  margin: "10px",
                  fontSize: "15px",
                }}
              >
                <h2 className="flex">
                  <svg
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M15 30C16.9698 30 18.9204 29.612 20.7403 28.8582C22.5601 28.1044 24.2137 26.9995 25.6066 25.6066C26.9995 24.2137 28.1044 22.5601 28.8582 20.7403C29.612 18.9204 30 16.9698 30 15C30 13.0302 29.612 11.0796 28.8582 9.25975C28.1044 7.43986 26.9995 5.78628 25.6066 4.3934C24.2137 3.00052 22.5601 1.89563 20.7403 1.14181C18.9204 0.387986 16.9698 -2.93527e-08 15 0C11.0218 5.92805e-08 7.20644 1.58035 4.3934 4.3934C1.58035 7.20644 0 11.0218 0 15C0 18.9782 1.58035 22.7936 4.3934 25.6066C7.20644 28.4196 11.0218 30 15 30ZM14.6133 21.0667L22.9467 11.0667L20.3867 8.93333L13.22 17.5317L9.51167 13.8217L7.155 16.1783L12.155 21.1783L13.445 22.4683L14.6133 21.0667Z"
                      fill="#B700E0"
                    />
                  </svg>
                  <span style={{ paddingLeft: "20px", fontWeight: "900" }}>
                    Added to Cart{" "}
                  </span>
                </h2>
                <div className="imageTab">
                  <img src={featuredimg} />
                </div>
              </div>
              <div style={{ margin: "10px" }} className="CartMainDet">
                <p>Cart Subtotal: $10.00</p>
                <button>Proceed to checkout</button>
                <button>Go to cart</button>
              </div>
            </Modal>
          </div>
          <div class="basis-1/2">
            <div className="recentlyViewed">
              <h5>Recently Viewed By You</h5>
              <div className="flex ">
                <div>
                  <img src={book} />
                </div>
                <div className="bg-danger pl-5">
                  <p>Africa Literature</p>
                  <p>A Coastline is an Immeasurable Thing.</p>
                  <h4>John Doe</h4>
                  <p className="flex">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                        fill="#0068E0"
                      />
                    </svg>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                        fill="#0068E0"
                      />
                    </svg>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                        fill="#0068E0"
                      />
                    </svg>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                        fill="#0068E0"
                      />
                    </svg>
                  </p>
                  <h4>$45.0</h4>
                  <button>Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Bestselling />
      <Mainfooter />
    </div>
  );
};

export default shoppingCart;
