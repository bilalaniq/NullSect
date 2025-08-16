import { useEffect } from 'react';
import { Box } from "@chakra-ui/react";
import NamedDivider from '../components/NamedDivider';
import Preface from '../sections/home/Preface';
import { useTheme } from '../contexts/ThemeContext';
import HomeIntroduction from '../sections/home/HomeIntroduction';
import HomeProjects from '../sections/home/HomeProjects';

function HomePage({ showContent, toggleContent, contentLoaded }) {
    const { isRetro } = useTheme();

    useEffect(() => {
        if (!showContent) {
            const timer = setTimeout(() => {
                toggleContent();
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [showContent, toggleContent]);

    return (
        <Box
            bg="black"
            color="white"
            minHeight="83vh"
            className={isRetro ? 'retro-mode' : ''}
        >
            <Preface
                showContent={showContent}
                toggleContent={toggleContent}
            />
            <NamedDivider name="Introduction" id="introduction" />
            <HomeIntroduction />
            {isRetro ? (
                <>
                    <NamedDivider
                        name="[Projects]"
                        id="projects"
                    />
                    <HomeProjects />
                </>
            ) : (
                <>
                    <NamedDivider
                        name={showContent ? "Projects" : "Loading..."}
                        id="projects"
                    />
                    {contentLoaded && showContent && (
                        <>
                            {/* <HomeProjects /> */}
                            <NamedDivider name="Skills" id="skills" />
                            {/* <Skills /> */}
                            <NamedDivider name="About Me" id="aboutme" />
                            {/* <AboutMe /> */}
                            <NamedDivider name="Contact" id="contact" />
                            {/* <Contact /> */}
                        </>
                    )}
                </>
            )}
        </Box>
    );
}

export default HomePage;
