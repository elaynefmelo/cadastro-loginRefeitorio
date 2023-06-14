import Head from 'next/head';
import React from 'react';
import Link from "next/link";




function Menu() {
return (
  <>
  
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  
  <nav className="box_menu">
  <input type="checkbox" id="check" />
  <div className="menu-icon">
    <label htmlFor="check">
      <i className="fas fa-bars" />
    </label>
  </div>
  <div className="sidebar_menu">
    <div className="sidebar_img">
      <img src="./imagens/logo_refeitorio.png" alt="" />
    </div>
    <div className="bnt_close">
      <label htmlFor="check">
        <i className="fas fa-times" />
      </label>
    </div>
    <nav className="menu">
      <ul style={{ listStyle: "none" }}>
        <li>
          <i className="fa-solid fa-utensils" />
          <Link href="/PostarCardapio"> Postar Cardapio</Link>
        </li>
        <li>
          <i className="fas fa-qrcode" />
          <Link href="/ConsultarInformacoes"> Consultar Informações</Link>
        </li>
        <li>
          <i className="fa-solid fa-gear" />
          <Link href="/Configuracoes"> Configurações</Link>
        </li>
      </ul>
      <button className="bnt_sair" type="submit">
        Sair
      </button>
    </nav>
  </div>
</nav>

  
  </>
);
}

export default Menu;

