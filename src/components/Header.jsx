function Header() {
  return (
    <div className="header">
      <div >
        <h3>Connect with me</h3>
        <a href="https://github.com/amaldevelops" target="_blank">
          <img
            src="/logos/logo-github.svg"
            className="externalLinkLogos"
            alt="github Logo"
          />
        </a>{" "}
        <a href="https://www.linkedin.com/in/amaldevelops/" target="blank">
          <img
            src="/logos/logo-linkedin.svg"
            alt="Linkedin Logo"
            className="externalLinkLogos"
          />
        </a>
      </div>

      <div >
        <h3>Quick Links</h3>
        <a href="https://www.amalk.au/tech-lexicon" target="_blank">
          <img
            src="/logos/logo-bash.svg"
            alt="Tech Lexicon"
            className="externalLinkLogos"
          />
          Tech Lexicon
        </a>

        <a href="https://www.amalk.au/the-odin-project-tracker" target="_blank">
          <img
            src="/logos/logo-odin.svg"
            alt="The Odin Project Course Tracker"
            className="externalLinkLogos"
          />
          The Odin Project Course Tracker
        </a>
      </div>
    </div>
  );
}

export default Header;
