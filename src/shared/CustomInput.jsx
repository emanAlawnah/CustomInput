function CustomInput(props){
return(

  <div className="container w-100 h-100">
    <form action className="justify-content-center align-items-center">
      <div className="mb-3 d-flex flex-column  justify-content-center">
        <label htmlFor>{props.labeltext}</label>
        <input className={`inputs form-control w-${props.size} ` }type={props.type} placeholder={props.placeholdertext} id="courseName" />
      </div>   
    </form>
  </div>
  

  );

}
export default CustomInput;