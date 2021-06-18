import {Box, forwardRef} from "@chakra-ui/react";

const DrawerButton = forwardRef(({children, variant, ...props}, ref) => {
    return (
        <Box
            flexGrow={1}
            display={'inline-flex'}
            fontSize={['12px','14px']}
            cursor={'pointer'}
            justifyContent={'center'}
            alignItems={'center'}
            px={4}
            py={2}
            borderRadius={'25px'}
            border={'1px solid #161616'}
            color={(variant === 'dark') ? '#fff' : "#161616"}
            bg={(variant === 'dark') ? '#161616' : "transparent"}
            ref={ref}
            {...props}
        >
            {children}
        </Box>
    );
});

export default DrawerButton;
