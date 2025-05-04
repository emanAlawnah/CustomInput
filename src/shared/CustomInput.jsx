function CustomInput(props){
return(

  <div className="mb-3 d-flex flex-column justify-content-center">
  <label htmlFor={props.id}>{props.labeltext}</label>
  <input
    className={`inputs form-control w-${props.size}`}
    type={props.type}
    placeholder={props.placeholdertext}
    id={props.id}
  />
</div>
  

  );

}
export default CustomInput;