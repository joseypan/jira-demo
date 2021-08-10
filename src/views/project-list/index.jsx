import { useState, useEffect } from 'react';
import { SearchPanel } from "./search-panel";
import { List } from "./list";
import qs from 'qs';
import { cleanObject } from '../../util';
const apiUrl = process.env.REACT_APP_API_URL;
export const ProjectListScreen = () => {
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })
    const [list, setList] = useState([])      
    const [roles,setRoles] = useState([]);
    useEffect(() => {
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async (response) => {
            if (response.ok) {
                setList(await response.json())
            }
        })
    }, [param])
    useEffect(()=>{
        fetch(`${apiUrl}/users`).then(async response=>{
            if(response.ok){
                setRoles(await response.json())
            }
        })
    },[])
    return <div>
        <SearchPanel param={param} setParam={setParam} roles={roles}></SearchPanel>
        <List roles={roles} list={list}></List>
    </div>
}