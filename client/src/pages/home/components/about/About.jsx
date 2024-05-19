import "./about.css";
import Title from "../../../../components/title/title";

function About() {
	// Demo images
	const imageList = [
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJhmfOcGJrt6F-3ykaLapX41UydcSjslS0Sw&s",
		"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVdalcICr2tNv-Ajpd_8Sapo1_JsjAocyW6A&s",
	];

	return (
		<div className="about-container">
			<Title title="About Us" color="orange" />
			<div className="about-grid">
				<div className="about-item right">
					<div className="about-image">
						<img src={imageList[0]} alt="text" />
					</div>
				</div>
				<div className="about-item">
					<div className="about-text">
						<h1>Who are we</h1>
						<p> 
							We are a passionate community of software enthusiasts dedicated to
							honing our skills and fostering innovation in the world of
							technology. With a diverse array of talents and backgrounds, we
							come together to collaborate, learn, and create. Our mission is to
							empower individuals to thrive in the fast-paced landscape of
							software development while cultivating a supportive and inclusive
							environment for all. Join us on this journey of exploration,
							creativity, and growth
						</p>
					</div>
				</div>
			</div>
			<div className="about-grid">
				<div className="about-item">
					<div className="about-image">
						<img src={imageList[1]} alt="text" />
					</div>
				</div>
				<div className="about-item right">
					<div className="about-text">
						<h1>What we do</h1>
						<p>
							At our software development club, we engage in a variety of
							activities aimed at fostering skill development, collaboration,
							and innovation. From coding workshops and hackathons to guest
							lectures and project collaborations, we provide opportunities for
							members to expand their knowledge, build meaningful projects, and
							network with like-minded individuals. Our goal is to create a
							dynamic environment where members can learn, grow, and contribute
							to the ever-evolving field of software development
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
