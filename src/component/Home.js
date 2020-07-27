import React, { useState } from "react";
import avator from "../images/Logo.png";
import "../App.css";
import styled from "styled-components";
import homeSet from "../images/02.png";
import useWebAnimation from "@wellyshen/use-web-animations";
import { AnimatedOnScroll } from "react-animated-css-onscroll";

const Nav = styled.nav`
  padding: 0 20px;
  min-height: 9vh;
  background: #ffffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 25px;
  color: white;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  li:nth-child(2) {
    margin: 0px 20px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li``;

const Link = styled.a`
  color: black;
  text-decoration: none;
`;

const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;
  @media (min-width: 769px) {
    display: none;
    .glow-on-hover {
      display: none;
    }
  }
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: black;
  transition: width 0.4s ease-in-out;
  :nth-child(2) {
    width: ${(props) => (props.open ? "40%" : "70%")};
  }
`;

const Overlay = styled.div`
  position: absolute;
  height: ${(props) => (props.open ? "91vh" : 0)};
  width: 100%;
  background: #fff;
  transition: height 0.4s ease-in-out;
  @media (min-width: 769px) {
    display: none;
  }
`;

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  li {
    opacity: ${(props) => (props.open ? 1 : 0)};
    font-size: 25px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
  }
  li:nth-child(2) {
    margin: 50px 0px;
  }
`;

export const Home = () => {
  const { ref } = useWebAnimation({
    keyframes: [
      { transform: "translateY(5px)" }, // Move by 500px
      { transform: "translateY(-5px)" }, // Go through three colors
    ],
    timing: {
      delay: 500, // Start with a 500ms delay
      duration: 1000, // Run for 1000ms
      iterations: Infinity, // Repeat once
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
    },
  });
  const [toggle, toggleNav] = useState(false);
  return (
    <div className="Home">
      <div>
        <Nav>
          <Logo style={{ cursor: "pointer" }}>
            <img src={avator} alt="Logo" width="70%" height="85vh" />
          </Logo>
          <Menu>
            <Item>
              <Link className="hover-2" target="#" href="#">
                Home
              </Link>
            </Item>
            <Item>
              <Link className="hover-2" target="#" href="#">
                Service
              </Link>
            </Item>
            <Item>
              <Link
                className="hover-2"
                target="#"
                href="https://github.com/bilalhadid"
              >
                Contact
              </Link>
            </Item>
          </Menu>
          <NavIcon onClick={() => toggleNav(!toggle)}>
            <Line open={toggle} />
            <Line open={toggle} />
            <Line open={toggle} />
          </NavIcon>
        </Nav>

        <Overlay open={toggle}>
          <OverlayMenu open={toggle}>
            <Item>
              <Link className="hover-2" target="#" href="#">
                Home
              </Link>
            </Item>
            <Item>
              <Link className="hover-2" target="#" href="#">
                Service
              </Link>
            </Item>
            <Item>
              <Link className="hover-2" href="https://github.com/bilalhadid">
                Contact
              </Link>
            </Item>
          </OverlayMenu>
        </Overlay>
      </div>
      <div className="texto">
        <div className="texto1">
          <AnimatedOnScroll animationIn="bounceInRight">
            <h3>We Have 24/7 Support team</h3>

            <h1>
              Best Software Company<span className="hidden"> Since 2020</span>
            </h1>

            <p>
              look like readable English. Many desktop publishing packages and
              web page editors now use Lorem Ipsum as their default model text,
              <span className="hidden">
                {" "}
                and a search for 'lorem ipsum' will uncover many web sites still
                in their infancy.
              </span>
            </p>
            <button className="glow-on-hover" type="button">
              Portfolio
            </button>

            <div className="Subscribe">
              <input type="text" placeholder="Inter Your Email Address" />
              <button className="btnmy">Subscribe</button>
            </div>
          </AnimatedOnScroll>
        </div>

        <div className="HomeSet">
          <img className="set" src={homeSet} alt="G" ref={ref} />
        </div>
      </div>
    </div>
  );
};
