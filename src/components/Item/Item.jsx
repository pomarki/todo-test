import "./Item.css";

function Item({ type }) {
  return (
    <form className="item__conteiner">
      <div className="item__title-conteiner">
        <button className="item__delete-button" type="button"></button>
        <input type="text" className="item__title" placeholder="заголовок" />
      </div>
      <div className="item__sub-conteiner">
        <input
          className="item__data-input"
          placeholder="дата окончания"
          type="date"
        />

        <div className="item__option-conteiner">
          <button className="item__save-button" type="button"></button>
          <button className="item__add-button" type="button"></button>
        </div>
        <div className="item__done-container">
          <p className="item__subtitle">завершено</p>
          <button className="item__done-button" type="button"></button>
        </div>
      </div>
      <textarea
        className="item__description"
        placeholder="описание задания"
      ></textarea>
    </form>
  );
}

export default Item;
