import { Text } from "@chakra-ui/react";

interface Props {
    text: string;
    rest?: React.HTMLAttributes<{}>
}

export const NavLink = ({text, ...rest}: Props) => {

    return(
        <Text
        _hover={{color: "#55D6BE", cursor: "pointer"}}
        color="black"
        fontSize="sm" //later add it as prop
        fontWeight="600" //default 
        {...rest}
        >
            {text}
        </Text>
    );
}