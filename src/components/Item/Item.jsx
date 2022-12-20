import "./Item.css"

function Item ({ type }) {
    return (
        <div className="item__conteiner">
         <div className="item_title">
            <button className="item__delete"></button>
            
         </div>
        </div>
    )
}

export default Item;