import React, { Component } from 'react';
import RequestList from '../RequestList';
import SubjectList from '../SubjectList';
import RequestForm from '../RequestForm';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';




class HomeProfile extends Component {

    render() {
        return (
            <div className='profile'>

                <div className='profileInfo'>
                    <div id='profilePic'>
                        ProfilePic
                    </div>
                    <div className='name'>
                        <h3>UserNameHere</h3>
                        <h4>Role / Team</h4>
                    </div>

                

                <SubjectList />

                <RequestList className="requestList" id="mentor" />

                <RequestList className="requestList" id="mentee" />

                <RequestForm />

                <CancelButton />
            </div>
        )
    }

}

export default HomeProfile;