import React from "react"

const name = '生命周期实例~~~'



class ExampleLifeCycle extends React.PureComponent {
    state = {
        opacity :1,
    }
    componentDidMount = () => {
        setInterval(() => {
            let opacity = this.state.opacity
            let now = new Date().toLocaleTimeString()
            opacity -= .05
            if(opacity < 0.1) {
                opacity = 1
            }
            this.setState( {opacity : opacity, now: now})
        }, 100)

        
    }
    render() {
        return (
            <div >
                <h1 style={{opacity: this.state.opacity}}>{name}</h1>
                <h2>It Is {this.state.now}</h2>
            </div>
        )
    }
}

export default ExampleLifeCycle

