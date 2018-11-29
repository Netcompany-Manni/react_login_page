import React from 'react';
import './HeaderComponentStyling.css';

class HeaderComponent extends React.Component{
    constructor(props){
        super();
    }

render(){
    return(
        <div className="header_component">
            <p>
                {this.props.title}
            </p>
        </div>
    )
}

}



export default HeaderComponent;