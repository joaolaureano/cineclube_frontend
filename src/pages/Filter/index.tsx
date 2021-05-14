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
interface TagSwitch {
  [tagId: string]: {
    tag: Tag;
    selected: boolean;
  };
}
const Filter = (): JSX.Element => {
  const history = useHistory();
  const styles = useStyles();
  const { openSnackbar } = useContext(SharedSnackbarContext);
  const platforms: string[] = ["Netflix", "Amazon-Prime-Video"];
  const [state, setState] = React.useState<{
    [platformId: string]: boolean;
  } | null>();
  const [tagList, setTagList] = React.useState<TagSwitch>({
    "": {
      tag: {
        createdAt: new Date(),
        updatedAt: new Date(),
        id: -1,
        name: "",
      },
      selected: false,
    },
  });
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
    return Object.keys(tagList).map((tagId) => {
      return (
        <TagButton
          selected={tagList[tagId].selected}
          title={tagList[tagId].tag.name}
          key={tagList[tagId].tag.id}
          onClick={() => {
            setTag(tagId);
          }}
        />
      );
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

  const setTag = (tagID: string) => {
    if (tagList) {
      const oldTag = tagList[tagID];
      oldTag.selected = !oldTag.selected;
      const newTag = tagList;
      newTag[tagID] = oldTag;

      setTagList(newTag);

      console.log(tagList);
    }
  };

  const fetchTags = async () => {
    const result = (await tag.getMainTags()).data;
    const mapBoolean: TagSwitch = {};
    result.forEach((tag) => {
      mapBoolean[tag.id] = { tag, selected: false };
    });
    setTagList(mapBoolean);
  };
  useEffect(() => {
    fetchTags();

    const platformStateHolder: { [platformId: string]: boolean } = {};
    platforms.forEach((platform: string) => {
      platformStateHolder[platform] = false;
    });
    setState(platformStateHolder);
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
