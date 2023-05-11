import { createContext, useState, useContext } from "react";

const DataContext = createContext() ;

const DataProvider = ({children}) => {

    const [teacher, setTeacher] = useState([
        {tId : 1001,
         tName : "Jasmine",
         tMajor : "English",
         tSubjects : ["English", "Civics"],
         tGrade : ["5", "6", "7"]
        },
        {   tId : 1002,
            tName : "Sujatha",
            tMajor : "Chemistry",
            tSubjects : ["Chemistry", "Chem Lab"],
            tGrade : ["5", "6", "7"]
        },
        {   tId : 1003,
            tName : "Manikandan",
            tMajor : "Mathematics",
            tSubjects : ["Mathematics", "Math Club"],
            tGrade : ["5", "6", "7"]
        },
        {   tId : 1004,
            tName : "Anbazhagan",
            tMajor : "Tamil",
            tSubjects : ["Tamil", "Literature Club"],
            tGrade : ["5", "6", "7"]
        },
        {   tId : 1005,
            tName : "Rekha",
            tMajor : "Physics",
            tSubjects : ["Physics", "Physics Club"],
            tGrade : ["5", "6", "7"]
        },
        {   tId : 1006,
            tName : "Jeeva",
            tMajor : "History",
            tSubjects : ["History", "Civics", "Economics", "Quiz Club"],
            tGrade : ["5", "6", "7"]
        },
        {   tId : 1007,
            tName : "Prem",
            tMajor : "Hindi",
            tSubjects : ["Hindi"],
            tGrade : ["5", "6", "7"]
        },
        {   tId : 1008,
            tName : "Ranjith",
            tMajor : "Biology",
            tSubjects : ["Biology", "Botany", "Zoology", "Science Club"],
            tGrade : ["5", "6", "7"]
        },
        {   tId : 1009,
            tName : "Karan",
            tMajor : "Geography",
            tSubjects : ["Geography", "Civics", "Scouts", "Quiz Club"],
            tGrade : ["5", "6", "7"]
        }
    ]);
    
    const [student, setStudent] = useState([
        {
            sId : 230001,
            sName : "Aditya",
            sClass : "5-A",
            sGender : "male",
            sDOB : "22-5-99",
            marks : {
                tamil : "96",
                english : "81",
                hindi : "65",
                maths : "75",
                physics : "63",
                chemistry : "68",
                biology: "75",
                history: "72",
                geography: "80"
             },
            sRank : "16",
            sHouse : "Chola"
        },
        {
            sId : 230002,
            sName : "Ananya",
            sClass : "5-A",
            sGender : "male",
            sDOB : "22-5-99",
            marks : {
                tamil : "96",
                english : "81",
                hindi : "65",
                maths : "75",
                physics : "63",
                chemistry : "68",
                biology: "75",
                history: "72",
                geography: "80"
             },
            sRank : "12",
            sHouse : "Chera"
        },
        {
            sId : 230003,
            sName : "Rahul",
            sClass : "5-A",
            sGender : "male",
            sDOB : "22-5-99",
            marks : {
                tamil : "96",
                english : "81",
                hindi : "65",
                maths : "75",
                physics : "63",
                chemistry : "68",
                biology: "75",
                history: "72",
                geography: "80"
             },
            sRank : "10",
            sHouse : "Pandya"
        },
        {
            sId : 230004,
            sName : "Murali",
            sClass : "5-A",
            sGender : "male",
            sDOB : "22-5-99",
            marks : {
                tamil : "96",
                english : "81",
                hindi : "65",
                maths : "75",
                physics : "63",
                chemistry : "68",
                biology: "75",
                history: "72",
                geography: "80"
             },
            sRank : "4",
            sHouse : "Chera"
        },
        {
            sId : 230005,
            sName : "Kayal",
            sClass : "5-A",
            sGender : "male",
            sDOB : "22-5-99",
            marks : {
                tamil : "96",
                english : "81",
                hindi : "65",
                maths : "75",
                physics : "63",
                chemistry : "68",
                biology: "75",
                history: "72",
                geography: "80"
             },
            sRank : "3",
            sHouse : "Pallava"
        },
        {
            sId : 230006,
            sName : "Ranjitha",
            sClass : "5-A",
            sGender : "male",
            sDOB : "22-5-99",
            marks : {
                tamil : "96",
                english : "81",
                hindi : "65",
                maths : "75",
                physics : "63",
                chemistry : "68",
                biology: "75",
                history: "72",
                geography: "80"
             },
            sRank : "13",
            sHouse : "Pandya"
        },
        {
            sId : 230007,
            sName : "Sneha",
            sClass : "5-A",
            sGender : "male",
            sDOB : "22-5-99",
            marks : {
                tamil : "96",
                english : "81",
                hindi : "65",
                maths : "75",
                physics : "63",
                chemistry : "68",
                biology: "75",
                history: "72",
                geography: "80"
             },
            sRank : "1",
            sHouse : "Chola`"
        },
        {
            sId : 230008,
            sName : "Prabhu",
            sClass : "5-A",
            sGender : "male",
            sDOB : "22-5-99",
            marks : {
                tamil : "96",
                english : "81",
                hindi : "65",
                maths : "75",
                physics : "63",
                chemistry : "68",
                biology: "75",
                history: "72",
                geography: "80"
             },
            sRank : "2",
            sHouse : "Chera"
        },
        {
            sId : 230009,
            sName : "Karthik",
            sClass : "5-A",
            sGender : "male",
            sDOB : "22-5-99",
            marks : {
                tamil : "73",
                english : "81",
                hindi : "65",
                maths : "75",
                physics : "63",
                chemistry : "68",
                biology: "75",
                history: "72",
                geography: "53"
             },
            sRank : "9",
            sHouse : "Chera"
        },
        {
            sId : 230010,
            sName : "Vikram",
            sClass : "5-A",
            sGender : "male",
            sDOB : "22-5-99",
            marks : {
                tamil : "56",
                english : "75",
                hindi : "45",
                maths : "63",
                physics : "84",
                chemistry : "86",
                biology: "90",
                history: "72",
                geography: "64"
             },
            sRank : "8",
            sHouse : "Pandya"
        }
    ]);

    return (
        <DataContext.Provider value={{teacher, setTeacher, student, setStudent}}>
            {children}
        </DataContext.Provider>
    )
}; 

const useGlobalContext = () => {
    return useContext(DataContext);
  };

export {DataContext, DataProvider, useGlobalContext};