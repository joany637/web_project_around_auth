function InfoTooltip({ isOpen, onClose, isSuccess }) {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="info-tooltip">
      <div className="info-tooltip__container">
        <button
          className="info-tooltip__close"
          type="button"
          onClick={onClose}
          aria-label="Cerrar"
        >
          ×
        </button>

        <div className="info-tooltip__icon">
          {isSuccess ? '✓' : '✕'}
        </div>

        <h2 className="info-tooltip__title">
          {isSuccess
            ? '¡Te has registrado correctamente!'
            : 'Algo salió mal. Por favor, inténtalo de nuevo.'}
        </h2>
      </div>
    </div>
  );
}

export default InfoTooltip;