import React, { useEffect } from 'react';
export const Alert = ({type,msg, removeAlert }) => {
    useEffect(() => {
        const timeout = setTimeout(()=> {
            removeAlert()
        }, 3000)
        return () => clearTimeout(timeout)
    }, [])
    return <p className={`alert alert-${type}`}>{msg}</p>
};


