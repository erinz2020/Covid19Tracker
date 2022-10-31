import React from 'react';
import numeral from "numeral";

function Table(props) {
    return (
        <div className={"Table"}>
            <table>
                <tbody>
                {props.countries.map(country => (
                    <tr>
                        <td>{country.country}</td>
                        <td>{numeral(country.cases).format("0.0a")}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;