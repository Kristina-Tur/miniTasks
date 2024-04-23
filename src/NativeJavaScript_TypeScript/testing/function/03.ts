import {StudentType} from '../object/02';

export const addSkill = (student: StudentType, skill: string) => {
student.technologies.push({
    id: new Date().getTime(),
    title: skill
})
}

export const makeStudentActive = (student: StudentType) => {
    student.isActive = true;
}

export const changeStudentLive = (student: StudentType, cityName: string) => {
    return student.address.city.title === cityName;
}