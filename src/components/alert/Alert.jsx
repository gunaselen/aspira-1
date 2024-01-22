import React, { useState } from 'react'
import "./Alert.scss"
import { SeeAll, SubTitele, TitltLayout } from '../subTitele/SubTitele'
import { AlertCards } from '../cards/Cards'
import { AlertIcon, ArrowRight, GoalIcon ,InterviewIconAl,InterviewsIcon,RankingIcon,RewardIcon,RewardsIcon,TimesheetIcon} from '../../utils/images'

const Alert = () => {
  return (
    <div className={`alert `}>

      <div className=""></div>
      <SubTitele>Alert</SubTitele>
      <div className="card"> <AlertCards type={"GoalIcon"} img={GoalIcon} title={"Goal Incompletion"} stage={"One step to complete your goal"} color={"red"} button={"Click here"} /></div>
      <SubTitele>Reminder</SubTitele>
      <div className="cards-section">
        <AlertCards type={"TimesheetIcon"} img={TimesheetIcon} title={"Timesheet Update"} stage={"Last Update on 23/03/23"} color={"red"} arrow={ArrowRight} />
        <AlertCards type={"InterviewsIcon"} img={InterviewIconAl} title={"Interview"} stage={"Last Update on 23/03/23"} color={"red"} arrow={ArrowRight} />
      </div>
     
      <TitltLayout>Recent Projects</TitltLayout>
      <AlertCards type={"recentProject"} img={""} title={"Netflix Landing page"} stage={"2 hrs Ago"} arrow={ArrowRight}  recentProject={true} />
      <AlertCards type={"recentProject"} img={""} title={"Netflix Landing page"} stage={"2 hrs Ago"} arrow={ArrowRight}  recentProject={true} />

     
      <TitltLayout>Recent rewards</TitltLayout>
      <div className="cards-section">
        <AlertCards type={"RewardsIcon"} img={RewardIcon} title={"Reward for Attendance"}  color={"red"}  />
        <AlertCards type={"RankingIcon"} img={RankingIcon} title={"Rank 1 on Hackathon"}  color={"red"} />
      </div>



    </div>
  )
}

export default Alert
