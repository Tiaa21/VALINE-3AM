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

export default function BreezeMain() {
  const [map, setMaps] = useState([]);

  useEffect(() => {
    fetch("https://valorant-api.com/v1/maps")
      .then((response) => response.json())
      .then((data) => setMaps(data.data))
      .catch((err) => console.error(`error: ${err}`));
  }, []);

  const SovaBreeze = useRef(null);
  const ViperBreeze = useRef(null);
  const KilljoyBreeze = useRef(null);
  const CypherBreeze = useRef(null);
  const BrimBreeze = useRef(null);
  const KayoBreeze = useRef(null);
  const FadeBreeze = useRef(null);

  const scrollToDiv = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="forbg">
      <div>
        {map.length > 4 && (
          <div className="image-container" key={map[4].uuid}>
            <img
              src={map[4].splash}
              className="img-maps"
              alt={`${map[4].displayName}`}
            />
            <div className="text-maps">
              <h1>{map[4].displayName}</h1>
              <p>{map[4].coordinates}</p>
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
                onClick={() => scrollToDiv(SovaBreeze)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/agents/viper.jpg"
                onClick={() => scrollToDiv(ViperBreeze)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/agents/brimstone.jpg"
                onClick={() => scrollToDiv(BrimBreeze)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/agents/cypher.jpg"
                onClick={() => scrollToDiv(CypherBreeze)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/agents/killjoy.jpg"
                onClick={() => scrollToDiv(KilljoyBreeze)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/agents/kayo1.png"
                onClick={() => scrollToDiv(KayoBreeze)}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="images/agents/fade.png"
                onClick={() => scrollToDiv(FadeBreeze)}
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="AgentLineupContainer">
        <div className=" TitleContainer" ref={SovaBreeze}>
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
                  SOVA LINEUP[ ATTACKING - A SITE] || BREEZE
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/eGtSr_6ZrSg"
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
                  SOVA LINEUP [ ATTACKING - B SITE || BREEZE
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/GURaxsI2FFs"
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
                  SOVA LINEUP [ DEFENDING - A SITE ] || BREEZE
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/E6kJ6Iawnd4"
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
                  SOVA LINEUP [ DEFENDING - B SITE ] || BREEZE
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/2MErzevKP8w"
              class="button-defend"
              target="_blank"
              rel="noreferrer"
            >
              See The Lineup
            </a>
          </div>
        </div>

        <div className=" TitleContainer" ref={ViperBreeze}>
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
                  VIPER LINEUP [ ATTACKING - A SITE || BREEZE
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/xZuAWuK5cmw"
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
                  VIPER LINEUP [ ATTACKING - B SITE || BREEZE
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/QEwGk6dsIrc"
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
                  VIPER SETUP [ DEFENDING - A SITE ] || BREEZE
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/daLmqX_HtXo"
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

        <div className=" TitleContainer" ref={KilljoyBreeze}>
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
                  KILLJOY LINEUP [ ATTACKING - A SITE || BREEZE
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/YrX6MTFRLQA"
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
                  KILLJOY LINEUP [ ATTACKING - B SITE || BREEZE
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
                  KILLJOY SETUP [ DEFENDING - A SITE ] || BREEZE
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/nl4UkskDnK8"
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
                  KILLJOY SETUP [ DEFENDING - B SITE ] || BREEZE
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/Iuf7SlfEvqY"
              class="button-defend"
              target="_blank"
              rel="noreferrer"
            >
              See The Lineup
            </a>
          </div>
        </div>

        <div className=" TitleContainer" ref={CypherBreeze}>
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
                <h3 class="box-title-attack">
                  CYPHER SETUP [ ATTACKING - A SITE || BREEZE
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/sl_GwPLphPc?list=PLcGsYwHKVfzsIlLR1YgqM7CVDOJ5rhh3e"
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
                  CYPHER SETUP [ DEFENDING - A SITE || BREEZE
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/pk2WX16UA7w?list=PLcGsYwHKVfzsIlLR1YgqM7CVDOJ5rhh3e"
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
                  CYPHER SETUP [ DEFENDING - B SITE ] || BREEZE
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/n6FY8vuCI-Y?list=PLcGsYwHKVfzsIlLR1YgqM7CVDOJ5rhh3e"
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
                  CYPHER SETUP [ DEFENDING - B SITE ] || BREEZE [ 2 ]
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/vbYZyKmGVaw?list=PLcGsYwHKVfzsIlLR1YgqM7CVDOJ5rhh3e"
              class="button-defend"
              target="_blank"
              rel="noreferrer"
            >
              See The Lineup
            </a>
          </div>
        </div>

        <div className=" TitleContainer" ref={KayoBreeze}>
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
                  KAYO LINEUP [ ATTACKING - B SITE || BREEZE
                </h3>
              </div>
            </div>
            <a
              href="hhttps://youtu.be/CjLh2I9XhZo?list=PLcGsYwHKVfzsIlLR1YgqM7CVDOJ5rhh3e"
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
                  KAYO LINEUP [ DEFENDING - A SITE || BREEZE
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/_DydnrUJ5YA?list=PLcGsYwHKVfzsIlLR1YgqM7CVDOJ5rhh3e"
              class="button-defend"
              target="_blank"
              rel="noreferrer"
            >
              See The Lineup
            </a>
          </div>
        </div>

        <div className=" TitleContainer" ref={FadeBreeze}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrdUT10AlZsG15vgQWXslFXASSu1JyH2XNBA&usqp=CAU"
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
                  FADE LINEUP [ ATTACKING - A SITE || BREEZE
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/aimfwaKqKjw?list=PLcGsYwHKVfzsIlLR1YgqM7CVDOJ5rhh3e"
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
                  FADE LINEUP [ ATTACKING - B SITE || BREEZE
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/1l2oITsNk4E?list=PLcGsYwHKVfzsIlLR1YgqM7CVDOJ5rhh3e"
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
                  FADE LINEUP [ DEFENDING - A SITE ] || BREEZE
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/DuPvFdij0Zg?list=PLcGsYwHKVfzsIlLR1YgqM7CVDOJ5rhh3e"
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
                  FADE LINEUP [ DEFENDING - B SITE ] || BREEZE
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/BcRrcFKP_qQ?list=PLcGsYwHKVfzsIlLR1YgqM7CVDOJ5rhh3e"
              class="button-defend"
              target="_blank"
              rel="noreferrer"
            >
              See The Lineup
            </a>
          </div>
        </div>

        <div className=" TitleContainer" ref={BrimBreeze}>
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
                  BRIM LINEUP [ ATTACKING - A SITE || BREEZE
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/tH3tIpPE7KM?list=PLcGsYwHKVfzsIlLR1YgqM7CVDOJ5rhh3e"
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
                  BRIM LINEUP [ ATTACKING - A SITE || BREEZE [ 2 ]
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/D8ZNXK-qjA0?list=PLcGsYwHKVfzsIlLR1YgqM7CVDOJ5rhh3e"
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
                  BRIM LINEUP [ ATTACKING - B SITE ] || BREEZE
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/8HhyYbyKYDE?list=PLcGsYwHKVfzsIlLR1YgqM7CVDOJ5rhh3e"
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
                  BRIM LINEUP [ ATTACKING - B SITE ] || BREEZE [ 2 ]
                </h3>
              </div>
            </div>
            <a
              href="https://youtu.be/ktdQZZEKYZM?list=PLcGsYwHKVfzsIlLR1YgqM7CVDOJ5rhh3e"
              class="button-attack"
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
