import {Box, Card, Container, StackDivider, Text, VStack} from "@chakra-ui/react";
import React from "react";
import {CategoriesText} from "@/app/model";
import {AtSignIcon} from "@chakra-ui/icons";
import {getValidChildren} from "@chakra-ui/react-utils";

function TextCategorieSubComponent(props:CategoriesText): JSX.Element {
    return(
        <Container flex={1} bg={'blackAlpha.300'}>
            {props.children}
            <Text textAlign={'right'}>
                {props.text}
            </Text>
        </Container>
    );
}

export function CategoriesNavigationComponent(): JSX.Element{
    return(
        <Card margin={10}>
            <Text align={'center'} fontSize={'3xl'}>Categorias</Text>
            <VStack spacing={2} divider={<StackDivider borderColor='gray.200' />} padding={2}>
                <TextCategorieSubComponent text={'Categoria 1'}><AtSignIcon/></TextCategorieSubComponent>
            </VStack>
        </Card>
    );
}