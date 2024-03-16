const Card = ({ data }) => {
    return (<>
        <div class="card">
            <div class="image"><img src={data.src} alt="" /></div>
            <div class="content">
                <span class="title">
                    {data.title}
                </span>

                <div className="desc">
                    <p class="inner-desc">
                        {data.desc}
                    </p>
                </div>
                <div class="action" href="#">
                    <div className="action-cont">
                        {data.time}
                    </div>
                    <button className="level" style={{background:data.color}}>{data.level}</button>
                </div>

            </div>
        </div>
    </>)
}

export default Card;