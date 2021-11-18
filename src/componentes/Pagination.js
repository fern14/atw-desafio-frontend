import React from "react";

const Pagination = (props) => {

    const { onLeftClick, onRightClick, page, totalPages } = props;

    return (
        <div className="pagination">
            <button onClick={onLeftClick}><div>
                <span role="img" aria-label="left">
                    👈
                </span>
            </div>
            </button>
            <div className="pagination-quantidade">{page} de {totalPages + 0.1}</div>
            <button onClick={onRightClick}>
                <div>
                    <span role="img" aria-label="right">
                        👉
                    </span>
                </div>
            </button>
        </div>
    )
}

export default Pagination;