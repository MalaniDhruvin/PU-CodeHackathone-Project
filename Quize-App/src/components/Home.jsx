import Footer from './Footer';
import './Home.css';
const Home=()=>{
    return(<>
        <div id="hero">
      <div class="hero-left">
        <h1>Your Guide To An AI Based Learning Platform Find Out More</h1>
        <p>
          Empower every student with digital literacy, problem-solving and
          programming skills through a comprehensive, customizable, easy to
          implement solution.
        </p>
        <a  class="button" href="/courses">
            <span class="button__icon-wrapper">
                <svg width="10" class="button__icon-svg" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 15">
                    <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                </svg>
                
                <svg class="button__icon-svg  button__icon-svg--copy" xmlns="http://www.w3.org/2000/svg" width="10" fill="none" viewBox="0 0 14 15">
                    <path fill="currentColor" d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"></path>
                </svg>
            </span>
            Get Started
        </a>
      </div>

      <div class="hero-right">
        <img src="2.png" alt="" />
      </div>
    </div>
    <Footer></Footer>
    </>)
}

export default Home;