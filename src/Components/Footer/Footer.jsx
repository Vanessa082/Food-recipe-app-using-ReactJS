import "./Footer.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container flex">
        <div className="footer-about">
          <h2>About</h2>
          <p>
            On the other hand, we denounce with righteous indignation and
            dislike men who are so beguiled and demoralized by the charms of
            pleasure of the moment.
          </p>
        </div>

        <div className="footer-category">
          <h2>Top Category</h2>

          <ul>
            <li>Biryani</li>
            <li>Chicken</li>
            <li>Pizza</li>
            <li>Burger</li>
            <li>Pasta</li>
          </ul>
        </div>

        <div className="quick-links">
          <h2>Quick Links</h2>

          <ul>
            <li>About Us</li>
            <li>Carrier</li>
            <li>Feedback</li>
            <li>Legal</li>
            <li>Terms and Conditions</li>
          </ul>
        </div>

        <div className="get-in-touch">
          <h2>Get in touch</h2>
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>
      </div>

      <div className="copyright">
        <p>Copyright &copy; Wah Vanessa. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;