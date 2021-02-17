import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import PageContent from './components/PageContent';
import AboutContent from './components/AboutContent';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <PageContent />
      <Footer />
    </>
  );
}

export default App;
