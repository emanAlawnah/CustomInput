import CustomButton from "./shared/customButton";

function User(props){
     console.log(props);
     return (
        <div className="user" >
        <h2>name : {props.name}</h2>
        <p>email: {props.email}</p>
        <CustomButton text='details' collor='secondary' margen='0' />
        <CustomButton text='delete' collor='danger' margen='3' />
        


      </div>
    );

    
}

export default User;