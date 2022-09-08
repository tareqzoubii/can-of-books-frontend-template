import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';

class Profile extends Component {
  render() {
    const { user } = this.props.auth0;
    console.log(user);
    return( 
    <div>
        <h1 style={{color:"black", textAlign:"center", padding:"30px"}}> Welcome {user.given_name}</h1>
        <h3 style={{color:"black", textAlign:"center", padding:"30px"}}> We are glad for joining us here in BOOK App</h3>
        <img src={user.picture}  alt="img" style={{paddingLeft:"625px"}}/>
        <h3 style={{color:"black", textAlign:"center", padding:"30px"}}> Your Email is : {user.email} </h3>
        <h3 style={{color:"black", textAlign:"center", padding:"30px"}}>your full name: {user.given_name} {user.family_name}</h3>
        
        </div>
    )
  }
}

export default withAuth0(Profile);