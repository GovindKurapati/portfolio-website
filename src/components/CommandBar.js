"use client";
import { KBarProvider, KBarPortal, KBarPositioner, KBarAnimator, KBarSearch, KBarResults, useMatches, useKBar } from "kbar";
import { forwardRef, useEffect } from 'react';
import {
    Box,
    Text,
    Flex,
    Kbd,
} from '@chakra-ui/react';
import { useRouter } from 'next/navigation';
import {
    FiHome,
    FiBriefcase,
    FiFileText,
    FiImage,
    FiMail,
    FiSearch,
    FiGithub,
    FiLinkedin
} from 'react-icons/fi';
import { useColorModeValue } from "./color-mode";

export const CommandBar = () => {
    const router = useRouter();

    const actions = [
        // Navigation actions
        {
            id: "home",
            name: "Home",
            shortcut: ["h"],
            keywords: "home main page",
            icon: <FiHome size={16} />,
            perform: () => router.push("/"),
            section: "Go to",
        },
        {
            id: "projects",
            name: "Projects",
            shortcut: ["p"],
            keywords: "projects work portfolio",
            icon: <FiBriefcase size={16} />,
            perform: () => router.push("/projects"),
            section: "Go to",
        },
        {
            id: "resume",
            name: "Resume",
            shortcut: ["r"],
            keywords: "cv experience skills",
            icon: <FiFileText size={16} />,
            perform: () => router.push("/resume"),
            section: "Go to",
        },
        {
            id: "certifications",
            name: "Certifications",
            shortcut: ["c"],
            keywords: "images photos gallery",
            icon: <FiImage size={16} />,
            perform: () => router.push("/certifications"),
            section: "Go to",
        },
        {
            id: "github",
            name: "GitHub",
            keywords: "github code repository",
            icon: <FiGithub size={16} />,
            perform: () => window.open("https://github.com/GovindKurapati", "_blank"),
            section: "General",
        },
        {
            id: "linkedin",
            name: "LinkedIn",
            keywords: "linkedin professional network",
            icon: <FiLinkedin size={16} />,
            perform: () => window.open("https://linkedin.com/in/govind-kurapati", "_blank"),
            section: "General",
        },
        {
            id: "contact",
            name: "Send Email",
            shortcut: ["e"],
            keywords: "email contact reach",
            icon: <FiMail size={16} />,
            perform: () => {
                // Open default email client with pre-filled contact information
                const subject = encodeURIComponent("Portfolio Contact");
                const body = encodeURIComponent("Hello,\n\nI'd like to get in touch regarding your portfolio website.\n\nBest regards,");
                const mailtoLink = `mailto:kgovindrarg@gmail.com?subject=${subject}&body=${body}`;
                window.open(mailtoLink);
            },
            section: "General",
        },
    ];

    return (
        <KBarProvider actions={actions} zIndex={1000}>
            <KeyboardShortcutHandler />
            <KBarPortal>
                <KBarPositioner style={{ backdropFilter: 'blur(2px)' }}>
                    <KBarAnimator
                        as={Box}
                        bg="secondary"
                        maxW="600px"
                        w="100%"
                        color="title.100"
                        borderRadius="8px"
                        overflow="hidden"
                        backdropFilter="saturate(110%) blur(8px)"
                        WebkitBackdropFilter="saturate(110%) blur(8px)"
                        sx={{
                            '@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))': {
                                backgroundColor: useColorModeValue('rgba(255, 255, 255, 0.05)', 'rgba(16, 20, 27, 0.05)'),
                            },
                            '& > div > div::-webkit-scrollbar': {
                                display: 'none',
                            },
                            '& > div > div': {
                                msOverflowStyle: 'none',
                                scrollbarWidth: 'none',
                            },
                        }}
                    >
                        <Box
                            zIndex={1000}
                            borderRadius="lg"
                            boxShadow="xl"
                            maxW={{ base: "95vw", md: "600px" }}
                            w={{ base: "95vw", md: "600px" }}
                            minW={{ base: "280px", md: "200px" }}
                            overflow="hidden"
                            backdropFilter="saturate(300%) blur(25px)"
                            bg="secondary"
                        >
                            <Search placeholder="Type a command or search…" />
                            <RenderResults />
                        </Box>
                    </KBarAnimator>
                </KBarPositioner>
            </KBarPortal>
        </KBarProvider>
    );
}

// Component to handle keyboard shortcuts
const KeyboardShortcutHandler = () => {
    const { query } = useKBar();
    
    useEffect(() => {
        const handleKeyDown = (event) => {
            if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
                event.preventDefault();
                query.toggle();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [query]);
    
    return null;
};

// Visual indicator for keyboard shortcut
export const CommandBarIndicator = () => {
    const bgColor = useColorModeValue('gray.100', 'gray.700');
    const textColor = useColorModeValue('gray.600', 'gray.300');
    const borderColor = useColorModeValue('gray.200', 'gray.600');
    
    // Detect operating system
    const isMac = typeof window !== 'undefined' && /Mac|iPhone|iPad/.test(navigator.userAgent);
    const modifierKey = isMac ? '⌘' : 'Ctrl';

    return (
        <Flex
            position="fixed"
            bottom={4}
            right={4}
            bg="secondary"
            border="1px solid"
            borderColor={borderColor}
            borderRadius="md"
            px={3}
            py={2}
            fontSize="sm"
            color={textColor}
            zIndex={1000}
            display={{ base: 'none', md: 'flex' }}
        >
            <Text mr={2}>Press</Text>
            <Kbd>{modifierKey}</Kbd>
            <Text mx={1}>+</Text>
            <Kbd>K</Kbd>
            <Text ml={2}>to search</Text>
        </Flex>
    );
};

function RenderResults() {
    const { results } = useMatches();

    return (
        <KBarResults
            items={results}
            onRender={({ item, active }) =>
                typeof item === 'string' ? (
                    <GroupName>{item}</GroupName>
                ) : (
                    <ResultItem action={item} active={active} />
                )
            }
        />
    );
}

const ResultItem = forwardRef(({ action, active }, ref) => {

    return (
        <Box
            ref={ref}
            px={4}
            py={3}
            bg="secondary"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            cursor="pointer"
            color="title.100"
            _hover={{
                bg: "primary"
            }}
            backdropFilter="saturate(100%) blur(25px)"
        >
            <Flex gap={3} alignItems="center">
                <Box color="title.100">
                    {action.icon && action.icon}
                </Box>
                <Text fontSize="sm" fontWeight="medium">
                    {action.name}
                </Text>
            </Flex>
            {action.shortcut?.length ? (
                <Flex gap={1}>
                    {action.shortcut.map(shortcut => (
                        <Kbd key={shortcut} fontSize="xs">
                            {shortcut}
                        </Kbd>
                    ))}
                </Flex>
            ) : null}
        </Box>
    );
});

ResultItem.displayName = 'ResultItem';

const GroupName = ({ children }) => {
    const textColor = useColorModeValue('gray.600', 'gray.400');

    return (
        <Flex
            px={5}
            pt={5}
            fontSize="xs"
            fontWeight="light"
            textTransform="uppercase"
            letterSpacing="wider"
            color={textColor}
            backdropFilter="saturate(100%) blur(25px)"
            bg="secondary"
            w={"100%"}
        >
            {children}
        </Flex>
    );
};

const Search = ({ placeholder }) => {


    return (
        <Flex alignItems="center" w={"100%"} h={"100%"} px={4} py={3} borderBottom="1px solid" borderColor={useColorModeValue('gray.200', 'gray.800')} backdropFilter="saturate(100%) blur(25px)">
            <Box color="title.100" mr={3}>
                <FiSearch size={16} />
            </Box>
            <Box
                as={KBarSearch}
                placeholder={placeholder}
                fontSize="md"
                w="full"
                outline="none"
                border="none"
                bg="transparent"
                color="title.100"

                _placeholder={{
                    color: useColorModeValue('gray.400', 'gray.500')
                }}
                _focus={{
                    outline: 'none',
                    boxShadow: 'none'
                }}
            />
        </Flex>
    );
};