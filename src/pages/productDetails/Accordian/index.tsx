import { IconPlus } from "@tabler/icons-react";
import { Accordion, List, ListItem, Text } from "@mantine/core";
import classes from "./Accordion.module.css";

export function AccordionCustom({ data }: { data: any[] }) {
  // See groceries data above
  const items = data.map((datum) => (
    <Accordion.Item key={datum?.title} value={datum?.title}>
      <Accordion.Control>{datum?.title}</Accordion.Control>
      <Accordion.Panel>
        <List>
          {datum?.data.map((item: any) => (
            <ListItem>{item?.question}</ListItem>
          ))}
        </List>
        <Text>{datum?.meta}</Text>
      </Accordion.Panel>
    </Accordion.Item>
  ));

  return (
    <Accordion
      defaultValue="Apples"
      classNames={{ chevron: classes.chevron }}
      chevron={<IconPlus className={classes.icon} />}
    >
      {items}
    </Accordion>
  );
}
