import { Grid, List, Title } from "@mantine/core";
import QRCodeCustom from ".";

const QRBlock = () => {
  return (
    <Grid>
      <Grid.Col span={{ md: 4, lg: 3, xl: 3 }}>
        <QRCodeCustom />
      </Grid.Col>
      <Grid.Col span={{ md: 8, lg: 9, xl: 9 }}>
        <Title size={"md"}>SCAN THE BARCODE TO AVAIL FREE SERVICES: </Title>
        <List>
          <List.Item>Free diet plan.</List.Item>
          <List.Item>Free calorie counter.</List.Item>
          <List.Item>Free step / physical activity counter.</List.Item>
          <List.Item>Free gut friendly recipies.</List.Item>
          <List.Item>Free yoga exercises content.</List.Item>
        </List>
      </Grid.Col>
    </Grid>
  );
};

export default QRBlock;
