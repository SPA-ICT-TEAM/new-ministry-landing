const ButtonSvg = (white) => (
  <>
    <svg
      className="absolute top-0 left-0"
      width="21"
      height="44"
      viewBox="0 0 21 44"
    >
      <rect
        width="21"
        height="44"
        fill={white ? "white" : "none"}
        stroke={white ? "white" : "url(#btn-left)"} // Gradient or color
        strokeWidth="2"
      />
    </svg>

    <svg
      className="absolute top-0 left-[1.3125rem] w-[calc(100%-2.625rem)]"
      height="44"
      viewBox="0 0 100 44"
      preserveAspectRatio="none"
      fill={white ? "white" : "none"}
    >
      <rect
        width="100"
        height="44"
        fill={white ? "white" : "url(#btn-top)"}
      />
    </svg>

    <svg
      className="absolute top-0 right-0"
      width="21"
      height="44"
      viewBox="0 0 21 44"
    >
      <rect
        width="21"
        height="44"
        fill={white ? "white" : "none"}
        stroke={white ? "white" : "url(#btn-right)"} // Gradient or color
        strokeWidth="2"
      />
    </svg>
  </>
);

export default ButtonSvg;
