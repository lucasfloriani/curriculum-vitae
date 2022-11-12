"use client";

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import styled from "@emotion/styled";
import useTranslations from "../../hooks/useTranslations";
import { LanguageOptionsKeys, Languages } from "../../i18n/types";
import { useClickAway } from "react-use";
import { css } from "@emotion/react";

const CheckBox = styled.div<{ checked?: boolean }>`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 3px solid #14a915;
  border-radius: 50%;
  position: relative;

  ${({ checked }) =>
    checked &&
    css`
      &::after {
        content: "";
        height: 10px;
        width: 10px;
        background-color: #14a915;
        border-radius: 50%;
      }
    `}
`;

const Wrapper = styled.section`
  position: relative;
`;

const Button = styled.button<{ popupOpen: boolean }>`
  background-color: #fff;
  width: 300px;
  padding: 12px 16px;
  cursor: pointer;
  font-family: var(--font-league-spartan);
  font-size: 14px;
  border: none;
  border-radius: ${({ popupOpen }) => (popupOpen ? "6px 6px 0 0" : "6px")};
  text-align: left;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Popup = styled.ul<{ isOpen: boolean }>`
  background-color: rgba(255, 255, 255, 0.8);
  list-style: none;
  padding: 0;
  margin: 0;
  display: ${({ isOpen }) => (isOpen ? "grid" : "none")};
  gap: 6px;
  position: absolute;
  top: 100%;
  width: 300px;
  border-radius: 0 0 6px 6px;
  z-index: 10;
`;

const LanguageOption = styled.li`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  font-family: var(--font-league-spartan);
  font-size: 14px;
  cursor: pointer;
  align-items: center;
  padding: 12px 16px;
  width: 100%;
`;

const defaultLanguage: Languages = "en-US";

type RemoveSingleLanguages<T> = T extends `${string}-${string}` ? T : never;
const options: RemoveSingleLanguages<Languages>[] = [defaultLanguage, "pt-BR"];

const SelectLanguage = () => {
  const router = useRouter();
  const { currentLanguage, loading, translation } = useTranslations();
  const [popupStatus, setPopupStatus] = useState(false);
  const selectLanguageRef = useRef<HTMLElement>(null);
  useClickAway(selectLanguageRef, () => setPopupStatus(false));
  const [selectedlanguage, setSelectedLanguage] =
    useState<Languages>(currentLanguage);

  useEffect(() => {
    if (loading) return;
    setSelectedLanguage(currentLanguage);
  }, [currentLanguage, loading]);

  const getReadableLanguage = useCallback(
    (language: Languages) => {
      const options: Record<Languages, LanguageOptionsKeys> = {
        "en-US": "language:english",
        en: "language:english",
        "pt-BR": "language:brazilian-portuguese",
        pt: "language:brazilian-portuguese",
      };
      return translation[options[language]];
    },
    [translation]
  );

  const buttonText = useMemo<string>(
    () => getReadableLanguage(selectedlanguage),
    [selectedlanguage, getReadableLanguage]
  );

  const onSelect = (option: Languages): void => {
    setSelectedLanguage(option);
    setPopupStatus(false);
    router.push(`/${option.toLowerCase()}`);
  };

  if (loading) {
    // TODO: Add some animation
    return null;
  }

  return (
    <Wrapper ref={selectLanguageRef}>
      <Button
        popupOpen={popupStatus}
        onClick={() => setPopupStatus((oldStatus) => !oldStatus)}
      >
        <span>{buttonText}</span>
        <CheckBox checked />
      </Button>
      <Popup isOpen={popupStatus}>
        {options
          .filter((option) =>
            !selectedlanguage.includes("-")
              ? option.split("-")[0] !== selectedlanguage
              : option !== selectedlanguage
          )
          .map((option) => (
            <LanguageOption key={option} onClick={() => onSelect(option)}>
              <span>{getReadableLanguage(option)}</span>
              <CheckBox />
            </LanguageOption>
          ))}
      </Popup>
    </Wrapper>
  );
};

export default SelectLanguage;
