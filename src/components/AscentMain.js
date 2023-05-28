import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import { useState, useEffect } from "react";
import "./Maps.css";
import "../App.css";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/core";
import React, { useRef } from "react";

SwiperCore.use([EffectCoverflow, Pagination, Navigation]);

export default function AscentMain() {
  const [map, setMaps] = useState([]);

  useEffect(() => {
    fetch("https://valorant-api.com/v1/maps")
      .then((response) => response.json())
      .then((data) => setMaps(data.data))
      .catch((err) => console.error(`error: ${err}`));
  }, []);

  const SovaAscent = useRef(null);
  const ViperAscent = useRef(null);
  const KilljoyAscent = useRef(null);
  const CypherAscent = useRef(null);
  const BrimAscent = useRef(null);
  const FadeAscent = useRef(null);
  const KayoAscent = useRef(null);

  const scrollToDiv = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="forbg">
      <div>
        {map.length > 0 && (
          <div className="image-container" key={map[0].uuid}>
            <img
              src={map[0].splash}
              className="img-maps"
              alt={`${map[0].displayName}`}
            />
            <div className="text-maps">
              <h1>{map[0].displayName}</h1>
              <p>{map[0].coordinates}</p>
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
                alt="sova"
                onClick={() => scrollToDiv(SovaAscent)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/agents/viper.jpg"
                alt="viper"
                onClick={() => scrollToDiv(ViperAscent)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/agents/cypher.jpg"
                alt="cypher"
                onClick={() => scrollToDiv(CypherAscent)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/agents/killjoy.jpg"
                alt="killjoy"
                onClick={() => scrollToDiv(KilljoyAscent)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/agents/brimstone.jpg"
                alt="brim"
                onClick={() => scrollToDiv(BrimAscent)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/agents/fade.png"
                alt="fade"
                onClick={() => scrollToDiv(FadeAscent)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/agents/kayo1.png"
                alt="kayo"
                onClick={() => scrollToDiv(KayoAscent)}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="AgentLineupContainer">
        <div className=" TitleContainer" ref={SovaAscent}>
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
                  SOVA [ ATTACKING - A SITE] || ASCENT
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/vW8q15pvcF0"
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
                  SOVA LINEUP [ ATTACKING - B SITE || ASCENT
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/qUWLHY65hck"
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
                  SOVA LINEUP [ DEFENDING - A SITE ] || ASCENT
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/O6Tgxlfb1XM"
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
        </div>

        <div className=" TitleContainer" ref={ViperAscent}>
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
                  VIPER LINEUP [ ATTACKING - A SITE || ASCENT
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/sJ77XNMOoqI"
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
                  VIPER LINEUP [ ATTACKING - B SITE || ASCENT
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/aJWTodWpoA4"
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
                  VIPER SETUP [ DEFENDING - A SITE ] || ASCENT
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/iGvRnlAST8Y"
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
                  VIPER SETUP [ DEFENDING - B SITE ] || ASCENT
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/cFV3ZfCLcc4"
              class="button-defend"
              target="_blank"
              rel="noreferrer"
            >
              See The Lineup
            </a>
          </div>
        </div>

        <div className=" TitleContainer" ref={KilljoyAscent}>
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
                  KILLJOY LINEUP [ ATTACKING - A SITE || ASCENT
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/eBMWroCpKDE"
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
                  KILLJOY LINEUP [ ATTACKING - B SITE || ASCENT
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/993IeaUQtv0"
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
                  KILLJOY SETUP [ DEFENDING - A SITE ] || ASCENT
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/_uYZm3gm26k"
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
                  KILLJOY SETUP [ DEFENDING - B SITE ] || ASCENT
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/igPFBYNlvAI"
              class="button-defend"
              target="_blank"
              rel="noreferrer"
            >
              See The Lineup
            </a>
          </div>
        </div>

        <div className=" TitleContainer" ref={KayoAscent}>
          <img
            src="https://valorantinfo.com/images/id/kayo_valorant_icon_3336.webp"
            alt="Deskripsi Gambar"
            className="AgentBulet"
          />
          <span className="caption">KAY/O</span>
        </div>
        <div class="wrap">
          <div class="box">
            <div class="box-top">
              <img
                class="box-image"
                src="https://i.ytimg.com/vi/j9Hx9_O115U/maxresdefault.jpg"
                alt="Kayo lineup"
              />
              <div class="title-flex">
                <h3 class="box-title-attack">
                  KAY/O LINEUP [ ATTACKING - A SITE || ASCENT
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/qrtcYaa11NY?list=PLcGsYwHKVfzvStPtKwu-CZFXZtNnsmPlH"
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
                src="https://i.ytimg.com/vi/j9Hx9_O115U/maxresdefault.jpg"
                alt="Kayo lineup"
              />
              <div class="title-flex">
                <h3 class="box-title-attack">
                  KILLJOY LINEUP [ ATTACKING - B SITE || ASCENT
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/993IeaUQtv0"
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
                src="https://i.ytimg.com/vi/j9Hx9_O115U/maxresdefault.jpg"
                alt="Kayo lineup"
              />
              <div class="title-flex">
                <h3 class="box-title-defend">
                  KILLJOY SETUP [ DEFENDING - A SITE ] || ASCENT
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/_uYZm3gm26k"
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
                src="https://i.ytimg.com/vi/j9Hx9_O115U/maxresdefault.jpg"
                alt="Kayo lineup"
              />
              <div class="title-flex">
                <h3 class="box-title-defend">
                  KILLJOY SETUP [ DEFENDING - B SITE ] || ASCENT
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/igPFBYNlvAI"
              class="button-defend"
              target="_blank"
              rel="noreferrer"
            >
              See The Lineup
            </a>
          </div>
        </div>

        <div className=" TitleContainer" ref={BrimAscent}>
          <img
            src="https://www.esports.net/wp-content/uploads/2022/08/Valorant-Brimstone-Guide.png"
            alt="Deskripsi Gambar"
            className="AgentBulet"
          />
          <span className="caption">BRIMSTONE</span>
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
                  BRIM LINEUP [ ATTACKING - A SITE || ASCENT
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/m8kY4DcQdqc"
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
                  BRIM LINEUP [ ATTACKING - B SITE || ASCENT
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/4TIsaDm8Vx4"
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
                <h3 class="box-title-defend">
                  BRIM SETUP [ DEFENDING - A SITE ] || ASCENT
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/4TIsaDm8Vx4"
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
                <h3 class="box-title-defend">
                  BRIM SETUP [ DEFENDING - B SITE ] || ASCENT
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/1Pny9iqDO_8"
              class="button-defend"
              target="_blank"
              rel="noreferrer"
            >
              See The Lineup
            </a>
          </div>
        </div>

        <div className=" TitleContainer" ref={FadeAscent}>
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
                  FADE LINEUP [ ATTACKING - A SITE] || ASCENT
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/QWypoZxyONA"
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
                  FADE LINEUP [ ATTACKING - B SITE] || ASCENT
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/s07AaLvKNS88"
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
                  FADE LINEUP [ DEFENDING - A SITE ] || ASCENT
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/zL-kR8LbPUs"
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
                  FADE LINEUP [ DEFENDING - B SITE ] || ASCENT
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/vcTSiKdMCZc"
              class="button-defend"
              target="_blank"
              rel="noreferrer"
            >
              See The Lineup
            </a>
          </div>
        </div>

        <div className=" TitleContainer" ref={CypherAscent}>
          <img
            src="https://valorantinfo.com/images/id/cypher_valorant_icon_3338.webp"
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
                <h3 class="box-title-defend">
                  CYPHER SETUP [ DEFENDING - A SITE ] || ASCENT
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/z8kptNcW_DE"
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
                  CYPHER SETUP [ DEFENDING - A SITE] || ASCENT [ 2 ]
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/xOxquSgDKCg"
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
                  CYPHER SETUP [ DEFENDING - B SITE ] || ASCENT
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/gDFBZWgZ36c"
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
                  CYPHER SETUP [ DEFENDING - B SITE ] || ASCENT [ 2 ]
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/Vf1eyoxvxdQ"
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
