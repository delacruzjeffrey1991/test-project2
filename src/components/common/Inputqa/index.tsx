import React from "react";
import Styles from './styles.module.scss';
import { useState, useEffect, ChangeEvent } from "react";

function Inputqa(
    {
        variant = 'white',
        type='text',
        color = 'gray',
        ...props
    }
) {
    //const [firstChildName, setFirstChildName] = useState<string>('')

    //useEffect(() => {
    //    setFirstChildName(props.name)
    //}, [props.name])

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {

        //setFirstChildName(event.target.value);
        props.updatePostText(event.target.value);
    };


    return (
        <>
            <input type={type} placeholder={`${props.placeholder}`} className={` ${Styles.inpuField} ${Styles[variant]} ${Styles[color]}`} onChange={handleChange} />
        </>
    );
}


export default Inputqa;
