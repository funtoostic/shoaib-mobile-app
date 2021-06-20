import React from 'react';
import {Box, Text, useMediaQuery} from "@chakra-ui/react";
import {Step, Stepper} from 'react-form-stepper';

const StepperSection = ({checkinData}) => {

    const [isLargerThan400] = useMediaQuery("(min-width: 400px)");

    const [isLargerThan600] = useMediaQuery("(min-width: 600px)");

    const days =  checkinData.map(checkinData => checkinData.day).sort((a, b) => a - b);

    console.log(days);

    return (
        <Box py={8} borderRadius={'20px'} border={'1px solid #333333'}>
            <Text px={4} textAlign={isLargerThan600 ? "left" : "center"} fontSize={isLargerThan400 ? '1rem' : '12px'}
                  letterSpacing={1.5} fontWeight={'bold'} color={'white'}>
                You're on a streak! Come back tomorrow to get 5 Coins
            </Text>

            <Stepper
                connectorStyleConfig={{
                    completedColor: '#FDFF00',
                    activeColor: '#FDFF00',
                    stepSize: '1em',
                    disabledColor: 'rgba(253,255,0,0.38)',
                }}
                connectorStateColors
                // days[days.length -1]
                activeStep={days[days.length -1]}
                style={{padding: '1rem 0 0'}}
            >

                <Step
                    styleConfig={{
                        activeBgColor: 'transparent',
                        inactiveBgColor: 'transparent',
                        completedBgColor: 'transparent',
                        circleFontSize: '12px',
                        size: '1.4em',
                        inactiveTextColor: '#fff',
                        activeTextColor:'#FDFF00' ,
                        completedTextColor: days.includes(0) ? '#FDFF00' : "#fd0000",

                    }} label="+5"
                    style={{
                        border: `1px solid ${
                            (days[days.length - 1] >= 0) ? (days.includes(0) ? '#FDFF00' : "#fd0000") : '#fff'
                        }`,
                        lineHeight: 1,
                    }}
                >
                    1
                </Step>

                <Step
                    styleConfig={{
                        activeBgColor: 'transparent',
                        inactiveBgColor: 'transparent',
                        completedBgColor: 'transparent',
                        circleFontSize: '12px',
                        size: '1.4em',
                        inactiveTextColor: '#fff',
                        activeTextColor:'#FDFF00' ,
                        completedTextColor: days.includes(1) ? '#FDFF00' : "#fd0000",

                    }} label="+5"
                    style={{
                        border: `1px solid ${
                            (days[days.length - 1] >= 1) ? (days.includes(1) ? '#FDFF00' : "#fd0000") : '#fff'
                        }`,
                        lineHeight: 1,
                    }}
                >
                    2
                </Step>

                <Step
                    styleConfig={{
                        activeBgColor: 'transparent',
                        inactiveBgColor: 'transparent',
                        completedBgColor: 'transparent',
                        circleFontSize: '12px',
                        size: '1.4em',
                        inactiveTextColor: '#fff',
                        activeTextColor:'#FDFF00' ,
                        completedTextColor: days.includes(2) ? '#FDFF00' : "#fd0000",

                    }} label="+5"
                    style={{
                        border: `1px solid ${
                            (days[days.length - 1] >= 2) ? (days.includes(2) ? '#FDFF00' : "#fd0000") : '#fff'
                        }`,
                        lineHeight: 1,
                    }}
                >
                   3
                </Step>

                <Step
                    styleConfig={{
                        activeBgColor: 'transparent',
                        inactiveBgColor: 'transparent',
                        completedBgColor: 'transparent',
                        circleFontSize: '12px',
                        size: '1.4em',
                        inactiveTextColor: '#fff',
                        activeTextColor:'#FDFF00' ,
                        completedTextColor: days.includes(3) ? '#FDFF00' : "#fd0000",

                    }} label="+5"
                    style={{
                        border: `1px solid ${
                            (days[days.length - 1] >= 3) ? (days.includes(3) ? '#FDFF00' : "#fd0000") : '#fff'
                        }`,
                        lineHeight: 1,
                    }}
                >
                    4
                </Step>

                <Step
                    styleConfig={{
                        activeBgColor: 'transparent',
                        inactiveBgColor: 'transparent',
                        completedBgColor: 'transparent',
                        circleFontSize: '12px',
                        size: '1.4em',
                        inactiveTextColor: '#fff',
                        activeTextColor:'#FDFF00' ,
                        completedTextColor: days.includes(4) ? '#FDFF00' : "#fd0000",

                    }} label="+5"
                    style={{
                        border: `1px solid ${
                            (days[days.length - 1] >= 4) ? (days.includes(4) ? '#FDFF00' : "#fd0000") : '#fff'
                        }`,
                        lineHeight: 1,
                    }}
                >
                    5
                </Step>

                <Step
                    styleConfig={{
                        activeBgColor: 'transparent',
                        inactiveBgColor: 'transparent',
                        completedBgColor: 'transparent',
                        circleFontSize: '12px',
                        size: '1.4em',
                        inactiveTextColor: '#fff',
                        activeTextColor:'#FDFF00' ,
                        completedTextColor: days.includes(5) ? '#FDFF00' : "#fd0000",

                    }} label="+5"
                    style={{
                        border: `1px solid ${
                            (days[days.length - 1] >= 5) ? (days.includes(5) ? '#FDFF00' : "#fd0000") : '#fff'
                        }`,
                        lineHeight: 1,
                    }}
                >
                    6
                </Step>

                <Step
                    styleConfig={{
                        activeBgColor: 'transparent',
                        inactiveBgColor: 'transparent',
                        completedBgColor: 'transparent',
                        circleFontSize: '12px',
                        size: '1.4em',
                        inactiveTextColor: '#fff',
                        activeTextColor:'#FDFF00' ,
                        completedTextColor: days.includes(6) ? '#FDFF00' : "#fd0000",

                    }} label="+50"
                    style={{
                        border: `1px solid ${
                            (days[days.length - 1] >= 6) ? (days.includes(6) ? '#FDFF00' : "#fd0000") : '#fff'
                        }`,
                        lineHeight: 1,
                    }}
                >
                    7
                </Step>

            </Stepper>

        </Box>
    );
};

export default StepperSection;
