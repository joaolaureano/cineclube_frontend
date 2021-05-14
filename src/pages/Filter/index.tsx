import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { SharedSnackbarContext } from "../../components/SnackBar/SnackContext";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import useStyles from "./styles";
import { Container, TabScrollButton, Typography } from "@material-ui/core";
import { PlatformIcon } from "../../components/PlatformIcon";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
import { Divider } from "@material-ui/core";
import tag from "../../services/tag";
import { TagButton } from "../../components/TagButton";
import { Tag } from "../../types/tag";
export interface test {
  state: boolean;
}
const Filter = (): JSX.Element => {
  const history = useHistory();
  const styles = useStyles();
  const { openSnackbar } = useContext(SharedSnackbarContext);
  const platforms: string[] = ["Netflix", "Amazon-Prime-Video"];
  const [state, setState] = React.useState<{
    [platformId: string]: boolean;
  } | null>();
  const [tagList, setTagList] = React.useState<Tag[]>([
    {
      id: -1,
      name: "",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
  const parsePlatforms = () => {
    return platforms.map((platform: any) => {
      return (
        <>
          <div
            style={{ position: "relative" }}
            onClick={() => {
              setPlatform(platform);
            }}
          >
            <PlatformIcon
              key={platform}
              className={styles.platformIcon}
              platform={platform}
            />
            {state && state[platform] && (
              <CheckRoundedIcon className={styles.checkIcon} />
            )}
          </div>
        </>
      );
    });
  };
  const parseTags = () => {
    return tagList.map((tag) => {
      return <TagButton title={tag.name} key={tag.id} />;
    });
  };
  const setPlatform = (key: any) => {
    if (state) {
      state[key] = !state[key];
      setState({
        ...state,
      });
    }
  };

  // useEffect(() => {
  //   const platformStateHolder: { [platformId: string]: boolean } = {};
  //   platforms.forEach((platform: string) => {
  //     platformStateHolder[platform] = false;
  //   });
  //   setState(platformStateHolder);
  // }, []);
  useEffect(() => {
    const fetchTags = async () => {
      const result = (await tag.getMainTags()).data;
      console.log(result);
      setTagList(result);
    };
    fetchTags();
  }, []);

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
          <Container className={styles.listTag}>{parseTags()}</Container>
        </Container>
      </Container>
    </div>
  );
};

export default Filter;
