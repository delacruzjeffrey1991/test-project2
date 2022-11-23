import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Styles from './styles.module.scss'

function Search(
    {
        disable = false,
        icon= true,
        variant = 'seacrh1',
        iconColor = 'primary',
        placeholder='Search...',
        ...props
    }
) {
    return (
        <div className={`${Styles.searchMain} ${Styles[variant]}`}>
            {
                icon ?
                <button onClick={props.buttonFunc}> <FontAwesomeIcon icon={faSearch} /> </button> : ''
            }
            <input placeholder={placeholder} type="search" /> 
        </div>
    );
}

export default Search;