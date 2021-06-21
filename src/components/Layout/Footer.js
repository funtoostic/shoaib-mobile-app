import React, {useState} from 'react';
import {Box, Button, Container, HStack, Text} from "@chakra-ui/react";
import {AiFillStar} from "react-icons/ai";
import NavButton from "./NavButton";
import {useMediaQuery} from "@chakra-ui/react"
import {useRouter} from "next/router";

const Footer = () => {

    const [isLargerThan400] = useMediaQuery("(min-width: 400px)")

    const iconSize = isLargerThan400 ? 25 : 18;

    const router = useRouter();

    const [isLoadingReward, setIsLoadingReward] = useState();
    const [isLoadingActivity, setIsLoadingActivity] = useState();
    const [isLoadingEarn, setIsLoadingEarn] = useState();

    const buttonClickHandler = (path) => {

       switch(path) {
           case 'activity': {
               setIsLoadingActivity(true)
               break;
           }

           case 'earn': {
               setIsLoadingEarn(true)
               break;
           }

           case 'reward': {
               setIsLoadingReward(true)
               break;
           }
       }

        router.push(`/${path}`)
            .then(() => {
                setIsLoadingEarn(false);
                setIsLoadingActivity(false)
                setIsLoadingReward(false);
            })
            .catch(() => {
                setIsLoadingEarn(false);
                setIsLoadingActivity(false)
                setIsLoadingReward(false);
            })

    }

    return (
        <Box bg={'dark.600'} pos={'fixed'} bottom={0} left={0} width={'100%'} zIndex={100}>

            <Container h={'100%'} maxW={'container.md'}>

                <HStack h={'100%'} alignItems={'center'} position={'relative'} py={4}>


                        <NavButton
                            isLoading={isLoadingReward}
                            onClick={buttonClickHandler.bind(this,'reward')}
                            flexGrow={1}
                            heading={'Rewards'}
                            icon={<AiFillStar size={iconSize}
                                              width={iconSize}
                                              height={iconSize}
                                              color={'#fff'}/>}
                        />


                    <Box
                        flexGrow={1}
                        display={'flex'}
                        flexDirection={'column'}
                        justifyContent={'center'}
                        alignItems={'center'}
                    >
                        <Button
                            onClick={buttonClickHandler.bind(this,'earn')}
                            isLoading={isLoadingEarn}
                            variant={'unstyled'}
                            w={'60px'}
                            h={'60px'}
                            display={'flex'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            fontWeight={'normal'}
                            cursor={'pointer'}
                            pos={'absolute'}
                            top={'-30%'}
                            bg={'brand.yellow'}
                            border={`${isLargerThan400 ? '7px' : '5px'} solid`}
                            borderColor={'dark.500'}
                            borderRadius={'50%'}
                            p={1}
                        >

                                <img style={{
                                    filter: 'brightness(1)',
                                    width: '45px',
                                    height: '45px',
                                    fill: '#fff'
                                }}
                                     src={'/menu/b.svg'} alt="menu-b"
                                />

                        </Button>
                        <Text
                            fontSize={isLargerThan400 ? '1rem' : '13px'}
                            mt={isLargerThan400 ? '33px' : '35px'}
                              color={'#fff'}>
                            Earn
                        </Text>
                    </Box>


                        <NavButton
                            isLoading={isLoadingActivity}
                            onClick={buttonClickHandler.bind(this,'activity')}
                            flexGrow={1}
                            heading={'Activities'}
                            icon={
                                <img style={{
                                    filter: 'brightness(1)',
                                    width: `${iconSize}px`,
                                    height: `${iconSize}px`,
                                    fill: '#fff',

                                }}
                                     src={'/menu/history.svg'} alt="Activities"
                                />
                            }
                        />


                </HStack>

            </Container>

        </Box>
    );
};

export default Footer;
