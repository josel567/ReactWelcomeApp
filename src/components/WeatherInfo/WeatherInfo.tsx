
import React, {Component} from "react";
import './WeatherInfo.css';

interface WeatherInfoProps {
    description: string;
}

export class WeatherInfo extends Component<WeatherInfoProps>{

    private description: string

    constructor(props: WeatherInfoProps) {
        super(props);

        this.description = props.description;
    }

    public render() {

        return (
            <div className='weather-info'>
                <p>{this.props.description}</p>
            </div>
        )

    }

}
