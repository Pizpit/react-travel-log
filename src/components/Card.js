import React from 'react';

export default function Card(props) {
	return (
		<div className="Card">
			<img src={props.imageUrl} alt="" className="Card-img" />
			<section className="Card-body">
				<header className="Card-header">
					<img src="./images/location.png" className="Card-logo" alt="logo" />
					<p>{props.location}</p>
					<a href={props.googleMapsUrl} className="Card-link">
						View on Google Maps
					</a>
				</header>
				<h1>{props.title}</h1>
				<h3>
					{props.startDate} - {props.endDate}
				</h3>
				<p>{props.description}</p>
			</section>
		</div>
	);
}
