import React from 'react'
import Card from './Card'

function App() {
  const [coverData, setCoverData] = React.useState([])

  React.useEffect(() => {
    fetch('https://7946a218-d225-4d0e-80ac-450bbc9713a0.mock.pstmn.io/booking')
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })  
      .then((actualData) => setCoverData(actualData.policies))
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  const coverCards = coverData.map(cover => {
    return <Card title={cover.title} id={cover.id} description={cover.description}
      paymentDate={cover.payment_date} coverStartDate={cover.coverage_start_date}
      coverEndDate={cover.coverage_end_date} premium={cover.premium_formatted}
      partnerName={cover.partner.name} partnerLogo={cover.partner.logo} renewal={cover.renewal}
      />
    })
  

  return (
    <div className="App">
      <h1 className="header">PROTECTION</h1>
      <section className="cards">
        { coverCards }
      </section>
    </div>
  );
}

export default App;
