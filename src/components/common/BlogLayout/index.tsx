import {
  Container,
  Paper,
  Title,
  Text,
  Table,
  List,
  Image,
  Grid,
} from "@mantine/core";
import styles from "./BlogLayout.module.css";

const BlogLayout = ({ data }: { data: any[] }) => {
  const renderContent = (block: any, index: number) => {
    switch (block.type) {
      case "title":
        return (
          <Title
            key={index}
            order={block.level || 1}
            className={styles.blogTitle}
          >
            {block.content}
          </Title>
        );

      case "paragraph":
        return (
          <Text key={index} className={styles.blogParagraph}>
            {block.strong ? <strong>{block.strong}: </strong> : ""}
            {block.content}
          </Text>
        );

      case "image":
        return (
          <div className={styles.imageWrapper}>
            <Image
              key={index}
              src={block.src}
              alt={block.alt}
              className={styles.blogImage}
              radius="md"
            />
          </div>
        );
      case "imageArr":
        return (
          <Grid>
            {block.src.map((src: string) => {
              return (
                <Grid.Col span={{ md: 6, sm: 12 }}>
                  <div className={styles.imageWrapper}>
                    <Image
                      key={index}
                      src={src}
                      alt={block.alt}
                      className={styles.blogImage}
                      radius="md"
                    />
                  </div>
                </Grid.Col>
              );
            })}
          </Grid>
        );

      case "list":
        return (
          <List key={index} className={styles.blogList}>
            {block.items.map((item: string, i: number) => (
              <List.Item key={i} className={styles.listItem}>
                {item}
              </List.Item>
            ))}
          </List>
        );
      case "reference":
        return (
          <>
            <Title mt={"lg"} size={"md"} fw={"700"}>
              {" "}
              References and Good Reads{" "}
            </Title>
            <List>
              {block.reference?.map((ref: { text: string; link: string }) => {
                return (
                  <List.Item style={{ fontStyle: "italic" }}>
                    {ref.text}
                    <a style={{ display: "block" }} href={ref.link}>
                      {ref.link}
                    </a>
                  </List.Item>
                );
              })}
            </List>
          </>
        );

      case "table":
        return (
          <Table
            key={index}
            highlightOnHover
            verticalSpacing="md"
            striped
            className={styles.table}
          >
            <thead>
              <tr>
                {block.data.map((col: any, i: number) => (
                  <th className={styles.equalWidthColumn} key={i}>
                    {col.test}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.data[0].points.map((_: any, rowIndex: number) => (
                <tr key={rowIndex}>
                  {block.data.map((col: any, colIndex: number) => (
                    <td className={styles.equalWidthColumn} key={colIndex}>
                      {col.points[rowIndex] || ""}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </Table>
        );

      default:
        return null;
    }
  };

  return (
    <Container size="lg" px="md" className={styles.blogSection}>
      <Paper radius="md" p="lg" className={styles.blogContent}>
        {data.map((block, index) => renderContent(block, index))}
      </Paper>
    </Container>
  );
};

export default BlogLayout;
