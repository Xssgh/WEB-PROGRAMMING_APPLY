import React, { useState } from 'react';

function Trash() {
  // 3개의 state 사용
  const [selectedDay, setSelectedDay] = useState("일요일");
  const [showGuide, setShowGuide] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 요일별 쓰레기 배출 정보
  const wasteSchedule = {
    "일요일": ["일반쓰레기(가연성)", "음식물 쓰레기"],
    "월요일": ["재활용품(플라스틱, 비닐, 요구르트병, 의류)"],
    "화요일": ["일반쓰레기(가연성)", "음식물 쓰레기"],
    "목요일": ["일반쓰레기(가연성)", "음식물 쓰레기"],
    "수요일": [],
    "금요일": [],
    "토요일": []
  };

  // 요일 변경 핸들러
  const handleDayChange = (day) => {
    setSelectedDay(day);
  };

  const days = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];

  // 스타일 객체들
  const styles = {
    container: {
      minHeight: '100vh',
      padding: '16px',
      backgroundColor: isDarkMode ? '#121212' : '#f5f5f5',
      color: isDarkMode ? '#ffffff' : '#333333',
    },
    wrapper: {
      maxWidth: '500px',
      margin: '0 auto',
    },
    header: {
      textAlign: 'center',
      marginBottom: '24px',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '8px',
    },
    source: {
      fontSize: '14px',
      color: '#888888',
    },
    button: {
      marginTop: '16px',
      padding: '8px 16px',
      backgroundColor: isDarkMode ? '#333333' : '#dddddd',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      color: isDarkMode ? '#ffffff' : '#333333',
    },
    tabs: {
      display: 'flex',
      overflowX: 'auto',
      marginBottom: '16px',
      borderBottom: '1px solid #dddddd',
    },
    tab: {
      padding: '8px 16px',
      cursor: 'pointer',
      borderBottom: '2px solid transparent',
    },
    activeTab: {
      borderBottomColor: '#3b82f6',
      fontWeight: 'bold',
    },
    card: {
      padding: '24px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      marginBottom: '24px',
      backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff',
    },
    dayTitle: {
      fontSize: '20px',
      fontWeight: 'bold',
      marginBottom: '16px',
      display: 'flex',
      alignItems: 'center',
    },
    calendarIcon: {
      marginRight: '8px',
    },
    list: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
    },
    listItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '12px',
    },
    dot: {
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      backgroundColor: '#22c55e',
      marginRight: '12px',
    },
    noCollectionText: {
      textAlign: 'center',
      padding: '16px',
      fontSize: '18px',
      fontWeight: '500',
      color: '#888888',
    },
    timeInfo: {
      marginTop: '16px',
      textAlign: 'center',
      fontSize: '14px',
    },
    guideButton: {
      width: '100%',
      padding: '16px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff',
      border: 'none',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      cursor: 'pointer',
      color: isDarkMode ? '#ffffff' : '#333333',
    },
    guideTitle: {
      fontWeight: '500',
    },
    guideContent: {
      marginTop: '16px',
      padding: '16px',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff',
    },
    guideList: {
      padding: 0,
      margin: 0,
      listStyle: 'none',
      fontSize: '14px',
    },
    guideItem: {
      marginBottom: '12px',
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        {/* 헤더 */}
        <div style={styles.header}>
          <h1 style={styles.title}>부산 쓰레기 분리수거 일정</h1>
          <p style={styles.source}>출처: 부산광역시 사하구 공식 홈페이지</p>
          
          <button 
            style={styles.button}
            onClick={() => setIsDarkMode(!isDarkMode)}
          >
            {isDarkMode ? '라이트 모드' : '다크 모드'}
          </button>
        </div>
        
        {/* 요일 선택 탭 */}
        <div style={styles.tabs}>
          {days.map((day) => (
            <button
              key={day}
              style={{
                ...styles.tab,
                ...(selectedDay === day ? styles.activeTab : {})
              }}
              onClick={() => handleDayChange(day)}
            >
              {day.substring(0, 1)}
            </button>
          ))}
        </div>
        
        {/* 선택된 요일 정보 */}
        <div style={styles.card}>
          <div style={styles.dayTitle}>
            <span style={styles.calendarIcon}>📅</span>
            <h2>{selectedDay} 배출 안내</h2>
          </div>
          
          {wasteSchedule[selectedDay] && wasteSchedule[selectedDay].length > 0 ? (
            <ul style={styles.list}>
              {wasteSchedule[selectedDay].map((item, index) => (
                <li key={index} style={styles.listItem}>
                  <span style={styles.dot}></span>
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <div style={styles.noCollectionText}>
              배출하지 않는 날입니다
            </div>
          )}
          
          <div style={styles.timeInfo}>
            ⏰ 배출시간: 19:00 ~ 22:00
          </div>
        </div>
        
        {/* 분리수거 안내 */}
        <div>
          <button
            style={styles.guideButton}
            onClick={() => setShowGuide(!showGuide)}
          >
            <span style={styles.guideTitle}>ℹ️ 분리수거 안내사항</span>
            <span>{showGuide ? '▲' : '▼'}</span>
          </button>
          
          {showGuide && (
            <div style={styles.guideContent}>
              <ul style={styles.guideList}>
                <li style={styles.guideItem}>• 일반 쓰레기 배출시 기준선까지만 담아서 배출할 것</li>
                <li style={styles.guideItem}>• 음식물 쓰레기는 물기를 제거한 후 동물뼈, 비닐, 이쑤시개등이 섞이지 않도록 분리배출할 것</li>
                <li style={styles.guideItem}>• 재활용품은 품목별로 분리하여 요일별로 배출할 것</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Trash;