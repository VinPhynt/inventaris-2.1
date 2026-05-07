import {
    Box,
    Button,
    Card,
    CardBody,
    CardHeader,
    CardRoot,
    CardTitle,
    Center,
    Image,
    Input,
    Text,
 } from "@chakra-ui/react";


 import logo from "../assets/logo.svg";


const Login = () => {
    return(
        <>
            <Box 
            backgroundColor="blackAlpha.100"
            width="100dvw"
            height="100dvh"
            display="flex"
            flexDirection="row"
            justifyContent="center"
            alignItems="center"
            
            >
                <CardRoot
                    borderRadius="20px"
        	        backgroundColor="white"
                    color="black"
                >
                    <CardHeader>
                        <CardTitle>
                            <Center>
                                <Image src="{logo}" width="100px"></Image>
                            </Center>
                            <Text textAlign="center"> My Inventory</Text>
                        </CardTitle>
                        <CardBody gapY="10px">
                            <Input placeholder="Username" type="text" />
                            <Input placeholder="password" type="password" />
                            <Button backgroundColor="green" color="red" borderRadius="10px">
                                <Text>Login</Text>
                            </Button>
                        </CardBody>
                    </CardHeader>
                </CardRoot>
            </Box>
        </>
    )
}

export default Login;