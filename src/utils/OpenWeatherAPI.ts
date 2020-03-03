
import axios, {AxiosResponse} from 'axios';

export class OpenWeatherAPI {

    private readonly apiKey: string;

    public constructor(apiKey : string) {
        this.apiKey = apiKey;
    }

    async getWeatherByLocation (lat: string, lon: string): Promise<AxiosResponse> {
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.apiKey}`);
    }

}
