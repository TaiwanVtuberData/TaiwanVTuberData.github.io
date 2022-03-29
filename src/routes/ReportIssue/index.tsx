import { Fragment, FunctionalComponent, h } from 'preact';
import { Dictionary } from '../../i18n/Dictionary';
import { Text } from 'preact-i18n';
import style from './style.module.css';

export interface ReportIssuePageProps {
  dictionary: Dictionary;
}

const ReportIssuePage: FunctionalComponent<ReportIssuePageProps> = (
  props: ReportIssuePageProps
) => {
  document.title = `${props.dictionary.header.reportIssue} | ${props.dictionary.header.title}`;

  return (
    <Fragment>
      <h1>
        <Text id="header.reportIssue">Data Posting/Report Issue</Text>
      </h1>
      <div class={style.flexArea}>
        <div class={style.flexButton}>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdPIe3S3UkVmK0LYwWZWJApR1lO09vogktjDUmD8zwUf8U2hQ/viewform?usp=sf_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img class={style.GoogleFormIcon} />
            <Text id="text.reportUsingGoogleForm">
              Report using Google Form
            </Text>
          </a>
        </div>
        <div class={style.flexButton}>
          <a
            href="https://github.com/TaiwanVtuberData/TaiwanVTuberData-Preact/issues/new/choose"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img class={style.GitHubIcon} />
            <Text id="text.reportUsingGitHub">Report using GitHub</Text>
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default ReportIssuePage;
