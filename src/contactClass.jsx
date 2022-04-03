import axios from "axios";
import React from "react";


class ContactClass extends React{
    constructor(props){
        super(props);
        this.state={
            data:[],
            filterData:[],
            limit:10,
            pageNo:1,
            query:""

        }
        this.handleContact = this.handleContact.bind(this)
        
    }
    
    componentDidMount(){
        this.handleContact()
    }


    handleContact = ()=>{
        var config = {
            method: 'get',
            url: `https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json`,
        };

        axios(config)
            .then(function (response) {
                this.setState({
                    data:response.data
                })
                
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    getSerchTerm = () =>{

    }
    handleEdit = () =>{

    }
    handledelete = () =>{

    }
    render(){
        const data= this.data
        return(
            <>
            <div className="debouncing">
                <input type="text" value={this.query} onChange={this.getSerchTerm} />
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
                    data.map((items) => {
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
                                        <button onClick={() => this.handleEdit(items.id)}>e</button>
                                        <button onClick={() => this.handledelete(items.id)}>d</button>
                                    </div>
                                </td>
                            </tr>
            
                        )
                    }
                    )
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
}

export default ContactClass