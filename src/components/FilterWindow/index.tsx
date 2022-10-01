import { h } from 'preact';
import { useState } from 'preact/hooks';
import { trimOrNullOnEmpty } from '../../utils/StringUtils';
import SearchBar from '../SearchBar';

export interface FilterWindowProps<FilterModel extends object> {
  filterModel: FilterModel;
  onChange?: (e: FilterModel) => void;
}

function FilterWindow<FilterModel extends object>(
  props: FilterWindowProps<FilterModel>
): JSX.Element {
  const [filter, setFilter] = useState<FilterModel>(props.filterModel);

  function handleOnChange(e: FilterModel): void {
    if (props.onChange != null) {
      props.onChange(e);
    }
  }

  const createSearchBar = (key: string): JSX.Element => {
    {
      const keyTyped = key as keyof typeof filter;

      const handleOnFilterChange = (e: string | null): void => {
        const nullableString: string | null = trimOrNullOnEmpty(e);

        setFilter({ ...filter, [keyTyped]: nullableString });
        handleOnChange({ ...filter, [keyTyped]: nullableString });
      };

      return (
        <SearchBar
          key={key}
          placeholderText={key}
          filterText={filter[keyTyped] as string | null}
          onFilter={(e: any): void => handleOnFilterChange(e.target.value)}
          onClear={(): void => handleOnFilterChange(null)}
        />
      );
    }
  };

  const fields: Array<JSX.Element> = Object.keys(props.filterModel).map((key) =>
    createSearchBar(key)
  );

  return <div>{fields}</div>;
}

export default FilterWindow;
