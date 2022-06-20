import { Routes, Route } from "react-router-dom"
import { Image } from "@chakra-ui/react";
import "dayjs/locale/es"
import logo from "./assets/logo.png";

import { LaunchList } from "./components/LaunchList";
import {LaunchDetail } from "./components/LaunchDetails";

export function App() {

  return (
    <>
    <Image src={logo} width={300} m={4} />
    <Routes>
      <Route path="/" element={<LaunchList />} />
      <Route path="launch/:launchId" element={<LaunchDetail />} />
    </Routes>    
    </>
  );  
}
