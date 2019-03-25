import React, { Component } from 'react';

import { HashRouter, Route, Link, Nav, Switch } from 'react-router-dom';

import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Sorting from '../Sorting/Sorting';
import Pagination from '../Pagination/Pagination';

class Favorite extends Component {
  constructor(props) {
    super(props);
    
    this.changeFavorites = this.changeFavorites.bind(this);
  }

  changeFavorites(event, id) {  
    event.preventDefault(); 
    this.props.changeFavorites(id);    
  }
  
  render() {    
    const { favorites, updateFavorites, updateFilters } = this.props; 

    return(
      <div className="wrapper wrapper_favorite">
        {favorites.status === 'ok' &&  
        <div>
          <Breadcrumb links={[{link: "/main-page", text: "Главная"}, {link: "/favorite", text: "Избранное"}]} />
          <main className="product-catalogue product-catalogue_favorite">
            <section className="product-catalogue__head product-catalogue__head_favorite">
              <div className="product-catalogue__section-title">
                <h2 className="section-name">В вашем избранном</h2><span className="amount amount_favorite"> {favorites.goods} товаров</span>
              </div>
              <Sorting updateFilters={updateFilters} />
            </section>
            <section className="product-catalogue__item-list product-catalogue__item-list_favorite"> 
              <ul className="product-catalogue__items">    
                {favorites.data.map((el, index) => {
                  return(
                    <li key={el.id} className="product-catalogue__item">
                      <Link to={`/product-card-desktop/${el.id}`} className="item-list__item-card item">
                        <div className="item-pic"><img className={`item-pic-${index + 1}`} src={el.images[0]} alt={el.title}/>
                          <div className="product-catalogue__product_favorite">
                            <p onClick={ev => this.changeFavorites(ev, el.id)}></p>
                          </div>                    
                        </div>
                        <div className="item-desc">
                          <h4 className="item-name">{el.title}</h4>
                          <p className="item-producer">Производитель: <span className="producer">{el.brand}</span></p>
                          <p className="item-price">{el.price}</p>
                        </div>
                      </Link> 
                    </li>
                  );
                })}  
              </ul> 
            </section> 
            <Pagination pages={favorites.pages} page={favorites.page} changePage={updateFavorites} />
          </main>
        </div>}
      </div>
    );
  }
  
}

export default Favorite;