import styles from "./page.module.scss";
import Title from "@/components/Title";
import Button from "@/components/Button/Button";

export default function Home() {
  return (
    <main className={styles.main}>
      <Title heading="h1">
        Empowering shared workspaces for therapists and coaches.
      </Title>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi fugiat
        labore exercitationem nesciunt nihil ducimus distinctio. Laboriosam aut
        possimus quis sed, id repellendus, adipisci voluptates, natus ratione
        corporis ipsam quibusdam earum! Totam cumque corporis ipsum dignissimos
        ipsa quis eligendi minus.
      </p>
      <Button>Reservar</Button>
    </main>
  );
}
