import React, { useContext, useState } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  

  const { searchUsers, clearUsers, users } = githubContext;
  const { setAlert } = alertContext;

  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter something', 'light');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  const onChange = (e) => {
    setText(e.target.value);
  };
  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          value={text}
          onChange={onChange}
          placeholder='Search users...'
        />
        <input type='submit' value='Search' className='btn btn-dark btn-block' />
      </form>
      {users.length > 0 && (
        <input
          type='submit'
          value='Clear'
          className='btn btn-light btn-block'
          onClick={clearUsers}
        />
      )}
    </div>
  );
};


export default Search;
