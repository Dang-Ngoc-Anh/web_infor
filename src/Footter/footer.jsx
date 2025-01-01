import "./footer.scss";

const Footter = () => {
  return (
    <footer>
      <div class="footer-container">
        <div class="footer-section">
          <h3>INFO</h3>
          <ul>
            <li>Formats</li>
            <li>Pricing</li>
            <li>Compression</li>
            <li>FAQ</li>
            <li>Status</li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>RESOURCES</h3>
          <ul>
            <li>Developer API</li>
            <li>Tools</li>
            <li>Blog</li>
          </ul>
        </div>
        <div class="footer-section">
          <h3>COMPANY</h3>
          <ul>
            <li>About Us</li>
            <li>Terms of Service</li>
            <li>Privacy</li>
            <li>Sustainability</li>
          </ul>
        </div>
        <div class="newsletter">
          <h3>Subscribe to our email newsletter</h3>

          <form novalidate>
            <input type="email" placeholder="Your email" required />
            <button type="submit">SUBSCRIBE</button>
          </form>
          <h4>Follow us</h4>
          <div class="social-icons">
            <a href="#">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i
                class="fab   
 fa-instagram"
              ></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footter;
