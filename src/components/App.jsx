import React from 'react';
import Background from './Background'

class App extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div>
                <p> Hello world </p>
                <Background/>
            </div>
        )
    }
}
export default App;