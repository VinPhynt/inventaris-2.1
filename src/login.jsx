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
                            <center>
                                <Image src="{logo}" width="100px"></Image>
                            </center>
                            <Text textAlign="center"> My Inventory</Text>
                        </CardTitle>
                        <CardBody gapY="10px">
                            <input placeholder="Username" type="text" />
                            <input placeholder="password" type="password" />
                            <button backgroundColor="green" color="red" borderRadius="10px">
                                <Text>Login</Text>
                            </button>
                        </CardBody>
                    </CardHeader>
                </CardRoot>
            </Box>
        </>
    )
}

export default Login;