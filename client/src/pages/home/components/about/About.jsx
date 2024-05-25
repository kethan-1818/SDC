import "./about.css";
import Title from "../../../../components/title/title";
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './about.css';

// Import local images
import image1 from '../../../events/images/DBMS.jpg';
import image2 from '../../../events/images/DBMS.jpg';
import image3 from '../../../events/images/DBMS.jpg';
import image4 from '../../../events/images/DBMS.jpg';
import image5 from '../../../events/images/DBMS.jpg';
import image6 from '../../../events/images/DBMS.jpg';

function About() {
  const images = [image1, image2, image3, image4, image5, image6];

  return (
    <div className="slider-container">
      <AwesomeSlider>
        {images.map((src, index) => (
          <div key={index} data-src={src} />
        ))}
      </AwesomeSlider>
    </div>
  );
}

export default About;
