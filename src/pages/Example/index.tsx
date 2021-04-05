import React from "react";
import { Button, Container, Typography } from "@material-ui/core";
import useStyles from "./styles";

const Example = (): JSX.Element => {
  const styles = useStyles();

  return (
    <Container>
      <Button
        onClick={() => {
          return 0;
        }}
        variant="contained"
        color="primary"
      >
        Login Test
      </Button>
      <Typography variant="h1">h1: Sample text</Typography>
      <Typography variant="h2">h2: Sample text</Typography>
      <Typography variant="h3">h3: Sample text</Typography>
      <Typography variant="h4">h4: Sample text</Typography>
      <Typography variant="h5">h5: Sample text</Typography>
      <Typography variant="h6">h6: Sample text</Typography>
      <br />
      <br />
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui reiciendis
        praesentium saepe molestias culpa quibusdam odio unde earum, vel vero ad
        enim sit nesciunt! Ipsa. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Fuga quia molestiae perferendis adipisci, nesciunt
        voluptatibus minima aperiam velit praesentium a blanditiis excepturi
        vitae maxime assumenda voluptate quod ratione perspiciatis tenetur
        reprehenderit fugiat. Non, earum voluptas? Reprehenderit rerum non hic
        magnam sint nihil repellendus nulla, officia doloribus est quod ea
        dolores?
      </Typography>
      <br />
      <br />

      <br />
      <br />
      <div className={styles.buttons}>
        <Button variant="contained" color="primary">
          Primary Button
        </Button>
        <Button color="primary">Primary Button</Button>
        <Button variant="outlined" color="primary">
          Primary Button
        </Button>
      </div>
      <br />
      <br />
      <div className={styles.buttons}>
        <Button variant="contained" color="primary" disabled>
          Disabled Primary Button
        </Button>
        <Button color="primary" disabled>
          Disabled Primary Button
        </Button>
        <Button variant="outlined" color="primary" disabled>
          Disabled Primary Button
        </Button>
      </div>
      <br />
      <br />
      <div className={styles.buttons}>
        <Button variant="contained" color="secondary">
          Secondary Button
        </Button>
        <Button color="secondary">Secondary Button</Button>
        <Button variant="outlined" color="secondary">
          Secondary Button
        </Button>
      </div>
      <br />
      <br />
      <div className={styles.buttons}>
        <Button variant="contained" color="secondary" disabled>
          Disabled Secondary Button
        </Button>
        <Button color="secondary" disabled>
          Disabled Secondary Button
        </Button>
        <Button variant="outlined" color="secondary" disabled>
          Disabled Secondary Button
        </Button>
      </div>
    </Container>
  );
};

export default Example;
