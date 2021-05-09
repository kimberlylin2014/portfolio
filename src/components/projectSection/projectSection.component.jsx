import React from 'react';
import './projectSection.styles.scss';
import Project from '../project/project.component';
import NotePadImg from '../../images/notepad.png';
import HRImg from '../../images/HR_Directory1.png';
import ECommerceImg from '../../images/TrendingInc.png';
import FilmCriticImg from '../../images/FilmCritic3.png';

const ProjectSection = () => {
    return (
            <div id='projects-section'>
                <div className='container'>
                    <div className='row'>
                        <Project 
                         projectName='Full-Stack: Film Critic App' 
                         projectID='1' 
                         projectImg={FilmCriticImg}
                         githubLink='https://github.com/kimberlylin2014/Film_Critic'
                         youtubeEmbedLink='https://www.youtube.com/embed/R3mueh4cfcE'
                        />
                        <Project 
                         projectName='Full-Stack: Notepad App' 
                         projectID='2' 
                         projectImg={NotePadImg}
                         githubLink='https://github.com/kimberlylin2014/Notepad_Fullstack'
                         youtubeEmbedLink='https://www.youtube.com/embed/vZ5eMu0eBXg'
                        />
                        <Project 
                            projectName='React-Redux: HR_Directory' 
                            projectID='3' 
                            projectImg={HRImg}
                            githubLink='https://github.com/kimberlylin2014/HR_Directory'
                            youtubeEmbedLink='https://www.youtube.com/embed/WEjfjz200ic'
                        />
                        <Project 
                         projectName='React-Redux: E-Commerce' 
                         projectID='4' 
                         projectImg={ECommerceImg}
                         githubLink='https://github.com/kimberlylin2014/FashionInc_Ecommerce'
                         youtubeEmbedLink='https://www.youtube.com/embed/a5B6k65jHWg'
                        />
                    </div>
                </div>
            </div>
    )
}

export default ProjectSection;