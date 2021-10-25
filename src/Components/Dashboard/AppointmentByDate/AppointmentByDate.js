import React from 'react';
import './AppointmentByDate.css'
const AppointmentByDate = ({appointments}) => {
    return (
        <div>
            <h2>Appointments</h2>

        <table>

                             <tr>
                            <th className="text-center">Name</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            </tr>

            {
                appointments.map(app=> 
                                       
                            <tr>
                            <td>{app.name}</td>
                            <td>{app.phoneNumber}</td>
                            <td>{app.email}</td>
                            </tr>         
                     )
            }
                  </table>
        </div>
    );
};

export default AppointmentByDate;