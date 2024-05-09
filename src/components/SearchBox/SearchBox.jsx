import { setFilter } from '../../redux/filtersSlice';

import { useDispatch } from 'react-redux';
import css from './SearchBox.module.css';

export default function SearchBox({ value }) {
    const dispatch = useDispatch();

    const handleSearch = (searchValue) => {
        dispatch(setFilter(searchValue));
    };

    return (
        <div className={css.containerSearch}>
            <p className={css.label}>Find contacts by name</p>
            <input className={css.searchInput}
                type="text"
                placeholder="Search..."
                value={value}
                onChange={(e) => handleSearch(e.target.value)}
            />
        </div>
    );
}
