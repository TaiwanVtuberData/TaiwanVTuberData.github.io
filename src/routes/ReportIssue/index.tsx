import { GITHUB_ISSUE_URL, GOOGLE_FORM_URL } from '../../Config';
import { Dictionary } from '../../i18n/Dictionary';
import style from './style.module.css';
import { FunctionalComponent } from 'preact';
import { Text } from 'preact-i18n';

export interface ReportIssuePageProps {
  dictionary: Dictionary;
}

const ReportIssuePage: FunctionalComponent<ReportIssuePageProps> = (
  props: ReportIssuePageProps,
) => {
  document.title = `${props.dictionary.header.reportIssue} | ${props.dictionary.header.title}`;

  return (
    <>
      <h1>
        <Text id="header.reportIssue">Data Posting/Report Issue</Text>
      </h1>
      <div class={style.flexArea}>
        <div class={style.flexButton}>
          <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
            <img class={style.GoogleFormIcon} />
            <Text id="text.reportUsingGoogleForm">
              Report using Google Form
            </Text>
          </a>
        </div>
        <div class={style.flexButton}>
          <a href={GITHUB_ISSUE_URL} target="_blank" rel="noopener noreferrer">
            <img class={style.GitHubIcon} />
            <Text id="text.reportUsingGitHub">Report using GitHub</Text>
          </a>
        </div>
      </div>
    </>
  );
};

export default ReportIssuePage;
