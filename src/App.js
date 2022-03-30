import './App.css';
import Header from './components/Header.js';
import Card from './components/Card.js';
import mockData from './data.js';

function App() {
	const cards = mockData.map((item) => {
		return <Card key={item.id} {...item} />;
	});

	return (
		<div className="App">
			<Header />
			<section className="cards-list">{cards}</section>
		</div>
	);
}

export default App;
