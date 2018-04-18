import React, { Component } from 'react';
import './App.css';

class App extends Component {

    onClick() {
        window.webkit.messageHandlers.AppModel.postMessage({})
    }

    render() {
        return (
         <div className="App">
             <ol>
                <li onClick={this.onClick}>Flex布局</li><hr/>
                <li>WingBlank 两翼留白</li><hr/>
                <li>WhiteSpace 上下留白</li><hr/>
             </ol>

         </div>);
    }
}

export default App;
