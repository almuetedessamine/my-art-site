import React from "react";
import "../css/Connect.css";

function Connect() {
    return (
        <div className="Connect-tab">
            <h2>Connect</h2>
            <table>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Portrait</td>
                        <td>$50</td>
                    </tr>
                    <tr>
                        <td>Full Body</td>
                        <td>$80</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Connect;
