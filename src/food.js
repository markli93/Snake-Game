import React from 'react';

export default class Food extends React.Component{
    render(){
        const style ={
            left:`${this.props.dot[0]}%`,
            top:`${this.props.dot[1]}%`
        }
        return(
            <div className='snake-food' style={style}>

            </div>
        )
    }
}