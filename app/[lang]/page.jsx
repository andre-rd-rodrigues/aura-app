import styles from "./page.module.scss";
import Title from "@/components/Title";
import Button from "@/components/Button/Button";
import useTranslations from "@/hooks/useTranslations";

export default function Home({ params: { lang } }) {
  const t = useTranslations(lang);

  return (
    <main className={styles.main}>
      <Title heading="h1">{t.pages.home.title}</Title>
      <p>{t.pages.home.description}</p>
      <Button>{t.common.button.reserve}</Button>
    </main>
  );
}
