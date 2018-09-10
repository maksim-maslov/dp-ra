import React, { Component } from 'react';

import ListItemCard from './ListItemCard';

class ProductCatalogueItemList extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          products: []
        };
    }
    
    componentDidMount() {
        fetch('https://neto-api.herokuapp.com/bosa-noga/products')
            .then(response => response.json())
            .then(data => {this.setState({ products: data.data })});
    }

    render() {
        const { products } = this.state;
        return(
            <section  className="product-catalogue__item-list">
                <ListItemCard list={products} />
            </section>            
        )
    }

}

export default ProductCatalogueItemList;


