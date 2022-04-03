import axios from "axios"
import React from "react"
import { useRef } from "react"
import { useEffect } from "react"
import { useState } from "react"

const Contact = () => {
    const [data, setData] = useState([])
    const [query , setquery] = useState("")
    const [filterData,setfilterData]= useState([])
    const inputele = useRef(" ")
    const limit = useRef(10)
    const [page,setPage]= useState(1);
    const [pagination,setPagination] = useState([])
    const numberOfPage = Math.ceil(data.length/limit)
    const array1 = []
    for(let i=1;i<=numberOfPage;i++){
        array1.push(i)
    }
    const [paginationArray,setPaginationArray]= useState([])
    setPaginationArray(array1)


    
      useEffect(()=>{
        var config = {
            method: 'get',
            url: `http://localhost:5000/users?_page=${page}&_limit=${limit}`,
          };
          
          axios(config)
          .then(function (response) {
            setData(response.data);
            setfilterData(response.data)
          })
          .catch(function (error) {
            console.log(error);
          });
          //console.log(pagination)

          

      },[])


      const handledelete =(id)=>{
        axios.delete('https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json',{
            params:{ID:id}
        })
      }
      const handleEdit =()=>{
          
      }
      const getSerchTerm = ()=>{
        setquery(inputele.current.value)
        searchHandler()
      }

      const searchHandler=()=>{
          if(query.length!==0){
              const newusers = data.filter((username)=>{
                return(Object.values(username).join(" ").toLowerCase().includes(query.toLowerCase()))
                
              })
              setfilterData(newusers)
          }
          else{
              setfilterData(data)
          }
      }


    return (
        <>
            <div className="debouncing">
                <input type="text" value={query} onChange={getSerchTerm} ref={inputele}/>
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
                                        <div style={{disply:"flex"}}>
                                            <button onClick={()=>handleEdit(items.id)}>e</button>
                                            <button onClick={()=>handledelete(items.id)}>d</button>
                                        </div>
                                    </td>
                                </tr>
                            
                        )
                    })
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