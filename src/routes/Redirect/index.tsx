import { FunctionalComponent } from 'preact';
import { route } from 'preact-router';
import { useEffect } from 'preact/hooks';

interface RedirectProps {
  to: string;
}

const Redirect: FunctionalComponent<RedirectProps> = (props: RedirectProps) => {
  useEffect(() => {
    route(props.to, true);
  }, []);

  return null;
};

export default Redirect;
