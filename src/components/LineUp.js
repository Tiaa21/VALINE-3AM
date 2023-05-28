import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./LineUp.css";
import { Link } from "react-router-dom";

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <div className="video-container">
        <video src="../videos/video-2.mp4" autoPlay muted loop />
        <div className="text-overlay">
          <h1>Valorant Lineups</h1>
          <p>Explore and discover amazing lineups</p>
        </div>
      </div>

      <div className="pentagon"></div>

      <div className="container mt-5 carousel">
        <h1 className="slider_title">Choose Your Map</h1>

        <Slider {...settings}>
          <div className="card-wrapper">
            <div className="card">
              <Link to="/ascent" target="_top">
                <div className="card-image">
                  <img src="images/maps/img1.png" alt="Ascent" />
                </div>
                <div className="details">
                  <h2> ASCENT </h2>
                </div>
              </Link>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <Link to="/bind" target="_top">
                <div className="card-image">
                  <img src="images/maps/img2.png" alt="Bind" />
                </div>
                <div className="details">
                  <h2> BIND </h2>
                </div>
              </Link>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <Link to="/breeze" target="_top">
                <div className="card-image">
                  <img src="images/maps/img3.png" alt="Breeze" />
                </div>
                <div className="details">
                  <h2> BREEZE </h2>
                </div>
              </Link>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <Link to="/icebox" target="_top">
                <div className="card-image">
                  <img src="images/maps/img4.png" alt="Icebox" />
                </div>
                <div className="details">
                  <h2>ICEBOX </h2>
                </div>
              </Link>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <Link to="/haven" target="_top">
                <div className="card-image">
                  <img src="images/maps/img5.png" alt="Haven" />
                </div>
                <div className="details">
                  <h2> HAVEN </h2>
                </div>
              </Link>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <Link to="/split" target="_top">
                <div className="card-image">
                  <img src="images/maps/img6.png" alt="Split" />
                </div>
                <div className="details">
                  <h2> SPLIT </h2>
                </div>
              </Link>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <Link to="/fracture" target="_top">
                <div className="card-image">
                  <img src="images/maps/img7.png" alt="Fracture" />
                </div>
                <div className="details">
                  <h2> FRACTURE </h2>
                </div>
              </Link>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <Link to="/lotus" target="_top">
                <div className="card-image">
                  <img src="images/maps/img8.png" alt="Lotus" />
                </div>
                <div className="details">
                  <h2> LOTUS </h2>
                </div>
              </Link>
            </div>
          </div>
          <div className="card-wrapper">
            <div className="card">
              <Link to="/pearl" target="_top">
                <div className="card-image">
                  <img src="images/maps/img9.png" alt="Pearl" />
                </div>
                <div className="details">
                  <h2> PEARL </h2>
                </div>
              </Link>
            </div>
          </div>
        </Slider>
      </div>

      <div className="popular">
        <h1 className="slider_title">Popular LineUps</h1>
        <div class="wrap">
          <div class="box">
            <div class="box-top">
              <img
                class="box-image"
                src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte6a8659c2950b7db/62990d41df98c90faab88dc1/03_Fade.jpg"
                alt="Fade lineup"
              />
              <div class="title-flex">
                <h3 class="box-title-attack">
                  FADE LINEUP[ ATTACKING - A SITE] || HAVEN
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/BKGCP2NshBQ"
              class="button-attack"
              target="_blank"
              rel="noreferrer"
            >
              See The Lineup
            </a>
          </div>
          <div class="box">
            <div class="box-top">
              <img
                class="box-image"
                src="https://cdn.dribbble.com/users/2991/screenshots/13476886/valorant_viper.png"
                alt="Viper lineup"
              />
              <div class="title-flex">
                <h3 class="box-title-attack">
                  VIPER LINEUP [ ATTACKING - B SITE || PEARL
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/DpJJkTqz00M"
              class="button-attack"
              target="_blank"
              rel="noreferrer"
            >
              See The Lineup
            </a>
          </div>
          <div class="box">
            <div class="box-top">
              <img
                class="box-image"
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/63f3ab119826055.60a572738625d.png"
                alt="Killjoy lineup"
              />
              <div class="title-flex">
                <h3 class="box-title-attack">
                  KILLJOY LINEUP [ ATTACKING - A SITE || ICEBOX
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/7G_38uBYRjY"
              class="button-attack"
              target="_blank"
              rel="noreferrer"
            >
              See The Lineup
            </a>
          </div>
          <div class="box">
            <div class="box-top">
              <img
                class="box-image"
                src="https://www.ggrecon.com/media/l1rbnolj/sova-valorant-3jpg.jpg"
                alt="Sova lineup"
              />
              <div class="title-flex">
                <h3 class="box-title-defend">
                  SOVA LINEUP [ DEFENDING - B SITE ] || ASCENT
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/et-kbuANzek"
              class="button-defend"
              target="_blank"
              rel="noreferrer"
            >
              See The Lineup
            </a>
          </div>
          <div class="box">
            <div class="box-top">
              <img
                class="box-image"
                src="https://files.cults3d.com/uploaders/21595173/illustration-file/2ab12856-c629-4731-bf91-18839f968638/defw3sc-d4a0df7d-e2e3-407a-8e37-64768bef14f3.png"
                alt="Brim lineup"
              />
              <div class="title-flex">
                <h3 class="box-title-attack">
                  BRIM LINEUP [ ATTACKING - B SITE || FRACTURE
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/YZwUKPLnsnw"
              class="button-attack"
              target="_blank"
              rel="noreferrer"
            >
              See The Lineup
            </a>
          </div>
          <div class="box">
            <div class="box-top">
              <img
                class="box-image"
                src="https://cdn.dribbble.com/users/2991/screenshots/13476886/valorant_viper.png"
                alt="Viper lineup"
              />
              <div class="title-flex">
                <h3 class="box-title-defend">
                  VIPER SETUP [ DEFENDING - B SITE ] || BREEZE
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/EiDnjJAGBzg"
              class="button-defend"
              target="_blank"
              rel="noreferrer"
            >
              See The Lineup
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
