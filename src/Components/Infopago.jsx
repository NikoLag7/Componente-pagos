import React from 'react'
import styles from "./Infopago.module.css" 
import { LuCircle } from "react-icons/lu";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { CiCalendar } from "react-icons/ci";
import { Input, Label } from 'keep-react'
import { MdModeEdit } from "react-icons/md";






function Infopago() {

  const items =["hola","primo"]
  return (
    <div style={{display:'flex', justifyContent:'center'}}>
    {items?.map((item,i)=> (
      <div className={styles.principal} key={i}>
        <MdModeEdit className={styles.itemicon}style={{padding:3,fontSize:30,textAlign:'center',color:'#FF7A66',border:'solid 3px',borderColor:'#FF7A66',borderRadius:'80%'}} />
        <input className={styles.inputs} type="text" id="fname" name="fname" placeholder="Anticipo"/>
        <input className={styles.inputs} type="text" id="fname" name="fname" placeholder="54,5"/>
        <div className={styles.porcentajes}><AiOutlineMinusCircle /><span>30%</span><AiOutlinePlusCircle /></div>
        <span>Vence</span>
        <div><CiCalendar /><span>Fecha</span></div>
      </div>
    
    ))}
    </div>
  )
}

export default Infopago