import React, { useState, useEffect } from 'react';

const File = () => {
  const [query, setQuery] = useState('');
  const [output, setOutput] = useState([]);

  useEffect(() => {
    if (query.length >= 3) {
      const delayTimer = setTimeout(() => {
        fetchData();
      }, 1000);

      return () => {
        clearTimeout(delayTimer);
      };
    }
  }, [query]);

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    fetchData();
  };

  async function fetchData() {
    try {
      const response = await fetch(`https://api.github.com/search/users?q=${query}`);
      const data = await response.json();
      setOutput(data.items || []);
    } catch (error) {
      console.error(error);
    }
  }

  const User = ({ avatar, url, username }) => {
    return (
      <div>
        <img src={avatar} alt="user_image" />
        <a href={url}>{username}</a>
      </div>
    );
  };

  return (
    <div className="main-container">
      <h2>Project 5: GitHub User Search</h2>

      <form action="" id="my-Form">
        <input type="text" name="" id="my-Input" value={query} onChange={handleChange} />
        <button onClick={onSubmit}>Search</button>
      </form>

      <div>
        <h1>Results:</h1>
        {output.map((user) => (
          <User
            key={user.login}
            avatar={user.avatar_url}
            url={user.html_url}
            username={user.login}
          />
        ))}
      </div>
    </div>
  );
};

export default File;
