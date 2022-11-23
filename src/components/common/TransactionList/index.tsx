import React, { useEffect, useState } from "react";
import global from  '../../../global.module.scss';
import Styles from  './styles.module.scss';

function TransactionList(props:any) {
  const [nameAvatar, setNameAvatar] = useState('')
  useEffect(() => {
    return () => {
      setNameAvatar( `${ props.name.split(' ')[0].substring(0, 1) } ${ props.name.split(' ')[1].substring(0, 1) }` );
    }
  }, [nameAvatar])
  
  return (
    <div className={`${Styles.trxList} ${global.dflexCenter}`}>
      <div className={`${global.dflexCenter}`}>
        <div className={Styles.trxName}>
          <p>{ nameAvatar }</p>
        </div>
        <div className={Styles.trxContent}>
          <h2>{ props.name }</h2>
          <p className={Styles.date}> {props.date}  at {props.time} </p>
        </div>
      </div>
      <div className={Styles.trxPoints}>
        <h4> {props.points} </h4>
      </div>
    </div>
  );
}

export default TransactionList;
