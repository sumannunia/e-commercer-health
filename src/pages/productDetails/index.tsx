import { useState } from "react";
import {
  Container,
  Grid,
  Text,
  Image,
  Button,
  Badge,
  Group,
  Paper,
  Title,
  Card,
  Divider,
  List,
  ThemeIcon,
  ListItem,
  Rating,
  SimpleGrid,
} from "@mantine/core";

import { IconCheck } from "@tabler/icons-react";
import styles from "./ProductDetailsPage.module.css"; // Add styles as necessary
import { useAppDispatch } from "../../redux/store";
import { addItemToCart } from "../../redux/slices/cartSlice";
import SelectablePlans from "./SaveDiscountBlock";
import CertificationBlock from "./CertificationBlock";
import CustomerReviews from "./CustomerReview/CustomerReviews";
import { ingredients, products } from "./products";
import { useParams } from "react-router-dom";
import ErrorBoundary from "../../utils/ErrorBoundary";
import quality1 from "../../assets/images/quality/image.png";
import quality2 from "../../assets/images/quality/certified.png";
import quality3 from "../../assets/images/quality/pure.png";
import quality4 from "../../assets/images/quality/tested.png";

const reference = [
  {
    text: "Therapeutic Uses of Triphala in Ayurvedic Medicine- Christine Tara Peterson, PhD,1,,2 Kate Denniston, BS,3 and Deepak Chopra",
    link: "",
  },
  {
    text: "Apium Graveoleons - A Health Boon Ruchi Roper1- Dharam Pal Pathak, Vikash Gupta, Uma, Garima Kapoor, Rubina Bhutani, Ravi Kant . Dept. of pharmaceutical chemistry, Delhi Pharmaceutical Sciences and Research University (DPSRU), New Delhi, India. Dept. of pharmaceutical chemistry, Delhi Institute of Pharmaceutical Sciences and Research (DIPSAR), New Delhi, India. Dept. of pharmacognosy, Delhi Pharmaceutical Sciences and Research University (DPSRU), New Delhi, India",
    link: "",
  },
  {
    text: "Role of Pancharavinda Rasayana in enhancement of Intellectual Skills in Children - A Comprehensive Review Ajay1, Girish Kumar Final Year Post Graduate Scholar, Department of P.G Studies in Kaumarabhritya, SDM Institute of Ayurveda & Hospital, Bengaluru,Karnataka, India. Associate Professor, Department of P.G Studies in Kaumarabhritya, SDM Institute of Ayurveda & Hospital, Bengaluru, Karnataka, India",
    link: "",
  },
  {
    text: "SHILAJEET FOR OBESITY: A PROBABLE PHARMACOLOGICAL POSTULATE -Yadav Kapil Deo ,Chaudhary Anand,PhD Scholar, Department of Rasa Shastra, Faculty of Ayurveda, Institute of Medical Sciences, Banaras Hindu University, Varanasi, Uttar Pradesh, India. Professor, Department of Rasa Shastra, Faculty of Ayurveda, Institute of Medical Sciences, Banaras Hindu University,Varanasi, Uttar Pradesh, India . Katuki (Picrorhiza Kurroa) - A promising Ayurvedic Herb- Diksha Raina, Sumit Raina and Brajeshwar Singh",
    link: "",
  },
  {
    text: "Fermentation and Microbial Biotechnology Division, CSIR-Indian Institute of Integrative Medicine (CSIR-IIIM), Canal Road, Jammu Tawi 180001, India Government Ayurvedic Medical College (GAMC), Akhnoor, Jammu, Jammu and Kashmir, India.3Division of Microbiology, Faculty of Basic Sciences, SKUAST-Jammu, India. Corresponding author: Brajeshwar Singh, Division of Microbiology, Faculty of Basic Sciences, SKUAST-Jammu, India",
    link: "",
  },
  {
    text: "An Updated Review on Recent In-Vitro, In-Vivo and Clinical Researches of Avipattikar Churna Yadevendra Yadav1*, Sharma K C , Kumar Rajesh, Sharma Arun , P G deptt of RS & BK, Uttarkhand Ayurved University, Rishikul Campus, Haridwar Uttarakhand, India . Department of Agad Tantra, Uttarakhand Ayurved University, Main Campus, Dehradun Uttarakhand, India",
    link: "",
  },
  {
    text: "Review of Holarrhena antidysenterica (L.) Wall. ex A. DC.: Pharmacognostic, Pharmacological, and Toxicological Perspective - Pallavi Shrirang Jamadagni, Sharad D. Pawar, Shrirang B. Jamadagni, Shridhar Chougule, Sudesh N. Gaidhani, and S. N. Murthy. Review of Trivrit (Operculina turpethum Linn.) in Ayurvedic literature U. Gayathri Sameera, A. Vijaya Lakshmi, G. Swarupa Rani, P. Suguna Jyothi , Assistant Professor, Postgraduate Department of Dravyaguna, Dr. BRKR Government Ayurvedic College, KNR University of Health Sciences, Erragadda, Hyderabad, Telangana, India.HOD and Professor, Postgraduate Department of Dravyaguna, Dr. BRKR Government Ayurvedic College, KNR University of Health Sciences, Erragadda, Hyderabad, Telangana, India.Professor, Postgraduate Department of Dravyaguna, Dr. BRKR Government Ayurvedic College, KNR University of Health Sciences , Erragadda, Hyderabad, Telangana, India.HOD and Professor Retd, Postgraduate Department of Dravyaguna, Dr. NRS Government Ayurvedic College, NTR University of Health Sciences, Vijayawada, Andra Pradesh, India.",
    link: "",
  },
  {
    text: "EFFECTIVENESS OF YASHTIMADHU CHURNA, AMALAKI RASAYANA PHALATRIKADI KWATH IN HEPATOSTEATOSIS: A CASE REPORT -Shushma Upadhyay , Yogesh Kumar Pandey , PG Scholar, Department of Kayachikitsa, Ch. Brahm Prakash Ayurved Charak Sansthan, New Delhi, India.  Associate Professor, Department of Kayachikitsa, Ch. Brahm Prakash Ayurved Charak Sansthan, New Delhi, India",
    link: "",
  },
  {
    text: "The Health Benefits of Indian Traditional Ayurvedic Rasayana (Anti-aging) Drugs- ",
    link: "https://www.sciencedirect.com/topics/neuroscience/adaptogen",
  },
  {
    text: "Cassano, N., Mantegazza, R., Battaglini, S., et al. (2010). Adjuvant role of a new emollient cream in patients with palmar and/or plantar psoriasis: a pilot randomized open-label study. Giornale Italiano Di Dermatologia E Venereologia: Organo Ufficiale, Societa Italiana Di Dermatologia E Sifilografia, 145(6), 789-792. https://pubmed.ncbi.nlm.nih.gov",
    link: "",
  },
  {
    text: "Cloyd, J. (2023, March 16). A Functional Medicine H. Pylori Treatment Protocol. Rupa Health. https://www.rupahealth.com/post/a-functional-medicine-h-pylori-treatment-protocol ",
    link: "",
  },
  {
    text: "Cloyd, J. (2023, July 4). Top Micronutrients for Skin Health and How to Test for Them. Rupa Health. https://www.rupahealth.com/post/micronutrients-for-skin-health",
    link: "",
  },
  {
    text: "dos Santos Leite, C., Bonafé, G. A., Santos, J. C., et al. (2022). The Anti-Inflammatory Properties of Licorice (Glycyrrhiza glabra)-Derived Compounds in Intestinal Disorders. International Journal of Molecular Sciences, 23(8), 4121.",
    link: "https://doi.org/10.3390",
  },
  {
    text: "Hajiaghamohammadi, A. A., Zargar, A., Oveisi, S., et al. (2016). To evaluate of the effect of adding licorice to the standard treatment regimen of Helicobacter pylori. The Brazilian Journal of Infectious Diseases, 20(6), 534 - ",
    link: "https://doi.org/10.1016/j.bjid.2016.07.015",
  },
  {
    text: "Kim, H. J., Seo, J. Y., Suh, H. J., et al. (2012). Antioxidant activities of licorice-derived prenylflavonoids. Nutrition Research and Practice, 6(6), 491–491. ",
    link: "https://doi.org/10.4162/nrp.2012.6.6.49",
  },
  {
    text: "Kuang, Y., Li, B., Fan, J., et al. (2018, January 1). Antitussive and Expectorant Activities of Licorice and Its Major Compounds. Bioorganic & Medicinal Chemistry. ",
    link: "https://pubmed.ncbi.nlm.nih.gov/29224994",
  },
  {
    text: "Kuriyama, A., & Maeda, H. (2019). Topical application of licorice for prevention of postoperative sore throat in adults: A systematic review and meta-analysis. Journal of Clinical Anesthesia, 54, 25–32. ",
    link: "https://doi.org/10.1016/j.jclinane.2018.10.025",
  },
  {
    text: "Licorice. (2012). PubMed; National Institute of Diabetes and Digestive and Kidney Diseases. ",
    link: "https://www.ncbi.nlm.nih.gov/books/NBK590484",
  },
  {
    text: "Licorice. Mount Sinai Health System. ",
    link: "https://www.mountsinai.org/health-library/herb/licorice",
  },
  {
    text: "Licorice Root. University of Rochester Medical Center.",
    link: "https://www.urmc.rochester.edu/encyclopedia/content.aspx?contenttypeid=19&contentid=Licorice",
  },
  {
    text: "Licorice Root. (2020, August). National Center for Complementary and Integrative Health. ",
    link: "https://www.nccih.nih.gov/health/licorice-root",
  },
  {
    text: "Madisch, A., Holtmann, G., Mayr, G., et al. (2004). Treatment of Functional Dyspepsia with a Herbal Preparation. Digestion, 69(1), 45–52. ",
    link: "https://doi.org/10.1159/000076546",
  },
  {
    text: "Murray, M. T. (2020). Glycyrrhiza glabra (Licorice). Textbook of Natural Medicine, 641-647.e3. ",
    link: "https://doi.org/10.1016/b978-0-323-43044-9.00085-6",
  },
  {
    text: "Pastorino, G., Cornara, L., Soares, S., et al. (2018). Liquorice (Glycyrrhiza glabra): A phytochemical and pharmacological review. Phytotherapy Research: PTR, 32(12), 2323–2339. ",
    link: "https://doi.org/10.1002/ptr.6178",
  },
  {
    text: "Puaratanaarunkon, T., Washrawirul, C., Chuenboonngarm, N., et al. (2022). Efficacy and safety of a facial serum containing snail secretion filtrate, Calendula officinalis, and Glycyrrhiza glaba root extract in the treatment of maskne: A randomized placebo‐controlled study. Journal of Cosmetic Dermatology, 21(10). ",
    link: "https://doi.org/10.1111/jocd.15190",
  },
  {
    text: "Rahnama, M., Mehrabani, D., Japoni, S., et al. (2013). The healing effect of licorice (Glycyrrhiza glabra) on Helicobacter pylori infected peptic ulcers. Journal of Research in Medical Sciences: The Official Journal of Isfahan University of Medical Sciences, 18(6), 532–533. ",
    link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3818629",
  },
  {
    text: "Sadek, E., Tawfik, N., Hussein, A., et al. (2019). Efficacy and safety of liquorice extract in asthmatic patients. Journal of Advanced Biomedical and Pharmaceutical Sciences, 0(0). ",
    link: "https://doi.org/10.21608/jabps.2019.6609.1030",
  },
  {
    text: "Saeedi, M., Morteza‐Semnani, K., & Ghoreishi, M. (2003). The treatment of atopic dermatitis with licorice gel. Journal of Dermatological Treatment, 14(3), 153–157. ",
    link: "https://doi.org/10.1080/09546630310014369",
  },
  {
    text: "Strandberg, T. E., Järvenpää, A.-L., Vanhanen, H., et al. (2001). Birth Outcome in Relation to Licorice Consumption during Pregnancy. American Journal of Epidemiology, 153(11), 1085–1088. ",
    link: "https://doi.org/10.1093/aje/153.11.1085",
  },
  {
    text: "Wahab, S., Annadurai, S., Abullais, S. S., et al. (2021). Glycyrrhiza glabra (Licorice): A Comprehensive Review on Its Phytochemistry, Biological Activities, Clinical Evidence and Toxicology. Plants, 10(12), 2751. ",
    link: "https://doi.org/10.3390/plants10122751",
  },
  {
    text: "Xie, Y., Huang, J., Liu, J., et al. (2022). Efficacy of diammonium glycyrrhizinate in the treatment of rosacea with papules and pustules: A randomized, double-blind, placebo-controlled study. Dermatologic Therapy, 35(12), e15905. ",
    link: "https://doi.org/10.1111/dth.15905",
  },
  {
    text: "Yeh, A., & Golianu, B. (2014). Integrative Treatment of Reflux and Functional Dyspepsia in Children. Children, 1(2), 119–133. ",
    link: "https://doi.org/10.3390/children1020119",
  },
  {
    text: "Yoshimura, H. (2023, July 3). 5 Functional Medicine Lab Tests That Can Help Individualize Care for Addison's Disease Patients. Rupa Health. ",
    link: "https://www.rupahealth.com/post/integrative-medicine-approaches-to-addison-disease",
  },
];

const ProductDetailsPage = () => {
  const { productName } = useParams();
  const product = products[productName as keyof typeof products];
  // const [selectedFlavor, setSelectedFlavor] = useState(product.flavors[0]);
  const [selectedSize] = useState(product.sizes[0]);
  const [activeImage, setActiveImage] = useState(product.images[0]);
  const dispatch = useAppDispatch();
  const handleAddToCart = (product: any) => {
    console.log({ product });
    const { id, name, price, images } = product || {};
    dispatch(
      addItemToCart({
        productId: id,
        productName: name,
        price,
        quantity: 1,
        image: images[0].link,
      })
    );
  };
  return (
    <ErrorBoundary>
      <div className={styles.bannerWrapper}>
        <Image
          src={
            product?.bannerImage
              ? product?.bannerImage
              : "https://thegoodbug.com/cdn/shop/files/Top_banner_1.jpg?v=1715679883"
          }
          fit="cover"
          style={{ height: "470px", objectPosition: "center" }}
        />
        <div className={styles.bannerListsWrapper}>
          {/* <List listStyleType="none">
            {product.indications.map((indication, index) => (
              <List.Item
                className={styles.listBannerItem}
                key={index + indication + index}
              >
                {indication}
              </List.Item>
            ))}
          </List> */}
          <Group mt="sm" gap="sm" wrap="wrap">
            {product.indications.map((indication, index) => (
              <Badge
                key={index + indication}
                color="#fff"
                variant="outline"
                // leftSection={<IconCheck size={14} />}
                size="lg"
                h={"auto"}
                style={{ whiteSpace: "unset" }}
                className={styles.badeBanner}
              >
                {indication}
              </Badge>
            ))}
          </Group>
        </div>
      </div>
      <Container fluid px="md" mt={"lg"}>
        <Grid gutter="lg">
          {/* Left Column - Product Images */}
          <Grid.Col span={{ sm: 12, md: 4, lg: 6 }}>
            <Paper withBorder p="md" radius="md" className={styles.paperCard}>
              <div className={styles.activeImageWrapper}>
                <Image
                  src={activeImage.link}
                  alt={product.name}
                  radius="md"
                  className={styles.mainImage}
                />
                {activeImage.description.length > 0 ? (
                  <div className={styles.activeImageDesc}>
                    <Title size={"md"} ml={-45} mb={"md"}>
                      {`{ Key Benefits }`}
                    </Title>
                    <List
                      icon={
                        <ThemeIcon color="gray" size={24} radius="xl">
                          <IconCheck size={16} />
                        </ThemeIcon>
                      }
                      spacing={"md"}
                    >
                      {activeImage.description.map((datum) => (
                        <List.Item>{datum}</List.Item>
                      ))}
                    </List>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <Group mt="sm" gap="xs">
                {product.images.map((img, index) => (
                  <Image
                    key={index + img.link}
                    src={img.link}
                    width={50}
                    height={50}
                    radius="sm"
                    onClick={() => setActiveImage(img)}
                    style={{
                      cursor: "pointer",
                      border:
                        activeImage.link === img.link
                          ? "2px solid #000"
                          : "1px solid #ddd",
                    }}
                  />
                ))}
              </Group>
            </Paper>
          </Grid.Col>

          {/* Right Column - Product Details */}
          <Grid.Col span={{ sm: 12, md: 8, lg: 6 }}>
            {/* Discount Banner */}
            {/* <Paper withBorder className={styles.discountBanner} radius="sm">
              <Text size="xl" fw={700} color="#004c97">
                {product.discountBanner}
              </Text>
            </Paper> */}
            <Title size={"lg"} mt={"sm"} mb={"xs"} tt={"uppercase"}>
              Indication
            </Title>
            <Group mt="sm" gap="sm">
              {product.indications.map((indication, index) => (
                <Badge
                  key={index + indication}
                  color="green"
                  // leftSection={<IconCheck size={14} />}
                  size="lg"
                >
                  {indication}
                </Badge>
              ))}
            </Group>

            <Text fw={700} size="lg" mt="md">
              {product.name}
            </Text>
            <Text color="dimmed" size="sm">
              {product.description}
            </Text>
            <Title size={"md"} mt={"sm"} mb={"xs"}>
              Principal Ingredients and Benefits
            </Title>
            <Text color="dimmed" size="sm">
              {product.principalIngredients}
            </Text>

            <Group align="center" mt="sm" gap="xs">
              <Rating value={product.rating} readOnly />
              <Text size="sm">({product.reviews} reviews)</Text>
            </Group>

            {/* Benefits */}
            <Title size={"md"} mt={"lg"}>
              BENEFITS
            </Title>
            <Group mt="sm" gap="sm">
              {product.benefits.map((benefit, index) => (
                <Badge
                  key={index}
                  color="green"
                  leftSection={<IconCheck size={14} />}
                >
                  {benefit}
                </Badge>
              ))}
            </Group>

            {/* Flavor Selection */}
            {/* <Text size="sm" mt="md" fw={500}>
              Flavour: {selectedFlavor}
            </Text> */}
            {/* <Group gap="xs" mt="xs">
              {product.flavors.map((flavor) => (
                <Button
                  variant={flavor === selectedFlavor ? "filled" : "outline"}
                  color="orange"
                  radius="xl"
                  size="xs"
                  key={flavor}
                  onClick={() => setSelectedFlavor(flavor)}
                >
                  {flavor}
                </Button>
              ))}
            </Group> */}

            {/* Size Selection */}
            {/* <Text size="sm" mt="md" fw={500}>
              Size: {selectedSize.name}
            </Text>
            <Group gap="xs" mt="xs">
              {product.sizes.map((size) => (
                <Button
                  variant={
                    size.name === selectedSize.name ? "filled" : "outline"
                  }
                  color="orange"
                  radius="xl"
                  size="xs"
                  key={size.name}
                  onClick={() => setSelectedSize(size)}
                >
                  {size.name} ({size.weight})
                </Button>
              ))}
            </Group> */}
            <Divider my={"lg"} />
            <SelectablePlans combos={product?.combos} data={product?.saver} />
            <Button
              variant="gradient"
              radius={"25"}
              mx={"auto"}
              display={"flex"}
            >
              <Text size="md" fw={600}>
                Buy now - Speak to our Expert if u still have any question
              </Text>
            </Button>

            {/* Price and Add to Cart */}
            <Group mt="lg" gap="xs" align="center">
              <Text size="lg" fw={700} color="orange">
                ₹{selectedSize.price}
              </Text>
              <Text
                size="sm"
                color="dimmed"
                style={{ textDecoration: "line-through" }}
              >
                ₹{product.oldPrice}
              </Text>
            </Group>

            <Button
              fullWidth
              my="md"
              color="orange"
              radius="xl"
              size="md"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </Button>
            {/* <AccordionCustom data={product.questions} />
            <AccordionCustom data={product.questions2} /> */}
          </Grid.Col>
        </Grid>
        <Title my={"lg"} className={styles.ingridentsTitle}>
          Pure Vedic Ingredients - No Chemicals
        </Title>
        <Grid>
          {ingredients.map((ingredient) => (
            <Grid.Col
              key={ingredient.id + ingredient.title}
              span={{ xs: 12, sm: 6, md: 3 }}
            >
              <Card>
                <Card.Section className={styles.cardSection}>
                  <Image src={ingredient.image} height={200} fit="cover" />
                  <Text className={styles.hiddenText}>
                    {ingredient.hiddenText}
                  </Text>
                </Card.Section>
                <Text fw={500} size="lg" mt="md">
                  {ingredient.title}
                </Text>
                <Text fw={400} size="sm">
                  {ingredient.description}
                </Text>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
        <CertificationBlock />
        <Paper className={styles.questionair}>
          <Grid p={0} m={0}>
            <Grid.Col span={{ sm: 12, md: 6, lg: 6 }}>
              <Text size="lg" fw={700}>
                {product.questions[0].title}
              </Text>
              <List className={styles.list}>
                {product.questions[0].data.map((item: any) => (
                  <ListItem className={styles.listItem}>
                    {item?.question}
                  </ListItem>
                ))}
              </List>
              <Text mt={"md"} fw={500}>
                {product.questions[0].meta}
              </Text>
            </Grid.Col>
            <Grid.Col span={{ sm: 12, md: 6, lg: 6 }} pl={"xl"}>
              <Text size="lg" fw={700}>
                {product.questions2[0].title}
              </Text>
              <List className={styles.list}>
                {product.questions2[0].data.map((item: any) => (
                  <ListItem className={styles.listItem}>
                    {item?.question}
                  </ListItem>
                ))}
              </List>
            </Grid.Col>
          </Grid>
        </Paper>
        <Container fluid>
          <Paper>
            <Title mb={"sm"} className={styles.ingridentsTitle}>
              Quality Assurance
            </Title>
            <SimpleGrid cols={4} spacing={"md"} verticalSpacing={"md"}>
              <div className={styles.gridColQuality}>
                <Image src={quality1} className={styles.qualityImage} />
                <Text className={styles.qualityText}>
                  10 times more powerful extract formulation used
                </Text>
              </div>
              <div className={styles.gridColQuality}>
                <Image src={quality2} className={styles.qualityImage} />
                <Text className={styles.qualityText}>
                  All extracts tested for heavy metals
                </Text>
              </div>
              <div className={styles.gridColQuality}>
                <Image src={quality3} className={styles.qualityImage} />
                <Text className={styles.qualityText}>100% Pure </Text>
              </div>
              <div className={styles.gridColQuality}>
                <Image src={quality4} className={styles.qualityImage} />
                <Text className={styles.qualityText}>
                  Finished good tested before release
                </Text>
              </div>
            </SimpleGrid>
            {/* <Image src={quality} fit="contain" w={"100%"} h={"600"} /> */}
          </Paper>
        </Container>
        <CustomerReviews />
        <Paper>
          <Title className={styles.title}>Clinical Data And Evidence</Title>
          <List>
            {reference?.map((ref: { text: string; link: string }) => {
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
        </Paper>
      </Container>
    </ErrorBoundary>
  );
};

export default ProductDetailsPage;
