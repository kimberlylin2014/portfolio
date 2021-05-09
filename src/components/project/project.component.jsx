import React from 'react';
import PlayButton from '../../images/freepik-youtube.png'
import GithubImg from '../../images/freepik-github.svg'

class Project extends React.Component {
    constructor(props) {
        super(props)
        this.handleCloseModalClick = this.handleCloseModalClick.bind(this);
    }
    handleCloseModalClick(e) {
        if(e.target.classList.contains("modal-close")) {
            let id = e.target.parentElement.getAttribute("data-closeid");
            let selectedIframe = document.querySelector(`#youtube-modal-${id} iframe`)
            selectedIframe.setAttribute("src", selectedIframe.getAttribute("src"));
        }
    }
    render() {
        const {projectName, projectID, projectImg, githubLink, youtubeEmbedLink} = this.props;
        return(
            <div className="col-12 col-lg-6 mb-5">
                    <h3 className="text-center project-title" style={{color: '#1b1b2f'}}>{projectName}</h3>
                    <div className="youtube-img" data-playid={projectID} style={{backgroundImage: `url(${projectImg})`, backgroundSize: 'contain', backgroundRepeat: "no-repeat", backgroundPosition: "center", margin: "0 auto"}}>
                         <a href='#' data-toggle="modal" data-target={`#youtube-modal-${projectID}`} data-id={`${projectID}`}>
                            <img className="play-btn" src={PlayButton} onClick={this.handleClick}></img>
                         </a>
                    </div>
                    <div className="d-flex align-items-center git-section">
                        <img src={GithubImg} className="git-img"></img> 
                        <a href={githubLink} target="_blank"data-href={githubLink} className="git-link" >
                        View Github Repository
                        </a>
                    </div>
                    <div className="modal fade" id={`youtube-modal-${projectID}`}  tabIndex="-1" role="dialog" aria-labelledby="youtube-modal" aria-hidden="true">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <button type="button" className="close" data-dismiss="modal"  data-closeid={projectID} aria-label="Close">
                                    <span aria-hidden="true" className="modal-close" onClick={this.handleCloseModalClick}>&times;</span>
                                </button>
                                <div className="videowrapper"> 
                                <iframe width="560" height="315" src={youtubeEmbedLink} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>     
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
        )
    }
    
}

export default Project;