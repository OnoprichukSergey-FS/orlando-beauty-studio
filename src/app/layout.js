import "../styles/globals.css";
import "../styles/pages/beauty-school.css";
import "../styles/pages/services.css";
import "../styles/pages/gift-cards.css";
import "../styles/pages/contact.css";
import "../styles/pages/home-about.css";
import "../styles/pages/home-reviews.css";
import "../styles/pages/home-hero.css";

import Navbar from "./Navbar";

export const metadata = {
  title: "Orlando Beauty Studio",
  description: "Professional skincare and holistic treatments",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* GOOGLE FONTS */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>

      <body className="site-body">
        <Navbar />

        <main className="site-main">{children}</main>

        <footer className="footer">
          <div className="footer-inner container">
            <div>
              <h3>Orlando Beauty Studio</h3>
              <p>Professional skincare and holistic treatments.</p>
            </div>

            <div>
              <h4>Phone</h4>
              <p>
                <a href="tel:+14079295675">+1 (407) 929-5675</a>
              </p>
            </div>

            <div>
              <h4>Email</h4>
              <p>
                <a href="mailto:beautystudioorlando@gmail.com">
                  beautystudioorlando@gmail.com
                </a>
              </p>
            </div>

            <div>
              <h4>Address</h4>
              <p>
                <a
                  href="https://www.google.com/maps?q=1430+Lake+Baldwin+Ln+Orlando+FL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  1430 Lake Baldwin Ln
                  <br />
                  Orlando, FL
                </a>
              </p>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-bottom-inner container">
              <p>© 2026 Orlando Beauty Studio</p>

              <a
                href="https://onoprichukwebstudio.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-credit"
              >
                Website by Onoprichuk Web Studio
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
