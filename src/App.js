import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { ProductsList } from './components/ProductsList';
import { ProductInfo } from './components/ProductInfo';
import { Basket } from './components/Basket/Basket';

export default function App() {
	return (
		<div className='App'>
			<Router>
				<Header />
				<Switch>
					<Route exact path='/'>
						<ProductsList />
					</Route>
					<Route exact path='/product/:productId'>
						<ProductInfo />
					</Route>
					<Route exact path='/basket'>
						<Basket />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}
