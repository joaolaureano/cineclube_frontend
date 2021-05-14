import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import { SharedSnackbarContext } from "../../components/SnackBar/SnackContext";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import useStyles from "./styles";
import { Container, Typography } from "@material-ui/core";
import { PlatformIcon } from "../../components/PlatformIcon";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
import { Divider } from "@material-ui/core";
import { TagButton } from "../../components/TagButton";

const Filter = (): JSX.Element => {
  const history = useHistory();
  const styles = useStyles();
  const { openSnackbar } = useContext(SharedSnackbarContext);
  const platforms: String[] = ["Netflix", "Amazon-Prime-Video"];
  const [state, setState] = React.useState(true);

  const parsePlatforms = () => {
    return platforms.map((platform: any) => {
      return (
        <>
          <div style={{ position: "relative" }} onClick={setPlatform}>
            <PlatformIcon
              key={platform}
              className={styles.platformIcon}
              platform={platform}
            />
            {state && <CheckRoundedIcon className={styles.checkIcon} />}
          </div>
        </>
      );
    });
  };

  const setPlatform = () => {
    setState(!state);
  };

  return (
    <div className={styles.root}>
      <Container className={styles.header}>
        <div className={styles.backIconContainer}>
          <ArrowForwardIosRoundedIcon fontSize="large" />
        </div>
        <div className={styles.textContainer}>
          <Typography variant="h6" component="h1">
            Filtros
          </Typography>
        </div>
      </Container>
      <Container className={styles.contentWrapper}>
        <Container>
          <Typography variant="h6" component="h2" className={styles.paragraph}>
            Serviços selecionados:
          </Typography>
          <Container className={styles.listPlatform}>
            {parsePlatforms()}
          </Container>
        </Container>
        <Divider variant="middle" className={styles.divider} />
        <Container>
          <Container className={styles.tagListHeader}>
            <Typography
              variant="h6"
              component="h2"
              className={styles.paragraph}
            >
              Tags:
            </Typography>
            <div className={styles.expandIconContainer}>
              <ExpandMoreRoundedIcon />
            </div>
          </Container>
          <Container className={styles.listTag}>
            <TagButton title="teste" />
            <TagButton title="teste" />
            <TagButton title="teste" />
            <TagButton title="teste" />
          </Container>
        </Container>
      </Container>
    </div>
  );
};

export default Filter;
