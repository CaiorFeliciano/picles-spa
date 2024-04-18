import { Header } from "../../components/common/Header";
import { Grid } from "../../components/layout/Grid";
import styles from "./Pets.module.css";
import { Card } from "../../components/common/Card";
import { useEffect, useState } from "react";
import { Skeleton } from "../../components/common/Skeleton";

export function Pets() {
  const [pets, setPets] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {}, []);
  return (
    <Grid>
      <div className={styles.container}>
        <Header />
        <main className={styles.list}></main>
        <Skeleton count={4} containerClassName={styles.skeleton} />
      </div>
    </Grid>
  );
}
