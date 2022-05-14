import React, {useEffect, useState} from 'react';
import axios from "axios";
import { List } from '@/components/board/List';

const ListPage= () => {
    const columns = ["name", "date", "title", "Subject"];
    const [data, setData] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:5000/board/list').then(res=>{
            setData(res.data.boards)
        }).catch(err=>{})
    },[])
    return(
    <List columns={columns} colspan={4} data={data} />
  )
}
export default ListPage
