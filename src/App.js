import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header.component';
import TopFold from './components/topFold/topFold.component';
import ResumeSection from './components/resumeSection/resumeSection.component';
import RollingImage from './components/rollingImage/rollingImage.component';
import ProjectSection from './components/projectSection/projectSection.component';
import EducationBackground from './components/educationBackground/educationBackground.component';
import Footer from './components/footer/footer.component';

class App extends React.Component {

  render() {
    return (
      <div>
        <Header />
        <TopFold />
        <ResumeSection />
        <RollingImage />
        <ProjectSection />
        <EducationBackground />
        <Footer />
     </div>
    )
    
  }
}

export default App;
