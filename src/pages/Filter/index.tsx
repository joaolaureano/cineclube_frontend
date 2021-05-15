import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import useStyles from "./styles";
import { Button, Container, Typography } from "@material-ui/core";
import { PlatformIcon } from "../../components/PlatformIcon";
import CheckRoundedIcon from "@material-ui/icons/CheckRounded";
import { Divider } from "@material-ui/core";
import tag from "../../services/tag";
import platform from "../../services/platform";
import { TagButton } from "../../components/TagButton";
import { Tag } from "../../types/tag";
import { ArrowBack } from "@material-ui/icons";
import { Platform } from "../../types/platform";

const Filter = (): JSX.Element => {
  const history = useHistory();
  const styles = useStyles();
  const [platformNameList, setPlatformNameList] = React.useState<Platform[]>(
    []
  );
  const [platfomList, setState] = React.useState<{
    [platformId: string]: boolean;
  }>({});
  const [tagList, setTagList] = React.useState<Tag[]>([]);
  const [selectedTagList, setSelectedTagList] = React.useState<number[]>([]);
  const parsePlatforms = () => {
    return platformNameList.map((platform: Platform) => {
      return (
        <>
          <div
            style={{ position: "relative" }}
            onClick={() => {
              setPlatform(platform.name);
            }}
          >
            <PlatformIcon
              key={`filter-platform-${platform}`}
              className={styles.platformIcon}
              platform={platform.name}
            />
            {platfomList && platfomList[platform.name] && (
              <CheckRoundedIcon className={styles.checkIcon} />
            )}
          </div>
        </>
      );
    });
  };
  const parseTags = () => {
    return tagList.map((tag) => {
      return (
        <TagButton
          selected={selectedTagList.indexOf(tag.id) !== -1}
          title={tag.name}
          key={`filter-tag-${tag.id}`}
          onClick={() => {
            setTag(tag.id);
          }}
        />
      );
    });
  };
  const setPlatform = (key: any) => {
    platfomList[key] = !platfomList[key];
    setState({
      ...platfomList,
    });
  };
  const backToMenu = () => {
    history.push("/home");
  };
  const setTag = (tagID: number) => {
    const oldSelectedList = [...selectedTagList];
    const indexOf = oldSelectedList.indexOf(tagID);
    if (indexOf !== -1) {
      oldSelectedList.splice(indexOf, 1);
    } else {
      oldSelectedList.push(tagID);
    }
    setSelectedTagList(oldSelectedList);
  };
  const fetchTags = async () => {
    const result = await tag.getMainTags();
    const listTag = result.data;
    setTagList(listTag);
  };
  const fetchPlatforms = async () => {
    const result = await platform.getMainPlatform();
    const listPlatforms = result.data;

    const platformStateHolder: { [platformId: string]: boolean } = {};
    listPlatforms.forEach((platform: Platform) => {
      platformStateHolder[platform.name] = false;
    });
    setPlatformNameList(listPlatforms);

    console.log(platformNameList);
  };

  const saveToStorage = () => {};
  useEffect(() => {
    fetchTags();
    fetchPlatforms();
  }, []);

  return (
    <div className={styles.root}>
      <Container className={styles.header}>
        <div className={styles.backIconContainer} onClick={backToMenu}>
          <ArrowBack fontSize="large" />
        </div>
        <div className={styles.textContainer}>
          <Typography variant="h5" component="h1" className={styles.title}>
            FILTROS
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
          </Container>
          <Container className={styles.listTag}>{parseTags()}</Container>
        </Container>
      </Container>
      <Container className={styles.atBottom}>
        <Button
          disableElevation
          variant="contained"
          className={styles.sendButton}
          size="medium"
          onClick={saveToStorage}
        >
          Salvar
        </Button>
      </Container>
    </div>
  );
};

export default Filter;
