/*
 * Copyright (c) 2019 Ali I. Avci
 */
import React, { Component } from 'react';

import { Footer } from "r-t-components";

import styled from 'styled-components';

import { FaLinkedin, FaStackOverflow, FaGithub } from 'react-icons/fa';

const HyperLink = styled.a`
  padding: 1em;
`;

type MyProps = {};
type MyState = { value: string };
class FooterSection extends Component<MyProps, MyState> {
  render() {
    return (
      <Footer backgroundColor="#f6f6f6">

        <div style={{margin: 'auto'}}>
          <HyperLink href = "https://www.linkedin.com/in/aiavci">
            <FaLinkedin size={36}/>
          </HyperLink>
          <HyperLink href = "https://stackoverflow.com/users/3404519/aliavci">
            <FaStackOverflow size={36}/>
          </HyperLink>
          <HyperLink href = "https://github.com/aiavci">
            <FaGithub size={36}/>
          </HyperLink>
        </div>
      </Footer>
    );
  }
}

export default FooterSection;