import * as React from "react"

// styles
const badgeStyle = {
    color: "#fff",
    backgroundColor: "#088413",
    border: "1px solid #088413",
    fontSize: 11,
    fontWeight: "bold",
    letterSpacing: 1,
    borderRadius: 4,
    padding: "4px 6px",
    display: "inline-block",
    position: "relative",
    top: -2,
    marginLeft: 10,
    lineHeight: 1,
  }

// data
const linkedIn = {
    url: "https://www.linkedin.com/in/robinwoehler/",
  }

// markup
const IndexPage = () => {
    return (
      <main>
        <title>Coming Soon ...</title>
        <h1>There is not much to see here – just visit my <a href={linkedIn.url}>LinkedIn.</a></h1>
      </main>
    )
  }
  
  export default IndexPage