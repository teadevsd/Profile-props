import './Button.css'


const Button = (props) =>{
    return(
        <div>
            <div className="cardContainer">
                <img src={props.image} alt="" />

                <div className='cardDetails'>
                <p>Name: {props.title}</p>
                <p>Age: {[props.age]}</p>
                <p>Address: {[props.address]}</p>
                </div>
            </div>

        </div>
    )
}

export default Button