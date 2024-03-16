import { Link } from 'react-router-dom'
import './Quize.css'
import Pro from './pro'
const Quize = () => {
    const Data = [{
        num: "HTML",
        diff: "Easy",
        sub: "12k",
        like: "99%",
    }, {
        num: "CSS",
        diff: "Hard",
        sub: "2k",
        like: "80%",
    },
    {
        num: "JS",
        diff: "Easy",
        sub: "8k",
        like: "89%",
    },
    {
        num: "REACT",
        diff: "Medium",
        sub: "15k",
        like: "90%",
    },
    {
        num: "ANGULAR",
        diff: "Hard",
        sub: "12k",
        like: "100%",
    },
    {
        num: "VUE",
        diff: "Medium",
        sub: "5k",
        like: "98%",
    },]
    return (<>
        <div class="container">
            <div class="left_sidebar">
                <div class="logo">
                    <h2>Menu</h2>
                </div>
                <div class="menu_items">
                    <div class="menu_item">
                        <Link to='/prac/hands-on'><p>Code Editor</p></Link>
                        <i class="ri-survey-line"></i>
                    </div>
                    <div class="menu_item">
                        <p>Quiz</p>
                        <i class="ri-layout-horizontal-line"></i>
                    </div>
                </div>
            </div>
            <div class="main_content">
                <h2>Practice Problems</h2>
                <div class="table">
                    <table>
                        <tr>
                            <th>Status</th>
                            <th>Problem</th>
                            <th>Difficulty</th>
                            <th>Submissions</th>
                            <th>Like / Dislike</th>
                        </tr>
                        {Data.map((item)=><Pro data={item}></Pro>)}
                    </table>
                </div>
            </div>
        </div>

    </>)
}

export default Quize;