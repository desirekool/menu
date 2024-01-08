const MenuItem = ({ id, title, category, price, img, desc }) => {
    return (
        <li>
            <article className="menu-item">
                <img className="img" src={img} alt={title} />

                <div className="item-info">
                    <header>
                        <h5 className="item-title">{title}</h5> <span className="item-price">{price}</span>
                    </header>
                </div>
                <p className="item-text">{desc}</p>
            </article>
        </li>
    )
};
export default MenuItem;