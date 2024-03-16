import Card from "./Card";
import CourseInfo from "./CourseInfo";
import { useState, useEffect } from 'react'
const Course = () => {
    const data = [{
        src: "html1.jpg",
        title: 'HTML',
        desc: 'Learn the foundation of web development.',
        time: '2 hours',
        level: "Easy",
        color:'rgb(18, 170, 18)'
    },
    {
        src: "css.jpg",
        title: 'CSS',
        desc: 'Unlock the full potential of web styling with our comprehensive CSS Mastery course.',
        time: '8.5 hours',
        level: "Medium",
        color:'rgb(192, 192, 45)'
    },
    {
        src: "js.jpg",
        title: 'JavaScript',
        desc: 'Master JavaScript for seamless web development with our comprehensive course..',
        time: '16 hours',
        level: "Hard",
        color:'red'
    },
    {
        src: 'react.jpg',
        title: 'React',
        desc: 'Unlock the power of React for building dynamic user interfaces with our concise course.',
        time: '20 hours',
        level: "Medium",
        color:'rgb(192, 192, 45)'
    },
    {
        src: 'angular.jpg',
        title: 'Angular',
        desc: 'Master Angular for powerful web app development in a flash!',
        time: '23.2 hours',
        level: "Hard",
        color:'red'
    },
    {
        src: 'vue.jpg',
        title: 'Vue',
        desc: 'Level up your web development skills with Vue.js for rapid and elegant application building.',
        time: '16 hours',
        level: "Medium",
        color:'rgb(192, 192, 45)'
    },]

    const [display,setdisplay]=useState(false);
    const [containerLeft, setContainerLeft] = useState(2122);
    useEffect(() => {
        if (display) {
            setContainerLeft(450);
        } else {
            setContainerLeft(2122); // Reset to initial value if 'dis' becomes false
        }
      }, [display]); 
    return (<>
        <div className="card-container" onClick={()=>{setdisplay(true)}}>
            <h1 className="heading">Course</h1>
            <div className="card-cont">
                {data.map((item) => <Card data={item}></Card>)}
            </div>
          
        </div >
        <CourseInfo dis={containerLeft} setdis={setdisplay}></CourseInfo>

    </>)
}

export default Course;