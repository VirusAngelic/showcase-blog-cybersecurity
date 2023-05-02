import {Badge, Box, CardFooter, Heading, Image, Stack, StackDivider, Text} from "@chakra-ui/react";
import {Card, CardBody} from "@chakra-ui/react";
import {PostComponentProps} from "@/app/model/";

export function PostComponent(props: PostComponentProps): JSX.Element {
    return(
        <Box borderRadius={'full'} px={'4'}>
            <Card>
                <CardBody>
                    <Image
                    src={props.imagen}
                    borderRadius={'lg'}
                    w={'100%'}
                    alt={'imagenPost'}
                    />
                    <Stack divider={<StackDivider borderRadius={'2xl'}/>}>
                        <Heading size={['sm','md' ,'lg']}>
                            {props.titulo}
                        </Heading>
                        <Box brightness={5}>
                            <Badge borderRadius='full' px='2' colorScheme='teal'>Post</Badge>

                        </Box>
                        <Text>
                            {props.descripcion}
                        </Text>
                        <CardFooter>
                            {props.fecha}
                        </CardFooter>
                    </Stack>
                </CardBody>
            </Card>
        </Box>
    );
}