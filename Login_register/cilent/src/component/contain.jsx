
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function contain() {
  const [isLogout, setLogout] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setLogout(true);
    // Clear session storage or local storage if used
    sessionStorage.clear();
    localStorage.clear();
    // Redirect to login with replace to prevent back navigation
    navigate("/login", { replace: true });
  };

  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      <button onClick={handleLogout} className="btn btn-primary mt-3">Logout</button>
    </div>
  );
}

export default contain;