'use client'

import Image from 'next/image'
import { Inter } from '@next/font/google'
import {border, Card, ChakraProvider, IconButton, StackDivider, useColorMode, VStack} from "@chakra-ui/react"
import {CacheProvider} from "@chakra-ui/next-js"
import React, {useState, useEffect} from "react";
import {Box, SimpleGrid, Center, Text, Container} from "@chakra-ui/react";
import {BarNavigationComponent} from "@/app/components/NavigationComponents/BarNavigationComponent";
import {SunIcon} from "@chakra-ui/icons";
import {BlogsFeedComponent} from "@/app/components/BlogsFeedComponent/BlogsFeedComponent";
import {PostComponent} from "@/app/components/BlogsFeedComponent/PostComponent";
import axios from "axios";
import {PostMockData} from "@/app/model";
import {CategoriesNavigationComponent} from "@/app/components/NavigationComponents/CategoriesNavigationComponent";

const inter = Inter({ subsets: ['latin'] })

export default function Home(){

    const { colorMode, toggleColorMode } = useColorMode();
    const [ mockData, setMockData ] = useState <Array<PostMockData>>([]);

    useEffect(()=>{
        const axiosRequest = axios.get('http://localhost:3000/api/mockposts');
        axiosRequest.then((axiosResponse)=> {
            const arrayData: Array<PostMockData> = Object.values(axiosResponse.data);
            setMockData(arrayData);
        })
    })

    return (
        <main>
            <VStack p={8} spacing={6}>
            <Center>
                <Box >
                    <IconButton aria-label={'Cambiar tema'} icon={<SunIcon/>} onClick={toggleColorMode}/>
                </Box>
            </Center>
            <SimpleGrid columns={1} spacing={10} padding='20' bg="primary">
                <Box w={[100, 300, 500, 1800]}>
                    <BarNavigationComponent></BarNavigationComponent>
                </Box>
            </SimpleGrid>
                <SimpleGrid columns={2}>
                    <Box paddingRight={300} paddingLeft={30} maxWidth={900} maxH={900} alignContent={'flex-start'}>
                        {
                            mockData?.length > 0 ?
                                <PostComponent titulo={mockData[0].titulo } fecha={mockData[0].fecha}
                                           imagen={mockData[0].imagen} descripcion={mockData[0].descripcion}/>
                                : null
                        }
                    </Box>
                    <CategoriesNavigationComponent/>
                </SimpleGrid>
                <Container maxWidth={'7xl'} brightness={'10%'} textAlign={"left"} paddingBottom={[5, 10, 50]}>
                    <Text fontSize={['xl', '5xl', '7xl']}>Ultimas entradas blog</Text>
                </Container>
                <BlogsFeedComponent></BlogsFeedComponent>
            </VStack>
        </main>
    );
}
