
import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <section
      className="section"
      style={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "80px 20px",
      }}
    >
      <div className="container">
        <h1
          style={{
            fontSize: "clamp(90px, 18vw, 180px)",
            fontWeight: 800,
            lineHeight: 1,
            marginBottom: "20px",
          }}
        >
          404
        </h1>

        <h2>Page Not Found</h2>

        <p style={{ margin: "20px 0" }}>
          Sorry, the page you are looking for does not exist
          or may have been removed.
        </p>

        <Link to="/" className="btn-primary">
          Back to Home
        </Link>
      </div>
    </section>
  );
};

export default NotFoundPage;
