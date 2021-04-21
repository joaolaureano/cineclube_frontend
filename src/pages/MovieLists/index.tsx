import React from "react";

import { ToggleButton, ToggleButtonGroup } from "@material-ui/lab";
import {
  Card,
  CardContent,
  CardMedia,
  Container,
  IconButton,
  Typography,
} from "@material-ui/core";

import {
  ThumbUp,
  ThumbUpOutlined,
  ThumbDown,
  ThumbDownOutlined,
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
  const [view, setView] = React.useState("wantsToWatch");

  const handleChange = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    nextView: string
  ) => {
    setView(nextView);
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
                <ThumbUpOutlined fontSize="large" />
              </IconButton>
              <IconButton
                onClick={() => console.log("Dislike")}
                color="primary"
                className={styles.icon}
              >
                <ThumbDown fontSize="large" />
              </IconButton>
            </span>
          </div>
        </div>
      </Card>
    );
  };

  return (
    <Container className={styles.container}>
      <header>
        <button type="button">back</button>
        <h2>Minhas Listas</h2>
      </header>

      <ToggleButtonGroup
        size="small"
        value={view}
        exclusive
        onChange={handleChange}
        className={styles.toggleButtonGroup}
      >
        <ToggleButton value="wantsToWatch" className={styles.toggleButton}>
          Quero Assitir
        </ToggleButton>
        <ToggleButton value="watched" className={styles.toggleButton}>
          Já vi
        </ToggleButton>
      </ToggleButtonGroup>

      <br />
      <br />
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
