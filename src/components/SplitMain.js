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

export default function SplitMain() {
  const [map, setMaps] = useState([]);

  useEffect(() => {
    fetch("https://valorant-api.com/v1/maps")
      .then((response) => response.json())
      .then((data) => setMaps(data.data))
      .catch((err) => console.error(`error: ${err}`));
  }, []);

  const ViperSplit = useRef(null);
  const KilljoySplit = useRef(null);
  const SovaSplit = useRef(null);
  const BrimSplit = useRef(null);
  const CypherSplit = useRef(null);
  const FadeSplit = useRef(null);
  const KayoSplit = useRef(null);
  const scrollToDiv = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="forbg">
      <div>
        {map.length > 1 && (
          <div className="image-container" key={map[1].uuid}>
            <img
              src={map[1].splash}
              className="img-maps"
              alt={`${map[1].displayName}`}
            />
            <div className="text-maps">
              <h1>{map[1].displayName}</h1>
              <p>{map[1].coordinates}</p>
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
                onClick={() => scrollToDiv(SovaSplit)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/agents/viper.jpg"
                onClick={() => scrollToDiv(ViperSplit)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/agents/brimstone.jpg"
                onClick={() => scrollToDiv(BrimSplit)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/agents/cypher.jpg"
                onClick={() => scrollToDiv(CypherSplit)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/agents/killjoy.jpg"
                onClick={() => scrollToDiv(KilljoySplit)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/agents/fade.png"
                onClick={() => scrollToDiv(FadeSplit)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/agents/kayo1.png"
                onClick={() => scrollToDiv(KayoSplit)}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="AgentLineupContainer">
        <div className=" TitleContainer" ref={ViperSplit}>
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
                  VIPER LINEUP [ ATTACKING - A SITE || SPLIT
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
                  VIPER LINEUP [ ATTACKING - B SITE || SPLIT
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/hPKHmAuO5iM"
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
                  VIPER SETUP [ DEFENDING - A SITE ] || SPLIT
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/xlrNVzU29tQ"
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
                  VIPER SETUP [ DEFENDING - B SITE ] || SPLIT
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/H_dIpJA4-KA"
              class="button-defend"
              target="_blank"
              rel="noreferrer"
            >
              See The Lineup
            </a>
          </div>
        </div>

        <div className=" TitleContainer" ref={KilljoySplit}>
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
                  KILLJOY LINEUP [ ATTACKING - A SITE || SPLIT
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/U4gvc-K28ps"
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
                  KILLJOY LINEUP [ ATTACKING - B SITE || SPLIT
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/vK98cC8s6EY"
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
                  KILLJOY SETUP [ DEFENDING - A SITE ] || SPLIT
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/1nMbb3YGv9k"
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
                  KILLJOY SETUP [ DEFENDING - B SITE ] || SPLIT
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/xtcCWUgnG4g"
              class="button-defend"
              target="_blank"
              rel="noreferrer"
            >
              See The Lineup
            </a>
          </div>
        </div>
        <div className=" TitleContainer" ref={SovaSplit}>
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
                  SOVA LINEUP [ ATTACKING - A SITE] || SPLIT
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/GLE0kiVd1XM"
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
                  SOVA LINEUP [ ATTACKING - B SITE || SPLIT
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/_lns8ol0ASY"
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
                  SOVA LINEUP [ DEFENDING - A SITE ] || SPLIT
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/Yx-MG6OV-sY"
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
                  SOVA LINEUP [ DEFENDING - B SITE ] || SPLIT
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/XkrY-eHDDmg"
              class="button-defend"
              target="_blank"
              rel="noreferrer"
            >
              See The Lineup
            </a>
          </div>
        </div>

        <div className=" TitleContainer" ref={BrimSplit}>
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
                  BRIM LINEUP [ ATTACKING - A SITE || SPLIT
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/zeT6A-5Jeig"
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
                  BRIM LINEUP [ ATTACKING - A SITE || SPLIT [2]
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/wXpfTp8RSg4"
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
                  BRIM LINEUP [ ATTACKING - B SITE || SPLIT
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/3BJ3br3WYYQ"
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
                  BRIM LINEUP [ ATTACKING - B SITE || SPLIT [2]
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/9QQnk7LZ6Pk"
              class="button-attack"
              target="_blank"
              rel="noreferrer"
            >
              See The Lineup
            </a>
          </div>
        </div>
        <div className=" TitleContainer" ref={FadeSplit}>
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
                  FADE LINEUP [ ATTACKING - A SITE] || SPLIT
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/icsr5bb-PxQ"
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
                  FADE LINEUP [ ATTACKING - B SITE] || SPLIT
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/219ytjCSEi8"
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
                  FADE LINEUP [ DEFENDING - A SITE ] || SPLIT
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/m3NAQMeN-E4"
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
                  FADE LINEUP [ DEFENDING - B SITE ] || SPLIT
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/C2hdyaXSevM"
              class="button-defend"
              target="_blank"
              rel="noreferrer"
            >
              See The Lineup
            </a>
          </div>
        </div>

        <div className=" TitleContainer" ref={KayoSplit}>
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
                  KAY/O LINEUP [ ATTACKING - A SITE] || SPLIT
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/0dtuVhLvaB4"
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
                  KAY/O LINEUP [ ATTACKING - B SITE] || SPLIT
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/weZbaeddr_o"
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
                  KAY/O LINEUP [ DEFENDING - A SITE ] || SPLIT
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/07o4KlI6CKg"
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
                  KAY/O LINEUP [ DEFENDING - B SITE ] || SPLIT
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/O_tnXtzvyus"
              class="button-defend"
              target="_blank"
              rel="noreferrer"
            >
              See The Lineup
            </a>
          </div>
        </div>
        <div className=" TitleContainer" ref={CypherSplit}>
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
                  CYPHER SETUP [ DEFENDING - A SITE ] || SPLIT
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/jnVhkeGyICY"
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
                  CYPHER SETUP [ DEFENDING - A SITE ] || SPLIT [ 2 ]
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/xosbbtraH3I"
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
                  CYPHER SETUP [ DEFENDING - B SITE ] || SPLIT
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/xosbbtraH3I"
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
                  CYPHER SETUP [ DEFENDING - B SITE ] || SPLIT [ 2 ]
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/LRaOn6k0TJk"
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
