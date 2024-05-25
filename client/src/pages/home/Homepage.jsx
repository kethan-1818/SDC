import About from "./components/about/About";
import ContactUs from "./components/contact-us/ContactUs";
import "./homepage.css";

function Home() {
	return (
		<> 
		<div className="mid">
		<About className="about"/>
		<ContactUs />
		</div>
			
		</>
	);
}

export default Home;
