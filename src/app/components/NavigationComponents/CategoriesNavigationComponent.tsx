import {Box, Card, Container, StackDivider, Text, VStack} from "@chakra-ui/react";
import React from "react";
import {CategoriesText} from "@/app/model";
import {AtSignIcon, BellIcon, CalendarIcon, CheckIcon, ViewIcon} from "@chakra-ui/icons";
import {getValidChildren} from "@chakra-ui/react-utils";
import {TextData} from "@/app/model";


/**
 *
 * @param props
 * @constructor
 */
function TextCategorieSubComponent(props:CategoriesText): JSX.Element {
    return(
        <Container flex={1} bg={'blackAlpha.100'}>
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
            <VStack spacing={2} divider={<StackDivider borderColor='gray.100' />} padding={2}>
                <TextCategorieSubComponent text={TextData.categoriesNavigation[0].title}><AtSignIcon/></TextCategorieSubComponent>
                <TextCategorieSubComponent text={TextData.categoriesNavigation[1].title}><CalendarIcon/></TextCategorieSubComponent>
                <TextCategorieSubComponent text={TextData.categoriesNavigation[2].title}><BellIcon/></TextCategorieSubComponent>
                <TextCategorieSubComponent text={TextData.categoriesNavigation[3].title}><CheckIcon/></TextCategorieSubComponent>
                <TextCategorieSubComponent text={TextData.categoriesNavigation[4].title}><ViewIcon/></TextCategorieSubComponent>
            </VStack>
        </Card>
    );
}