import { useState, useEffect } from "react";
import { SearchPanel } from "./search-panel";
import { List } from "./list";
import qs from "qs";
import { cleanObject } from "../../util";
import { useMount } from "../../hook/useMount";
import { useDebounce } from "../../hook/useDebounce";
import { useHttp } from "../../util/http";
const apiUrl = process.env.REACT_APP_API_URL;

export const ProjectListScreen = () => {
  const [param, setParam] = useState({
    name: "",
    personId: "",
  });
  const [list, setList] = useState([]);
  const [roles, setRoles] = useState([]);
  const debouncedParam = useDebounce(param, 2000);
  const client = useHttp();
  useEffect(() => {
    client("projects", { data: cleanObject(debouncedParam) }).then(setList);
  }, [debouncedParam]);
  useMount(() => {
    client("users").then(setRoles);
  });
  return (
    <div>
      <SearchPanel
        param={param}
        setParam={setParam}
        roles={roles}
      ></SearchPanel>
      <List roles={roles} list={list}></List>
    </div>
  );
};
