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

export default function FractureMain() {
  const [map, setMaps] = useState([]);

  useEffect(() => {
    fetch("https://valorant-api.com/v1/maps")
      .then((response) => response.json())
      .then((data) => setMaps(data.data))
      .catch((err) => console.error(`error: ${err}`));
  }, []);

  const BrimFracture = useRef(null);
  const KayoFracture = useRef(null);
  const SovaFracture = useRef(null);
  const KilljoyFracture = useRef(null);
  const ViperFracture = useRef(null);
  const CypherFracture = useRef(null);
  const FadeFracture = useRef(null);

  const scrollToDiv = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="forbg">
      <div>
        {map.length > 2 && (
          <div className="image-container" key={map[2].uuid}>
            <img
              src={map[2].splash}
              className="img-maps"
              alt={`${map[2].displayName}`}
            />
            <div className="text-maps">
              <h1>{map[2].displayName}</h1>
              <p>{map[2].coordinates}</p>
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
                onClick={() => scrollToDiv(SovaFracture)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/agents/brimstone.jpg"
                onClick={() => scrollToDiv(BrimFracture)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/agents/kayo1.png"
                onClick={() => scrollToDiv(KayoFracture)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/agents/cypher.jpg"
                onClick={() => scrollToDiv(CypherFracture)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/agents/killjoy.jpg"
                onClick={() => scrollToDiv(KilljoyFracture)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/agents/fade.png"
                onClick={() => scrollToDiv(FadeFracture)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/agents/viper.jpg"
                onClick={() => scrollToDiv(ViperFracture)}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="AgentLineupContainer">
        <div className=" TitleContainer" ref={BrimFracture}>
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
                  BRIM LINEUP [ ATTACKING - A SITE || FRACTURE
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/qHcy8CTvihI"
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
                src="https://files.cults3d.com/uploaders/21595173/illustration-file/2ab12856-c629-4731-bf91-18839f968638/defw3sc-d4a0df7d-e2e3-407a-8e37-64768bef14f3.png"
                alt="Brim lineup"
              />
              <div class="title-flex">
                <h3 class="box-title-defend">
                  BRIM SETUP [ DEFENDING - A SITE ] || FRACTURE
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/3Gb28-1tu3k"
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
                  BRIM SETUP [ DEFENDING - B SITE ] || FRACTURE
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/CML-wjVvDBM"
              class="button-defend"
              target="_blank"
              rel="noreferrer"
            >
              See The Lineup
            </a>
          </div>
        </div>

        <div className=" TitleContainer" ref={KayoFracture}>
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
                  KAYO LINEUP [ ATTACKING - A SITE || FRACTURE
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/AFvNAvHoJ1M"
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
                  KAYO LINEUP [ ATTACKING - B SITE || FRACTURE
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/lOL4OA_JaCw"
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
                  KAYO SETUP [ DEFENDING - A SITE ] || FRACTURE
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/gY74iZQqTf0"
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
                  KAYO SETUP [ DEFENDING - B SITE ] || FRACTURE
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/_Y3Jvt4f46g"
              class="button-defend"
              target="_blank"
              rel="noreferrer"
            >
              See The Lineup
            </a>
          </div>
        </div>
        <div className=" TitleContainer" ref={SovaFracture}>
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
                  SOVA LINEUP [ ATTACKING - A SITE] || FRACTURE
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/IwNc3oLLGKI"
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
                  SOVA LINEUP [ ATTACKING - B SITE || FRACTURE
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/RWk0BUJ1vyY"
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
                  SOVA LINEUP [ DEFENDING - A SITE ] || FRACTURE
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/DQLSM-jb0cA"
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
                  SOVA LINEUP [ DEFENDING - B SITE ] || FRACTURE
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/RYKkfzIFrA8"
              class="button-defend"
              target="_blank"
              rel="noreferrer"
            >
              See The Lineup
            </a>
          </div>
        </div>
        <div className=" TitleContainer" ref={KilljoyFracture}>
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
                  KILLJOY LINEUP [ ATTACKING - A SITE || FRACTURE
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/8AdTh3zEgds"
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
                  KILLJOY LINEUP [ ATTACKING - B SITE || FRACTURE
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/8Ca3H2lak4A"
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
                  KILLJOY SETUP [ DEFENDING - A SITE ] || FRACTURE
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/72lWgfsD1BU"
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
                  KILLJOY SETUP [ DEFENDING - B SITE ] || FRACTURE
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/2Zyy2cstqL8"
              class="button-defend"
              target="_blank"
              rel="noreferrer"
            >
              See The Lineup
            </a>
          </div>
        </div>

        <div className=" TitleContainer" ref={FadeFracture}>
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
                  FADE LINEUP [ ATTACKING - A SITE] || FRACTURE
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/CoHNe5rAUTU"
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
                  FADE LINEUP [ ATTACKING - B SITE] || FRACTURE
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/XYsmb-utExY"
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
                  FADE LINEUP [ DEFENDING - A SITE ] || FRACTURE
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/e1bw6gSHrr8"
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
                  FADE LINEUP [ DEFENDING - B SITE ] || FRACTURE
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/NwtbdtggxCI"
              class="button-defend"
              target="_blank"
              rel="noreferrer"
            >
              See The Lineup
            </a>
          </div>
        </div>
        <div className=" TitleContainer" ref={ViperFracture}>
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
                  VIPER LINEUP [ ATTACKING - A SITE] || FRACTURE
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/Dzl54wYHCnA"
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
                  VIPER LINEUP [ ATTACKING - B SITE] || FRACTURE
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/NR4jhqpTSuY"
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
                  VIPER SETUP [ DEFENDING - A SITE ] || FRACTURE
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/d7lmtGnm5TE"
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
                  VIPER SETUP [ DEFENDING - B SITE ] || FRACTURE
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/TM4-wOicSp4"
              class="button-defend"
              target="_blank"
              rel="noreferrer"
            >
              See The Lineup
            </a>
          </div>
        </div>

        <div className=" TitleContainer" ref={CypherFracture}>
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
                  CYPHER SETUP [ DEFENDING - A SITE] || FRACTURE
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/HSKmSxghwaU"
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
                  CYPHER SETUP [ DEFENDING - A SITE] || FRACTURE [ 2 ]
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/JSElXBYrFTc"
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
                  CYPHER SETUP [ DEFENDING - B SITE ] || FRACTURE
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/Z3JEiJNqp4U"
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
                  CYPHER SETUP [ DEFENDING - BREEZE SITE ] || FRACTURE [ 2 ]
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/69xBvRXu9fA"
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
