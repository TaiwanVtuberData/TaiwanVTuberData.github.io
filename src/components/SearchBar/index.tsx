import { FunctionalComponent, h } from 'preact';
import style from './style.module.css';

export interface SearchBarProps {
  placeholderText?: string;
  filterText: string;
  onFilter: (e: unknown) => unknown;
  onClear: () => unknown;
}

const SearchBar: FunctionalComponent<SearchBarProps> = (
  props: SearchBarProps
): h.JSX.Element => (
  <div class={style.container}>
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
  </div>
);

export default SearchBar;
