import useDropdown from "src/hooks/useDropdown"
import { useRouter } from "next/router"
import React from "react"
import { MdExpandMore } from "react-icons/md"
import styled from "@emotion/styled"
import { useTagsQuery } from "src/hooks/useTagsQuery"

type Props = {}

const TagSelect: React.FC<Props> = () => {
  const router = useRouter()
  const data = useTagsQuery()
  data["All"] = 0
  const [dropdownRef, opened, handleOpen] = useDropdown()

  const currentCategory = `${router.query.tag || ``}` || "All"

  const handleOptionClick = (tag: string) => {
    if (tag == "All") {
      router.push({
        query: {
          ...router.query,
          tag: undefined,
        },
      })
      return
    }

    router.push({
      query: {
        ...router.query,
        tag,
      },
    })
  }
  return (
    <StyledWrapper>
      <div ref={dropdownRef} className="wrapper" onClick={handleOpen}>
        {currentCategory} <MdExpandMore />
      </div>
      {opened && (
        <div className="content">
          {Object.keys(data).map((key, idx) => (
            <div
              className="item"
              key={idx}
              onClick={() => handleOptionClick(key)}
            >
              {data[key] > 0 ? `${key} (${data[key]})` : key}
            </div>
          ))}
        </div>
      )}
    </StyledWrapper>
  )
}

export default TagSelect

const StyledWrapper = styled.div`
  position: relative;
  > .wrapper {
    display: flex;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    gap: 0.25rem;
    align-items: center;
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 700;
    cursor: pointer;
  }
  > .content {
    position: absolute;
    z-index: 40;
    padding: 0.25rem;
    border-radius: 0.75rem;
    background-color: ${({ theme }) => theme.colors.gray2};
    color: ${({ theme }) => theme.colors.gray10};
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
      0 2px 4px -1px rgba(0, 0, 0, 0.06);
    > .item {
      padding: 0.25rem;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      border-radius: 0.75rem;
      font-size: 0.875rem;
      line-height: 1.25rem;
      white-space: nowrap;
      cursor: pointer;

      :hover {
        background-color: ${({ theme }) => theme.colors.gray4};
      }
    }
  }
`
