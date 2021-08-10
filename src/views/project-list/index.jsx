import { useState, useEffect } from 'react';
import { SearchPanel } from "./search-panel";
import { List } from "./list";
import qs from 'qs';
import { cleanObject } from '../../util';
import { useMount } from '../../hook/useMount';
import { useDebounce } from '../../hook/useDebounce';
const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })
    const [list, setList] = useState([])
    const [roles, setRoles] = useState([]);
    const debouncedParam = useDebounce(param, 2000);
    console.log(debouncedParam);
    useEffect(() => {
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`).then(async (response) => {
            if (response.ok) {
                setList(await response.json())
            }
        })
    }, [debouncedParam])
    useMount(() => {
        fetch(`${apiUrl}/users`).then(async response => {
            if (response.ok) {
                setRoles(await response.json())
            }
        })
    })
    return <div>
        <SearchPanel param={param} setParam={setParam} roles={roles}></SearchPanel>
        <List roles={roles} list={list}></List>
    </div>
}