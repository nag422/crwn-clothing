import React from 'react';
import '../menu-item/menu-item.styles.scss';
import {withRouter} from 'react-router-dom';



const MenuItem = (props) => {
    const {history} = props

return(
    
    <div style={{
        backgroundImage:`url(${props.image})`
         }} className="menu-item" onClick={()=>history.push(`${props.match.url}/${props.linkUrl}`)}>
                <div className="content">
                    <h1 className="title">{props.title}</h1>
                    <span className='subtitle'>SHOP NOW</span>
                </div>
            </div>
)
}


export default withRouter(MenuItem);