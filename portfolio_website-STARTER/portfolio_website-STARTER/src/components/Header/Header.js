import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillMail } from 'react-icons/ai';
import { DiCssdeck, DiDojo, DiGithub } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
<Container>
  <Div1>
    <Link href="/">
      <a style={{ display: "flex", alignItems: "center",  color: "white" }}>
        <DiGithub size="3rem" /><span> Sarvess Veeriyah</span>
      </a>
    </Link>
  </Div1>

  <Div2>

    <li>
      <Link href="#aboutme">
        <NavLink>About Me</NavLink>
      </Link>
    </li>

    <li>
      <Link href="#education">
        <NavLink>Education</NavLink>
      </Link>
    </li>

    <li>
      <Link href="#experience">
        <NavLink>Experience</NavLink>
      </Link>
    </li>

    <li>
      <Link href="#projects">
        <NavLink>Projects</NavLink>
      </Link>
    </li>

  </Div2>
   
  <Div3>

    <SocialIcons href="https://www.linkedin.com/in/sarvess-veeriyah-839345192/">
      <AiFillLinkedin size="3rem"/>
    </SocialIcons>

    <SocialIcons href="https://github.com/sarvessveeriyah2312">
      <AiFillGithub size="3rem"/>
    </SocialIcons>

    <SocialIcons href="https://www.linkedin.com/in/sarvess-veeriyah-839345192/">
      <AiFillInstagram size="3rem"/>
    </SocialIcons>

    <SocialIcons href="mailto:sarvess.jr@outlook.com">
      <AiFillMail size="3rem"/>
    </SocialIcons>

  </Div3>

</Container>
);

export default Header;
