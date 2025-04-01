import React from 'react';
import './ProfileCard.css';

function ProfileCard({ name, role, description, image }) {
  return (
    <div className="profile-card">
      <img src={image} alt={name} className="profile-image" />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-role">{role}</p>
      <p className="profile-description">{description}</p>
    </div>
  );
}

export default ProfileCard;
