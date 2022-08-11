import React from "react";

export default function Card({
  title,
  id,
  description,
  paymentDate,
  coverStartDate,
  coverEndDate,
  premium,
  partnerName,
  partnerLogo,
  renewal,
}) {
  const [status, setStatus] = React.useState(false);

  function handleStatus() {
    setStatus(!status);
  }

  function formateDate(date) {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const day = date.slice(-2);
    const monthIndex = date.slice(5, 7);
    console.log(monthIndex);
    const monthName = monthIndex.startsWith("0")
      ? monthNames[monthIndex.slice(-1)]
      : monthNames[monthIndex - 1];
    const year = date.slice(0, 4);
    return `${day}-${monthName.toUpperCase()}-${year}`;
  }

  return (
    <div
      className={`card cover-card ${status ? "active" : ""}`}
      onClick={handleStatus}
    >
      <div className="cover-info">
        <div className="cover-info__status">
          <div className="cover-info__status-wrapper">
            <div
              className={`cover-info__status-left ${status ? "active" : ""}`}
            >
              <svg
                width="10"
                height="18"
                viewBox="0 0 10 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 16.5L8.5 9L1 1.5"
                  stroke="#2D2D2D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="cover-info__status-right">
              <h3>{title}</h3>
              <div className="cover-info-general">
                <p> {`${id} | ${description}`} </p>
              </div>
            </div>
          </div>
          <div className="cover-logo tablet-logo">
            <img src={partnerLogo} alt={partnerName} />
          </div>
        </div>
        <hr />
        <div className="cover-info__details">
          <div className="cover-info__details-item payment">
            <h5> {formateDate(paymentDate.slice(0, 10))} </h5>
            <p className="small"> Payment date </p>
          </div>
          <div className="cover-info__details-item coverage-date">
            <h5>
              {formateDate(coverStartDate)}{" "}
              {coverEndDate && ` to ${formateDate(coverEndDate)}`}
            </h5>
            <p className="small">
              {coverEndDate ? "Coverage dates" : "Date shipped"}
            </p>
          </div>
          <div className="cover-logo mobile-logo">
            <img src={partnerLogo} alt={partnerName} />
          </div>
          <div className="cover-info__details-item premium">
            <h5> {premium} </h5>
            <p className="small"> Price/Premium </p>
          </div>
          {renewal && (
            <div className="cover-info__details-item renewal">
              <h5> {formateDate(coverStartDate)} </h5>
              <p className="small"> Renewal date </p>
            </div>
          )}
        </div>
      </div>
      <div className="cover-logo desktop-logo">
        <img src={partnerLogo} alt={partnerName} />
      </div>
    </div>
  );
}
