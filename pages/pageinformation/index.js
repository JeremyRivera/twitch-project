import React from 'react';
import Project from '../../components/Project';
import ProjectContainer from '../../components/Projectcontainer';
import Button from '../../components/Button';
import Card from '../../components/Card';
import './styles.css'

const pageinformation = props => {
    return (
        <div className='PageInfoWrapper'>
            <Card></Card>
            <ProjectContainer>
                <Project></Project>
                <Project></Project>
                <Project></Project>
                <Project></Project>
            </ProjectContainer>
            <Button>Add</Button>
        </div>
    );
}
export default pageinformation;
