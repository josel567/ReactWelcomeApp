
import React, {Component} from "react";
import './CurrentTemp.css';


interface CurrentTempProps {
    temp: number
}

export class CurrentTemp extends Component<CurrentTempProps>{
    private temp: number

    public constructor(props: CurrentTempProps) {
        super(props);

        this.temp = props.temp;
    }

    public render() {

        const temp = this.props.temp ? <p className='temp'>{Math.round(this.props.temp - 273.15)}</p>: undefined;
        const prefix = temp ? <p className='temp-extra'>ºC</p>: undefined;
        return (
           <div className='current-temp-wrapper'>
               {temp}
               {prefix}
           </div>
        );
    }

}
