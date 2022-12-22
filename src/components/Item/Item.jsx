import "./Item.css";

function Item({ type }) {
  return (
    <form className="item__conteiner">
      <div className="item__title-conteiner">
        <button className="item__delete-button item__button item_form-el" type="button"></button>
        <input type="text" className="item__title item_form-el" placeholder="заголовок" />
      </div>
      <div className="item__sub-conteiner">
        <input
          className="item__data-input item_form-el"
          placeholder="дата окончания"
          type="date"
        />

        <div className="item__option-conteiner">
          <button className="item__save-button item__button_s" type="button"></button>
          <button className="item__add-button item__button_s" type="button"></button>
        </div>
        <div className="item__done-container">
          <p className="item__subtitle">завершено</p>
          <button className="item__done-button item__button item_form-el" type="button"></button>
        </div>
      </div>
      <textarea
        className="item__description item_form-el"
        placeholder="описание задания"
      ></textarea>
    </form>
  );
}

export default Item;
