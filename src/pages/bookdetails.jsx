import { useParams } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Navbar from "./Nav";
import Bestselling from "./bestselling";
import Mainfooter from "./mainfooter";
import bookdet from "./bookdet.png";
import Modal from "./components/modal";
import { useNavigate } from "react-router-dom";
import book from './book.png'
const Bookdetails = () => {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const navigate = useNavigate();

  const switchToCart = () => {
    navigate(`/shoppingcart`);
  };

  return (
    <div className="App">
      <Navbar></Navbar>

      <div className="infoPage p-12">
        <img src={bookdet} />
        <div className="w-4/5 ">
          <div class="flex justify-between p-10 space-x-14">
            <div class="flex-2 ">
              <p>Author</p>
              <h4>John Doe</h4>

              <p>Category</p>
              <h4>Romance</h4>
              <p>Date Released</p>
              <h4>20 September 2024</h4>
              <p>Ratings</p>
              <h4>
                <svg
                  width="80"
                  height="24"
                  viewBox="0 0 80 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
                    fill="#B700E0"
                  />
                  <path
                    d="M40 17.27L46.18 21L44.54 13.97L50 9.24L42.81 8.63L40 2L37.19 8.63L30 9.24L35.46 13.97L33.82 21L40 17.27Z"
                    fill="#B700E0"
                  />
                  <path
                    d="M68 17.27L74.18 21L72.54 13.97L78 9.24L70.81 8.63L68 2L65.19 8.63L58 9.24L63.46 13.97L61.82 21L68 17.27Z"
                    fill="#B700E0"
                  />
                </svg>
              </h4>
            </div>
            <div className="flex-1  prodDescriptionTab">
              <h4>Really, Good really</h4>
              <p className="text-base">
                Olivia, a pampered heiress, yearns to escape her privileged life
                and find true purpose. She impulsively decides to sell her
                mansion, move to a quaint seaside town, and open a cozy
                bookshop. In this idyllic setting, Olivia's tranquil existence
                is disrupted by a series of mysterious thefts. As the local
                detective, Ethan, investigates these crimes, their paths cross
                unexpectedly. Ethan, a passionate baker with a sharp wit, finds
                himself drawn to Olivia's genuine kindness and unwavering
                spirit. As their friendship deepens, they embark on a joint
                investigation, unraveling the mysteries of the town and
                discovering hidden secrets along the way. Their shared passion
                for books and their growing connection lead to a blossoming
                romance. Through their adventures, Olivia learns the true
                meaning of happiness and fulfillment, finding love, friendship,
                and a sense of belonging in her unexpected journey.
              </p>
              <h6>$4.55</h6>
              <div>
                <button  onClick={handleOpenModal} >Add to cart</button>

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
                    <div className="imageTab mt-2">
                      <img src={book} />
                    </div>
                  </div>
                  <div style={{ margin: "10px" }} className="CartMainDet">
                    <p>Cart Subtotal: $10.00</p>
                    <button onClick={switchToCart}>Proceed to checkout</button>
                    <button>Go to cart</button>
                  </div>
                </Modal>
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

export default Bookdetails;
