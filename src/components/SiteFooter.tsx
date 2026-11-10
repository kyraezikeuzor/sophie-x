export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-card">
          <div className="footer-main">
            <div>
              <p className="footer-title">Girls Who Rise</p>
              <p className="footer-sub">A podcast for teen girls, created by Sophie Xu.</p>
            </div>
            <a href="mailto:sophiexu.one@gmail.com" className="footer-btn">Contact us</a>
          </div>
          <div className="footer-fine">
            <ul className="foot-links">
              <li><a href="https://www.instagram.com/girls.whorise/" target="_blank" rel="noopener noreferrer">@girls.whorise</a></li>
            </ul>
            <p>
              Girls Who Rise offers general education. It is not a substitute for
              professional medical or mental health advice. If you are in crisis, call or text 988, or call 911.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
