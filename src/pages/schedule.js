import React from 'react'

const SchedulePage = () => {
    return (
        <div style={{padding: "75px 0"}}>
            <iframe 
                src="https://app.squarespacescheduling.com/schedule.php?owner=23430819" 
                title="Schedule Appointment" 
                width="100%" 
                height="800" 
                frameBorder="0">
            </iframe>
            <script src="https://embed.acuityscheduling.com/js/embed.js" type="text/javascript"></script>
        </div>
    )
}

export default SchedulePage