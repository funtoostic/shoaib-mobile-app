import React, { useCallback, useState } from 'react';
import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Spacer,
  Text,
  useMediaQuery,
} from '@chakra-ui/react';
import BidTimeSection from '../../src/components/home/BidTiimeSection/BidTimeSection';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import Link from 'next/link';
import Image from 'next/image';
import { IoArrowForwardCircleOutline } from 'react-icons/io5';
import { client, validateResponse } from '../../src/utils/utils';
import parse from 'html-react-parser';
import Bidder from '../../src/components/Bidder';

const ProductDetails = ({ productData, pointsData, productId }) => {
  const [isBidding, toggleIsBidding] = useState(!!productData.userBid);
  const [bidValue, setBidValue] = useState(0);
  const [userBid, setUserBid] = useState(productData.userBid);
  const [bidStats, setBidStats] = useState(productData.statistics || null);
  const [localBalance, setLocalBalance] = useState(pointsData.balance);
  const [isLargerThan480] = useMediaQuery('(min-width: 480px)');
  const [errorMessage, setErrorMessage] = useState('');
  const [showLoader, setLoader] = useState();
  const canBid = localBalance > userBid;

  const handlePlaceABid = useCallback(() => {
    toggleIsBidding(true);
  }, []);

  const updateUserBidAndStats = useCallback((bidValue, response) => {
    const { data } = response;
    if (validateResponse(response)) {
      setUserBid(bidValue);
      setBidStats(data.stats);
      setBidValue(null);
    }
  }, []);

  const handleBid = useCallback(() => {
    const bid = bidValue;
    setLoader('BID_LOADER');
    client
      .post(`/v1/reward/${productId}/bid`, { bidValue: bid })
      .then((response) => {
        setErrorMessage('');
        setLocalBalance(pointsData.balance + productData.userBid - bid);
        updateUserBidAndStats(bid, response);
      })
      .catch((error) => {
        if (error?.response?.data?.error) {
          setErrorMessage(error.response.data.error);
        }
        console.error(error);
      })
      .finally(() => {
        setLoader(null);
      });
  }, [bidValue, localBalance, pointsData.balance, productData.userBid]);

  const handleDeleteBid = useCallback(() => {
    setLoader('DELETE_LOADER');
    client
      .delete(`/v1/reward/${productId}/bid`)
      .then((response) => {
        setErrorMessage('');
        toggleIsBidding(false);
        setLocalBalance(pointsData.balance + productData.userBid);
        updateUserBidAndStats(0, response);
      })
      .catch((error) => {
        if (error?.response?.data?.error) {
          setErrorMessage(error.response.data.error);
        }
        console.error(error);
      })
      .finally(() => {
        setLoader(null);
      });
  }, [productData.minimumBid]);

  const cancelBidding = useCallback(() => {
    console.log('bidder');
    toggleIsBidding(false);
  }, []);

  return (
    <Box minH={'100vh'} pb={'5rem'}>
      <Container px={0} maxW={'container.md'}>
        {/* Image section*/}
        <Box mx={'auto'}>
          <Box
            mt={'-4.5rem'}
            bg={'transparent'}
            display={'flex'}
            justifyContent={'center'}
            w={'100%'}
            pos={'relative'}
          >
            <Image
              src={productData.details.productBanner}
              priority={'true'}
              placeholder={'blur'}
              width={'568'}
              height={'824'}
              layout={'intrinsic'}
              objectFit={'contain'}
            />

            <Box
              px={4}
              position={'absolute'}
              top={['60px', '80px', '110px']}
              left={0}
              width={'100%'}
            >
              <HStack>
                <Box as={Link} href={'/reward'}>
                  <Box cursor={'pointer'}>
                    <IoIosArrowDropleftCircle size={20} />
                  </Box>
                </Box>
                <Box flexGrow={1}>
                  <BidTimeSection />
                </Box>
              </HStack>
            </Box>

            {/*    Description section*/}
            <Box
              w={'100%'}
              pos={'absolute'}
              top={'88%'}
              mb={'-2rem'}
              p={4}
              zIndex={60}
              bg={'#fff'}
              borderRadius={'15px 15px 0 0'}
              pb={['13rem', '14rem', '15rem']}
            >
              {/*<HStack>*/}
              {/*left box*/}
              <Box>
                <Heading fontSize={'20px'} as={'h3'}>
                  {productData.details.title}
                </Heading>
                <Text fontSize={'1rem'}>{productData.details.subTitle}</Text>
              </Box>

              {/*<Spacer/>*/}

              {/*/!*right box*!/*/}
              {/*<Box>*/}
              {/*    <Heading fontSize={'20px'} as={'h3'}>*/}
              {/*        ₹ 9,999*/}
              {/*    </Heading>*/}
              {/*    <Text fontSize={'1rem'}>*/}
              {/*        48MP | 6000mAh*/}
              {/*    </Text>*/}
              {/*</Box>*/}

              {/*</HStack>*/}

              {/*    Desc Text*/}
              <Box my={4}>{parse(productData.details.description)}</Box>
              <Heading fontSize={'20px'} as={'h3'}>
                Rules to participate
              </Heading>
              <Box mt={4}>{parse(productData.details.rules)}</Box>
            </Box>
          </Box>
        </Box>

        {/*    Fixed Button*/}

        <Box
          width={'100%'}
          bottom={['95', '100', '110px']}
          pos={'fixed'}
          p={4}
          zIndex={100}
        >
          {isBidding ? (
            <Bidder
              minimumBid={productData.minimumBid}
              balance={localBalance}
              bidValue={bidValue}
              userBid={userBid}
              bidStats={bidStats}
              slots={productData.slots}
              errorMessage={errorMessage}
              showLoader={showLoader}
              setBidValue={setBidValue}
              onCancel={cancelBidding}
              onBid={handleBid}
              onDelete={handleDeleteBid}
            ></Bidder>
          ) : (
            <HStack p={4} bg={'dark.500'} borderRadius={'lg'} mx={'auto'}>
              <Box display={'flex'}>
                <Box as={Link} href={'/'}>
                  <img
                    src={'/header/b.svg'}
                    alt="b"
                    style={{
                      widows: 'auto',
                      height: `${isLargerThan480 ? '50px' : '40px'}`,
                      cursor: 'pointer',
                    }}
                  />
                </Box>

                <Box px={4}>
                  <Text fontWeight={'normal'} fontSize={['1rem']}>
                    Points
                  </Text>
                  <Text
                    letterSpacing={'2px'}
                    color={'white'}
                    fontWeight={'bold'}
                    fontSize={['12px']}
                  >
                    {localBalance}
                  </Text>
                </Box>
              </Box>
              <Spacer />
              <Box>
                {canBid ? (
                  <Button
                    fontSize={'12px'}
                    size={'sm'}
                    rightIcon={<IoArrowForwardCircleOutline />}
                    onClick={handlePlaceABid}
                  >
                    Place Bid
                  </Button>
                ) : (
                  <Text fontSize={'xs'} color={'brand.mandy'} ml={8}>
                    You do not have sufficient balance to participate in the
                    bidding.
                  </Text>
                )}
              </Box>
            </HStack>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export async function getServerSideProps({ query: { id } }) {
  //here we are using axios
  const resProduct = await client.get(`/v1/reward/${id}`);
  const resPoints = await client.get('/v1/point');

  const pointsData = await resPoints.data;
  const productData = await resProduct.data;

  if (!productData) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      productId: id,
      productData,
      pointsData,
    },
  };
}

export default ProductDetails;
