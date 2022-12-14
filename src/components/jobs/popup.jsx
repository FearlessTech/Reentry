import React from 'react'
import './popup.css'

export const Popup = ()=> {
  return (
    <div className='popup'>
        <div className='top'>
            <p>Job alerts</p>
            <img src="https://cdn-icons-png.flaticon.com/128/447/447047.png" alt="" /> 
        </div>
        <hr />
        <div className='content'>
            <div className='subContent'>
                <div className='leftCon'>
                <h4>Job at India</h4>
                <h6>India</h6>
            
                <p>Frequency: Daily via email and notification</p>
                <p>Get notified of similar jobs: Yes</p>
                </div>
                <div className='rightCon'>
                    <img src="https://cdn-icons-png.flaticon.com/128/1659/1659682.png" alt="" />
                    <img src="https://cdn-icons-png.flaticon.com/128/1345/1345823.png" alt="" />
                </div>
            </div>

            <div className='subContent'>
                <div className='leftCon'>
                <h4>Job at India</h4>
                <h6>India</h6>
            
                <p>Frequency: Daily via email and notification</p>
                <p>Get notified of similar jobs: Yes</p>
                </div>
                <div className='rightCon'>
                    <img src="https://cdn-icons-png.flaticon.com/128/1659/1659682.png" alt="" />
                    <img src="https://cdn-icons-png.flaticon.com/128/1345/1345823.png" alt="" />
                </div>
            </div>

            <div className='subContent'>
                <div className='leftCon'>
                <h4>Job at India</h4>
                <h6>India</h6>
            
                <p>Frequency: Daily via email and notification</p>
                <p>Get notified of similar jobs: Yes</p>
                </div>
                <div className='rightCon'>
                    <img src="https://cdn-icons-png.flaticon.com/128/1659/1659682.png" alt="" />
                    <img src="https://cdn-icons-png.flaticon.com/128/1345/1345823.png" alt="" />
                </div>
            </div>
        </div>
        <hr />
        <div className='bottom'>
            <div className='leftB'>
            <h4>Job recommendations</h4>
            <h6>Based on your job alerts, activity, and profile. <span className='blue'>Learn more.</span> </h6>
            </div>
            <div className='rightB'>
               {/* <span className='gray'>On</span> */}
            
<label class="switch">
  <input type="checkbox" />
  <span class="slider round"></span>
</label>
            </div>
        </div>
        <hr />
        <button>Done</button>
    
    </div>
  )
}


