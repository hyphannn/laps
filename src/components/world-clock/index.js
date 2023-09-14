
import './style.scss';
function convertTime(offset) {
    // create Date object for current location
    var localTime = new Date();
    
    // convert to msec
    // subtract local time zone offset
    // get UTC time in msec
    const utcTime = localTime.getTime() + (localTime.getTimezoneOffset() * 60000);
    
    // create new Date object for different city
    // using supplied offset
    
    const cityTime = new Date(utcTime + (3600000*offset));
    
    // return time as a string
    return cityTime.toLocaleString()
    }
function WorldClock({tenThanhPho, muiGio}) {
    return (
        <div className='container'>
            <div className="content">
                <div className="city-name">{tenThanhPho}</div>
                <div className="city-clock">{convertTime(muiGio)}</div>
            </div>
           
        </div>
    )
}

export default WorldClock;