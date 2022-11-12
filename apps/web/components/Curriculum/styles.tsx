"use client";

import React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

const flutuate = keyframes`
  0% {
    transform: rotateX(51deg) rotateZ(43deg);
    box-shadow: 1px 1px 0 1px #f9f9fb, -1px 0 28px 0 rgba(34, 33, 81, 0.01),
      28px 28px 28px 0 rgba(34, 33, 81, 0.25);
  }
  100% {
    transform: translate3d(0px, -16px, 0px) rotateX(51deg) rotateZ(43deg);
    box-shadow: 1px 1px 0 1px #f9f9fb, -1px 0 28px 0 rgba(34, 33, 81, 0.01),
      54px 54px 28px -10px rgba(34, 33, 81, 0.15);
  }
`;

export const PDFWrapper = styled.a`
  display: inline-flex;
  background-color: #0d0d0d;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  animation: ${flutuate} infinite alternate 2s ease-in-out;
  transform: rotateX(51deg) rotateZ(43deg);
  transform-style: preserve-3d;
  border-radius: 32px;
`;

export const LoadingWrapper = styled.div`
  display: flex;
  background-color: #0d0d0d;
  align-items: center;
  justify-content: center;
  border-radius: 32px;
`;

const ldsRoller = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadingIconWrapper = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  & > div {
    animation: ${ldsRoller} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 40px 40px;

    &::after {
      content: " ";
      display: block;
      position: absolute;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #fff;
      margin: -4px 0 0 -4px;
    }

    &:nth-child(1) {
      animation-delay: -0.036s;

      &::after {
        top: 63px;
        left: 63px;
      }
    }

    &:nth-child(2) {
      animation-delay: -0.072s;

      &::after {
        top: 68px;
        left: 56px;
      }
    }

    &:nth-child(3) {
      animation-delay: -0.108s;

      &::after {
        top: 71px;
        left: 48px;
      }
    }

    &:nth-child(4) {
      animation-delay: -0.144s;

      &::after {
        top: 72px;
        left: 40px;
      }
    }

    &:nth-child(5) {
      animation-delay: -0.18s;

      &::after {
        top: 71px;
        left: 32px;
      }
    }

    &:nth-child(6) {
      animation-delay: -0.216s;

      &::after {
        top: 68px;
        left: 24px;
      }
    }

    &:nth-child(7) {
      animation-delay: -0.252s;

      &::after {
        top: 63px;
        left: 17px;
      }
    }

    &:nth-child(8) {
      animation-delay: -0.288s;

      &::after {
        top: 56px;
        left: 12px;
      }
    }
  }
`;

export const Loading = () => {
  return (
    <LoadingIconWrapper>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </LoadingIconWrapper>
  );
};
