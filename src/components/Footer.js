import React from "react";
import "./Footer.css";
import {
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLine,
} from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer class="footer-distributed">
        <div class="footer-left">
          <img src="/images/logomain.png" alt="Logo" />

          <p class="footer-company-name">
            Copyright © 2023 <strong>Valine</strong> All rights reserved
          </p>
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <a
                href="https://goo.gl/maps/rmzT7R8894AQmBiZ6"
                target="_blank"
                rel="noopener noreferrer"
              >
                Universitas Multimedia Nusantara
              </a>
            </p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>
              <a
                href="https://wa.me/6285921774621"
                target="_blank"
                rel="noopener noreferrer"
              >
                +62 859-217-7621
              </a>
            </p>
          </div>
          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a
                href="https://mail.google.com/mail/u/?authuser=chyntia.irawan@student.umn.ac.id"
                target="_blank"
                rel="noopener noreferrer"
              >
                chyntia.irawan@student.umn.ac.id
              </a>
            </p>
          </div>
        </div>
        <div class="footer-right">
          <p class="footer-company-about">
            <span>About the website</span>
            <strong>Valine</strong> is a Website of Valorant Lineups, where you
            will find amazing lineups to use on every map in Valorant as well as
            every agent to avoid hardstucking in a certain rank
          </p>
          <div class="footer-icons">
            <a
              href="https://youtube.com/@3AMTRIMAMU"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100081443119310"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebook />
            </a>
            <a href="#">
              <FaTwitter />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a href="#">
              <FaLine />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
