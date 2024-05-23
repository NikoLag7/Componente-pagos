import React, { useState } from 'react';
import './Popup.module.css'; 
import { GoX } from "react-icons/go";


const Popup = ({ show, onClose, pagado, tipoPago}) => {
 
 
    if (!show) {
    return null;
  }




  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <div style={{ width:'100%',display:'flex',justifyContent:'flex-end'}}>
            <GoX onClick={onClose} style={{ alignItems:'end'}}/>
        </div>
        <h2>Pagar</h2>
        <p>Selecciona metodo de pago</p>
        <select name="cars" id="dropdown" value={tipoPago} onChange={tipoPago}>
            <option value="Efectivo">Efectivo</option>
            <option value="Tarjeta">Tarjeta</option>
        </select>
        <div style={{marginTop:10, width:'100%',display:'flex',justifyContent:'center'}}>
             <button onClick={pagado}>Guardar</button>
        </div>

      </div>
    </div>
  );
};

export default Popup;