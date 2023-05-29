import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path='/posts' element={<Posts />} />        {/* при переходе на /posts отображаем компонент POSTS */}
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
// rsc - react statelles component - создать шаблон компонента React
// Feature Slices 
// БЭМ - методология
// Компонент - функция, которая возвращает JSX(HTML+JS) разметку
// CTRL+A - выделить все
// CTRL+K+F - форматировать код

// Декомпозиция - разделение кода компонента
// Декомпозировать header и footer из App

/*
  ДЗ. Создать Компонент Hobby
  1. В компоненте в теге h5 должны отображаться хобби, которые вы передаете как пропс
  Вызвать компонент Hobby под компонентом Hello каждого пользователя
  2. В компонент Hello так же передавать пропс age и отобразите его в другом
  теге p внутри компонента hello. Передать age для каждого <Hello />
*/


/*
  1. создается компонент componentMount(). 0 постов
  2. useEffect()
  3. setState() 3 поста
  4. компонент пересоздается
  5. console.log() 3 поста
*/