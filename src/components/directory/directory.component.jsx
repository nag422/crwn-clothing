import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import '../../components/directory/direcotory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();
       this.state = {
           sections : [{
               title: 'Hats',
               imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
               id:1,
               linkUrl:'hats'
           },
           {
            title: 'Shooes',
            imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
            id:2,
            linkUrl:'13'
        },
        {
            title: 'Pants',
            imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
            id:3,
            linkUrl:'hats'
        },
        {
            title: 'Underwear',
            imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
            id:4,
            linkUrl:'hats'
        },
        {
            title: 'Bikini',
            imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
            id:5,
            linkUrl:'hats'
        }
        ]
       } 
    }


    render(){
        return(
            <div className="directory-menu">{
                this.state.sections.map(section =>(
                    <MenuItem key={section.id} title={section.title} image={section.imageUrl} linkUrl={section.linkUrl} />
                ))
            }

            </div>
        );
    }
}

export default Directory;