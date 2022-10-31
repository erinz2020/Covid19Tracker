import React from 'react';
import {Select, MenuItem} from "@material-ui/core"

function Header(props) {
    const changeCountry = (e) => {
        props.onCountryChange(e);

    }

    return (
        <div className="Header">
            <h1>COVID-19 TRACKER</h1>
            <div className="form-control">
                <Select
                    value={props.country}
                    variant='outlined'
                    onChange={changeCountry}
                >
                    <MenuItem value="worldwide">Worldwide</MenuItem>

                        {props.countries.map(country => (
                            <MenuItem

                                value={country.value}
                                key={Math.random()}

                            >
                                {country.name}
                            </MenuItem>
                        ))}

                </Select>
            </div>

        </div>
    );
}

export default Header;