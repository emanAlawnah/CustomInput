function CustomButton(props){

    return (
        <button className={`btn btn-outline-${props.collor} btn-lg b-${props.size} rounded-pill shadow ms-${props.margen}`}>{props.text}</button>

    );
}

export default CustomButton;