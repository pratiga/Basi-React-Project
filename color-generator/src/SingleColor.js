import React, { useState, useEffect} from 'react';
import rgbToHex from './utils'

const SingleColor = ({rgb, weight, index, hexColor}) => {
    const [alert, setAlert] = useState(false)
    const bcg = rgb.join(',')
}
useEffect(() => {
    const timeout = setTimeout(()=> {
        setAlert(false)
    }, 3000)
    return () => clearTimeout(timeout)
}, [alert])
return (
    <article
    className={`color ${index > 10 && 'color-light'}`}
    style={{ backgroundColor:`rgb(${bcg})`}}
    >
        
    </article>
)