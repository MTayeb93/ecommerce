import React from 'react'
import * as ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'

//dev-exukriy1.us.auth0.com
//ueM5pubmYDblO8M7KYdCZdTDZJB7ibmb
ReactDOM.render(
  <Auth0Provider
    domain='dev-exukriy1.us.auth0.com'
    clientId='ueM5pubmYDblO8M7KYdCZdTDZJB7ibmb'
    redirectUri={window.location.origin}
    cacheLocation='localstorage'
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,
  document.getElementById('root')
)
