import { Fragment, FunctionalComponent, h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { Dictionary } from '../../i18n/Dictionary';
import * as Api from '../../services/ApiService';
import '../../style/index.css';
import VTuberInformation from '../../components/VTuberInformation';
import { VTuberDisplayFullData } from '../../types/TableDisplayData/VTuberDisplayFullData';
import { VTuberFullToDisplay } from '../../utils/transform/FullTransform';
import { Text } from 'preact-i18n';

export interface VTuberPageProps {
  id: string;
  dictionary: Dictionary;
}

const VTuberPage: FunctionalComponent<VTuberPageProps> = (
  props: VTuberPageProps
) => {
  const [data, setData] = useState<VTuberDisplayFullData>();

  document.title = `${data?.name ?? ''} | ${props.dictionary.header.title}`;

  const getVTuber = async (): Promise<void> => {
    await Api.getVTuber(props.id).then((res) => {
      setData(VTuberFullToDisplay(res.data.VTuber));
    });
  };

  useEffect(() => {
    getVTuber();
  }, []);

  return (
    <>
      <h1>
        <span> {data?.name ?? <Text id="text.loading">Loading...</Text>} </span>
      </h1>
      {data !== undefined ? (
        <VTuberInformation VTuber={data} clickBehavior="noAction" />
      ) : null}
    </>
  );
};

export default VTuberPage;
