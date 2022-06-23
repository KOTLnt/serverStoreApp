import css from "./SearchBar.module.css"

import { Input } from 'antd';


const SearchBar = () => {
    const onSearch = value => console.log(value);
  return (
      <div className={css.Search_Box}>
        <div></div>
        <Input 
          className={css.Search_Term}
          placeholder=' Find anything home'
          />
        <button>Tìm kiếm</button>
    </div>
  )
}

export default SearchBar;