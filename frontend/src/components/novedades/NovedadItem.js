import React from 'react';

const NovedadItem = (props) => {
    const { title, subtitle, imagen, body,  } = props;

    return (
        <div className= "novedades">
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
            <h4>{body}</h4>
            <img src ={imagen}/>
            <hr />
        </div>
    );
}

export default NovedadItem;