import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/38424834?s=460&u=30562206e41cd265195a7af9c9d57eb6e6374ea8&v=4" alt="Jonathan Cavalcante"/>
        <div>
          <strong>Jonathan Cavalcante</strong>
          <span>React</span>
        </div>
      </header>

      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        <br/><br/>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. 
      </p>
      
      <footer>
        <p>
          Preço/hora
          <strong>R$50,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;