import React from 'react'
import { SchedulerContainer } from '../components/ContentElements'

const SchedulePage = () => {
    return (
        <SchedulerContainer>
            <iframe 
                src="https://app.squarespacescheduling.com/schedule.php?owner=23430819" 
                title="Schedule Appointment" 
                width="100%" 
                height="1200" 
                frameBorder="0">
            </iframe>
            <script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>
        </SchedulerContainer>
    )
}

export default SchedulePage