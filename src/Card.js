import React from 'react'

export default function Card({ title, id, description, paymentDate, coverStartDate, coverEndDate, premium, partnerName, partnerLogo, renewal }) {
    
    const [status, setStatus] = React.useState(false)

    function handleStatus () {
        setStatus(!status)
    }

    return (
        <div className={`card cover-card ${status && 'active'}` } onClick={handleStatus}>
            <div className="cover-info">
                <div className="cover-info__status">
                    <div className='cover-info__status-left'> toggle </div>
                    <div className="cover-info__status-right">
                        <h3>{ title }</h3>
                        <div className="cover-info-general">
                            <p> {`${id} | ${description}` } </p>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="cover-info__details">
                    <div className="cover-info__details-item payment">
                        <h5> { paymentDate.slice(0, 10)} </h5>
                        <p> Payment date</p>
                    </div>
                    <div className="cover-info__details-item coverage-date">
                        <h5> {coverStartDate} { coverEndDate && ` to ${coverEndDate}`}</h5>
                        <p> {coverEndDate ? 'Coverage dates' : 'Date shipped' }</p>
                    </div>
                    <div className="cover-info__details-item price">
                        <h5> { premium} </h5>
                        <p> Price/Premium </p>
                    </div>
                    {
                        renewal && (
                            <div className="cover-info__details-item renewal">
                                <h5> { coverStartDate } </h5>
                                <p> Renewal date </p>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="cover-logo">
                <img src={partnerLogo} alt={ partnerName}/>
            </div> 
        </div>
    )
}