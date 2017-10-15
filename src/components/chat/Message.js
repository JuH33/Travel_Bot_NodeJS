import React from "react";
import "../../stylesheets/main.scss";

class Message extends React.Component {

    constructor(props){
        super(props)

        this.state = this.props.message
    }

    
    render() {

        return (
            <div ref="chat-message">
                <div className="chat-image"> 
                    <img alt="user-picture" src={ this.state.user } /> 
                </div>
                <div className="chat-body">
                    <div className="chat-text">
                        <h4> { this.state.user } </h4>
                        <p> { this.state.message } </p> 
                        <b> { this.state.date.toLocaleDateString() } </b> 
                    </div>
                </div>
            </div>
        );
    }
}

export default Message;