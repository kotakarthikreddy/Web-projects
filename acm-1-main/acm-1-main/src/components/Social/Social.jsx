import React from 'react'
// import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import './social.css'

const Social = () => {
    return (
        <div>
            <div className="title" id="profile"><h1 className="joinOur">Join Our Community</h1>
                <div className="underline"></div>
            </div>
<div className="socialcontainer">

<div class="social-icons">
        <a href="https://www.linkedin.com/company/acm-student-chapter-vit-ap/" target="_blank" class="social-icon social-icon--codepen">
        <i className="fab fa-linkedin-in"></i>
          <div class="tooltip">Like:189</div>
        </a>
          <a href="https://www.youtube.com/channel/UCbWtVqcVYvn06UqmYoAEoUA" target="_blank" class="social-icon social-icon--youtube">
           <i class="fab fa-youtube"></i>
            <div class="tooltip">Subscriber:156</div>
          </a>
          <a href="https://www.instagram.com/acm_vitap/" target= "_blank" class="social-icon social-icon--instagram">
          <i class="fab fa-instagram"></i>
            <div class="tooltip">Follower:500</div>
          </a>
          <a href="https://www.facebook.com/ACM.StudentChapter.VITAP/" target= "_blank" class="social-icon social-icon--facebook">
          <i class="fab fa-facebook-f"></i>
            <div class="tooltip">Friends:200</div>
          </a>
          <a href="https://github.com/ACM-VITAP" target= "_blank" class="social-icon social-icon--facebook">
          <i class="fab fa-github"></i>
            <div class="tooltip">Followers:15</div>
          </a>
    </div>
</div>
        </div>
    )
}

export default Social
