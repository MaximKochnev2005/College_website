import './App.css';
import {Route, Routes} from "react-router-dom";
import Main from "./Main";
import College from "./about_college";
import logo from "./static/media/photo_2022-06-07_14-36-37.png"
import Managers from "./Managers";
import Junior_Manager from "./Junior_Manager";
import Teachers from "./Teachers";
import Teachers_Dance from "./Teachers_Dance";
import Teachers_Design from "./Teachers_Design";
import Teachers_Music from "./Teachers_Music";
import Teachers_Musical_Instrument from "./Teachers_Musical_Instrument";
import Teachers_Theatre from "./Teachers_Theatre";
import Teachers_Other from "./Teachers_Other";
import News from "./News";
import For_Applicants from "./For_Applicants";
import For_Teachers from "./For_Teachers";
import news from "./files/news.json"
import staff from "./files/staff.json"

function App() {
  localStorage.setItem('staff', JSON.stringify(staff))
  localStorage.setItem('news', JSON.stringify(news))

  return (
    <div className="App">
      <header>
        <a href="/" className="logo"><img src={logo}/></a>
        <div className="navigation">
          <ul className="menu">
            <div className="close-btn"></div>
            <li className="menu-item"><a href="/">Главная</a></li>
            <li className="menu-item" id={'for-pc'} >
              <a className="sub-btn" href="#">Студентам <i className="fas fa-angle-down"></i></a>
              <ul className="sub-menu">
                <li className="sub-item"><a href="https://edu.tatar.ru/upload/storage/org848/files/%D1%80%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%BA%D0%BE%D0%BB%D0%BB%D0%B5%D0%B4%D0%B6%202%20%D1%81%D0%B5%D0%BC%D0%B5%D1%81%D1%82%D1%80%202021%20%E2%80%94%20%D0%BD%D0%B0%20%D1%81%D0%B0%D0%B9%D1%82.pdf">Расписание</a></li>
                <li className="sub-item"><a href="https://edu.tatar.ru/upload/storage/org848/files/%D0%A1%D0%9A%D0%94(2).pdf">График сессий заочной формы обучения</a></li>
              </ul>
            </li>
            <li id={'for-mobile'} className="menu-item"><a href="https://edu.tatar.ru/upload/storage/org848/files/%D1%80%D0%B0%D1%81%D0%BF%D0%B8%D1%81%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%BA%D0%BE%D0%BB%D0%BB%D0%B5%D0%B4%D0%B6%202%20%D1%81%D0%B5%D0%BC%D0%B5%D1%81%D1%82%D1%80%202021%20%E2%80%94%20%D0%BD%D0%B0%20%D1%81%D0%B0%D0%B9%D1%82.pdf">Расписание</a></li>
            <li id={'for-mobile'} className="menu-item"><a href="https://edu.tatar.ru/upload/storage/org848/files/%D0%A1%D0%9A%D0%94(2).pdf">График сессий</a></li>
            <li id={'for-mobile'} className="menu-item" onClick={() => {window.location.replace('/for-applicants')}}><a href="/for-applicants">Информация для поступающих</a></li>
            <li id={'for-mobile'} className="menu-item" onClick={() => {window.location.replace('/for-teachers')}}><a href="/for-teachers">Информация для преподователей</a></li>
            <li id={'for-mobile'} className="menu-item"><a href="https://edu.tatar.ru/elabuga/page892.htm/page4286898.htm">Информация для родителей</a></li>
            <li className="menu-item">
              <a className="sub-btn" href="/teachers" onClick={() => window.location.replace('/teachers')}>Сотрудники<i className="fas fa-angle-down"></i></a>
              <ul className="sub-menu">
                <li className="sub-item" onClick={() => window.location.replace('/managers')}><a href="/managers">Руководители</a></li>
                <li className="sub-item" onClick={() => window.location.replace('/zav_managers')}><a href="/zav_managers">Заведующие</a></li>
                <li className="sub-item more">
                  <a className="more-btn" href="/teachers" onClick={() => window.location.replace('/teachers')}>Преподователи<i className="fas fa-angle-right"></i></a>
                  <ul className="more-menu">
                    <li className="more-item" onClick={() => window.location.replace('/teachers_musical_instruments')}><a href="/teachers_musical_instruments">Инструментальное исполнительство</a></li>
                    <li className="more-item" onClick={() => window.location.replace('/teachers_dance')}><a href="/teachers_dance">Хореографическое творчество</a></li>
                    <li className="more-item" onClick={() => window.location.replace('/teachers_music')}><a href="/teachers_music">Музыкальное исскуство</a></li>
                    <li className="more-item" onClick={() => window.location.replace('/teachers_design')}><a href="/teachers_design'">Дизайн</a></li>
                    <li className="more-item" onClick={() => window.location.replace('/teachers_theatre')}><a href='/teachers_theatre' >Театральное исскуство</a></li>
                    <li className="more-item" onClick={() => window.location.replace('/teachers_other')}><a href='/teachers_other'>Общие гуманитарные дисциплины</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li className="menu-item" id={'for-pc'}>
              <a className="sub-btn" href="#">Информация <i className="fas fa-angle-down"></i></a>
              <ul className="sub-menu">
                <li className="sub-item" onClick={() => window.location.replace('/for-applicants')}><a href="#">Для поступающих</a></li>
                <li className="sub-item" onClick={() => window.location.replace('/for-teachers')}><a href="#">Для преподователей</a></li>
                <li className="sub-item"><a href="https://edu.tatar.ru/elabuga/page892.htm/page4286898.htm">Для родителей</a></li>
              </ul>
            </li>
            <li className="menu-item"><a href="https://edu.tatar.ru/upload/storage/org848/files/%D0%98%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D1%8F%20%D0%BE%20%D0%BA%D1%83%D1%80%D0%B0%D1%82%D0%BE%D1%80%D0%B0%D1%85.pdf">Контакты</a></li>
          </ul>
        </div>
        <div className="menu-btn"></div>

      </header>
      <main>
      <Routes >
        <Route  path={'/'} element={<Main/>}/>
        <Route  path={'/managers'} element={<Managers/>}/>
        <Route  path={'/zav_managers'} element={<Junior_Manager/>}/>
        <Route  path={'/teachers'} element={<Teachers/>}/>
        <Route  path={'/teachers_dance'} element={<Teachers_Dance/>}/>
        <Route  path={'/teachers_design'} element={<Teachers_Design/>}/>
        <Route  path={'/teachers_music'} element={<Teachers_Music/>}/>
        <Route  path={'/teachers_musical_instruments'} element={<Teachers_Musical_Instrument/>}/>
        <Route  path={'/teachers_theatre'} element={<Teachers_Theatre/>}/>
        <Route  path={'/teachers_other'} element={<Teachers_Other/>}/>
        <Route  path={"/news/:id"} element={<News/>}/>
        <Route  path={'/about-college'} element={<College/>}/>
        <Route  path={'/for-applicants'} element={<For_Applicants/>}/>
        <Route  path={'/for-teachers'} element={<For_Teachers/>}/>
      </Routes>
        </main>
      <footer className={'footer'}>
        <div className="foot-contain">
          <div className="row">
            <div className="footer-col">
              <h4>Информация</h4>
              <ul>
                <li><a href="#"></a></li>
                <li><a href="/about-college">О колледже</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Помощь</h4>
              <ul>
                <li><a href="https://edu.tatar.ru/elabuga/page892.htm/page968111.htm">Виртуальная приемная</a></li>
                <li><a>+7(855)-577-83-40</a></li>
                <li><a>el_kpu@mail.ru</a></li>
                <li><a>priem.ekki@gmail.com - (почта приемной комиссии)</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Прочее</h4>
              <ul>
                <li><a href="https://edu.tatar.ru/elabuga/page892.htm/page968115.htm">Нормативно-правовые документы</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Наши Социальные Сети</h4>
              <div className={'social-links'}>
                <a href="https://vk.com/elabugaekki"><svg id="VK_Logo" xmlns="http:/xx/www.w3.org/2000/svg"  viewBox="0 0 202 202" ><path d="M162.2 71.1c.9-3 0-5.1-4.2-5.1h-14c-3.6 0-5.2 1.9-6.1 4 0 0-7.1 17.4-17.2 28.6-3.3 3.3-4.7 4.3-6.5 4.3-.9 0-2.2-1-2.2-4V71.1c0-3.6-1-5.1-4-5.1H86c-2.2 0-3.6 1.7-3.6 3.2 0 3.4 5 4.2 5.6 13.6v20.6c0 4.5-.8 5.3-2.6 5.3-4.7 0-16.3-17.4-23.1-37.4-1.4-3.7-2.7-5.3-6.3-5.3H42c-4 0-4.8 1.9-4.8 4 0 3.7 4.7 22.1 22.1 46.4C70.9 133 87.2 142 102 142c8.9 0 10-2 10-5.4V124c0-4 .8-4.8 3.7-4.8 2.1 0 5.6 1 13.9 9 9.5 9.5 11.1 13.8 16.4 13.8h14c4 0 6-2 4.8-5.9-1.3-3.9-5.8-9.6-11.8-16.4-3.3-3.9-8.2-8-9.6-10.1-2.1-2.7-1.5-3.9 0-6.2 0-.1 17.1-24.1 18.8-32.3z"/></svg></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
