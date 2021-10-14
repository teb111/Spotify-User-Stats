import { useState, useEffect } from "react";
import Nav from "../components/Nav";
import NavBottom from "../components/NavBottom";
import { ProfileBody } from "../components/styles/ProfileScreen.styled";
import TopArtists from "../components/TopArtists";

export default function TopArtistsScreen() {
  return (
    <>
      <ProfileBody>
        <Nav />
        <TopArtists />
      </ProfileBody>
      <NavBottom />
    </>
  );
}
