import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Footer from './Footer';

import './index.scss';

const App = () => (
	<div className='mt-10 text-3xl mx-auto max-w-6xl'>
		<Header app={{ name: 'Muhammad' }} />
		<div className='my-10'>Home Page Content</div>
		<Footer />
	</div>
);
ReactDOM.render(<App />, document.getElementById('app'));
