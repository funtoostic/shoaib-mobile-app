import React, {useState} from 'react';
import {Box, Button, Flex, HStack, Spacer, Text, useDisclosure} from "@chakra-ui/react";
import {CgAdd} from "react-icons/cg";
import {FcMoneyTransfer} from "react-icons/fc";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerOverlay,
    DrawerContent
} from "@chakra-ui/react"
import DrawerButton from "../Buttons/DrawerButton";
import {IoArrowBackCircleOutline, IoArrowForwardCircleOutline} from "react-icons/io5";
import {ListItem, UnorderedList} from "@chakra-ui/react"
import {AiFillCamera} from "react-icons/ai";
import {RiBillLine} from "react-icons/ri";


const PriceCard = ({title, desc, price}) => {

    const {isOpen, onOpen, onClose} = useDisclosure()
    const [selectedBills, setSelecctdBills] = useState([]);

    const [page, setPage] = useState('first');

    const pageHandler = (page) => {
        setPage(page)
    }

    const priceBtnClicckHandler = (price) => {
        setPage('first');
        setSelecctdBills([]);
        onOpen();
        console.log(price)
    }

    const selectedBillsToggler = (bill) => {

        let newBills = [...selectedBills];

        if (selectedBills.includes(bill)) {
            newBills = newBills.filter(b => b !== bill)
            setSelecctdBills(newBills);
        } else {
            newBills.push(bill);
            setSelecctdBills(newBills);
        }

    }
    console.log(selectedBills)


    return (
        <HStack
            p={4}
            bg={'brand.lightPurple'}
            borderRadius={'lg'}
            w={'100%'}
        >
            {/* left box*/}
            <Box>
                <HStack alignItems={'center'}>
                    <Box>
                        <FcMoneyTransfer size={40}/>
                    </Box>
                    <Box>
                        <Text>
                            {title}
                        </Text>
                        <Text>
                            {desc}
                        </Text>
                    </Box>
                </HStack>

            </Box>

            <Spacer/>

            {/* right box*/}
            <Box>
                <Button onClick={priceBtnClicckHandler.bind(this,price)} leftIcon={<CgAdd size={'15'}/>} variant={'solid'} borderRadius={'20px'}>
                    {price}
                </Button>
            </Box>

            {/*    Here  is the drawer compponent*/}
            {
                (page === 'first') && (
                    <Drawer placement={'bottom'} onClose={onClose} isOpen={isOpen}>
                        <DrawerOverlay/>
                        <DrawerContent h={'30rem'} borderRadius={'15px 15px 0 0'}>
                            <DrawerBody>
                                <Text my={8}>Which of these bills you are uploading?</Text>

                                <Flex
                                    flexWrap={'wrap'}
                                    justifyContent={'space-around'}
                                    alignItems={'center'}

                                >

                                    <DrawerButton
                                        onClick={selectedBillsToggler.bind(this, 'gas')}
                                        variant={selectedBills.includes('gas') && 'dark'}
                                        m={1}
                                    >
                                        Gas
                                    </DrawerButton>

                                    <DrawerButton
                                        m={1}
                                        onClick={selectedBillsToggler.bind(this, 'electricity')}
                                        variant={selectedBills.includes('electricity') && 'dark'}
                                    >
                                        Electricity
                                    </DrawerButton>

                                    <DrawerButton
                                        m={1}
                                        onClick={selectedBillsToggler.bind(this, 'phone')}
                                        variant={selectedBills.includes('phone') && 'dark'}
                                    >
                                        Phone
                                    </DrawerButton>

                                    <DrawerButton
                                        m={1}
                                        onClick={selectedBillsToggler.bind(this, 'onlineShopping')}
                                        variant={selectedBills.includes('onlineShopping') && 'dark'}
                                    >
                                        Online Shopping
                                    </DrawerButton>

                                    <DrawerButton
                                        m={1}
                                        onClick={selectedBillsToggler.bind(this, 'wifi')}
                                        variant={selectedBills.includes('wifi') && 'dark'}
                                    >
                                        Wifi
                                    </DrawerButton>

                                    <DrawerButton
                                        m={1}
                                        onClick={selectedBillsToggler.bind(this, 'fuel')}
                                        variant={selectedBills.includes('fuel') && 'dark'}
                                    >
                                        Fuel
                                    </DrawerButton>

                                    <DrawerButton
                                        m={1}
                                        onClick={selectedBillsToggler.bind(this, 'groceries')}
                                        variant={selectedBills.includes('groceries') && 'dark'}
                                    >
                                        Groceries
                                    </DrawerButton>

                                    <DrawerButton
                                        m={1}
                                        onClick={selectedBillsToggler.bind(this, 'flight')}
                                        variant={selectedBills.includes('flight') && 'dark'}
                                    >
                                        Flight
                                    </DrawerButton>

                                    <DrawerButton
                                        m={1}
                                        onClick={selectedBillsToggler.bind(this, 'hotel')}
                                        variant={selectedBills.includes('hotel') && 'dark'}
                                    >
                                        Hotel
                                    </DrawerButton>

                                    <DrawerButton
                                        m={1}
                                        onClick={selectedBillsToggler.bind(this, 'insurance')}
                                        variant={selectedBills.includes('insurance') && 'dark'}
                                    >
                                        Insurance
                                    </DrawerButton>

                                    <DrawerButton
                                        m={1}
                                        onClick={selectedBillsToggler.bind(this, 'other')}
                                        variant={selectedBills.includes('other') && 'dark'}
                                    >
                                        Other
                                    </DrawerButton>

                                </Flex>

                            </DrawerBody>

                            <DrawerFooter>
                                <Box display={'flex'} justifyContent={'flex-end'} mt={0} mb={2}>
                                    <Button
                                        onClick={pageHandler.bind(this, 'second')}
                                        fontWeight={'400'}
                                        leftIcon={<IoArrowForwardCircleOutline size={20} color={'dark.700'}/>}
                                        borderRadius={'20px'}
                                        variant={'solid'}
                                        colorScheme={'dark'}
                                    >
                                        Next
                                    </Button>
                                </Box>
                            </DrawerFooter>

                        </DrawerContent>
                    </Drawer>
                )
            }

            {
                (page === 'second') && (
                    <Drawer placement={'bottom'} onClose={onClose} isOpen={isOpen}>
                        <DrawerOverlay/>
                        <DrawerContent h={'30rem'} borderRadius={'15px 15px 0 0'}>
                            <DrawerBody>
                                <Text my={4}>
                                    Electricity bill upload intructions
                                </Text>

                                <UnorderedList>
                                    <ListItem>Lorem ipsum dolor sit amet</ListItem>
                                    <ListItem>Consectetur adipiscing elit</ListItem>
                                    <ListItem>Integer molestie lorem at massa</ListItem>
                                    <ListItem>Facilisis in pretium nisl aliquet</ListItem>
                                </UnorderedList>

                            </DrawerBody>

                            <DrawerFooter px={2} w={'100%'}>

                                <Flex direction={'row'} w={'100%'}>

                                    <Box
                                        onClick={ pageHandler.bind(this,'first')}
                                        display={'flex'}
                                        alignItems={'center'}
                                        cursor={'pointer'}
                                    >
                                        <IoArrowBackCircleOutline  size={20} color={'dark.700'}/>
                                        <Box ml={'5px'} display={'inline-block'} fontSize={'12px'}>
                                            Back
                                        </Box>
                                    </Box>

                                    <Spacer/>

                                    <Box>

                                        <HStack>
                                            <Button
                                                fontWeight={'400'}
                                                size={'sm'}
                                                leftIcon={<RiBillLine size={15} color={'white'}/>}
                                                borderRadius={'20px'}
                                                variant={'solid'}
                                                colorScheme={'dark'}
                                            >
                                                E-Bill
                                            </Button>
                                            <Button
                                                fontWeight={'400'}
                                                size={'sm'}
                                                leftIcon={<AiFillCamera size={15} color={'white'}/>}
                                                borderRadius={'20px'}
                                                variant={'solid'}
                                                colorScheme={'dark'}
                                            >
                                                Camera
                                            </Button>
                                        </HStack>

                                    </Box>

                                </Flex>

                            </DrawerFooter>

                        </DrawerContent>
                    </Drawer>
                )
            }


        </HStack>
    );
};

export default PriceCard;
