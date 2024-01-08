import uuid from "react-uuid";
const MenuCategories = ({ categories, setCategory }) => {
    return (
        <div className='btn-container'>
            {categories.map(
                category => <button
                    type="button"
                    className="btn"
                    key={uuid()}
                    onClick={() => setCategory(category)}>
                        {category}
                    </button>
            )}            
        </div>
    )
};
export default MenuCategories;