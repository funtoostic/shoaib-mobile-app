import React from 'react';
import {Box, Text, useMediaQuery} from "@chakra-ui/react";
import {Stepper, Step} from 'react-form-stepper';

const StepperSection = () => {

    const [isLargerThan400] = useMediaQuery("(min-width: 400px)");

    const [isLargerThan600] = useMediaQuery("(min-width: 600px)");

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
                activeStep={4}
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
                        activeTextColor: '#FDFF00',
                        completedTextColor: '#FDFF00',

                    }} label="+5"
                    style={{
                        border: '1px solid #FDFF00',
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
                        activeTextColor: '#FDFF00',
                        completedTextColor: '#FDFF00',

                    }} label="+5"
                    style={{
                        border: '1px solid #FDFF00',
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
                        activeTextColor: '#FDFF00',
                        completedTextColor: '#FDFF00',

                    }} label="+10"
                    style={{
                        border: '1px solid #FDFF00',
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
                        activeTextColor: '#FDFF00',
                        completedTextColor: '#FDFF00',

                    }} label="+10"
                    style={{
                        border: '1px solid #FDFF00',
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
                        activeTextColor: '#FDFF00',
                        completedTextColor: '#FDFF00',

                    }} label="+15"
                    style={{
                        border: '1px solid #FDFF00',
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
                        activeTextColor: '#FDFF00',
                        completedTextColor: '#FDFF00',

                    }} label="+15"
                    style={{
                        border: '1px solid #FDFF00',
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
                        activeTextColor: '#FDFF00',
                        completedTextColor: '#FDFF00',

                    }} label="+50"
                    style={{
                        border: '1px solid #FDFF00',
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
