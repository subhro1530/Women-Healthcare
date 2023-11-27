// FAQ.js
import {
  Box,
  Heading,
  Flex,
  Text,
  IconButton,
  Collapse,
} from "@chakra-ui/react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";

const FAQ = () => {
  const questionsAndAnswers = [
    {
      question:
        "What health screenings should women prioritize at different life stages?",
      answer:
        "Women should prioritize regular screenings for breast cancer (mammograms), cervical cancer (Pap smears), bone density tests, blood pressure checks, cholesterol screenings, and diabetes screenings. Discuss with your healthcare provider to determine personalized screening schedules.",
    },
    {
      question:
        "How often should I get a mammogram, and at what age should I start?",
      answer:
        "Mammogram guidelines vary, but generally, women should start screening at age 40 and continue annually or as recommended by their healthcare provider. Women with a family history or higher risk factors may need to start earlier.",
    },
    {
      question:
        "What are common symptoms of conditions like PCOS, endometriosis, or fibroids?",
      answer:
        "Symptoms for PCOS include irregular periods, excessive hair growth, and acne. Endometriosis symptoms often include severe menstrual cramps, pelvic pain, and pain during intercourse. Fibroids might cause heavy menstrual bleeding, pelvic pressure, and frequent urination.",
    },
    {
      question:
        "How can I manage menstrual irregularities or severe PMS symptoms?",
      answer:
        "Lifestyle changes, stress management, dietary adjustments, and hormonal treatments can help manage menstrual irregularities or PMS symptoms. Consulting with a healthcare provider for personalized advice is recommended.",
    },
    {
      question:
        "What birth control options are available, and how do I choose the right one?",
      answer:
        "Birth control options include pills, patches, injections, IUDs, implants, and more. The best choice depends on individual health, lifestyle, and preferences. Consult with a healthcare provider to explore suitable options.",
    },
    {
      question:
        "What are some lifestyle changes to support fertility and reproductive health?",
      answer:
        "Maintaining a healthy weight, balanced diet, regular exercise, managing stress, avoiding smoking, and moderating alcohol intake can positively impact fertility and reproductive health.",
    },
    {
      question:
        "What should I expect during pregnancy, and how can I prepare for childbirth?",
      answer:
        "Pregnancy involves various physical and emotional changes. Prenatal care, proper nutrition, exercise, childbirth education classes, and open communication with healthcare providers can help prepare for childbirth.",
    },
    {
      question:
        "Are there specific exercises or dietary recommendations for women s health?",
      answer:
        "Regular aerobic exercise, strength training, and flexibility exercises benefit women s health. A balanced diet rich in fruits, vegetables, lean proteins, and whole grains supports overall well-being.",
    },
    {
      question:
        "How can I manage menopause symptoms like hot flashes or mood changes?",
      answer:
        "Managing menopause symptoms may involve hormone therapy, lifestyle changes, relaxation techniques, and discussing available treatments with a healthcare provider.",
    },
    {
      question:
        "What mental health resources are available for issues like postpartum depression or anxiety?",
      answer:
        "Mental health resources include counseling, support groups, therapy, and medications if needed. Seeking professional help and discussing concerns openly are crucial for managing postpartum depression or anxiety.",
    },
  ];

  const [isOpen, setIsOpen] = useState(
    Array(questionsAndAnswers.length).fill(false)
  );

  const handleToggle = (index) => {
    const newIsOpen = [...isOpen];
    newIsOpen[index] = !newIsOpen[index];
    setIsOpen(newIsOpen);
  };

  return (
    <Box
      bg="white"
      p={8}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Heading fontSize="5xl" mb={4}>
        FAQ s
      </Heading>

      {questionsAndAnswers.map((item, index) => (
        <Flex
          key={index}
          direction="column"
          mb={4}
          w="100%"
          border="1px solid black"
          borderRadius="md"
          overflow="hidden"
        >
          <Flex
            justify="space-between"
            align="center"
            cursor="pointer"
            onClick={() => handleToggle(index)}
            p={4}
          >
            <Text fontSize="lg">{item.question}</Text>
            <IconButton
              icon={isOpen[index] ? <FaMinus /> : <FaPlus />}
              fontSize="lg"
            />
          </Flex>
          <Collapse in={isOpen[index]} animateOpacity>
            <Text mt={2} fontSize="lg" p={4} transition="height 0.3s ease">
              {item.answer}
            </Text>
          </Collapse>
        </Flex>
      ))}
    </Box>
  );
};

export default FAQ;
