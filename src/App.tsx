import React, {useEffect, useState} from "react";
import {
    Avatar,
    Box,
    Card,
    Container,
    Flex,
    Grid,
    Heading,
    IconButton,
    Link,
    Section,
    Text,
    Theme
} from "@radix-ui/themes";
import {
    SiGithub,
    SiKotlin,
    SiNodedotjs,
    SiReact,
    SiShell,
    SiTypescript,
    SiUblockorigin,
    SiVuedotjs,
    SiWxt
} from "@icons-pack/react-simple-icons";
import {ArrowRight, Mail, Moon, Sun} from "lucide-react";

import avatarUrl from "./assets/avatar.avif";

type Appearance = "light" | "dark";

const PROJECTS = [
    {
        name: "DCRefresher-Reborn",
        desc: "디시인사이드 개선 확장 프로그램",
        url: "https://github.com/green1052/DCRefresher-Reborn",
        stars: 47,
        icon: [SiTypescript, SiWxt, SiVuedotjs]
    },
    {
        name: "maxmind-geoip2",
        desc: "GeoIP2 데이터베이스 다운로드 도구",
        url: "https://github.com/green1052/maxmind-geoip2",
        stars: 10,
        icon: [SiShell]
    },
    {
        name: "betternovelpia",
        desc: "노벨피아 개선 유저스크립트",
        url: "https://github.com/green1052/betternovelpia",
        stars: 8,
        icon: [SiTypescript, SiReact]
    },
    {
        name: "no-coupang-partners",
        desc: "쿠팡 파트너스 링크만 있는 사이트 숨김",
        url: "https://github.com/green1052/no-coupang-partners",
        stars: 7,
        icon: [SiUblockorigin]
    },
    {
        name: "DCAdblocker",
        desc: "디시인사이드 광고 차단",
        url: "https://github.com/green1052/DCAdblocker",
        stars: 7,
        icon: [SiKotlin]
    },
    {
        name: "arcalive.js",
        desc: "arca.live 공앱 API",
        url: "https://github.com/green1052/arcalive.js",
        stars: 2,
        icon: [SiNodedotjs, SiTypescript]
    },
    {
        name: "dcinside.js",
        desc: "디시인사이드 비공식 API 클라이언트",
        url: "https://github.com/green1052/dcinside.js",
        stars: 1,
        icon: [SiNodedotjs, SiTypescript]
    }
] as const;

type IconProps = { size?: number; color?: string };

function LangIcons({icons, size = 12}: { icons: readonly React.FC<IconProps>[]; size?: number }) {
    return (
        <Flex align="center" gap="1">
            {icons.map((Icon, i) => <Icon key={i} size={size}/>)}
        </Flex>
    );
}

function App() {
    const [appearance, setAppearance] = useState<Appearance>(() => {
        if (typeof localStorage !== "undefined") {
            const stored = localStorage.getItem("theme");
            if (stored === "light" || stored === "dark") return stored;
        }
        return "dark";
    });

    useEffect(() => {
        localStorage.setItem("theme", appearance);
    }, [appearance]);

    const toggleAppearance = () => {
        setAppearance(prev => prev === "dark" ? "light" : "dark");
    };

    return (
        <Theme appearance={appearance} accentColor="iris" grayColor="slate" radius="medium">
            <header>
                <Container size="3">
                    <Flex align="center" justify="between" py="5">
                        <Flex align="center" gap="3">
                            <Avatar src={avatarUrl} fallback="G" size="3" radius="full"/>
                            <Heading size="6">green1052</Heading>
                        </Flex>
                        <IconButton variant="ghost" highContrast onClick={toggleAppearance}
                                    aria-label="테마 전환">
                            {appearance === "dark" ? <Sun size={16}/> : <Moon size={16}/>}
                        </IconButton>
                    </Flex>
                </Container>
            </header>

            <Section size="3">
                <Container size="3">
                    <Flex direction="column" align="center" gap="4">
                        <Heading size="9">green1052</Heading>
                        <Heading size="7" color="gray">
                            작은 발걸음을
                            <br/>
                            큰 발걸음으로
                        </Heading>
                        <Text size="5" color="gray" align="center" style={{maxWidth: "32rem"}}>
                            조금씩, 꾸준히.
                        </Text>
                    </Flex>
                </Container>
            </Section>

            <Section size="3">
                <Container size="3">
                    <Flex direction="column" gap="4" px="6">
                        <Heading size="6">프로젝트</Heading>
                        <Grid columns={{initial: "1", sm: "2", md: "3"}} gap="4" width="auto">
                            {PROJECTS.map(project => (
                                <Card asChild key={project.name} size="2">
                                    <a href={project.url} target="_blank" rel="noopener noreferrer"
                                       style={{textDecoration: "none", color: "inherit"}}>
                                        <Flex direction="column" gap="2">
                                            <Flex justify="between" align="center">
                                                <Heading size="4">{project.name}</Heading>
                                                <Text size="1" color="gray">★ {project.stars}</Text>
                                            </Flex>
                                            <Text size="2" color="gray">{project.desc}</Text>
                                            <LangIcons icons={project.icon}/>
                                        </Flex>
                                    </a>
                                </Card>
                            ))}
                        </Grid>
                        <Card asChild size="2">
                            <a href="https://github.com/green1052" target="_blank" rel="noopener noreferrer"
                               style={{textDecoration: "none", color: "inherit"}}>
                                <Flex align="center" justify="center" gap="2" py="2">
                                    <SiGithub size={16}/>
                                    <Text size="3" weight="bold">자세한 내용은 GitHub를 참조해주세요</Text>
                                    <ArrowRight size={16}/>
                                </Flex>
                            </a>
                        </Card>
                    </Flex>
                </Container>
            </Section>

            <Container size="3">
                <Flex direction="column" gap="3" px="6" mt="2">
                    <Heading size="5">연락처</Heading>
                    <Flex align="center" gap="2">
                        <Mail size={16}/>
                        <Link href="mailto:green1052@pm.me" size="4">green1052@pm.me</Link>
                    </Flex>
                </Flex>
            </Container>

            <Box style={{height: "4rem"}}/>
        </Theme>
    );
}

export default App;
