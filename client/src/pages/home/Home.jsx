import React from "react";
import "./Home.css"
import LoginBtn from "../../components/loginBtn/LoginBtn";
import RegisterBtn from "../../components/registerBtn/RegisterBtn";
import Caroussel from "../../components/carousel/Carousel";

function Home() {
  return (
    <>
      <section className="welcome_section">
        <h1>MONEY MANAGER</h1>
        <Caroussel />
      </section>
      <section className="welcome_info">
        <h2 className="welcome_article">Solución sencilla para su presupuesto.</h2>
        <p className="welcome_text">Contar y distribuir los ingresos. <br /> Correctamente...</p>
      </section>
      <section className="welcome_btns">
        <LoginBtn/>
        <RegisterBtn/>
      </section>
    </>
  );
}

export default Home;
