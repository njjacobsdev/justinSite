
import "./Footer.css"; // import your CSS file
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {2024} Intrigue Handyman Services | Greater Milwaukee WI</p>
        <p>
          Phone: <a href="tel:12622390762">(262) 239-0762</a> | 
          Email: <a href="mailto:intrigue.handyman@gmail.com">intrigue.handyman@gmail.com</a>
        </p>
      </div>
    </footer>
  );
}
