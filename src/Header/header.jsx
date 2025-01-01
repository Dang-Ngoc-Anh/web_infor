import "./header.css";

const Header = () => (
  <>
    <nav class="navbar">
      <div class="navbar-container">
        <div class="logo">BECC88</div>
        <button class="mobile-nav-toggle" aria-label="Toggle navigation">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
        <ul class="nav-links">
          <li>
            <a href="home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="overlay"></div>
    <section id="home">
      <div class="bg-effect bg-effect-1"></div>
      <div class="section-content">
        <h1 class="section-title">Welcome BECC88</h1>
      </div>
    </section>
    <section id="about">
      <div class="bg-effect bg-effect-2"></div>
      <div class="section-content">
        <h1 class="section-title">About Us</h1>
        <p class="section-description">
          Pushing boundaries and creating extraordinary experiences since 2024
        </p>
      </div>
    </section>
    <section id="contact">
      <div class="bg-effect bg-effect-1"></div>
      <div class="section-content">
        <h1 class="section-title">Contact</h1>
        <p class="section-description">
          Let's create something amazing together
        </p>
      </div>
    </section>
    {/*
        <section id="services">
          <div class="bg-effect bg-effect-1"></div>
          <div class="section-content">
            <h1 class="section-title">Services</h1>
            <p class="section-description">
              Innovative solutions tailored to your unique needs
            </p>
          </div>
        </section>
  
        <section id="portfolio">
          <div class="bg-effect bg-effect-2"></div>
          <div class="section-content">
            <h1 class="section-title">Portfolio</h1>
            <p class="section-description">
              Discover our groundbreaking projects and success stories
            </p>
          </div>
        </section>
  
       */}
  </>
);

export default Header;
