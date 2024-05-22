import React from 'react'
import { useState } from 'react';
import styles from "./Pagos.module.css" 
import { SlArrowDown } from "react-icons/sl";
import { SlPencil } from "react-icons/sl";
import Infopago from "./Infopago";





function Pagos( Activo) {

 const [isActive,setIsActive] = useState(false);
 const Activar =() =>{
  setIsActive(!isActive)

 }

const valorDeuda=182;
  return (
    <div className={styles.principal}>
        <header>
            <div className={styles.Grouptitulo}><h1>Pagos</h1> <span style={{ paddingTop:10 }}><SlArrowDown/></span></div>
            <div style={{gap:10}} className={styles.Grouptitulo}> 
                <div onClick={Activar}><span style={{fontSize:10,cursor:'pointer'}}>{isActive?'Guardar':'Editar'}</span> <span style={{ fontSize:8 }}><SlPencil /></span></div> 
                <div style={{fontSize:14}}><span style={{color:'#94A3B8'}}>Por cobrar</span> <span style={{color:'#0F172A',fontWeight:'bold'}}>{valorDeuda}USD</span></div> 
            </div>
        </header>

        <section className={styles.Info}>
            <Infopago Deuda={valorDeuda} Activo={isActive} />
        </section>
    </div>
  )
}

export default Pagos