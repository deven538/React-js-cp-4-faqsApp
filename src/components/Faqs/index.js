// Write your code here.
import FaqItem from '../FaqItem'
import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="main-container">
      <div className="card-container">
        <h1 className="heading">FAQs</h1>
        <ul className="faq-list">
          {faqsList.map(eachfaq => (
            <FaqItem key={eachfaq.id} faqDetails={eachfaq} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
