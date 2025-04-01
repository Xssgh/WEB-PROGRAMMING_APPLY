import React from 'react';
import './App.css';
import ProfileCard from './components/ProfileCard';

function App() {
  return (
    <div className="App">
      <h1>자기소개 페이지</h1>
      <div className="profile-container">
        <ProfileCard 
          name="장현호" 
          role="소프트웨어 개발자" 
          description="웹 개발 및 소프트웨어 설계에 열정이 있는 개발자입니다."
          image="https://via.placeholder.com/150"
        />
        <ProfileCard 
          name="김철수" 
          role="프론트엔드 개발자" 
          description="리액트와 자바스크립트를 잘 다루는 프론트엔드 개발자입니다."
          image="https://via.placeholder.com/150"
        />
      </div>
    </div>
  );
}

export default App;
