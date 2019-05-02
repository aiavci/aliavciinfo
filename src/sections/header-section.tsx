/*
 * Copyright (c) 2019 Ali I. Avci
 */
import React, { Component } from 'react';

import { Header } from "r-t-components";

type MyProps = {};
type MyState = { value: string };
class HeaderSection extends Component<MyProps, MyState> {
  render() {
    return (
      <Header>
      </Header>
    );
  }
}

export default HeaderSection;