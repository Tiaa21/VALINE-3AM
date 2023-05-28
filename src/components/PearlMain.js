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

export default function PearlMain() {
  const [map, setMaps] = useState([]);

  useEffect(() => {
    fetch("https://valorant-api.com/v1/maps")
      .then((response) => response.json())
      .then((data) => setMaps(data.data))
      .catch((err) => console.error(`error: ${err}`));
  }, []);

  const SovaPearl = useRef(null);
  const BrimPearl = useRef(null);
  const KilljoyPearl = useRef(null);
  const FadePearl = useRef(null);
  const KayoPearl = useRef(null);
  const ViperPearl = useRef(null);
  const CypherPearl = useRef(null);

  const scrollToDiv = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="forbg">
      <div>
        {map.length > 6 && (
          <div className="image-container" key={map[6].uuid}>
            <img
              src={map[6].splash}
              className="img-maps"
              alt={`${map[6].displayName}`}
            />
            <div className="text-maps">
              <h1>{map[6].displayName}</h1>
              <p>{map[6].coordinates}</p>
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
                onClick={() => scrollToDiv(SovaPearl)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/agents/brimstone.jpg"
                onClick={() => scrollToDiv(BrimPearl)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/agents/cypher.jpg"
                onClick={() => scrollToDiv(CypherPearl)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/agents/killjoy.jpg"
                onClick={() => scrollToDiv(KilljoyPearl)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/agents/fade.png"
                onClick={() => scrollToDiv(FadePearl)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/agents/kayo1.png"
                onClick={() => scrollToDiv(KayoPearl)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/agents/viper.jpg"
                onClick={() => scrollToDiv(ViperPearl)}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="AgentLineupContainer">
        <div className=" TitleContainer" ref={ViperPearl}>
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
                  VIPER LINEUP [ ATTACKING - A SITE || PEARL
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/M9B_kwOwf78"
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
                src="https://cdn.dribbble.com/users/2991/screenshots/13476886/valorant_viper.png"
                alt="Viper lineup"
              />
              <div class="title-flex">
                <h3 class="box-title-defend">
                  VIPER SETUP [ DEFENDING - A SITE ] || PEARL
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/HDMS2k8R2Q4"
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
                  VIPER SETUP [ DEFENDING - B SITE ] || PEARL
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/T4gmB3MPrDw"
              class="button-defend"
              target="_blank"
              rel="noreferrer"
            >
              See The Lineup
            </a>
          </div>
        </div>
        <div className=" TitleContainer" ref={SovaPearl}>
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
                  SOVA LINEUP [ ATTACKING - A SITE] || PEARL
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/J-XB0LjQ48Q"
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
                  SOVA LINEUP [ ATTACKING - B SITE || PEARL
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/HbqSRmkwuPs"
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
                  SOVA LINEUP [ DEFENDING - B SITE ] || PEARL
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/mjoJDb1OsKQ"
              class="button-defend"
              target="_blank"
              rel="noreferrer"
            >
              See The Lineup
            </a>
          </div>
        </div>

        <div className=" TitleContainer" ref={BrimPearl}>
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
                  BRIM LINEUP [ ATTACKING - A SITE || PEARL
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/x7KlNiE6hIY"
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
                  BRIM LINEUP [ ATTACKING - A SITE || PEARL [2]
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/sY0Snmvd7OM"
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
                  BRIM LINEUP [ ATTACKING - B SITE || PEARL
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/jYxpqHrm9V4"
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
                  BRIM LINEUP [ ATTACKING - A SITE || PEARL [2]
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/QG5-38-AEYA"
              class="button-attack"
              target="_blank"
              rel="noreferrer"
            >
              See The Lineup
            </a>
          </div>
        </div>

        <div className=" TitleContainer" ref={KilljoyPearl}>
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
                  KILLJOY LINEUP [ ATTACKING - A SITE || PEARL
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/mhjHJo6rTBM"
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
                  KILLJOY LINEUP [ ATTACKING - B SITE || PEARL
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/POuYONhpps0"
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
                  KILLJOY SETUP [ DEFENDING - A SITE ] || PEARL
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/R8RKMO3YIDU"
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
                  KILLJOY SETUP [ DEFENDING - B SITE ] || PEARL
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/hSSozNd2OVE"
              class="button-defend"
              target="_blank"
              rel="noreferrer"
            >
              See The Lineup
            </a>
          </div>
        </div>

        <div className=" TitleContainer" ref={FadePearl}>
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
                  FADE LINEUP [ ATTACKING - A SITE] || PEARL
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/Wj16l-IPvXI"
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
                  FADE LINEUP [ ATTACKING - B SITE] || PEARL
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/IN-sjBWW5e4"
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
                  FADE LINEUP [ DEFENDING - A SITE ] || PEARL
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/tSarX-EZ8Ck"
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
                  FADE LINEUP [ DEFENDING - B SITE ] || PEARL
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/p80WBck6Aec"
              class="button-defend"
              target="_blank"
              rel="noreferrer"
            >
              See The Lineup
            </a>
          </div>
        </div>

        <div className=" TitleContainer" ref={KayoPearl}>
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
                src="https://e1.pxfuel.com/desktop-wallpaper/903/97/desktop-wallpaper-kayo-valorant-phone-iphone-7091a-2160x3840-for-your-mobile-tablet-kay-o.jpg"
                alt="Kayo lineup"
              />
              <div class="title-flex">
                <h3 class="box-title-attack">
                  KAY/O LINEUP [ ATTACKING - A SITE] || PEARL
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/w4rOtnZTnlQ"
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
                  KAY/O LINEUP [ ATTACKING - B SITE] || PEARL
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/hj8AF6S8Qmw"
              class="button-attack"
              target="_blank"
              rel="noreferrer"
            >
              See The Lineup
            </a>
          </div>
        </div>
        <div className=" TitleContainer" ref={CypherPearl}>
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
                  CYPHER SETUP [ DEFENDING - A SITE ] || PEARL
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/wyCA5sqiiM0"
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
                  CYPHER SETUP [ DEFENDING - A SITE ] || PEARL [ 2 ]
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/3exIxNmVch0"
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
                  CYPHER SETUP [ DEFENDING - B SITE ] || PEARL
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/N1ao7VKnkfU"
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
                  CYPHER SETUP [ DEFENDING - B SITE ] || PEARL [ 2 ]
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/bvuSuslsb_I"
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
