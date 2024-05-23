import React from 'react'
import styles from "./Infopago.module.css" 
import Popup from "./Popup";
import { AiOutlineMinusCircle } from "react-icons/ai";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { MdModeEdit } from "react-icons/md";
import { useState, useEffect } from 'react';
import { Cursor } from 'phosphor-react';


function Infopago({Activo, Deuda}) {

  const [items,setItems] =useState([
    {
      detalle:'Anticipo',
      valor:Deuda,
      porcentaje:100,
      fecha:'2023-05-18',
      pagado:false
    }]);

  const[porcent,setPortcent] = useState(100);
  const [currentDate, setCurrentDate] = useState('');
  const [ActiveIndex,setActiveIndex] = useState(null);
  const[ActivePopup,setActivePopup] = useState(false);
  const [tipopago, setTipopago] = useState('');


  const afterIndex=(index, newItem,porcentual)=>{
    
    const newArray = [...items.slice(0, index + 1), newItem, ...items.slice(index + 1)];
    setItems(newArray);

    porcentual= porcentual%items.length===0?Math.trunc(porcentual):porcentual.toFixed(1);
  
    setItems(prevItems=>prevItems.map(item=>({
      ...item, porcentaje:porcentual
    })));

    setItems(prevItems=>prevItems.map(item=>({
      ...item, valor:(Deuda*(porcentual/100)).toFixed(1)
    })));

    console.log(items);
  }
  
  const restarporcentaje = (index,porcentual)=>{
    setItems(prevItems=>{
    const newItem =[...prevItems];
      
        if (newItem[index]===newItem[0]) {
          newItem[index+1]={
            ...newItem[index+1],porcentaje:parseInt(newItem[index + 1].porcentaje)+1
          };
          newItem[index]={
            ...newItem[index],porcentaje:parseInt(newItem[index].porcentaje)-1
          };
          
        }
          
         else  {
          newItem[index]={
            ...newItem[index],porcentaje:parseInt(newItem[index].porcentaje)-1
          };
          newItem[index-1]={
            ...newItem[index-1],porcentaje:parseInt(newItem[index - 1].porcentaje)+1
          };
        }
        
     
      
      return newItem;
    })
  }

  const sumarporcentaje = (index,porcentual)=>{
 
    setItems(prevItems=>{
  const newItem =[...prevItems];
      
  if (newItem[index]===newItem[0]) {
    newItem[index+1]={
      ...newItem[index+1],porcentaje:parseInt(newItem[index + 1].porcentaje)-1,valor:Deuda*(newItem[index].porcentaje/100)
    };
    newItem[index]={
      ...newItem[index],porcentaje:parseInt(newItem[index].porcentaje)+1,
    }; 
  }else{
    newItem[index]={
      ...newItem[index],porcentaje:parseInt(newItem[index].porcentaje)+1
    };
    newItem[index-1]={
      ...newItem[index-1],porcentaje:parseInt(newItem[index - 1].porcentaje)-1
    };
  }    
   return newItem;
    })
  }

  const clicIndex = (index) => {
    setActiveIndex(index);
   
  }
  
  const activarPopup = (index) => {
    setActiveIndex(index)
    setActivePopup(!ActivePopup)
    console.log(items);
  }
  
  const realizarPago = (index) => {
    console.log(index);
    setItems(prevItems => {
      const newItem =[...prevItems];
      newItem[index]={
        ...newItem[index],pagado:true,tipoPago:tipopago
      };
      return newItem;
    })
  
  }


  const OpcionPago=(event) => {
    setTipopago(event.target.value);
  }

  const date =new Date().toISOString().split('T')[0];
  

  useEffect(() => {
    const today =new Date();
    const formattedDate = today.toISOString().split('T')[0];
    setCurrentDate(formattedDate);
  }, []);

  return (
    <div>
      <Popup show={ActivePopup} tipoPago={OpcionPago} pagado={()=>realizarPago(ActiveIndex)} onClose={()=>activarPopup()} />
    <div className={styles.container} style={{ display: 'flex', visibility:ActivePopup?'collapse':'visible',}}>
        {items?.map((item, index) => (
          
          <React.Fragment key={index}  >
            <div className={styles.principal} >
              <MdModeEdit onClick={ ()=>activarPopup(index)}  className={styles.itemicon} style={{ padding: 3, fontSize: 30, textAlign: 'center', border: 'solid 3px', borderColor: '#FF7A66', borderRadius: '80%' }} />
              <input disabled={!Activo } className={styles.inputs} type="text" id="fname" name="fname" placeholder="Anticipo"  value={item.detalle} />
              <input disabled={!Activo} className={styles.inputs} type="text" id="fname" name="fname" placeholder="54,5" value={(Deuda*(item.porcentaje/100).toFixed(2))} />
              <div className={styles.porcentajes}>
                <AiOutlineMinusCircle onClick={()=>restarporcentaje(index,item.porcentaje)} style={{visibility:!Activo?'hidden':'visible', cursor:'pointer'}}/>
                <span>{item.porcentaje}%</span>
                <AiOutlinePlusCircle onClick={() => sumarporcentaje(index,item.porcentaje)} style={{visibility:!Activo?'hidden':'visible', cursor:'pointer'}}/>
              </div>
              <span>Vence</span>
              <input type="date" id="start" disabled={!Activo} name="trip-start" value={currentDate} min={date} max="" onChange={(e) => setCurrentDate(e.target.value)}/>
              <span style={{fontSize:10, color:'#059669',visibility:item.pagado===false?'collapse':'visible'}}>Pagado {new Date().toLocaleDateString()} con {item.tipoPago} </span>
            </div>
            {index <= (items.length-1) && <AiOutlinePlusCircle onClick={()=>afterIndex(index,{detalle:'pago '+ (index + 1), valor:100,porcentaje:porcent/(items.length+1),fecha:'2023-05-18',},100/(items.length+1))} className={styles.separadorsum} style={{ marginLeft:items.length===1? 70 : 0,marginTop: '50px', fontSize: '35px', color: '#FF7A66' }} />}

          </React.Fragment>   
        ))}

        
      </div>
      </div>
      )
  
}
export default Infopago