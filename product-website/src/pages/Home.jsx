import '../styles/Home.css';
import teamImage from '../images/team.jpeg';
import Footer from '../components/Footer';
function Home() {
    return (
        <div>
            <h1 id="main-heading">The Product Club IIT Jodhpur</h1>
            <img src={teamImage} alt="Team" />
            
            <div className="who-we">
                <h2 id="head-who">WHO WE ARE</h2>
                <p id="who-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse illo et, obcaecati totam expedita sequi dolorem accusantium assumenda. Possimus, saepe. Nihil iure ipsum, veniam quos sint, eius voluptate voluptatum alias officiis numquam eaque optio, ad dolorum dolorem architecto qui nemo distinctio dolore neque cum fuga cupiditate minima ipsa. Quae, nobis.</p>
                
                <h2 id="head-what">WHAT WE DO</h2>
                <p id="what-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse illo et, obcaecati totam expedita sequi dolorem accusantium assumenda. Possimus, saepe. Nihil iure ipsum, veniam quos sint, eius voluptate voluptatum alias officiis numquam eaque optio, ad dolorum dolorem architecto qui nemo distinctio dolore neque cum fuga cupiditate minima ipsa. Quae, nobis.</p>
            </div>

            {/* Achievements Section */}
            <div className="achievements">
                <h2 id="achievements-heading">ACHIEVEMENTS</h2>
                <div className="achievements-grid">
                    <div className="achievement-card">
                        <h3>Convolve 2023</h3>
                        <p>Won the first edition of Convolve pan-IIT hackathon at IIT Guwahati in collaboration with Cisco.</p>
                    </div>
                    <div className="achievement-card">
                        <h3>Inter IIT Tech Meet 2023 11.0 (Gold Medal)</h3>
                        <p>Placed first among all the participating IITs in the High Prep NLP event.</p>
                    </div>
                    <div className="achievement-card">
                        <h3>Inter IIT Tech Meet 2023 11.0 (Bronze Medal)</h3>
                        <p>Placed third in the Mid Prep Cloud Physician Event.</p>
                    </div>
                    <div className="achievement-card">
                        <h3>Inter IIT Tech Meet 2023 11.0 (Bronze Medal)</h3>
                        <p>Placed third in the Mid Prep ISRO satellite image super-resolution event.</p>
                    </div>
                    <div className="achievement-card">
                        <h3>Inter IIT Tech Meet 2022 10.0 (High Prep)</h3>
                        <p>Placed third in the High Prep event conducted by Bosch.</p>
                    </div>
                    <div className="achievement-card">
                        <h3>Inter IIT Tech Meet 2021 9.0 (Gold Medal)</h3>
                        <p>Placed first in the Bridgei-2i Automated Headline and Sentiment Generator event.</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;
