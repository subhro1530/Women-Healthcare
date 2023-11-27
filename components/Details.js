// Details.js
import { Box, Flex, Heading, Text, Image, keyframes } from "@chakra-ui/react";

const moveImage = keyframes`
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(10px, 10px);
  }
  100% {
    transform: translate(0, 0);
  }
`;

const Details = () => {
  const sectionStyles = {
    backgroundImage: "linear-gradient(60deg,white,#fccee8)",
    minHeight: "100vh",
    color: "black",
    fontFamily: "Poppins, sans-serif",
    padding: "20px", // Added padding for spacing
  };
  const imageStyles = {
    width: { base: "80vw", md: "80%" },
    height: { base: "150px", md: "300px" },
    objectFit: "cover",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    transform: "translate(0, 0)",
    transition: "transform 1s ease",
    animation: `${moveImage} 3s infinite`,
  };

  return (
    <Box style={sectionStyles}>
      <Box
        width="80vw"
        mx="auto"
        textAlign="center"
        mb="10"
        color="black"
        fontFamily="Poppins, sans-serif"
      >
        <Heading
          fontWeight={200}
          fontStyle="italic"
          color="#cb2e7c"
          fontSize={{ base: "3xl", md: "5xl" }}
          mb={10}
          mt={20}
        >
          WHY WOMEN&apos;S HEALTH CARE?
        </Heading>

        <Flex
          direction={{ base: "column", md: "row" }}
          justify="center"
          align="center"
        >
          <Text
            width={{ base: "auto", md: "150%" }}
            fontSize={{ base: "16px", md: "18px" }}
            textAlign="left"
            mb={{ base: "4", md: "0" }}
            mr={{ base: "8", md: "4" }}
          >
            Women&apos;s healthcare embodies comprehensive medical support
            tailored to the distinct needs of women. It encompasses reproductive
            health, from contraception to fertility and menopause management.
            Maternal care ensures safe pregnancies and childbirth. Conditions
            like PCOS, endometriosis, and breast cancer are focal points,
            advocating early detection through screenings. Yet, it extends
            beyond physical aspects, acknowledging mental health, including
            postpartum depression and emotional well-being. This holistic
            approach integrates societal factors, cultural nuances, and
            empowerment, striving for inclusivity and advocacy. Women&apos;s
            healthcare aims not just to treat but to educate, empower, and
            uplift, recognizing and honoring the diverse and intricate journeys
            of women across the globe. <br />
            <br />
            What sets it apart is the emphasis on empowerment, education, and
            advocacy for gender-specific health issues. From promoting menstrual
            hygiene to breaking cultural taboos, it champions inclusivity,
            recognizing the intersectionality of race, ethnicity, socioeconomic
            status, and gender identity. It&apos;s a continuum of care that not
            only heals but also uplifts, aiming to create a world where every
            woman feels seen, heard, and supported in her health journey.
          </Text>

          <Image
            src="https://source.unsplash.com/featured/?healthcare"
            alt="Illustration"
            {...imageStyles}
          />
        </Flex>

        {/* WOMENS HEALTH CARE ONLINE */}
        <Heading
          fontWeight={200}
          fontStyle="italic"
          color="#cb2e7c"
          fontSize={{ base: "3xl", md: "5xl" }}
          mb={10}
          mt={20}
        >
          WOMENS HEALTH CARE ONLINE
        </Heading>

        <Flex
          direction={{ base: "column", md: "row" }}
          justify="center"
          align="center"
        >
          <Text
            width={{ base: "auto", md: "150%" }}
            fontSize={{ base: "16px", md: "18px" }}
            textAlign="left"
            mb={{ base: "4", md: "0" }}
            mr={{ base: "8", md: "4" }}
          >
            Through the digital bridge of technology, online platforms weave a
            seamless connection between patients and doctors, transforming
            distance into a doorway for healthcare. The digital realm not only
            breaks geographical barriers but also encourages women to take
            charge of their health, promoting empowerment through information
            and convenience. Empowering women&apos;s healthcare through online
            platforms ensures accessible and convenient services for all.
            Virtual consultations bridge geographical gaps, offering expert
            guidance on reproductive health, menstrual concerns, and maternal
            care. We provide a safe space for intimate discussions, ensuring
            privacy and comfort for sensitive health matters. Educational
            resources and remote monitoring tools enhance awareness and
            continual support for conditions like PCOS, breast health, and
            mental well-being. Embracing digital advancements not only
            democratizes healthcare access but also encourages proactive
            engagement, empowering women to prioritize their well-being on their
            terms.
          </Text>

          <Image
            src="https://source.unsplash.com/featured/?digital,healthcare"
            alt="Illustration"
            {...imageStyles}
          />
        </Flex>

        {/* SERVICES OFFERED */}
        <Heading
          fontWeight={200}
          fontStyle="italic"
          color="#cb2e7c"
          fontSize={{ base: "3xl", md: "5xl" }}
          mb={10}
          mt={20}
        >
          SERVICES OFFERED
        </Heading>

        <Flex
          direction={{ base: "column", md: "row" }}
          justify="center"
          align="center"
        >
          <Text
            fontSize={{ base: "16px", md: "18px" }}
            textAlign="center"
            mb={{ base: "4", md: "0" }}
            mr={{ md: "4" }}
          >
            <Box color="#cb2e7c">Virtual Consultations:</Box> Facilitating
            appointments with gynecologists, obstetricians, or specialists in
            reproductive health for personalized advice and treatment.
            <br />
            <br />
            <Box color="#cb2e7c">Telemedicine Services:</Box> Providing remote
            access to healthcare professionals for discussing concerns related
            to contraception, menstrual health, fertility, menopause, or general
            wellness.
            <br />
            <br />
            <Box color="#cb2e7c">Educational Resources:</Box> Offering
            informative content, articles, videos, or webinars on women&apos;s
            health topics, empowering individuals with knowledge about their
            bodies and health issues.
            <br />
            <br />
            <Box color="#cb2e7c">Remote Monitoring Tools:</Box> Providing tools
            or apps for tracking menstrual cycles, fertility, pregnancy
            milestones, or managing chronic conditions such as PCOS or
            endometriosis.
            <br />
            <br />
            <Box color="#cb2e7c">Mental Health Support:</Box> Offering access to
            therapists, counselors, or support groups for addressing mental
            health issues like postpartum depression, anxiety, or stress
            management.
            <br />
            <br />
            <Box color="#cb2e7c">Preventative Care:</Box> Promoting screenings,
            self-exams, and early detection strategies for conditions like
            breast cancer, cervical cancer, or sexually transmitted infections
            (STIs).
            <br />
            <br />
            <Box color="#cb2e7c">
              Medication Management and Prescriptions:
            </Box>{" "}
            Offering prescription refills, medication management, and guidance
            on medication usage through virtual platforms.
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Details;
