import { FunctionalComponent, h } from 'preact';
import { IntlProvider } from 'preact-i18n';
import { Router } from 'preact-router';
import Sidebar from './Sidebar';
import Home from '../routes/home';
import AllVTubersPage from '../routes/AllVTubers';
import NotFoundPage from '../routes/notfound';
import baseroute from '../baseroute';
import en from '../i18n/en';
import zh from '../i18n/zh';
import { useEffect, useState } from 'preact/hooks';
import { validI18n } from '../types/LanguageOptions';
import { Dictionary } from '../i18n/Dictionary';

const App: FunctionalComponent = () => {
  const [locale, setLocale] = useState<validI18n>('zh');
  const [definition, setDefinition] = useState<Dictionary>(zh);

  useEffect(() => {
    if (locale === 'zh') {
      setDefinition(zh);
    } else {
      setDefinition(en);
    }
  }, [locale]);

  return (
    <div id="preact_root">
      <IntlProvider definition={definition}>
        <Sidebar
          siteUrlPrefix={baseroute}
          locale={locale}
          setLocale={setLocale}
        />
        <Router>
          <Home path={`${baseroute}/`} />
          <AllVTubersPage
            path={`${baseroute}/all-vtubers`}
            dictionary={definition}
          />
          <NotFoundPage default />
        </Router>
      </IntlProvider>
    </div>
  );
};

export default App;
