import React from 'react';

const ServiceListDetails = ({ service }) => {
    return (
        <tr>
            <td> {service.name}  </td>
            <td>{service.email}</td>
            <td>{service.title}</td>
            <td>{service.description}</td>
            <td>Pending</td>
        </tr>

    );
};

export default ServiceListDetails;