import React, { Component } from 'react';
import './App.css';

class App extends Component {

    onClick() {
        window.webkit.messageHandlers.AppModel.postMessage({})
    }

    onTabsClick() {
        window.webkit.messageHandlers.AppTabs.postMessage({})
    }

    render() {
        return (
         <div className="App">
             <ol>
                <li onClick={this.onClick}>轮播</li><hr/>
                <li onClick={this.onTabsClick}>标签页</li><hr/>
                <li>WhiteSpace 上下留白</li><hr/>
             </ol>

         </div>
        );
    }
}

export default App;
