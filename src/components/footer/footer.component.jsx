import React from 'react';
import './footer.styles.css'

const Footer = () => {
    return(
        <footer id="footer"  className="">
            <div className="d-flex justify-content-center align-items-center pt-3">
                <p > Icons made by <a href="https://www.flaticon.com/authors/freepik">Freepik </a> 
                from <a href="https://www.flaticon.com/"> www.flaticon.com</a></p>
            </div>
            <div className="d-flex justify-content-center align-items-center">
                <p> Photos by <a href='https://unsplash.com/@jesuskiteque?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText'>Jesus Kiteque</a> and 
                <a href="https://unsplash.com/@hubery_"> Yichao Zhong</a>
                &nbsp; on <a href="https://unsplash.com/"> Unsplash</a></p>
            </div>
        </footer>
    )
}

export default Footer;