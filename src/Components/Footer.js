import React from "react";

function Footer() {
  return (
    <footer className="container-fluid">
      <div className="container-center">
        <div className="brand">Jitendra Kumar Sahu</div>
        <p className="label">Social links</p>
        <ul className="list-no-bullet list-social-links">
          <li className="list-item-inline">
            <a
              className="link link-social link-text-dec-none"
              href="https://www.instagram.com/jit2endra/"
            >
              Instagram
            </a>
          </li>
          |
          <li className="list-item-inline">
            <a
              className="link link-social link-text-dec-none"
              href="https://www.linkedin.com/in/jitendra1mp4/"
            >
              Linkedin
            </a>
          </li>
          |
          <li className="list-item-inline">
            <a
              className="link link-social link-text-dec-none"
              href="https://github.com/jitendra1mp4"
            >
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
