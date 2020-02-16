import React from 'react';


class ApiRequest extends React.Component {
    

        state = {
            loading: true,
            product: null
        };


    async componentDidMount() {
        const url = 'https://randomuser.me/api/';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({product: data.results[0], loading: false });
    }

    
    render() {
        return(
            <div>
                {
                    this.state.loading || !this.state.product 
                    ? 
                    (  <div>Loading...</div>)
                    : 
                    (<div>{this.state.product.name.first}</div>)
                    (<div>{this.state.product.name.title}</div>)
                    (<div>{this.state.product.name.last}</div>)
                }
            </div>
        );
    };
};

export default ApiRequest;