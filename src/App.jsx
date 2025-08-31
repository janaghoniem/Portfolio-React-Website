import Header from './components/Header';
import AvatarViewer from './components/AvatarViewer';
import About from './components/About';
// import Projects from './components/Projects';
// import Footer from './components/Footer';
import './index.css';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <AvatarViewer />
        <About />
        {/* <Projects /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}
