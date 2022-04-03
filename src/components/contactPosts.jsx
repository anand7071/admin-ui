import axios from "axios";
import React from "react";



const ContactPosts = (params) => {
    const filterData = params.datafor

    const handledelete = (id) => {
        
    }
    const handleEdit = () => {

    }

    return (
        filterData.map((items) => {
            return (

                <tr className="" key={items.id}>
                    <td>
                        <input type="checkbox" />
                    </td>
                    <td>{items.name}</td>
                    <td>{items.email}</td>
                    <td>{items.role}</td>
                    <td>
                        <div style={{ disply: "flex" }}>
                            <button onClick={() => handleEdit(items.id)}>e</button>
                            <button onClick={() => handledelete(items.id)}>d</button>
                        </div>
                    </td>
                </tr>

            )
        }
        )
    )
}

export default ContactPosts

