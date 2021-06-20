import React, { useState, useCallback, useEffect } from "react";
import { Box, Text, useMediaQuery, Flex } from "@chakra-ui/react";
import { Stepper, Step } from "react-form-stepper";
import Lottie from "react-lottie-player";

import lottieJson from "./data/8804-level-up-confetti-animation.json";

const stepsData = [
  {
    id: "1",
    label: "+1",
    title: "1",
    completed: true,
  },
  {
    id: "2",
    label: "+2",
    title: "2",
    completed: true,
  },
  {
    id: "3",
    label: "+3",
    title: "3",
    completed: true,
  },
  {
    id: "4",
    label: "+4",
    title: "4",
    completed: false,
    active: true,
  },
  {
    id: "5",
    label: "+5",
    title: "5",
    completed: false,
  },
  {
    id: "6",
    label: "+6",
    title: "6",
    completed: false,
  },
  {
    id: "7",
    label: "+7",
    title: "7",
    completed: false,
  },
];
const StepperSection = () => {
  const [isLargerThan400] = useMediaQuery("(min-width: 400px)");
  const [isLargerThan600] = useMediaQuery("(min-width: 600px)");

  const [steps, setSteps] = useState([]);
  const [done, setDone] = useState(false);

  const onActiveStepClick = useCallback(() => {
    setDone(true);
  }, [done, setDone]);
  const onAnimationComplete = useCallback(() => {
    setDone(false);
  }, [done, setDone]);

  useEffect(() => {
    setSteps(stepsData);
  }, []);

  return (
    <Box py={8} borderRadius={"20px"} border={"1px solid #333333"}>
      <Text
        px={4}
        textAlign={isLargerThan600 ? "left" : "center"}
        fontSize={isLargerThan400 ? "1rem" : "12px"}
        letterSpacing={1.5}
        fontWeight={"bold"}
        color={"white"}
      >
        You're on a streak! Come back tomorrow to get 5 Coins
      </Text>

      {steps.length > 0 && (
        <Stepper
          connectorStyleConfig={{
            completedColor: "#FDFF00",
            activeColor: "#FDFF00",
            stepSize: "1em",
            disabledColor: "rgba(253,255,0,0.38)",
          }}
          connectorStateColors
          activeStep={steps.findIndex((s) => !!s.active)}
          style={{ padding: "1rem 0 0" }}
        >
          {steps.map((step, index) => {
            const isActive = !!step.active;

            const styleConfig = {
              activeBgColor: "transparent",
              activeColor: "transparent",
              inactiveBgColor: "transparent",
              completedBgColor: "transparent",
              circleFontSize: "14px",
              size: "1.5em",
              inactiveTextColor: "#dbdbdb52",
              activeTextColor: "#FDFF00",
              completedTextColor: "#ffff00b0",
            };
            const style = {
              border: "1px solid rgba(253, 255, 0, 0.7)",
            };

            if (isActive) {
              styleConfig.size = "1.6em";
              // style
              style.border = "2px solid rgba(253, 255, 0)";
            } else {
              if (!step.completed) {
                style.border = "1px solid rgba(255, 255, 255, 0.3)";
              }
            }
            return (
              <Step
                styleConfig={styleConfig}
                label="+5"
                onClick={isActive && onActiveStepClick}
                style={style}
              >
                {step.title}
              </Step>
            );
          })}
        </Stepper>
      )}
      {done && (
        <Flex
          position={"fixed"}
          top={0}
          left={0}
          right={0}
          bottom={0}
          alignItems={"center"}
          justifyContent="center"
          bg={"blackAlpha.500"}
          pointerEvents={"none"}
          zIndex={10}
        >
          <Lottie
            loop={false}
            animationData={lottieJson}
            play
            speed={0.5}
            onComplete={onAnimationComplete}
            style={{ width: "100%", height: "100%" }}
          />
        </Flex>
      )}
    </Box>
  );
};

export default StepperSection;
