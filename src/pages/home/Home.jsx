import "./home.css";
import { Box, Button, AccordionItem, Accordion, AccordionButton, AccordionPanel, AccordionIcon, Heading, Img, Text } from "@chakra-ui/react";
import v1 from '../../assets/v1.mp4';
import v2 from '../../assets/v2.mp4'
import v3 from '../../assets/v3.mp4'
import v4 from '../../assets/v4.mp4'
import React from "react";
import facebook from '../../assets/facebook.png'
import whatsapp from '../../assets/whatsapp.png'
import instagram from '../../assets/instagram.png'
// import Typewriter from "typewriter-effect";
import { FaRupeeSign } from "react-icons/fa";
import { GrDeliver } from "react-icons/gr";
import { FaCommentDollar } from "react-icons/fa";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { FaQuestion } from "react-icons/fa";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Home = () => {
  return (
    <Box>
      <Box position={'fixed'} bg={'rgb(227, 227, 227)'} w={'100%'} zIndex={'100'} bottom={'0'} pt={['10px','17px','20px']} pb={['10px','17px','20px']}>
      <a href="https://cosmofeed.com/vp/64a1a4abe630720020e0fff9" target="_blanck">
      <Button
            color={"white"}
            bgGradient="linear(to-l, red, yellow)"
            fontSize={['16px','17px',"20px"]}
            _hover={{ bgGradient: "linear(to-l, red, teal)" }}
            w={"75%"}
            h={"55px"}
            display={'block'}
            m={'auto'}
          >
            GET INSTANT ACCESS ₹ 49{" "}
          </Button>
          </a>
      </Box>
      <Box className="banner">
        {/* banner headder */}
        <Box>
        </Box>
        <Box textAlign={'center'} className="header">
          <Text w={'100%'} p={'10px'} mb={'20px'} color={'white'} fontSize={['26px', '27px', '35px', '45px']} bgGradient="linear(to-l, red, yellow)" fontWeight={"extrabold"}>The Ultimate <u>The Ultimate</u> Reels</Text>
          <Text fontSize={['15px', '17px', '22px']} fontWeight={['bold', 'bold', 'bold']}>
            Drive Massive Engagement on Facebook, Instagram, <br /> and YouTube with AI
            Motivational Reels
          </Text>
        </Box>

        {/* ad text and reels book show */}

        <Box
          display={"flex"}
          alignItems={"center"}
          flexDirection={["column-reverse", 'column-reverse', "column-reverse", "row"]}
          justifyContent={"space-around"}
          mt={"25px"}
        >
          <Box w={["94%", '85%', "80%", "40%"]} m={'auto'}>
            <Text textAlign={'center'} color={'rgb(57, 57, 57)'} mt={'10px'} w={'94%'} p={'7px'} fontWeight={'bold'} borderRadius={'10px'} fontSize={['23px', '27px', '30px', '25px']} bg={'white'} m={'auto'}>GET STARTED TODAY</Text>
            <Box display={"flex"} gap={['5px', '10px', "15px"]} m={['5px', '10px', "20px "]} mt={'20px'}>
              <Button w={"50%"}>High Quality</Button>
              <Button w={"50%"}>
                {" "}
                <FaCommentDollar />  100% Risk Free
              </Button>
            </Box>
            <Box display={"flex"} gap={['5px', '10px', "15px"]} m={['5px', '10px', "20px "]} mt={'10px'}>
              <Button w={"50%"}>
                <FaRupeeSign /> Small Investment
              </Button>
              <Button w={"50%"}>
                <GrDeliver /> Instatnt Delivery
              </Button>
            </Box>
            <Box m={"20px"}>
            <a href="https://cosmofeed.com/vp/64a1a4abe630720020e0fff9" target="_blanck">
              <Button
                color={"white"}
                bgGradient="linear(to-l, red, yellow)"
                fontSize={"2xl"}
                _hover={{ bgGradient: "linear(to-l, red, teal)" }}
                w={"100%"}
                h={"50px"}
                mt={'20px'}
              >
                ONLY ₹ 49{" "}
                <Box pl={"20px"} as="span">
                  <BsFillArrowRightSquareFill />
                </Box>
              </Button>
              </a>
              <Text textAlign={'center'} fontWeight={'bold'} mt={'25px'} fontSize={['23px', '27px', '30px', '26px']}>Only <u style={{color:'red'}}>3</u> Bundle Left...</Text>
            </Box>
          </Box>
          <Box w={["90%", '63%', "47%", "35%"]} m={'auto'}>
            <Img
              display={"block"}
              m={"auto"}
              w={["50%", "60%", "100%"]}
              src="https://digishopers.in/wp-content/uploads/2023/06/box-mockup-783x1024.webp"
            />
          </Box>
        </Box>
      </Box>

      {/* Reels growth screenshot */}
      <Box mt={"10px"} padding={'7px'}>
        <Heading fontSize={['28px', '35px', '45px']} fontWeight={"extrabold"} textAlign={"center"} m={'25px'}>
          AI REELS{" "}
          <Heading
            as={"span"}
            color={"red"}
            textDecoration={"underline"}
            fontWeight={"extrabold"}
            fontSize={['28px', '35px', '45px']}
          >
            GROWTH
          </Heading>
          😍
        </Heading>
        <Box>
          <Img
            display={"block"}
            m={"auto"}
            w={["75%", '45%', '35%']}
            src="https://digishopers.in/wp-content/uploads/2023/06/ai-growth-example-webp-1024x722.webp"
          />
        </Box>
      </Box>

      {/* what you will get */}
      <Box width={['95%', '95%', '85%']} m={'auto'} mt={'2cm'} mb={'1cm'}>
        <Box display={"flex"} justifyContent={"center"} gap={"10px"} mb={'1cm'}>
          <Heading fontSize={['26px', '35px', '45px']} fontWeight={"extrabold"}>WHAT YOU WILL GET </Heading>
          <FaQuestion color={"red"} size={"45px"} />
        </Box>
        <Box
          w={"100%"}
          m={"auto"}
          border={"1px solid #BDBDBD"}
          justifyContent={"center"}
          mb={"10px"}
          p={['10px', '10px', '15px']}
        >
          <Heading
            fontSize={['16px', '18px', '25px']}
            fontWeight={"medium"}
            display={"flex"}
            gap={"10px"}
            p={"5px"}
          >
            <BsFillCheckCircleFill color="red" />
            500+ Ai Readymade Reel Videos.
          </Heading>
        </Box>
        <Box
          w={"100%"}
          m={"auto"}
          border={"1px solid #BDBDBD"}
          justifyContent={"center"}
          mb={"10px"}
          p={['10px', '10px', '15px']}
        >
          <Heading
            fontSize={['16px', '18px', '25px']}
            fontWeight={"medium"}
            display={"flex"}
            gap={"10px"}
            p={"5px"}
          >
            <BsFillCheckCircleFill color="red" />
            1200+ Canva Editable post BONUS
          </Heading>
        </Box>
        <Box
          w={"100%"}
          m={"auto"}
          border={"1px solid #BDBDBD"}
          justifyContent={"center"}
          mb={"10px"}
          p={['10px', '10px', '15px']}
        >
          <Heading
            fontSize={['16px', '18px', '25px']}
            fontWeight={"medium"}
            display={"flex"}
            gap={"10px"}
            p={"5px"}
          >
            <BsFillCheckCircleFill color="red" />
            Instagram growth Mastery Course BONUS
          </Heading>
        </Box>
        <Box
          w={"100%"}
          m={"auto"}
          border={"1px solid #BDBDBD"}
          justifyContent={"center"}
          mb={"10px"}
          p={['10px', '10px', '15px']}
        >
          <Heading
            fontSize={['16px', '18px', '25px']}
            fontWeight={"medium"}
            display={"flex"}
            gap={"10px"}
            p={"5px"}
          >
            <BsFillCheckCircleFill color="red" />
            90+ Sets Of hashtags
          </Heading>
        </Box>
        <Box
          w={"100%"}
          m={"auto"}
          border={"1px solid #BDBDBD"}
          justifyContent={"center"}
          alignItems={"center"}
          mb={"10px"}
          p={['10px', '10px', '15px']}
        >
          <Heading
            fontSize={['16px', '18px', '25px']}
            fontWeight={"medium"}
            display={"flex"}
            gap={"10px"}
            p={"5px"}
          >
            <BsFillCheckCircleFill color="red" />
            Instagram Highlights Cover
          </Heading>
        </Box>

        <Box width={'100%'}>
        <a href="https://cosmofeed.com/vp/64a1a4abe630720020e0fff9" target="_blanck">
          <Button
            color={"white"}
            bgGradient="linear(to-l, red, yellow)"
            fontSize={"2xl"}
            _hover={{ bgGradient: "linear(to-l, red, teal)" }}
            w={"100%"}
            h={"50px"}
            m={'auto'}
            mt={'1cm'}
          >
            GET INSTANT ACCESS ₹ 49{" "}
          </Button>
          </a>
        </Box>
      </Box>
      {/* some sample */}
      {/* background-color: rgba(128, 128, 128, 0.121); */}

      <Box bg={'rgba(128, 128, 128, 0.121)'}>
        <Heading pt={'50px'} pb={'40px'} textAlign={'center'} fontSize={['26px', '35px', '45px']} fontWeight={"extrabold"}>SOME <u style={{ color: 'red' }}>SAMPLE</u></Heading>
          <div className="grid_items">
            <div>
              <video src={v1} controls autoPlay></video>
            </div>
            <div>
            <video src={v2} controls autoPlay></video>
            </div>
            <div>
            <video src={v3} controls autoPlay></video>
            </div>
            <div>
            <video src={v4} controls autoPlay></video>
            </div>
          </div>
      </Box>
      <Box width={['70%','60%','50%']} margin={'auto'}>
      <a href="https://cosmofeed.com/vp/64a1a4abe630720020e0fff9" target="_blanck">
          <Button
            color={"white"}
            bgGradient="linear(to-l, red, yellow)"
            fontSize={['16px','17px',"20px"]}
            _hover={{ bgGradient: "linear(to-l, red, teal)" }}
            w={"100%"}
            h={"55px"}
            m={'auto'}
            mt={'1cm'}
          >
            GET INSTANT ACCESS ₹ 49{" "}
          </Button>
          </a>
        </Box>
        {/* FAQ */}
        <Box width={['92%']} m={'auto'} borderRadius={'20px'} mt={'1.5cm'} mb={'1cm'}>
            <Accordion allowToggle>
              <AccordionItem border={0} mt={2} mb={3}>
                <h2>
                  <AccordionButton bg={'rgb(227, 227, 227)'} borderRadius={'25px'}>
                    <Box as="span" flex='1' textAlign='left' fontWeight={'bold'} padding={'7px'} fontSize={['12px', '13.5px', '19px']}>
                      Q1. WHO CAN GRAB THIS BUNDLE ?
                    </Box>
                    <AccordionIcon color={'red'} />
                  </AccordionButton>
                </h2>
                <AccordionPanel p={'25px'} pb={4}>
                  Every One Who Want Post Daily High Engaging Content
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem border={0} mt={2} mb={3}>
                <h2>
                <AccordionButton bg={'rgb(227, 227, 227)'} borderRadius={'25px'}>
                    <Box as="span" flex='1' textAlign='left' fontWeight={'bold'} padding={'7px'} fontSize={['12px', '13.5px', '19px']}>
                      Q2. CAN I ADD MY LOGO, WATERMARK IN THE REEL VIDEOS ?
                    </Box>
                    <AccordionIcon color={'red'} />
                  </AccordionButton>
                </h2>
                <AccordionPanel p={'25px'} pb={4}>
                  YES, You can add your brand username and logo
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem border={0} mt={2} mb={3}>
                <h2>
                <AccordionButton bg={'rgb(227, 227, 227)'} borderRadius={'25px'}>
                    <Box as="span" flex='1' textAlign='left' fontWeight={'bold'} padding={'7px'} fontSize={['12px', '13.5px', '19px']}>
                      Q3. VALIDITY OF THE REET BUNDLE AND BONUES ?
                    </Box>
                    <AccordionIcon color={'red'} />
                  </AccordionButton>
                </h2>
                <AccordionPanel p={'25px'} pb={4}>
                  Once you buy the bundle, you get lifetime access to both Reel bundel and bouneses !
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem border={0} mt={2} mb={3}>
                <h2>
                <AccordionButton bg={'rgb(227, 227, 227)'} borderRadius={'25px'}>
                    <Box as="span" flex='1' textAlign='left' fontWeight={'bold'} padding={'7px'} fontSize={['12px', '13.5px', '19px']}>
                      Q4. HOW CAN I GET THE ACCESS TO THE BONUSES MENTIONED ABOVE ?
                    </Box>
                    <AccordionIcon color={'red'} />
                  </AccordionButton>
                </h2>
                <AccordionPanel p={'25px'} pb={4}>
                  After buying the bundle and bonuses by clicking on Download Button
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Box>
          {/* footer */}
            <div className={'footer'}>
              <h3>Copyright © 2023</h3>
              <p>privacy | Terms & conditions | Contant Us | Refund Policy | About Us</p>
            </div>
            {/* right_side */}
            <div className="right_side">
            <div>
              <a href="#"><img src={facebook} alt="" /></a>
            </div>
            <div>
              <a href="#"><img src={whatsapp} alt="" /></a>
            </div>
            <div>
              <a href="#"><img src={instagram} alt="" /></a>
            </div>
            </div>
    </Box>
  );
};

export default Home;
