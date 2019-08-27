import React from 'react';
import '../menu-item/menu-item.styles.scss';

const MenuItem = (props) => (
    <div style={{
        backgroundImage:`url(${props.image})`
         }} className="menu-item">
                <div className="content">
                    <h1 className="title">{props.title}</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
)


export default MenuItem;