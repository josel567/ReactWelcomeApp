
import React, {Component} from 'react';

import './WeatherCard.css';
import {CurrentTemp} from '../CurrentTemp';
import {Location} from '../Location';
import {ModeSwitch} from '../ModeSwitch';
import {OpenWeatherAPI} from "../../utils/OpenWeatherAPI";
import {WeatherInfo} from "../WeatherInfo/WeatherInfo";

interface WeatherCardState {
    darkMode: boolean;
    weather: {
        name: string,
        sys: {
            country: string
        },
        main: {
            temp: number,
            temp_max: number,
            temp_min: number
        },
        weather: [{
            description: string
        }]
    };
}

export class WeatherCard extends Component<{}, WeatherCardState> {

    public constructor(props: {}) {
        super(props);

        this.state = {
            darkMode: false,
            weather: {
                name: '',
                sys: {
                    country: ''
                },
                main: {
                    temp: 0,
                    temp_max: 0,
                    temp_min: 0
                },
                weather: [{
                    description: ''
                }]
            }
        };

        this.handleSwitchChange = this.handleSwitchChange.bind(this);

    }

    public componentDidMount(): void {

        const openWeatherAPI = new OpenWeatherAPI(process.env.REACT_APP_WEATHER_API_KEY!);

        this.getLocation().then((location: any) => {
            openWeatherAPI.getWeatherByLocation(location.coords.latitude, location.coords.longitude).then(weather => {
                console.log(weather.data);
                this.setState({
                    weather: weather.data
                })
            });
        });

    }

    private getLocation = () => {
        return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });
    };

    public render() {

        const classMode = this.state.darkMode ? 'light-mode' : 'dark-mode';

        return (
            <div className={`weatherCard ${classMode}`} >
                <CurrentTemp temp={this.state.weather.main.temp} />
                <div className='info'>
                    <Location city={this.state.weather.name} country={this.state.weather.sys.country} />
                    <WeatherInfo description={this.state.weather.weather[0].description}/>
                </div>
                <ModeSwitch onChange={this.handleSwitchChange} />
            </div>
        );

    }


    private handleSwitchChange(checked: boolean): void {
        this.setState({
            darkMode: checked
        })
    }

}
