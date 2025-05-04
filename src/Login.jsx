import CustomButton from "./shared/customButton";
import CustomInput from "./shared/CustomInput";
function Login(props){
    return(
        <div className="registerall  d-flex align-items-center justify-content-center w-100  ">
        <div className="register bg-dark-subtle sh p-3 border-2 w-auto d-flex flex-column align-items-center justify-content-cente mt-3 rounded-3">
            <div className="name  d-flex gap-2 align-items-center justify-content-center">
            <CustomInput  id="firstName" labeltext ='first name : ' placeholdertext='Name' type="text" size=''></CustomInput>
            <CustomInput id="lastName" labeltext ='last name : ' placeholdertext='family name' type="text" size=''></CustomInput>
            </div>
            <div className="email w-100">
            <CustomInput id="email" labeltext ='please enter your email ' placeholdertext='email' type="email" size=''></CustomInput>

            </div>
            <div className="pass  d-flex gap-2 align-items-center justify-content-center">
            <CustomInput id="create password" labeltext ='create password ' placeholdertext='password' type="password" size=''></CustomInput>
            <CustomInput id="confirm password" labeltext ='Confirm password ' placeholdertext='Confirm password' type="password" size=''></CustomInput>
            </div>

        <div className="btns w-100  d-flex gap-2 align-items-center justify-content-center "> 
        <CustomButton  text='login'  size ="5" collor='success' margen='0' />
        <CustomButton  text='register' collor='primary' margen='0' />

        </div>
        </div>
        </div>
     ) ;

}
export default Login;