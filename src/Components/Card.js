import React from 'react';
import './Card.css';
import { MdDelete } from 'react-icons/md'
import { FaRegCopy, FaEdit } from 'react-icons/fa';


function Card({list, removeList, editList}) {

    return (
        <>
            <div className='container-fluid'>
                {
                    list.map((ele, idx) => {
                        return(
                            <div className='d-flex justify-content-around align-items-center list-box container my-3' key={idx}>
                                <li>
                                    <div className='list-item'>
                                        <h2>{
                                            ele.replace(/^(.)|\s+(.)/g,  c => c.toUpperCase())
                                        }</h2>
                                    </div>
                                    <div className='icons'>
                                        <FaEdit onClick={() => editList(idx)} className='icon 1' />
                                    </div>
                                    <div className='icons' >
                                        <FaRegCopy className='icon 2' />
                                    </div>
                                    <div className='icons 3'>
                                        <MdDelete onClick={() => removeList(idx)} className='icon' />
                                    </div>
                                </li> 
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Card;
