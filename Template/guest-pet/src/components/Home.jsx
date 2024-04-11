import React from "react";
import "../scss/pages/home/_home.scss";
import GirlWithPets from "../assets/aboutUs.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";
import icon5 from "../assets/icon5.png";
import icon6 from "../assets/icon6.png";
import backgroundImg from "../assets/mainBackground.png";
import catImage from "../assets/process.png";
import process3 from "../assets/process1.png";
import process2 from "../assets/process2.png";
import process1 from "../assets/process3.png";

const Home = () => {
  return (
    <div className="home">
      <div
        className="topPage"
        style={{ backgroundImage: "url(" + backgroundImg + ")" }}
      >
        <div className="main_info">
          <h1>Guest Pet</h1>
          <h3>
            Everything for <h3 className="forColor">Pets</h3>
          </h3>
        </div>
        <div className="down_info">
          <div className="social_medias">
            <p>Twitter</p>
            <p>Twitter</p>
            <p>Twitter</p>
          </div>
          <div className="left_infos">
            <p className="adopt">Adopt a pet today and start caring for it.</p>
            <p className="best">The best services for you!</p>
          </div>
        </div>
      </div>
      <div className="aboutUs">
        <div className="leftSide">
          <div className="img">
            <img src={GirlWithPets} alt="" />
          </div>
        </div>
        <div className="rightSide">
          <div className="info">
            <h4>ABOUT US</h4>
            <p>
              Guest Pet is a company that aims to make great pet environment
              around the world. Our main idea is inviting people to adopt pets
              for free. With Guest Pet you can provide all requirements of your
              pet. We just want to make the pets smile. Now, adopt a pet and
              take care of it!
            </p>
          </div>
        </div>
      </div>

      <div className="services">
        <div className="topInfo">
          <h3>QUALITY SERVICES</h3>
          <h2>We Care About Pets </h2>
          <p>
            We have multiple services to offer you for providing your dear pet's
            daily and health requirements
          </p>
        </div>
        <div className="cards">
          <div className="card">
            <div className="img">
              <img src={icon1} alt="" />
            </div>
            <h4>Vaccination</h4>
          </div>
          <div className="card">
            <div className="img">
              <img src={icon1} alt="" />
            </div>
            <h4>Vaccination</h4>
          </div>
          <div className="card">
            <div className="img">
              <img src={icon2} alt="" />
            </div>
            <h4>Vaccination</h4>
          </div>
          <div className="card">
            <div className="img">
              <img src={icon3} alt="" />
            </div>
            <h4>Vaccination</h4>
          </div>
          <div className="card">
            <div className="img">
              <img src={icon4} alt="" />
            </div>
            <h4>Vaccination</h4>
          </div>
          <div className="card">
            <div className="img">
              <img src={icon5} alt="" />
            </div>
            <h4>Vaccination</h4>
          </div>
          <div className="card">
            <div className="img">
              <img src={icon6} alt="" />
            </div>
            <h4>Vaccination</h4>
          </div>
          <div className="card">
            <div className="img">
              <img src={icon6} alt="" />
            </div>
            <h4>Vaccination</h4>
          </div>
        </div>
      </div>
      <div
        className="adoptNow"
        style={{ backgroundImage: "url(" + catImage + ")" }}
      >
        <div className="info">
          <h1>Want a Pet for the Your Loved Ones? </h1>
          <button className="btn">Adopt Now</button>
        </div>
      </div>
      <div className="process">
        <div className="top_info">
          <h1 className="work">HOW WE WORK</h1>
          <h1 className="petAdoption">Pet Adoption Process</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            ratione quasi perspiciatis reiciendis laborum cupiditate recusandae
            modi velit.
          </p>
        </div>
        <div className="cards">
          <div className="card">
            <div className="img">
              <img src={process1} />
            </div>
            <div className="bottom_info">
              <h3>1. Find Your Pet</h3>
              <p>Find your pet friend online for taking care of it</p>
            </div>
          </div>
          <div className="card">
            <div className="img">
              <img src={process2} />
            </div>
            <div className="bottom_info">
              <h3>2. Know Pet</h3>
              <p>Meet your pet firend more closely</p>
            </div>
          </div>
          <div className="card">
            <div className="img">
              <img src={process3} />
            </div>
            <div className="bottom_info">
              <h3>1. Take Pet Home</h3>
              <p>Take your pet to your home and spend time with it</p>
            </div>
          </div>
        </div>
      </div>
      <div className="reviews"></div>
    </div>
  );
};

export default Home;
