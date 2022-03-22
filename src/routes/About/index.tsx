import { Fragment, FunctionalComponent, h } from 'preact';
import { MarkupText, Text } from 'preact-i18n';
import { Dictionary } from '../../i18n/Dictionary';
import '../../style/index.css';

export interface HomeProps {
  dictionary: Dictionary;
}

const AboutPage: FunctionalComponent<HomeProps> = (props: HomeProps) => {
  document.title = `${props.dictionary.header.about}`;

  return (
    <Fragment>
      <h1>
        <Text id="header.about">About The Site</Text>
      </h1>
      <h2 style={{ marginTop: '5px' }}>
        <Text id="termsOfService.termsOfService">Terms Of Service</Text>
      </h2>
      <p>
        <Text id="termsOfService.lastUpdated">Last Updated: 2038/01/19</Text>
      </p>
      <p>
        <MarkupText id="termsOfService.line1">placeholder</MarkupText>
      </p>
      <p>
        <Text id="termsOfService.line2">placeholder</Text>
      </p>
      <ol>
        <li>
          <Text id="termsOfService.YouTubeBulletPoint1">placeholder</Text>
        </li>
        <li>
          <Text id="termsOfService.YouTubeBulletPoint2">placeholder</Text>
        </li>
        <li>
          <Text id="termsOfService.YouTubeBulletPoint3">placeholder</Text>
        </li>
        <li>
          <Text id="termsOfService.YouTubeBulletPoint4">placeholder</Text>
        </li>
      </ol>
      <p>
        <MarkupText id="termsOfService.line3">placeholder</MarkupText>
      </p>

      <p>
        <MarkupText id="termsOfService.line4">placeholder</MarkupText>
      </p>
      <p>
        <Text id="termsOfService.line2">placeholder</Text>
      </p>
      <ol>
        <li>
          <Text id="termsOfService.TwitchBulletPoint1">placeholder</Text>
        </li>
        <li>
          <Text id="termsOfService.TwitchBulletPoint2">placeholder</Text>
        </li>
        <li>
          <Text id="termsOfService.TwitchBulletPoint3">placeholder</Text>
        </li>
      </ol>

      <h2 style={{ marginTop: '5px' }}>
        <Text id="privacyPolicy.privacyPolicy">Privacy Policy</Text>
      </h2>
      <p>
        <Text id="privacyPolicy.lastUpdated">Last Updated: 1968/05/12</Text>
      </p>
      <ol>
        <li>
          <Text id="privacyPolicy.bulletPoint1">placeholder</Text>
        </li>
        <li>
          <p>
            <Text id="privacyPolicy.bulletPoint2">placeholder</Text>
          </p>
          <p>
            <MarkupText id="privacyPolicy.referToGoogle">
              placeholder
            </MarkupText>
          </p>
        </li>
        <li>
          <p>
            <Text id="privacyPolicy.bulletPoint3">placeholder</Text>
          </p>
        </li>
      </ol>

      <h2 style={{ marginTop: '5px' }}>
        <Text id="technicalDetails.technicalDetails">Technical Details</Text>
      </h2>
      <ul>
        <li>
          <MarkupText id="technicalDetails.bulletPoint1">
            placeholder
          </MarkupText>
        </li>
        <li>
          <Text id="technicalDetails.bulletPoint2">placeholder</Text>
        </li>
        <li>
          <MarkupText id="technicalDetails.bulletPoint3">
            placeholder
          </MarkupText>
        </li>
      </ul>
    </Fragment>
  );
};

export default AboutPage;
