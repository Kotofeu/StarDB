import React from 'react'
import classes from './Selector.module.scss';

export default function Selector({options, defaultValue, value, onChange}) {
    return (
        <select className={classes.MySelection}
            value={value}
            onChange={event => onChange(event.target.value)}
        >
            {options.map(option =>
                <option key={option.value} value={option.value}>
                    {option.name}
                </option>
            )}
        </select>)
}
