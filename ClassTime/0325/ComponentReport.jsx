import React from "react";

// Header Component
const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 text-center text-xl font-bold">
      자기소개 웹사이트
    </header>
  );
};

// Profile Component
const Profile = () => {
  return (
    <section className="p-4 text-center">
      <h2 className="text-2xl font-semibold">안녕하세요, 저는 개발자가 되고 싶은 대학생입니다..</h2>
      <p className="text-gray-700">React와 웹 개발을 좋아하는 경성대학교 소프트웨어학과 학부생입니다..</p>
    </section>
  );
};

// Skills Component (Receiving Props)
const Skills = ({ skills, experience }) => {
  return (
    <section className="p-4">
      <h2 className="text-xl font-semibold">보유 기술</h2>
      <ul className="list-disc pl-6">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <p className="mt-2 text-gray-600">경력: {experience}년</p>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-3 mt-4">
      &copy; 2025 개발자의 포트폴리오
    </footer>
  );
};

// App Component
const App = () => {
  const mySkills = ["JavaScript", "React", "Node.js", "CSS", "TypeScript"];
  return (
    <div className="min-h-screen flex flex-col items-center">
      <Header />
      <Profile />
      <Skills skills={mySkills} experience={3} />
      <Footer />
    </div>
  );
};

export default App;
