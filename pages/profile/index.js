import React from 'react';
import Project from '../../components/Project';
import ProjectContainer from '../../components/Projectcontainer';
import Card from '../../components/Card';
import './styles.css'

const profile = props => {
    return (
        <div className='wrapperprofile'>
            <Card content="Some other site" style={{ background: 'linear-gradient(180deg, rgba(38,148,253,1) 0%, rgba(27,100,220,1) 35%, rgba(24,66,191,1) 100%)' }} />
            <ProjectContainer>
                <Project></Project>
                <Project></Project>
                <Project></Project>
                <Project></Project>
            </ProjectContainer>
        </div >
    );
};

export default profile;