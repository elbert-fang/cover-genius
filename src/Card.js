import React from 'react'

export default function Card({ title, id, description, paymentDate, coverStartDate, coverEndDate, premium, partnerName, partnerLogo, renewal }) {
    
    const [status, setStatus] = React.useState(false)

    function handleStatus () {
        setStatus(!status)
    }

    return (
        <div className={`card cover-card ${status ?'active' :''}` } onClick={handleStatus}>
            <div className="cover-info">
                <div className="cover-info__status">
                    <div className="cover-info__status-wrapper">
                        <div className={`cover-info__status-left  ${status && 'active'}`}>
                            <svg width="10" height="18" viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 16.5L8.5 9L1 1.5" stroke="#2D2D2D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                        <div className="cover-info__status-right">
                                <h3>{title}</h3>
                                <div className="cover-info-general">
                                    <p> {`${id} | ${description}` } </p>
                                </div>
                        </div>
                    </div>
                    <div className="cover-logo tablet-logo">
                        <img src={partnerLogo} alt={ partnerName}/>
                    </div> 
                </div>
                <hr />
                <div className="cover-info__details">
                    <div className="cover-info__details-item payment">
                        <h5> { paymentDate.slice(0, 10)} </h5>
                        <p className="small"> Payment date</p>
                    </div>
                    <div className="cover-info__details-item coverage-date">
                        <h5> {coverStartDate} { coverEndDate && ` to ${coverEndDate}`}</h5>
                        <p className="small"> {coverEndDate ? 'Coverage dates' : 'Date shipped' }</p>
                    </div>
                    <div className="cover-logo mobile-logo">
                        <img src={partnerLogo} alt={ partnerName}/>
                    </div> 
                    <div className="cover-info__details-item premium">
                        <h5> { premium} </h5>
                        <p className="small"> Price/Premium </p>
                    </div>


                    {
                        renewal && (
                            <div className="cover-info__details-item renewal">
                                <h5> { coverStartDate } </h5>
                                <p className="small"> Renewal date </p>
                            </div>
                        )
                    }

                </div>
            </div>
            <div className="cover-logo desktop-logo">
                <img src={partnerLogo} alt={ partnerName}/>
            </div> 
        </div>
    )
}