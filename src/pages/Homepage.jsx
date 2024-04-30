import React from "react";
import "../css-html/index.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { Carousel } from "react-bootstrap"; // Import Carousel component
import Market from "../assets/market.jpg";
import Grocery from "../assets/grocery.jpg";
import Lookup from "../assets/upc_lookup.jpg";
import BannerImage from "../assets/banner.jpg"; // Import the banner image

export function Homepage() {
  return (
    <div className = "all">
      <main>
        <div
          className="carousel-container"
          style={{
            marginBottom: "20px",
            marginTop: "20px",
            backgroundImage: `url(${BannerImage})`,
            boxShadow: "var(--dark-color) 0 4px 6px",
          }}
        >
          <div className="features-section">
              <h3>
                Discover the features of <span className="kyper-kyp">KYP</span>
                er!
              </h3>
            <Carousel interval={3000} pause={false} indicators={false}>
              {" "}
              {/* Bootstrap Carousel */}
              {/* First slide */}
              <Carousel.Item>
                <div className="features">
                  <div className="features-1">
                    <h4>Search for Local Versions of Popular Items!</h4>
                    <img src={Market} alt="Farmer's Market" />
                  </div>
                </div>
              </Carousel.Item>
              {/* Second slide */}
              <Carousel.Item>
                <div className="features">
                  <div className="features-2">
                    <h4>Save What You Find for Later with Grocery Lists!</h4>
                    <img src={Grocery} alt="Grocery List" />
                  </div>
                </div>
              </Carousel.Item>
              {/* Third slide */}
              <Carousel.Item>
                <div className="features">
                  <div className="features-3">
                    <h4>
                      Quickly Discover What Big-Name Companies Produce Your
                      Groceries Using Our UPC Look-up!
                    </h4>
                    <img src={Lookup} alt="UPC Lookup" />
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>

        <div className="payment-plans">
          <h3>Join Us Today! Choose the Plan That's Right for You:</h3>
          <div className="plans">
            <div className="producer-plan">
              <h4>For Producers:</h4>
              <p>
                If you are a small business interested in uploading your
                products to our service, we request a small monthly fee from
                distributors.
              </p>
              <p className="price">$4.99/month</p>
              <ul className="account-features">
                <li>
                  Use of services including interest tracking and restock
                  notifications.
                </li>
                <li>Advertise your products.</li>
                <li>Upload and sell your products from KYPer.</li>
              </ul>
              <button
                type="button"
                onClick={() => (window.location.href = "/register")}
              >
                Register Here
              </button>
            </div>

            <div className="shopper-plan">
              <h4>For Shoppers:</h4>
              <p>
                Search-based services are free for consumers. If you create an
                account, you have access to additional features for conscious
                consumption.
              </p>
              <p className="price">Free</p>
              <ul className="account-features">
                <li>
                  Save your favorite locally-owned products and businesses.
                </li>
                <li>Save your buying history.</li>
                <li>Access a personalized shopping cart.</li>
              </ul>
              <button
                type="button"
                onClick={() => (window.location.href = "/register")}
              >
                Register Here
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Homepage;
