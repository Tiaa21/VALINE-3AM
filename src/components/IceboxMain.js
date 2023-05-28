import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import { useState, useEffect } from "react";
import "./Maps.css";
import "../App.css";
import React, { useRef } from "react";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

export default function IceboxMain() {
  const [map, setMaps] = useState([]);

  useEffect(() => {
    fetch("https://valorant-api.com/v1/maps")
      .then((response) => response.json())
      .then((data) => setMaps(data.data))
      .catch((err) => console.error(`error: ${err}`));
  }, []);

  const FadeIcebox = useRef(null);
  const ViperIcebox = useRef(null);
  const KilljoyIcebox = useRef(null);
  const SovaIcebox = useRef(null);
  const BrimIcebox = useRef(null);
  const KayoIcebox = useRef(null);
  const CypherIcebox = useRef(null);

  const scrollToDiv = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="forbg">
      <div>
        {map.length > 7 && (
          <div className="image-container" key={map[7].uuid}>
            <img
              src={map[7].splash}
              className="img-maps"
              alt={`${map[7].displayName}`}
            />
            <div className="text-maps">
              <h1>{map[7].displayName}</h1>
              <p>{map[7].coordinates}</p>
            </div>
          </div>
        )}
      </div>
      <div className="container-swiper">
        <h1 className="swiper_title">Choose Your Agent</h1>
        <div className="swiper-container">
          <Swiper
            navigation={true}
            effect={"coverflow"}
            centeredSlides={true}
            slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
            loop={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{
              clickable: true,
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src="images/agents/sova.jpg"
                onClick={() => scrollToDiv(SovaIcebox)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/agents/fade.png"
                onClick={() => scrollToDiv(FadeIcebox)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/agents/viper.jpg"
                onClick={() => scrollToDiv(ViperIcebox)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/agents/brimstone.jpg"
                onClick={() => scrollToDiv(BrimIcebox)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/agents/cypher.jpg"
                onClick={() => scrollToDiv(CypherIcebox)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/agents/killjoy.jpg"
                onClick={() => scrollToDiv(KilljoyIcebox)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/agents/kayo1.png"
                onClick={() => scrollToDiv(KayoIcebox)}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="AgentLineupContainer">
        <div className=" TitleContainer" ref={FadeIcebox}>
          <img
            src="https://valorantinfo.com/images/id/fade_valorant_icon_3332.webp"
            alt="Deskripsi Gambar"
            className="AgentBulet"
          />
          <span className="caption">FADE</span>
        </div>
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
                  FADE LINEUP[ ATTACKING - A SITE] || ICEBOX
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/3RHbnhdXNlc"
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
                src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte6a8659c2950b7db/62990d41df98c90faab88dc1/03_Fade.jpg"
                alt="Fade lineup"
              />
              <div class="title-flex">
                <h3 class="box-title-attack">
                  FADE LINEUP [ ATTACKING - B SITE || ICEBOX
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/y_ESmyTo4SY"
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
                src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte6a8659c2950b7db/62990d41df98c90faab88dc1/03_Fade.jpg"
                alt="Fade lineup"
              />
              <div class="title-flex">
                <h3 class="box-title-defend">
                  FADE LINEUP [ DEFENDING - A SITE ] || ICEBOX
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/zTmISH10oTI"
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
                src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte6a8659c2950b7db/62990d41df98c90faab88dc1/03_Fade.jpg"
                alt="Fade lineup"
              />
              <div class="title-flex">
                <h3 class="box-title-defend">
                  FADE LINEUP [ DEFENDING - B SITE ] || ICEBOX
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/hw0BOfBdvD8"
              class="button-defend"
              target="_blank"
              rel="noreferrer"
            >
              See The Lineup
            </a>
          </div>
        </div>

        <div className=" TitleContainer" ref={ViperIcebox}>
          <img
            src="https://valorantinfo.com/images/id/viper_valorant_icon_3342.webp"
            alt="Deskripsi Gambar"
            className="AgentBulet"
          />
          <span className="caption">VIPER</span>
        </div>
        <div class="wrap">
          <div class="box">
            <div class="box-top">
              <img
                class="box-image"
                src="https://cdn.dribbble.com/users/2991/screenshots/13476886/valorant_viper.png"
                alt="Viper lineup"
              />
              <div class="title-flex">
                <h3 class="box-title-attack">
                  VIPER LINEUP [ ATTACKING - A SITE || ICEBOX
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/SBRVJGo1zJg"
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
                  VIPER LINEUP [ ATTACKING - B SITE || ICEBOX
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/MNHPhJPrV_g"
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
                  VIPER SETUP [ DEFENDING - A SITE ] || ICEBOX
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/kG5GcYoL1z8"
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
                src="https://cdn.dribbble.com/users/2991/screenshots/13476886/valorant_viper.png"
                alt="Viper lineup"
              />
              <div class="title-flex">
                <h3 class="box-title-defend">
                  VIPER SETUP [ DEFENDING - B SITE ] || ICEBOX
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/kEyIC_EoQ4k"
              class="button-defend"
              target="_blank"
              rel="noreferrer"
            >
              See The Lineup
            </a>
          </div>
        </div>

        <div className=" TitleContainer" ref={KilljoyIcebox}>
          <img
            src="https://valorantinfo.com/images/id/killjoy_valorant_icon_3340.webp"
            alt="Deskripsi Gambar"
            className="AgentBulet"
          />
          <span className="caption">KILLJOY</span>
        </div>
        <div class="wrap">
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
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/63f3ab119826055.60a572738625d.png"
                alt="Killjoy lineup"
              />
              <div class="title-flex">
                <h3 class="box-title-attack">
                  KILLJOY LINEUP [ ATTACKING - B SITE || ICEBOX
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/4n1HuXAvv-A"
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
                <h3 class="box-title-defend">
                  KILLJOY SETUP [ DEFENDING - A SITE ] || ICEBOX
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/Fgv1qz6K7sw"
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
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/63f3ab119826055.60a572738625d.png"
                alt="Killjoy lineup"
              />
              <div class="title-flex">
                <h3 class="box-title-defend">
                  KILLJOY SETUP [ DEFENDING - B SITE ] || ICEBOX
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/zsO9gozthFg"
              class="button-defend"
              target="_blank"
              rel="noreferrer"
            >
              See The Lineup
            </a>
          </div>
        </div>

        <div className=" TitleContainer" ref={SovaIcebox}>
          <img
            src="https://www.esports.net/wp-content/uploads/2022/08/Valorant-Sova-Guide.png"
            alt="Deskripsi Gambar"
            className="AgentBulet"
          />
          <span className="caption">SOVA</span>
        </div>
        <div class="wrap">
          <div class="box">
            <div class="box-top">
              <img
                class="box-image"
                src="https://www.ggrecon.com/media/l1rbnolj/sova-valorant-3jpg.jpg"
                alt="Sova lineup"
              />
              <div class="title-flex">
                <h3 class="box-title-attack">
                  SOVA LINEUP[ ATTACKING - A SITE] || ICEBOX
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/QDWlsy0IWPA?list=PLcGsYwHKVfzvOXKAX_4xtIHt26vz_Sxa9"
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
                <h3 class="box-title-attack">
                  SOVA LINEUP [ ATTACKING - B SITE || ICEBOX
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/IOVjQwgV_ko?list=PLcGsYwHKVfzvOXKAX_4xtIHt26vz_Sxa9"
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
                  SOVA LINEUP [ DEFENDING - A SITE ] || ICEBOX
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/Na0MW1lHH88?list=PLcGsYwHKVfzvOXKAX_4xtIHt26vz_Sxa9"
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
                src="https://www.ggrecon.com/media/l1rbnolj/sova-valorant-3jpg.jpg"
                alt="Sova lineup"
              />
              <div class="title-flex">
                <h3 class="box-title-defend">
                  SOVA LINEUP [ DEFENDING - B SITE ] || ICEBOX
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/JKGBfu4H7BA?list=PLcGsYwHKVfzvOXKAX_4xtIHt26vz_Sxa9"
              class="button-defend"
              target="_blank"
              rel="noreferrer"
            >
              See The Lineup
            </a>
          </div>
        </div>

        <div className=" TitleContainer" ref={KayoIcebox}>
          <img
            src="https://valorantinfo.com/images/id/kayo_valorant_icon_3336.webp"
            alt="Deskripsi Gambar"
            className="AgentBulet"
          />
          <span className="caption">KAYO</span>
        </div>
        <div class="wrap">
          <div class="box">
            <div class="box-top">
              <img
                class="box-image"
                src="https://e1.pxfuel.com/desktop-wallpaper/903/97/desktop-wallpaper-kayo-valorant-phone-iphone-7091a-2160x3840-for-your-mobile-tablet-kay-o.jpg"
                alt="Kayo lineup"
              />
              <div class="title-flex">
                <h3 class="box-title-attack">
                  KAYO LINEUP[ ATTACKING - A SITE] || ICEBOX
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/DroXz9sxSJ8?list=PLcGsYwHKVfzvOXKAX_4xtIHt26vz_Sxa9"
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
                src="https://e1.pxfuel.com/desktop-wallpaper/903/97/desktop-wallpaper-kayo-valorant-phone-iphone-7091a-2160x3840-for-your-mobile-tablet-kay-o.jpg"
                alt="Kayo lineup"
              />
              <div class="title-flex">
                <h3 class="box-title-attack">
                  KAYO LINEUP [ ATTACKING - B SITE || ICEBOX
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/Qc8vFDuu6UI?list=PLcGsYwHKVfzvOXKAX_4xtIHt26vz_Sxa9"
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
                src="https://e1.pxfuel.com/desktop-wallpaper/903/97/desktop-wallpaper-kayo-valorant-phone-iphone-7091a-2160x3840-for-your-mobile-tablet-kay-o.jpg"
                alt="Kayo lineup"
              />
              <div class="title-flex">
                <h3 class="box-title-defend">
                  KAYO LINEUP [ DEFENDING - A SITE ] || ICEBOX
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/EnRCyucwjtM?list=PLcGsYwHKVfzvOXKAX_4xtIHt26vz_Sxa9"
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
                src="https://e1.pxfuel.com/desktop-wallpaper/903/97/desktop-wallpaper-kayo-valorant-phone-iphone-7091a-2160x3840-for-your-mobile-tablet-kay-o.jpg"
                alt="Kayo lineup"
              />
              <div class="title-flex">
                <h3 class="box-title-defend">
                  KAYO LINEUP [ DEFENDING - B SITE ] || ICEBOX
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/07NX65egk8o?list=PLcGsYwHKVfzvOXKAX_4xtIHt26vz_Sxa9"
              class="button-defend"
              target="_blank"
              rel="noreferrer"
            >
              See The Lineup
            </a>
          </div>
        </div>

        <div className=" TitleContainer" ref={BrimIcebox}>
          <img
            src="https://www.esports.net/wp-content/uploads/2022/08/Valorant-Brimstone-Guide.png"
            alt="Deskripsi Gambar"
            className="AgentBulet"
          />
          <span className="caption">BRIM</span>
        </div>
        <div class="wrap">
          <div class="box">
            <div class="box-top">
              <img
                class="box-image"
                src="https://files.cults3d.com/uploaders/21595173/illustration-file/2ab12856-c629-4731-bf91-18839f968638/defw3sc-d4a0df7d-e2e3-407a-8e37-64768bef14f3.png"
                alt="Brim lineup"
              />
              <div class="title-flex">
                <h3 class="box-title-attack">
                  BRIM LINEUP [ ATTACKING - A SITE] || ICEBOX
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/CsnG0XVt_SE?list=PLcGsYwHKVfzvOXKAX_4xtIHt26vz_Sxa9"
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
                src="https://files.cults3d.com/uploaders/21595173/illustration-file/2ab12856-c629-4731-bf91-18839f968638/defw3sc-d4a0df7d-e2e3-407a-8e37-64768bef14f3.png"
                alt="Brim lineup"
              />
              <div class="title-flex">
                <h3 class="box-title-attack">
                  BRIM LINEUP [ ATTACKING - A SITE || ICEBOX [ 2 ]
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/Puo6RonSQeU?list=PLcGsYwHKVfzvOXKAX_4xtIHt26vz_Sxa9"
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
                src="https://files.cults3d.com/uploaders/21595173/illustration-file/2ab12856-c629-4731-bf91-18839f968638/defw3sc-d4a0df7d-e2e3-407a-8e37-64768bef14f3.png"
                alt="Brim lineup"
              />
              <div class="title-flex">
                <h3 class="box-title-attack">
                  BRIM LINEUP [ ATTACKING - B SITE ] || ICEBOX
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/pzplAa3IPPU?list=PLcGsYwHKVfzvOXKAX_4xtIHt26vz_Sxa9"
              class="button-attack"
              target="_blank"
              rel="noreferrer"
            >
              See The Lineup
            </a>
          </div>
        </div>

        <div className=" TitleContainer" ref={CypherIcebox}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6XHi6oWBCezSb0v_G8R-qbfCbMf7Trl83RQ&usqp=CAU"
            alt="Deskripsi Gambar"
            className="AgentBulet"
          />
          <span className="caption">CYPHER</span>
        </div>
        <div class="wrap">
          <div class="box">
            <div class="box-top">
              <img
                class="box-image"
                src="https://e0.pxfuel.com/wallpapers/753/642/desktop-wallpaper-cypher-valorant-video-game.jpg"
                alt="Cypher lineup"
              />
              <div class="title-flex">
                <h3 class="box-title-attack">
                  CYPHER SETUP [ ATTACKING - A SITE] || ICEBOX
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/1cV8JVCbRcc?list=PLcGsYwHKVfzvOXKAX_4xtIHt26vz_Sxa9"
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
                src="https://e0.pxfuel.com/wallpapers/753/642/desktop-wallpaper-cypher-valorant-video-game.jpg"
                alt="Cypher lineup"
              />
              <div class="title-flex">
                <h3 class="box-title-attack">
                  CYPHER SETUP [ ATTACKING - B SITE || ICEBOX
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/q16FMWAfjlk?list=PLcGsYwHKVfzvOXKAX_4xtIHt26vz_Sxa9"
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
                src="https://e0.pxfuel.com/wallpapers/753/642/desktop-wallpaper-cypher-valorant-video-game.jpg"
                alt="Cypher lineup"
              />
              <div class="title-flex">
                <h3 class="box-title-defend">
                  CYPHER SETUP [ DEFENDING - A SITE ] || ICEBOX
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/paX-viF4cCo?list=PLcGsYwHKVfzvOXKAX_4xtIHt26vz_Sxa9"
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
                src="https://e0.pxfuel.com/wallpapers/753/642/desktop-wallpaper-cypher-valorant-video-game.jpg"
                alt="Cypher lineup"
              />
              <div class="title-flex">
                <h3 class="box-title-defend">
                  CYPHER SETUP [ DEFENDING - B SITE ] || ICEBOX
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/xtXX3yDo4PU?list=PLcGsYwHKVfzvOXKAX_4xtIHt26vz_Sxa9"
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
}
