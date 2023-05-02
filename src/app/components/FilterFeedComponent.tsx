import {RadioGroup, Radio} from "@chakra-ui/radio";
import {Stack} from "@chakra-ui/react";

export const FilterFeedComponent = () => {
    return (
        <RadioGroup>
            <Stack spacing={5} direction='column'>
                <Radio value='business'></Radio>
                <Radio value='company'></Radio>
                <Radio value='testing'></Radio>
                <Radio value='costumer'></Radio>
                <Radio value='enterprise'></Radio>
                <Radio value='enterprise'></Radio>
            </Stack>
        </RadioGroup>
    );
}