import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ User }) => {
  const { name, tag, location, avatar, stats } = User;
  const { followers, views, likes } = stats;
  return (
    <div className="profile">
      <div className="description">
        <img
          src={avatar}
          alt="user avatar"
          className="avatar"
          width="128"
          height="128"
        />
        <p className="name"> {name} </p> <p className="tag">{tag}</p>
        <p className="location"> {location} </p>
      </div>
      <ul className="stats">
        <li>
          <span className="label"> Followers </span>
          <span className="quantity"> {followers} </span>
        </li>
        <li>
          <span className="label"> Views </span>
          <span className="quantity"> {views} </span>
        </li>
        <li>
          <span className="label"> Likes </span>
          <span className="quantity"> {likes} </span>
        </li>
      </ul>
    </div>
  );
};

/*
Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
*/

Profile.propTypes = {
  User: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

export default Profile;
