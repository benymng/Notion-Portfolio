import styled from "@emotion/styled"
import React from "react"
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
  AiFillFilePdf,
} from "react-icons/ai"
import { CONFIG } from "site.config"
import { Emoji } from "src/components/Emoji"

const ResumeButton: React.FC = () => {
  return (
    <>
      <StyledWrapper>
          <a
            href={`https://benjamin-ng-resume.tiiny.site/`} // TODO: add this to environment variable
            rel="noreferrer"
            target="_blank"
          >
            <AiFillFilePdf className="icon" />
            <div className="name">Resume</div>
          </a>
      </StyledWrapper>
    </>
  )
}

export default ResumeButton

const StyledTitle = styled.div`
  padding: 0.25rem;
  margin-bottom: 0.75rem;
`
const StyledWrapper = styled.div`
  display: flex;
  padding: 0.25rem;
  flex-direction: column;
  border-radius: 1rem;
  background-color: ${({ theme }) =>
    theme.scheme === "light" ? "white" : theme.colors.gray4};
  a {
    display: flex;
    padding: 0.75rem;
    gap: 0.75rem;
    align-items: center;
    border-radius: 1rem;
    color: ${({ theme }) => theme.colors.gray11};
    cursor: pointer;

    :hover {
      color: ${({ theme }) => theme.colors.gray12};
      background-color: ${({ theme }) => theme.colors.gray5};
    }
    .icon {
      font-size: 1.5rem;
      line-height: 2rem;
    }
    .name {
      font-size: 0.875rem;
      line-height: 1.25rem;
    }
  }
`
