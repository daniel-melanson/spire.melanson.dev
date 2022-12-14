import React from "react";

export default function Footer() {
  return (
    <footer className="text-center text-white" style={{ backgroundColor: "#373a36" }}>
      <div className="container pt-4">
        <section className="mb-4">
          <a
            className="btn btn-Router.Link btn-floating btn-lg text-dark m-1"
            href="#!"
            role="button"
            data-mdb-ripple-color="dark"
          >
            <i className="fab fa-github"></i>
          </a>
        </section>
      </div>
      <div className="text-center text-light p-3" style={{ backgroundColor: "#212721" }}>
        Footer text
      </div>
    </footer>
  );
}
