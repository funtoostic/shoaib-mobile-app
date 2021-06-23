import React from 'react';
import {
  Box,
  Button,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Text,
  Divider,
  Tooltip,
  VStack,
  HStack,
  Table,
  Tbody,
  Tr,
  Td,
  Spinner,
} from '@chakra-ui/react';
import {
  IoArrowForwardCircleOutline,
  IoCloseCircleOutline,
} from 'react-icons/io5';
import styled from '@emotion/styled';

const STd = styled(Td)`
  padding-bottom: 0;
  padding-top: 0;
  padding-left: 0;
  border-bottom: none;
`;

const SButton = styled(Button)`
  font-size: 12px;
  width: 80px;
`;

const ErrorText = styled(Text)`
  height: 14px;
  margin-top: 0.3rem;
`;

const Bidder = ({
  errorMessage,
  minimumBid,
  balance,
  bidValue,
  setBidValue,
  onCancel,
  onBid,
  bidStats,
  userBid,
  onDelete,
  slots,
  showLoader,
}) => {
  const { maxBid, totalBids, position: userPosition } = bidStats;
  const isFreshBid = !userBid;
  const bgColor = isFreshBid
    ? 'dark.500'
    : userPosition < 0
    ? 'brand.mandy'
    : userPosition < slots - 1
    ? 'brand.mantis'
    : 'brand.amber';

  const showDeleteLoader = showLoader === 'DELETE_LOADER';
  const showBidLoader = showLoader === 'BID_LOADER';
  const minBidAllowed = userBid || minimumBid;
  const maxBidAllowed = balance + userBid;
  const canBid = maxBidAllowed > minBidAllowed;
  const errorTextColor = userPosition < 0 ? 'brand.red' : 'brand.mandy';

  return (
    <>
      <VStack
        style={{ display: 'flex', width: '100%' }}
        p={4}
        bg={bgColor}
        color={isFreshBid ? 'gray.300' : 'gray.600'}
        borderRadius={'lg'}
        mx={'auto'}
      >
        <Table variant="simple">
          <Tbody>
            <Tr>
              <STd>Highest Bid : </STd>
              <STd isNumeric>{maxBid}</STd>
            </Tr>
            <Tr>
              <STd>Total Bidders : </STd>
              <STd isNumeric>{totalBids}</STd>
            </Tr>
            {userPosition !== undefined && userPosition >= 0 && (
              <Tr>
                <STd>Your Position : </STd>
                <STd isNumeric>
                  {userPosition + 1}/{slots}
                </STd>
              </Tr>
            )}
          </Tbody>
        </Table>
        <Divider />
        <HStack style={{ width: '100%' }}>
          <Box style={{ width: '100%' }} pr={4}>
            {canBid ? (
              <>
                <Box
                  display={'flex'}
                  justifyContent={'space-between'}
                  width={'100%'}
                >
                  <Text fontSize="xs">{minBidAllowed}</Text>
                  <Text fontSize="xs">{maxBidAllowed}</Text>
                </Box>
                <Slider
                  defaultValue={minBidAllowed}
                  focusThumbOnChange={false}
                  onChange={setBidValue}
                  min={minBidAllowed}
                  max={maxBidAllowed}
                >
                  <SliderTrack>
                    <SliderFilledTrack />
                  </SliderTrack>
                  <Tooltip
                    label={bidValue}
                    placement="top"
                    hasArrow={true}
                    isOpen={true}
                  >
                    <SliderThumb />
                  </Tooltip>
                </Slider>
              </>
            ) : (
              <Text fontSize={'xs'} color={errorTextColor}>
                You do not have sufficient balance to update the bid.
              </Text>
            )}
          </Box>
          <Box
            style={{ display: 'flex', flexDirection: 'column' }}
            color={'gray.600'}
          >
            <SButton
              isDisabled={!bidValue}
              size={'sm'}
              onClick={onBid}
              mb={2}
              rightIcon={<IoArrowForwardCircleOutline />}
              isLoading={showBidLoader}
            >
              {isFreshBid ? 'Bid' : 'Update'}
            </SButton>
            {isFreshBid ? (
              <SButton
                size={'sm'}
                onClick={onCancel}
                rightIcon={<IoCloseCircleOutline />}
              >
                Cancel
              </SButton>
            ) : (
              <SButton
                size={'sm'}
                onClick={onDelete}
                rightIcon={<IoCloseCircleOutline />}
                isLoading={showDeleteLoader}
              >
                Delete
              </SButton>
            )}
          </Box>
        </HStack>
        <ErrorText fontSize="xs" color={errorTextColor}>
          {errorMessage}
        </ErrorText>
      </VStack>
    </>
  );
};

export default Bidder;
