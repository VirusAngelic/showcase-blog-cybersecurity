import {
    Badge,
    Box,
    Card,
    CircularProgress,
    Container,
    Grid,
    GridItem,
    Select,
    SimpleGrid,
    Stack,
    VStack
} from '@chakra-ui/react'
import {PostComponent} from "@/app/components/BlogsFeedComponent/PostComponent";
import {ChangeEvent, useEffect, useState} from "react";
import {
    Pagination,
    PaginationContainer,
    PaginationNext, PaginationPage,
    PaginationPageGroup,
    PaginationPrevious, PaginationSeparator,
    usePagination
} from "@ajna/pagination";
import axios, {AxiosResponse} from "axios";
import {PostMockData} from "@/app/model";
import './BlogsFeedStyles.css';

export function BlogsFeedComponent() {

    const outerLimit = 2;
    const innerLimit = 2;

    const [mockDataTotal, setMockDataTotal] = useState(0 );
    const [
        mockData,
        setMockData
    ] = useState<Array<PostMockData> | undefined>();
    const [globalPageSize, setGlobalPageSize] = useState(9);

    // Configuracion de paginator
    const {
        currentPage,
        setCurrentPage,
        pagesCount,
        pageSize,
        offset,
        setPageSize,
        pages} = usePagination({
        total: mockDataTotal,
        limits:{
            outer: outerLimit,
            inner: innerLimit,
        },
        initialState:{
            currentPage: 1,
            pageSize: 3,
            isDisabled: false,
        },
    });

    // Callback para cambio de tamaño del Grid de feed
    const handlePageSizeChange = (event: ChangeEvent<HTMLSelectElement>):void  => {
        const pageSize = Number(event.target.value);
        setPageSize(pageSize);
        setGlobalPageSize(pageSize);
    }

    const handlePageChange = (nextPage: number) =>{
        setCurrentPage(nextPage);
    }

    useEffect( ()=>{
            const axiosRequest = axios.get('http://localhost:3000/api/mockposts');
            axiosRequest.then((axiosData) =>{
                const arrayData: Array<PostMockData> = Object.values(axiosData.data);
                setMockData(arrayData);
                setMockDataTotal(arrayData.length);
            })
        }
        ,[currentPage]);

    return (
        <Container p={3} bg={'tomato'}>
            <VStack spacing={3}>
                <Box bg={'transparent'} w={'100%'} p={6}>
                    <Grid templateColumns={'repeat(5, 1fr)'} gap={4}>
                        <GridItem colSpan={2} h={10}>
                            <Select ml={3} w={['10', '30','60']} onChange={handlePageSizeChange}>
                                <option value={'9'}>9</option>
                                <option value={'27'}>27</option>
                                <option value={'30'}>36</option>
                            </Select>
                        </GridItem>
                        <GridItem colStart={4} colEnd={6} h={10}>
                            <Pagination
                                pagesCount={pagesCount}
                                currentPage={currentPage}
                                onPageChange={handlePageChange}>
                                <PaginationContainer align={'center'} justify={'space-between'} p={2} w={'full'}>
                                    <PaginationPageGroup
                                        isInline
                                        align={'center'}
                                        separator={
                                            <PaginationSeparator
                                                bg={'whiteAlpha.200'}
                                                fontSize={'sm'}
                                                w={7}
                                                jumpSize={11}
                                            />
                                        }>
                                        {pages.map((page: number, key) =>{
                                            return (<PaginationPage
                                                page={page}
                                                w={7}
                                                bg={'teal.100'}
                                                key={`pagination_page_${page}`}
                                                fontSize={'sm'}
                                                _hover={{
                                                    bg: "whiteAlpha.200",
                                                }}
                                                _current={{
                                                    bg: "blue.300",
                                                    fontSize: 'sm',
                                                    w: 7
                                                }}/>)
                                        })}
                                    </PaginationPageGroup>
                                </PaginationContainer>
                            </Pagination>
                        </GridItem>
                    </Grid>
                </Box>
                {
                    <Grid
                        gap={3}
                        mt={30}
                        px={20}
                        templateColumns={"repeat(3, 1fr)"}
                        templateRows={"repeat(2, 1fr)"}>
                        {
                    mockData!= undefined ?
                        mockData.map((data, key)=>{
                            if(key > globalPageSize-1){
                                return;
                            }else{
                                return (
                                    <PostComponent
                                        key={key}
                                        titulo={data.titulo}
                                        imagen={data.imagen}
                                        descripcion={data.descripcion}
                                        fecha={data.fecha}/>
                                )
                            }
                            }
                        )
                        : <Box borderRadius={'lg'}>
                            <CircularProgress isIndeterminate color={'teal'}/>
                        </Box>
                        }
                    </Grid>
                }
            </VStack>
        </Container>
);
}