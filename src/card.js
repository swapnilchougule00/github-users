import React, { useState, useEffect } from 'react';

const Card = ({ username }) => {
    
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        setError('User not found');
      }
    };
    fetchData();
  }, [username]);

  if (error) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg text-center">
        <p className="text-red-500 font-bold">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-lg flex flex-col justify-center items-center">
      {userData ? (
        <>
          <img src={userData.avatar_url} alt={`${userData.login} Avatar`} className="w-24 h-24 rounded-full mb-4" />
          <div className="text-center">
            <h2 className="text-lg font-bold mb-2">{userData.login}</h2>
            <p className="text-gray-700 mb-2">{userData.name}</p>
            <p className="text-gray-700 mb-2">Public Repos: {userData.public_repos}</p>
            <p className="text-gray-700 mb-2">Public Gists: {userData.public_gists}</p>
            <p className="text-gray-700 mb-2">Profile Created At: {new Date(userData.created_at).toLocaleDateString()}</p>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Card;
