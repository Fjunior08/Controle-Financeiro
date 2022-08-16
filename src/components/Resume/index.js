import React from 'react';
import ResumeItem from '../ResumeItem';
import * as C from "./styles";

import {  FaRegArrowAltCircleUp,  FaRegArrowAltCircleDown,  FaDollarSign, } from 'react-icons/fa';

const Resume = () => { 
  return (
      <C.Container>
        <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} />
        <ResumeItem title="Saidas"   Icon={FaRegArrowAltCircleDown} />
        <ResumeItem title="Total"    Icon={FaDollarSign} />
      </C.Container>

    );
};

export default Resume;