import React from "react";

class ErrorBoundry extends React.Component{
constructor(props){
    super(props);
    this.state = {
        hasError:false
    }

}
componentDidCatch(Error){
    this.setState({hasError:true})
}
render() {
    if (this.state.hasError)
    {
        return(
            <div>
                <h1>Thats not good</h1>
            </div>
            )
    }

    return this.props.children
    
}
}

export default ErrorBoundry;