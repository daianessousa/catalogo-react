import React from 'react'
import styles from './Contato.module.css'
import foto from '../img/contato.jpg'
import Head from './Head'


const Contato = () => {
  return (
    <section className={`${styles.contato} animeLeft`}>
      <Head title="Ranek | Contato" description="Entre em Contato" />
      <img src={foto}  alt='Máquina de escrever' />
      <div> 
        <h1> entre em contato </h1>
        <ul className={styles.dados}> 
          <li> email@ </li>
          <li> 9999-9999</li>
          <li> Endereço, endereço 002, 999 </li>
        </ul>
      </div>
      
    </section>
  )
}

export default Contato
