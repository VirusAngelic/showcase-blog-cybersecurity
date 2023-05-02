import {TabList, Tabs, Tab, TabPanels, TabPanel} from "@chakra-ui/tabs";
import { useState, MouseEvent, useRef} from "react";
import {motion} from "framer-motion";
import {Button, IconButton} from "@chakra-ui/react";
import {SearchIcon} from "@chakra-ui/icons";

export function BarNavigationComponent() {

    const [tabIndex, setTabIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [tabId, setTabId] = useState(0);
    const [visibleTabs, setVisibleTabs] = useState(false);
    const [searchStyleButton, setSearchStyleButton] = useState('solid');
    const handleTabsChange = (index: number) =>{
        setTabIndex(index);
        setIsOpen(isOpen => !isOpen);
    }

    const changeStyleSearchButton = () => {
        setSearchStyleButton(searchStyleButton => searchStyleButton === 'solid' ? 'outline' : 'solid');
    }

    const tabRef = useRef(0);

    const navBarVariants = {
        open : { opacity: 1, x: 100},
        closed : { opacity: 0, x: "-100%"},
    }

    const navBarTransition = {delay: 1}

    return (
        <Tabs index={tabIndex} onChange={handleTabsChange} w={[100, 300, 500, 1800]}>
            <TabList>
                <Tab>Inicio</Tab>
                <Tab >Posts</Tab>
                <Tab>Recursos</Tab>
                <IconButton
                    aria-label={"Busqueda en blog"}
                    icon={<SearchIcon/>}/>
            </TabList>
            <TabPanels>
                <TabPanel>
                </TabPanel>
                <TabPanel>
                    <motion.p
                        transition={navBarTransition}
                        animate={{ x: 100}}>
                        Post 1
                    </motion.p>
                </TabPanel>
                <TabPanel>
                    <motion.p
                        transition={navBarTransition}
                        animate={{x: 100}}>
                        Recurso 1
                    </motion.p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
}