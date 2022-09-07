import React from "react";
import Alert from 'react-bootstrap/Alert';

class Welcome extends React.Component {
    render(){
        return(
            <Alert variant="success" style={{backgroundColor:"black", color:"white", padding:"30px"}}>
      <Alert.Heading>Hey, nice to see you</Alert.Heading>
      <p>
        Aww yeah, you entered here to see the BOOK App and we are realy glad for this now please login 
        in to app to use the book application, you can add books and delete it and ofcourse update it 
        "DONT FORGET TO VISIT PROFILE PAGE"  
      </p>
      <hr />
      <p className="mb-0">
      "DONT FORGET TO VISIT PROFILE PAGE" 
      </p>
    </Alert>
        )
    }
}

export default Welcome;