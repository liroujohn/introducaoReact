import './styles.css'

export function Card({name, time}) {  // (props)
    return(
        <div className='card'>
            <strong>{name}</strong>
            <small>{time}</small>
        </div>
    )    
}