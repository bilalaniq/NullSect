// chakra-ui
import { Button, Flex, Heading, Image, Stack, Text, Box } from '@chakra-ui/react';

// icons and images
import { IconBrandGithub } from '@tabler/icons-react';

import face from '../../assets/bilal.jpg';
import NUllsectLogo from '../../assets/NUllsect.jpeg';
import { useTheme } from '../../contexts/ThemeContext';

import { keyframes } from '@emotion/react';

const scrollingTextKeyframes = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

function Preface({ showContent, toggleContent }: { showContent: boolean, toggleContent: () => void }) {
    const { isRetro } = useTheme();

    const handleClick = () => {
        if (!showContent) {
            toggleContent();
        }
    };

    return (
        <Stack
            direction={{ base: 'column', lg: 'row' }}
            bg="black"
            id="home"
            py={{ base: 6, md: 12 }}
            px={{ base: 4, md: 8 }}
            spacing={{ base: 8, lg: 16 }}
            align="center"
        >
            {/* Left Column: Text Content */}
            <Flex
                flex={1}
                align="flex-start"
                justify="flex-start"
            >
                <Stack spacing={{ base: 4, md: 6 }} maxW="xl">
                    {/* Heading */}
                    <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                        <Text
                            as="span"
                            fontFamily={isRetro ? "'Press Start 2P', monospace" : "inherit"}
                            color={isRetro ? "purple.200" : "white"}
                        >
                            {isRetro ? "Null Sect" : "Bilal Aniq"}
                        </Text>
                    </Heading>

                    {/* Subtext */}
                    {isRetro ? (
                        <Box
                            overflow="hidden"
                            width="100%"
                            border="2px solid"
                            borderColor="purple.400"
                            p={3}
                        >
                            <Text
                                fontSize={{ base: 'sm', lg: 'md' }}
                                color="purple.400"
                                fontFamily="'Press Start 2P', monospace"
                                whiteSpace="nowrap"
                                animation={`${scrollingTextKeyframes} 7s linear infinite`}
                                display="inline-block"
                            >
                                SYSTEM ONLINE: Welcome to a mediocre website
                            </Text>
                        </Box>
                    ) : (
                        <Stack spacing={3}>
                            <Text fontSize={{ base: 'md', lg: 'lg' }} color="gray.400">
                                I am a passionate Cybersecurity Enthusiast pursuing a Bachelor of Science in Cybersecurity at Air University, Islamabad, graduating in 2027. I am focused on protecting against cyber threats and contributing to a safer digital world.
                            </Text>
                            <Text fontSize={{ base: 'md', lg: 'lg' }} color="gray.400">
                                Eligible for security clearance. Proud Pakistani citizen.
                            </Text>
                        </Stack>
                    )}

                    {/* Buttons */}
                    <Stack direction={{ base: 'column', md: 'row' }} spacing={4} pt={4}>
                        {!isRetro && (
                            <>
                                <Button
                                    rounded="full"
                                    as="a"
                                    href={showContent ? "#aboutme" : undefined}
                                    onClick={handleClick}
                                    _hover={{ color: 'yellow', transform: 'scale(1.02)' }}
                                    _active={{ transform: 'scale(0.98)' }}
                                >
                                    More about me
                                </Button>
                                <Button
                                    as="a"
                                    href="/portfolio"
                                    rounded="full"
                                    _hover={{ color: 'yellow', transform: 'scale(1.02)' }}
                                    _active={{ transform: 'scale(0.98)' }}
                                >
                                    My Portfolio
                                </Button>
                            </>
                        )}
                        <Button
                            as="a"
                            href="/blog"
                            rounded={isRetro ? "none" : "full"}
                            border={isRetro ? "2px solid" : "none"}
                            borderColor={isRetro ? "purple.400" : "transparent"}
                            bg={isRetro ? "black" : undefined}
                            color={isRetro ? "purple.200" : undefined}
                            fontFamily={isRetro ? "'Press Start 2P', monospace" : "inherit"}
                            _hover={{ color: isRetro ? 'purple.400' : 'yellow', transform: 'scale(1.02)' }}
                            _active={{ transform: 'scale(0.98)' }}
                        >
                            My Blog
                        </Button>
                        <Button
                            as="a"
                            href="https://github.com/bilalaniq"
                            leftIcon={<IconBrandGithub />}
                            rounded={isRetro ? "none" : "full"}
                            border={isRetro ? "2px solid" : "none"}
                            borderColor={isRetro ? "purple.400" : "transparent"}
                            bg={isRetro ? "black" : undefined}
                            color={isRetro ? "purple.200" : undefined}
                            fontFamily={isRetro ? "'Press Start 2P', monospace" : "inherit"}
                            _hover={{ color: isRetro ? 'purple.400' : 'yellow', transform: 'scale(1.02)' }}
                            _active={{ transform: 'scale(0.98)' }}
                        >
                            My Github
                        </Button>
                    </Stack>
                </Stack>
            </Flex>

            {/* Right Column: Images */}
            <Flex flex={1} direction="column" align="center" justify="center" spacing={6}>
                {!isRetro ? (
                    <Stack spacing={4} align="center">
                        <Image
                            boxSize={180}
                            alt="Bilal aniq's Profile Picture"
                            objectFit="cover"
                            src={face}
                            borderRadius="full"
                        />
                        <Box
                            border="2px solid"
                            borderColor="gray.600"
                            bg="gray.900"
                            p={2}
                            borderRadius="md"
                            width={{ base: "90%", md: "300px" }}
                        >
                            <Image
                                src="https://github-readme-stats.vercel.app/api/top-langs/?username=bilalaniq&theme=radical&title_color=FF6347"
                                alt="Bilal's WakaTime Graph"
                                width="100%"
                                height="auto"
                            />
                        </Box>
                    </Stack>
                ) : (
                    <Stack spacing={4} align="flex-start">
                        <Image
                            boxSize={150}
                            alt="NUll sect Logo"
                            objectFit="cover"
                            src={NUllsectLogo}
                            border="2px solid"
                            borderColor="purple.400"
                        />
                        <Box
                            border="2px solid"
                            borderColor="purple.400"
                            bg="black"
                            p={2}
                            width={{ base: "90%", md: "300px" }}
                        >
                            <Image
                                src="https://github-readme-stats.vercel.app/api/top-langs/?username=bilalaniq&theme=radical&title_color=FF6347"
                                alt="NUll sect's WakaTime Graph"
                                width="100%"
                                height="auto"
                            />
                        </Box>
                    </Stack>
                )}
            </Flex>
        </Stack>
    );
}

export default Preface;
