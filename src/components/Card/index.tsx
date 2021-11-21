import React from 'react'
import { Card, Div, Text, CardWithPhoto, Title, NameBox, PhotoDiv } from './styles/styles';
import profile from '../../images/profile.jpg';
import {AiOutlineGithub} from 'react-icons/ai';
import {IoLogoLinkedin, IoMdMail} from 'react-icons/io'

export default function CardAboutMe() {
    return (
        <Div>
            <Card>
                <Title>Hello, everybody!</Title>
                <div>
                    <Text>
                    My name is Guilherme Bersi, i have 21 years old and i have 1 year experienced Junior Software Developer from Brazil.<br/>
                    </Text>
                    <Text>
                    My Focus is Front-End, but i also i study some backend technologies to become a FullStack Developer.<br/>
                    </Text>
                    <Text>
                    I'm Front-End Developer with experience in React ( with Styled-Components, ContextAPI and some Frameworks), somes CMS like a VTEX, Betalabs and others.<br/>
                    </Text>
                    <Text>
                    Also have knowledge in Vue.js, Next.js, Java Spring Boot, Flutter, React Native and Node.js
                    </Text>
                </div>
            </Card>
            <CardWithPhoto>
                <PhotoDiv>
                    <img src={profile} alt="Foto de perfil" />
                </PhotoDiv>
                <NameBox>
                    <Text>
                    devbersi
                    </Text>
                </NameBox>
                <Title>Junior Software Developer</Title>
                <div>
                    <a href="https://github.com/devbersi"><AiOutlineGithub size={40} color="black" /></a>
                    <a href="https://www.linkedin.com/in/guilherme-bersi-7696861b3/"><IoLogoLinkedin size={40} color="black" /></a>
                    <a href="mailto:guibersi.13@outlook.com"><IoMdMail size={40} color="black" /></a>
                </div>
            </CardWithPhoto>
        </Div>
    )
}
