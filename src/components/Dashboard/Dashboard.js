import React, { Component } from 'react';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentUser: JSON.parse(localStorage.getItem('currentUser'))
         }

         if(this.props.location.state){
             if (!this.props.location.state.isAuth) {
                 this.props.history.push("/")
             }
         }
         else{
             
         }
    }
    render() { 
        return ( 
            <div>
                Dashboard
            </div>
         );
    }
}
 
export default Dashboard;