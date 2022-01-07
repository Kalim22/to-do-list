import React, {useState} from 'react'
import Card from './Card';
import './AddList.css';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';

function AddList() {

    const [text, setText] = useState('');
    const [list, setList] = useState([]);
    const [alertField, setAlertField] = useState('TextField')

    const addList = () => {
        if(text === ''){
            setAlertField('error-msg');
            setTimeout(() => {
                setAlertField('TextField');
            }, 1500);
        }else{
            const newArr = [...list, text]
            setList([...new Set(newArr)]);
            setText('')
        }
    };

    const clearAll = () => {
        setText('');
    }

    const clear = () => {
        setText(text.slice(0, text.length - 1));
    };

    const removeList = id => {
        list.splice(id, 1);
        setList([...list])
    }

    const editList = id => {
        const editableItem = list.splice(id, 1)
        setText(editableItem);
    };
    

    return (
        <>
            <div className='my-5 box'>
                <form className='d-flex justify-content-center align-items-center m-1 p-2' >
                    <div className='text-field'>
                        <TextField
                            color='primary'
                            id="demo-helper-text-misaligned"
                            label="Your List"
                            value={text}
                            type='text'
                            className={`${alertField}`}
                            onChange={e => setText(e.target.value)} 
                            placeholder={`Enter your list...`}
                            // style={{border:`${alertField}`}}
                            required  />
                    </div>
                    <div className='btns'>
                        <Button 
                            variant="contained" 
                            type='button' 
                            onClick={addList} 
                            className='mx-3'>
                            Add List
                        </Button>
                        <Button 
                            variant="contained" 
                            color='error' 
                            type='button' 
                            onClick={clear} 
                            className='mx-3'>
                            Clear
                        </Button>
                        <Button 
                            variant="contained" 
                            color='error' 
                            type='button' 
                            onClick={clearAll} 
                            className='mx-3'>
                            Clear All
                        </Button>
                    </div>
                </form>
            </div>
            <div>
                <Card 
                list={list} 
                removeList={removeList} 
                editList={editList} />
            </div>
        </>
    )
}

export default AddList;