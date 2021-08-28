import React, { useState, createContext, ReactNode } from "react";

type User = {
  login: string;
  name: string;
  email: string;
  location: string;
  company: string;
  bio: string;
  avatar_url: string;
  followers_url: string;
  following_url: string;
  organizations_url: string;
  starred_url: string;
  following: number;
  followers: number;
  public_repos: number;
  public_gists: number;
};

type PropsUserContext = {
  userData: User;
  setUserData: React.Dispatch<React.SetStateAction<User>>;
};

type ContextProviderProps = {
  children: ReactNode;
};

const DEFAULT_VALUE = {
  userData: {
    login: "",
    name: "",
    email: "",
    location: "",
    company: "",
    bio: "",
    avatar_url: "",
    followers_url: "",
    following_url: "",
    organizations_url: "",
    starred_url: "",
    following: 0,
    followers: 0,
    public_repos: 0,
    public_gists: 0,
  },
  setUserData: () => {},
};

export const context = createContext<PropsUserContext>(DEFAULT_VALUE);

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [userData, setUserData] = useState(DEFAULT_VALUE.userData);
  return (
    <context.Provider value={{ userData, setUserData }}>
      {children}
    </context.Provider>
  );
};
