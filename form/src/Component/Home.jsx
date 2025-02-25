import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to Home Page</h1>
      <Link to="/form">
        <button>Go to Form</button>
      </Link>
    </div>
  );
}

export default Home;
