import { useDispatch, useSelector } from "react-redux";
import { setFilterByTrend } from "../slices/FilterSlice";
import { useState } from 'react';



function FilterBySort({ onClickTrend, onClickSize }) {
    const filterTrend = useSelector((state) => state.filter.arrSortByTrend);
    const filterSize = useSelector((state) => state.filter.arrSortBySize);
    const filterPrice = useSelector((state) => state.filter.arrSortByPrice);
    const [ checkbox, setCheckbox ] = useState(false);
    // const dispatch = useDispatch();
    // function setTrend(trend) {
    //     dispatch(setFilterByTrend(trend))
    // }

    // function sortBySize() {
    //     // if (arrSortBySize[i] === products.size[i]) {
            
    //     // }
    // }
    // console.log(filterTrend);
    return ( 
        <div className="filter-sort">
            <details className="filter-sort__item">
                <summary className="filter-sort__heading">
                    <span className="filter-sort__title">Trending now</span>
                    <svg width="11" height="5" viewBox="0 0 11 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.00214 5.00214C4.83521 5.00247 4.67343 4.94433 4.54488 4.83782L0.258102 1.2655C0.112196 1.14422 0.0204417 0.969958 0.00302325 0.781035C-0.0143952 0.592112 0.0439493 0.404007 0.165221 0.258101C0.286493 0.112196 0.460759 0.0204417 0.649682 0.00302327C0.838605 -0.0143952 1.02671 0.043949 1.17262 0.165221L5.00214 3.36602L8.83167 0.279536C8.90475 0.220188 8.98884 0.175869 9.0791 0.149125C9.16937 0.122382 9.26403 0.113741 9.35764 0.1237C9.45126 0.133659 9.54198 0.162021 9.6246 0.207156C9.70722 0.252292 9.7801 0.313311 9.83906 0.386705C9.90449 0.460167 9.95405 0.546351 9.98462 0.639855C10.0152 0.733359 10.0261 0.83217 10.0167 0.930097C10.0073 1.02802 9.97784 1.12296 9.93005 1.20895C9.88227 1.29494 9.81723 1.37013 9.73904 1.42982L5.45225 4.88068C5.32002 4.97036 5.16154 5.01312 5.00214 5.00214Z" fill="#6F6E6E" />
                    </svg>
                </summary>
                <div className="filter-sort__box">
                    {filterTrend.map((trendName, i) =>(
                        <div key={trendName}  className="filter-sort__checkbox">
                            <input id={`sort-check${i + 1}`} 
                                type="checkbox" 
                                onChange={(e) => onClickTrend(trendName) && e.target.checked} 
                                // onChange={e => setCheckbox(e.target.checked)} 
                                />
                            <label htmlFor={`sort-check${i + 1}`}>{trendName}</label>
                        </div>
                    ))}
                </div>
            </details>
            <details className="filter-sort__item">
                <summary className="filter-sort__heading">
                    <span className="filter-sort__title">Size</span>
                    <svg width="11" height="5" viewBox="0 0 11 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.00214 5.00214C4.83521 5.00247 4.67343 4.94433 4.54488 4.83782L0.258102 1.2655C0.112196 1.14422 0.0204417 0.969958 0.00302325 0.781035C-0.0143952 0.592112 0.0439493 0.404007 0.165221 0.258101C0.286493 0.112196 0.460759 0.0204417 0.649682 0.00302327C0.838605 -0.0143952 1.02671 0.043949 1.17262 0.165221L5.00214 3.36602L8.83167 0.279536C8.90475 0.220188 8.98884 0.175869 9.0791 0.149125C9.16937 0.122382 9.26403 0.113741 9.35764 0.1237C9.45126 0.133659 9.54198 0.162021 9.6246 0.207156C9.70722 0.252292 9.7801 0.313311 9.83906 0.386705C9.90449 0.460167 9.95405 0.546351 9.98462 0.639855C10.0152 0.733359 10.0261 0.83217 10.0167 0.930097C10.0073 1.02802 9.97784 1.12296 9.93005 1.20895C9.88227 1.29494 9.81723 1.37013 9.73904 1.42982L5.45225 4.88068C5.32002 4.97036 5.16154 5.01312 5.00214 5.00214Z" fill="#6F6E6E" />
                    </svg>
                </summary>
                <div className="filter-sort__box">
                    {filterSize.map((size, i) => (
                        <div key={size} className="filter-sort__checkbox">
                            <input id={`sort-check${i + 1}`} type="checkbox" onClick={() => onClickSize(size)}/>
                            <label htmlFor={`sort-check${i + 1}`}>{size}</label>
                        </div>
                    ))}
                    
                </div>
            </details>
            <details className="filter-sort__item">
                <summary className="filter-sort__heading">
                    <span className="filter-sort__title">Price</span>
                    <svg width="11" height="5" viewBox="0 0 11 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.00214 5.00214C4.83521 5.00247 4.67343 4.94433 4.54488 4.83782L0.258102 1.2655C0.112196 1.14422 0.0204417 0.969958 0.00302325 0.781035C-0.0143952 0.592112 0.0439493 0.404007 0.165221 0.258101C0.286493 0.112196 0.460759 0.0204417 0.649682 0.00302327C0.838605 -0.0143952 1.02671 0.043949 1.17262 0.165221L5.00214 3.36602L8.83167 0.279536C8.90475 0.220188 8.98884 0.175869 9.0791 0.149125C9.16937 0.122382 9.26403 0.113741 9.35764 0.1237C9.45126 0.133659 9.54198 0.162021 9.6246 0.207156C9.70722 0.252292 9.7801 0.313311 9.83906 0.386705C9.90449 0.460167 9.95405 0.546351 9.98462 0.639855C10.0152 0.733359 10.0261 0.83217 10.0167 0.930097C10.0073 1.02802 9.97784 1.12296 9.93005 1.20895C9.88227 1.29494 9.81723 1.37013 9.73904 1.42982L5.45225 4.88068C5.32002 4.97036 5.16154 5.01312 5.00214 5.00214Z" fill="#6F6E6E" />
                    </svg>
                </summary>
                <div className="filter-sort__box">
                    {filterPrice.map((item, i) => (
                        <div key={item} className="filter-sort__checkbox">
                            <input id={`sort-check${i + 1}`} type="checkbox"/>
                            <label htmlFor={`sort-check${i + 1}`}>{item}</label>
                        </div>
                    ))}
                </div>
            </details>
        </div>
    );
}

export default FilterBySort;