

// logos

import ns_logo from '../../assets/NUllsect.jpeg';

// custom components
import Project from '../../components/Project';
import { useTheme } from '../../contexts/ThemeContext';
import { SimpleGrid } from '@chakra-ui/react';

function Projects() {
    const { isRetro } = useTheme();

    return (
        <>
            {isRetro ? (
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6} px={4} mb={10}>

                    <Project
                        title="bilalaniq.com"
                        subtitle="My personal website (the one you're on right now)"
                        imageUrl={ns_logo}
                        imageAlt="Bilal aniq Logo"
                        linkUrl="bilalaniq.com"
                        githubUrl="https://github.com/bilalaniq/bilalaniq.com"
                        tags={["Open Source", "React", "TypeScript", "Vite", "Python", "FastAPI", "Docker", "sqlite"]}
                    />
                    {/* <Project
                        title="bilalaniq.com"
                        subtitle="My personal website (the one you're on right now)"
                        imageUrl={ns_logo}
                        imageAlt="Bilal aniq Logo"
                        linkUrl="bilalaniq.com"
                        githubUrl="https://github.com/bilalaniq/bilalaniq.com"
                        tags={["Open Source", "React", "TypeScript", "Vite", "Python", "FastAPI", "Docker", "sqlite"]}
                        reverse={true}
                    /> */}

                </SimpleGrid>
            ) : (
                <>

                    <Project
                        title="bilalaniq.com"
                        subtitle="My personal website (the one you're on right now)"
                        imageUrl={ns_logo}
                        imageAlt="Bilal aniq Logo"
                        linkUrl="bilalaniq.com"
                        githubUrl="https://github.com/bilalaniq/bilalaniq.com"

                        tags={["Open Source", "React", "TypeScript", "Vite", "Python", "FastAPI", "Docker", "sqlite"]}
                    />
                    {/* <Project
                        title="bilalaniq.com"
                        subtitle="My personal website (the one you're on right now)"
                        imageUrl={ns_logo}
                        imageAlt="Bilal aniq Logo"
                        linkUrl="bilalaniq.com"
                        githubUrl="https://github.com/bilalaniq/bilalaniq.com"

                        tags={["Open Source", "React", "TypeScript", "Vite", "Python", "FastAPI", "Docker", "sqlite"]}
                        reverse={true}
                    /> */}


                </>
            )}
        </>
    );
}

export default Projects;

