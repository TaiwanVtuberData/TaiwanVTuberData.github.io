import { Fragment, FunctionalComponent, h } from 'preact';
import style from './style.module.css';

export interface SearchBarProps {
  placeholderText?: string;
  filterText: string;
  onFilter: (e: any) => any;
  onClear: () => any;
}

const SearchBar: FunctionalComponent<SearchBarProps> = (
  props: SearchBarProps
): h.JSX.Element => (
  <Fragment>
    <input
      type="text"
      class={style.textField}
      placeholder={props.placeholderText}
      value={props.filterText}
      onChange={props.onFilter}
    />

    <button type="button" class={style.button} onClick={props.onClear}>
      X
    </button>
  </Fragment>
);

export default SearchBar;
