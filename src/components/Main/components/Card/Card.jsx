export default function Card({
  card,
  onCardClick,
  onCardLike,
  onCardDelete,
}) {
  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card._id);
  }

  return (
    <li className="card">

      <img
        src={card.link}
        alt={card.name}
        className="card__image"
        onClick={() => onCardClick(card)}
      />

      <button
        type="button"
        className="card__delete-button"
        onClick={handleDeleteClick}
        aria-label="Eliminar tarjeta"
      ></button>

      <div className="card__description">

        <h2 className="card__title">
          {card.name}
        </h2>

        <button
          type="button"
          className={`card__like ${
            card.isLiked ? 'card__like_active' : ''
          }`}
          onClick={handleLikeClick}
          aria-label="Me gusta"
        ></button>

      </div>

    </li>
  );
}