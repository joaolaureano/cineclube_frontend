import React from "react";

import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  Paper,
  Typography,
  Tabs,
  Tab,
} from "@material-ui/core";

import {
  ThumbUp,
  ThumbUpOutlined,
  ThumbDown,
  ThumbDownOutlined,
  ArrowBack,
} from "@material-ui/icons";

import useStyles from "./styles";
import { PlatformIcon } from "../../components/PlatformIcon";

const mockMovie = {
  id: 15,
  title: "A Viagem de Chihiro",
  originalTitle: "Spirited Away",
  synopsis:
    "Uma menina de 10 anos se perde em um mundo de bruxas e espíritos, embarcando em uma jornada repleta de simbolismo e sensibilidade.",
  critic: "Nada é esquecido. Mesmo que você não se lembre.",
  curator: "Renato Weber",
  year: "2001",
  pathBanner:
    "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctNDE2YS00YWE0LWE5ZWItZDBhYWQ0NTcxNWRhXkEyXkFqcGdeQXVyMTMxODk2OTU@.jpg",
};

export const MovieLists: React.FC = () => {
  const styles = useStyles();
  const [currentTab, setCurrentTab] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, tab: number) => {
    setCurrentTab(tab);
  };

  const renderCard = () => {
    return (
      <Card className={styles.movieItem}>
        <CardMedia
          className={styles.movieCover}
          image={mockMovie.pathBanner}
          title="movie cover"
          component="img"
        />

        <div className={styles.content}>
          <Typography component="h6" variant="h6">
            {mockMovie.title}
          </Typography>

          <div className={styles.bottomContent}>
            <span className={styles.platforms}>
              <Typography variant="body2">Disponível em:</Typography>
              <span className={styles.platformIcons}>
                <PlatformIcon
                  className={styles.platformIcon}
                  platform="Netflix"
                />

                <PlatformIcon
                  className={styles.platformIcon}
                  platform="Amazon-Prime-Video"
                />
              </span>
            </span>

            <span className={styles.bottomIcons}>
              <IconButton
                onClick={() => console.log("Like")}
                color="primary"
                className={styles.icon}
              >
                <ThumbUp fontSize="large" />
              </IconButton>
              <IconButton
                onClick={() => console.log("Dislike")}
                color="primary"
                className={styles.icon}
              >
                <ThumbDownOutlined fontSize="large" />
              </IconButton>
            </span>
          </div>
        </div>
      </Card>
    );
  };

  return (
    <Container className={styles.container}>
      <header className={styles.header}>
        <IconButton
          className={styles.backIcon}
          onClick={() => console.log("Back")}
        >
          <ArrowBack fontSize="large" />
        </IconButton>
        <Typography variant="h5">Minhas Listas</Typography>
      </header>

      <Paper elevation={0} className={styles.tabsContainer}>
        <Tabs
          className={styles.tabs}
          value={currentTab}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab className={styles.tab} label="Quero Assistir" />
          <Tab className={styles.tab} label="Já vi" />
        </Tabs>
      </Paper>

      <div className={styles.movieList}>
        {renderCard()}
        {renderCard()}
        {renderCard()}
        {renderCard()}
        {renderCard()}
        {renderCard()}
        {renderCard()}
        {renderCard()}
      </div>
    </Container>
  );
};
