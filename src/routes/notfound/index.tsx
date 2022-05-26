import { Fragment, FunctionalComponent, h } from 'preact';
import { Link } from 'preact-router/match';
import { Text } from 'preact-i18n';
import { GetRoute } from '../../utils/TypeSafeRouting';

const Notfound: FunctionalComponent = () => {
  return (
    <Fragment>
      <h1>
        <Text id="notFound.title">Error</Text>
      </h1>
      <p style={{ textAlign: 'center' }}>
        <Text id="notFound.detail">This page does not exists.</Text>
      </p>
      <Link href={GetRoute({ type: 'home' })}>
        <h4 style={{ textAlign: 'center' }}>
          <Text id="notFound.goHome">Go back to home page.</Text>
        </h4>
      </Link>
    </Fragment>
  );
};

export default Notfound;
