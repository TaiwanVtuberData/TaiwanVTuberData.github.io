// https://www.geeksforgeeks.org/how-to-create-a-scroll-to-top-button-in-react-js/
// https://www.coderomeos.org/scroll-to-top-of-the-page-a-simple-react-component
import style from './style.module.css';
import { JSX } from 'preact';
import { Text } from 'preact-i18n';
import { useEffect, useState } from 'preact/hooks';

export default function ScrollToTopBottom(): JSX.Element {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled: number = document.documentElement.scrollTop;
    setIsVisible(scrolled > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
  }, []);

  return (
    <div class={style.scrollToTopBottom}>
      {isVisible && (
        <>
          <button class={style.scrollButton} onClick={scrollToTop}>
            <Text id="scroll.top">To Top</Text>
          </button>
          <button class={style.scrollButton} onClick={scrollToBottom}>
            <Text id="scroll.bottom">To Bottom</Text>
          </button>
        </>
      )}
    </div>
  );
}
