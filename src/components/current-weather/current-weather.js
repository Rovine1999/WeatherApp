import "./current-weather.css";

const CurrentWeather = () => {
	return (
		<div className="weather">
			<div className="top">
				<div className="">
					<p className="city">Nairobi</p>
					<p className="description">Sunny</p>
				</div>
				<img alt="weather" className="weather-icon" src="Pundit2.PNG" />
			</div>
			<div className="bottom">
				<div className="temperature">18°C</div>
				<div className="Details">
					<div className="parameter-row">
						<span className="parameter-label">Details</span>
					</div>
					<div className="parameter-row">
						<span className="parameter-label">Feels like</span>
						<span className="parameter-value">22°C</span>
					</div>
					<div className="parameter-row">
						<span className="parameter-label">Wind</span>
						<span className="parameter-value">22m/s</span>
					</div>
					<div className="parameter-row">
						<span className="parameter-label">Humidity</span>
						<span className="parameter-value">22%</span>
					</div>
					<div className="parameter-row">
						<span className="parameter-label">Pressure</span>
						<span className="parameter-value">22hPa</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CurrentWeather;
