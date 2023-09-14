import './style.scss';

function Clock(){
    const data = new Date()
   
    return (
        <div>
            <div className="h1">Hello, I am clock</div>
            <div className='h2'>Now is {data.toLocaleTimeString()}</div>
           
        </div>
    )
}

export default Clock;