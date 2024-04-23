type NewComponentPropsType = {
    students: Array<StudentsPropsType>
}

type StudentsPropsType = {
    id: number,
    name: string,
    age: number
}

export const NewComponent = (props: NewComponentPropsType) => {
    return (
        <ul>
            {props.students.map((s, index) => {
                return (
                    <li key={s.id}>{s.name}, {s.age}</li>
                )
            })}
        </ul>
    )
}