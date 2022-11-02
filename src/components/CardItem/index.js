// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={`${className} each-card-item`}>
      <h1 className="each-card-item-heading">{title}</h1>
      <p className="each-card-descri">{description}</p>

      <img className="each-card-item-image" src={imgUrl} alt={title} />
    </li>
  )
}

export default CardItem
