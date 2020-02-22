import React from 'react';


class ApiRequest extends React.Component {

    constructor(props) { 
        super(props);

        this.state = {
            isLoaded: false,
            items: []
        }
    };



    componentDidMount() {
        const url = 'https://61de6a5a.ngrok.io'
        fetch('https://cors-anywhere.herokuapp.com/' + url )
            .then(res => res.json())
            .then(json => {
                this.setState({ 
                    isLoaded: true,
                    items: json
                })
            })
    };

    
    render() {
        const { isLoaded, items } = this.state;
        
        if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            return(
                <div>
                    <ul>
                        {items.map(item => (
                            <li key={item.id}>
                                Title: {item.title} | Code: {item.code}
                            </li>
                        ))}
                    </ul>
                </div>
            );
        }
    };
};

export default ApiRequest;