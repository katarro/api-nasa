import React, { useEffect, useState } from 'react';
import Loader from './Loader';
import '../Styles/PhotofDay.css';

const PhotoofDay = () => {
	const [photos, setPhotos] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getPhotos = async () => {
			const key = 'SOTesAxrhiguKjl0ZCNfeGgf7RaeBIpBQzzTZGeK';
			try {
				const promise = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${key}`);
				const data = await promise.json();
				setPhotos(data);
				console.log(data);
				setLoading(false);
			} catch (error) {
				console.log(error);
			}
		};
		getPhotos();
	}, []);

	return (
		<React.Fragment>
			<div className="flex-content">
				{loading ? (
					<Loader />
				) : (
					<div className="flex-card">
						<div className="flex-text">
							<div className="flex-img">
								<img src={photos.hdurl} alt="foto del dia" />
							</div>
							<div className="flex-title">
								<h3>{photos.title}</h3>
							</div>
							<p>{photos.explanation}</p>
							<div className="flex-dates">
								<h5>{photos.date}</h5>
							</div>
							<div className="flex-dates2">
								<h5>{photos.copyright}</h5>
							</div>
						</div>
					</div>
				)}
			</div>
		</React.Fragment>
	);
};

export default PhotoofDay;
