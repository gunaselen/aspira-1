
import { ArrowRight } from '../../utils/images'
import Button from '../button/Button'
import "./Cards.scss"

function Cards(props) {
    const {img,title,stage,percent } = props
    // const percent = 10; // Set the desired percentage
    return (
      <div className='DScoures shadow'>
          <div className="DScoures-img ">
              <img src={img} alt="" />
          </div>
          <div className="DScoures-text">
              <h2 className='DScoures-text-title'>{title}</h2>
              <p className='DScoures-text-stage'>{stage}</p>
              <div className="button-section">
                  <Button >Go to course <img src={ArrowRight} alt="arrow" /></Button>
                  <div className="percent">
                  <svg>
      <circle cx="23" cy="23" r="20"></circle>
      <circle cx="23" cy="23" r="20" style={{
              strokeDasharray: '125px',
              strokeDashoffset: `calc(125px - (125px * ${percent}) / 100)`,
              stroke: '#6AAA43',
            }}></circle>
    </svg>
    
      <h3 className='number'>{percent}<span>%</span></h3>
  
    </div>
              </div>
          </div>
        
      </div>
    )
}
function AlertCards(props) {
    const {img,title,stage,color ,button,arrow, recentProject,type} = props
    let backGround='#ffff' ;

    switch (type&&type || null) {
        case 'GoalIcon':
            backGround = "#F06058";
            break;
        case 'TimesheetIcon':
          backGround = "#FCD042";
          break;
        case 'InterviewsIcon':
            backGround = "#88C264";
          break;
        case 'RewardsIcon':
            backGround = "#fdf5db";
          break;
        case 'RankingIcon':
            backGround = "#FF663633";
 
      }
    return (
      <div className={`DScoures AlertCards ${type == "recentProject" ?'recentProject':""}`}>
          <div className={`DScoures-img ${color?"round":""} ${recentProject?"smallimg":""}`} style={{background:backGround}}>
              <img src={img} alt="" />
          </div>
          <div className="DScoures-text">
              <h2 className='DScoures-text-title'>{title&&title||null}</h2>

              {stage&&<p className='DScoures-text-stage'>{stage} </p>}

              {button && <div className="button-section">
                  <Button  >{button} <img src={ArrowRight} alt="arrow" /> </Button>
              </div>  }

              
          </div>
          {arrow && <div className="arrow-button">
                  <img src={arrow} alt="arrow" />
              </div>  }

        
      </div>
    )
}
export  {Cards ,AlertCards}
