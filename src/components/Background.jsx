import React from 'react';

class Background extends React.Component{
    constructor(){
        super();
        this.state = {
            pictures: []
        }
    }
    componentDidMount(){
        fetch('https://randomuser.me/api/?results=60')
        .then(results => {
            console.log(results)
            return results.json();
            
        }).then(data => {
            console.log(data)
            let pictures = data.results.map((pic) => {
                return(
                    <div>
                        <img src={pic.picture.medium}/>
                    </div>
                )
            })
            this.setState({pictures: pictures})
            console.log("state" + this.state.pictures)
        })
    }
    render(){
        return (
            <div>
                {this.state.pictures}
            </div>
        )
    }
}
export default Background;