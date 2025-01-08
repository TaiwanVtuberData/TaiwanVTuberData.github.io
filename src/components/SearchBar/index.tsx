import style from './style.module.css';
import { FunctionalComponent, JSX } from 'preact';

export interface SearchBarProps {
  placeholderText?: string;
  filterText: string | null;
  onFilter: (e: unknown) => unknown;
  onClear: () => unknown;
}

const SearchBar: FunctionalComponent<SearchBarProps> = (
  props: SearchBarProps,
): JSX.Element => (
  <div class={style.container}>
    <input
      type="text"
      class={style.textField}
      placeholder={props.placeholderText}
      value={props.filterText ?? ''}
      onChange={props.onFilter}
    />

    <button type="button" class={style.button} onClick={props.onClear}>
      X
    </button>
  </div>
);

export default SearchBar;
