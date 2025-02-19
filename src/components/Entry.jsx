export default function Entry(props) {
    return (
        <article class="entry-content">
            <img src={props.img.src} alt={props.img.alt} />
            <div className="article-info">
                <div className="location-info">
                    <img src="src/assets/images/marker.svg" alt="location-pin-icon" />
                    <span className="country">{props.country}</span>
                    <a href={props.googleMapsLink} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                </div>
                <h2 className="location-name">{props.title}</h2>
                <p className="duration">{props.dates}</p>
                <p className="location-details">{props.text}</p>
            </div>
        </article>
    );
}