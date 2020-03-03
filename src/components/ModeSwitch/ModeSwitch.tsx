
import React, {ChangeEvent, Component} from 'react';
import {Switch} from '@material-ui/core';


export interface ModeSwitchProps {
    onChange(checked: boolean): void;
}

export class ModeSwitch extends Component<ModeSwitchProps>{

    public constructor(props: ModeSwitchProps) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    public render() {

        return (
            <Switch className='switch' color='primary' onChange={this.handleChange}/>
        );

    }

    private handleChange(event: ChangeEvent<HTMLInputElement>): void {
        this.props.onChange(event.target.checked);
    }

}
