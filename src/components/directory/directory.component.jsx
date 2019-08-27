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
           },
           {
            title: 'Shooes',
            imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
            id:2,
        },
        {
            title: 'Pants',
            imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
            id:3,
        },
        {
            title: 'Underwear',
            imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
            id:4,
        },
        {
            title: 'Bikini',
            imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
            id:5,
        }
        ]
       } 
    }


    render(){
        return(
            <div className="directory-menu">{
                this.state.sections.map(section =>(
                    <MenuItem key={section.id} title={section.title} image={section.imageUrl} />
                ))
            }

            </div>
        );
    }
}

export default Directory;