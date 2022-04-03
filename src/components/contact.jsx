import axios from "axios"
import React from "react"
import { useRef } from "react"
import { useEffect } from "react"
import { useState } from "react"
import ContactPosts from "./contactPosts"

const Contact = () => {
    const [data, setData] = useState([])
    const [query, setquery] = useState("")
    const [filterData, setfilterData] = useState([])
    const inputele = useRef("")
    const [limit, setLimit] = useState(10)

    useEffect(() => {
        var config = {
            method: 'get',
            url: `https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json`,
        };

        axios(config)
            .then(function (response) {
                setData(response.data);
                setfilterData(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    const getSerchTerm = () => {
        setquery(inputele.current.value)
        searchHandler()
    }

    const searchHandler = () => {
        if (query.length !== 0) {
            const newusers = data.filter((username) => {
                return (Object.values(username).join(" ").toLowerCase().includes(query.toLowerCase()))

            })
            setfilterData(newusers)
        }
        else {
            setfilterData(data)
        }
    }
   

    return (
        <>
            <div className="debouncing">
                <input type="text" value={query} onChange={getSerchTerm} ref={inputele} />
            </div>
            <table className="table">
                <tr>
                    <td>
                        <input type="checkbox" />
                    </td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Role</td>
                    <td>Actions</td>
                </tr>
                {
                    <ContactPosts datafor={filterData} />
                }

            </table>
            {/* <div style={{display:"flex"}}>
                {paginationArray.map((item)=>{
                    return <>
                        <button>{item}</button>
                    </>
                })}
            </div> */}
        </>
    )
}

export default Contact