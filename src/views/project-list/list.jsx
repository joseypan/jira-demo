export const List = ({ list, roles }) => {
    return <table>
        <thead>
            <tr>
                <th>名称</th>
                <th>负责人</th>
            </tr>
        </thead>
        <tbody>
            {
                list.map(item => {
                    return (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{roles.find(user => user.id === item.personId)?.name || '未知'}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
}