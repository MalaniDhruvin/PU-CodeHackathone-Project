import { Link } from "react-router-dom";

const Pro = ({data}) => {
    return (<>
        <tr>
            <td>

            </td>
            <Link to="/quizz/html/questions"><td>{data.num}</td></Link>
            <td>{data.diff}</td>
            <td>{data.sub}</td>
            <td>{data.like}</td>
        </tr>
    </>)
}

export default Pro;