const Questions = ({ data }) => {
    return (<>
        <div className='htmlwi'>
            <div>
                <span>
                    {data.question}
                </span>
                <div className='option'>
                    <div>
                        <label htmlFor="">True</label>
                    </div>
                    <input type="radio" name="html" />
                    <div>
                        <label htmlFor="">False</label>
                    </div>
                    <input type="radio" name="html" />
                </div>
            </div>

        </div>

    </>)
}

export default Questions;