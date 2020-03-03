
import React, {Component} from "react";

import './Location.css';

interface LocationProps {
    city: string;
    country: string;
}

export class Location extends Component<LocationProps>{

    private city: string;
    private country: string

    constructor(props: LocationProps) {
        super(props);

        this.city = props.city;
        this.country = props.country;
    }

    render(){

        const location = this.props.city ? <p>{this.props.city}, {this.props.country}</p> : '';

        return (
            <div className='location-wrapper'>
                {location}
            </div>
        );
    }
}
