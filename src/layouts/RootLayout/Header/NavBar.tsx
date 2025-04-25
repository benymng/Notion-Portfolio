import styled from "@emotion/styled"
import Link from "next/link"
import { AiFillFilePdf, AiFillSmile } from "react-icons/ai"

const NavBar: React.FC = () => {
  const links = [
    {
      id: 1,
      name: "About",
      to: "/about",
      external: false,
      icon: <AiFillSmile className="icon" />,
    },
    {
      id: 2,
      name: "Resume",
      to: process.env.NEXT_PUBLIC_RESUME_LINK,
      external: true,
      icon: <AiFillFilePdf className="icon" />,
    },
  ]
  return (
    <StyledWrapper className="">
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            {link.icon}
            {link.external ? (
              <a
                href={link.to}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault()
                  const win = window.open(link.to, "_blank")
                  if (win) win.focus()
                }}
              >
                {link.name}
              </a>
            ) : (
              <Link href={link.to}>{link.name}</Link>
            )}
          </li>
        ))}
      </ul>
    </StyledWrapper>
  )
}

export default NavBar

const StyledWrapper = styled.div`
  flex-direction: column;
  border-radius: 1rem;
  ul {
    display: flex;
    flex-direction: row;
    li {
      display: block;
      margin-left: 1rem;
      margin-top: 0.5rem;
      color: ${({ theme }) => theme.colors.gray11};
      background-color: ${({ theme }) =>
        theme.scheme === "light" ? "white" : theme.colors.gray4};
      padding: 0.5rem;
      border-radius: 1rem;
      :hover {
        color: ${({ theme }) => theme.colors.gray12};
        background-color: ${({ theme }) => theme.colors.gray5};
      }
      .icon {
        font-size: 1rem;
        line-height: 2rem;
        margin-right: 0.5rem;
      }
    }
  }
`