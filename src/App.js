import React from 'react';
import Links from './components/links/links.js'
import moment from 'moment';
import Image from './assets/images/image.svg'
import './App.css';
import data from './data'

function getDay() {
  let days = ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"]
  return days[moment().day()]
}

function getDate() {

  let date = moment().date();
  let ones = date;
  let tens = 0;
  let day;
  while (ones >= 10) {
    ones -= 10
    tens += 1
  }

  let number = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十"]

  if (tens === 1) {
    day = "十";
    if (ones !== 0) {
      day = "十" + number[ones - 1]
    }
  }
  else if (tens >= 1) {
    day = number[tens - 1] + "十";
    if (ones !== 0) {
      day = number[tens - 1] + "十" + number[ones - 1]
    }
  }
  else {
    day = number[ones - 1]
  }

  return day + "日";
}

function getMonth() {
  let months = ["一", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "十二"]
  return months[moment().month()] + "月"
}

function getGreetings() {
  if (moment().format('HH') >= 18) {
    return "こんばんは";
  }
  else {
    return "こんばんは"
  }
}

function App() {

  const styles = {
    container: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    day: {
      position: "absolute",
      top: 30,
      left: 40,
      fontSize: 24
    },
    date: {
      fontSize: 24
    },
    month: {
      fontSize: 24,
      marginRight: 20
    },
    time: {
      fontSize: 32,
      letterSpacing: 6,
    },
    greetings: {
      fontSize: 32,
      letterSpacing: 6,
    },
  }

  return (
    <div style={styles.container}>
      <div className="day" >{getDay()}</div>
      <div className="date">
        <div style={styles.month}>{getMonth()}</div>
        <div style={styles.date}>{getDate()}</div>
      </div>
      <div className="timeContainer" style={styles.timeContainer}>
        <a href="https://nicodin.netlify.app/DY3S1_Timetable.PNG" target="_blank" style={styles.time}>{moment().format('HH:mm')}</a>
        <div style={styles.greetings}>{getGreetings()}</div>
      </div>
      <div className="contentContainer">
        <img className="image" src={Image} alt="logo" />
        <div className="linkContainer">
          <Links
            linktitle={"メジャー"}
            links={data.media}
          />
          <Links
            linktitle={"デヴー"}
            links={data.dev}
          />
          <Links
            linktitle={"アカデミー"}
            links={data.education}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
