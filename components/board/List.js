import {useEffect, useState} from "react"
import tableStyles from "@/styles/Table.module.css"

export function List({ columns,colspan, data }){
    return (
        <table className={tableStyles.table}>
        <thead>
        <tr className={tableStyles.tr}>
            {columns.map((column)=>(
                <th key={column} className={tableStyles.th}>{column}</th>
            ))}
        </tr>
        </thead>
        <tbody>
        {data.length == 0 ?<tr className={tableStyles.tr}>
        <td colSpan={colspan} className={tableStyles.td}>데이터가 없습니다.</td>                
        </tr>
        :data.map((board)=>(
            <tr className={tableStyles.tr} key={board.name}>
            <td className={tableStyles.td}>{board.name}</td>
            <td className={tableStyles.td}>{board.date}</td>
            <td className={tableStyles.td}>{board.title}</td>
            <td className={tableStyles.td}>{board.subject}</td>
            </tr>
        ))
        }
        </tbody>
        </table>
        
    )
}

