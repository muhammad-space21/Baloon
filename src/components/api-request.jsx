import React from 'react';


class ApiRequest extends React.Component {
    constructor(props) { 
        super(props);

        this.state = {
            loading: true,
            product: []
        }
    }



    componentWillMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => {
                this.setState({ 
                    loading: false,
                    product: data
                })
            })
    };

    
    render() {
        const { loading, product } = this.state;
        return(
            <div>
                {   
                this.state.loading || !this.state.product
                    ? 
                    (  <div>Loading...</div>)
                    : 
                    (<div>{this.state.product.name}</div>)
                    (<div>{this.state.product.username}</div>)
                    (<div>{this.state.product.email}</div>)
                    
                }
            </div>
        );
    };
};

export default ApiRequest;