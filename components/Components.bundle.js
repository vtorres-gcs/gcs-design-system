// Components bundle — 1 component(s) materialized from a .fig as one
// self-contained file: no imports/exports; every component is assigned to window below.
// Design tokens / typography still ship separately (fig-tokens.css / fig-typography.css).

// figma node: 1:6 Logo (6 variants)
const __venc_Logo = v => String(v).replace(/[%|=]/g, encodeURIComponent);
const __vkey_Logo = p => "type=" + __venc_Logo(p.type) + '|' + "style2=" + __venc_Logo(p.style2) + '|' + "iconOnly=" + __venc_Logo(p.iconOnly);
function Logo(_p = {}) {
  const props = {
    ..._p,
    type: _p.type ?? "blue",
    style2: _p.style2 ?? "primary",
    iconOnly: _p.iconOnly ?? false
  };
  const __body0 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 268.973,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(15,26,45)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16.007,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.007,
    height: 16.159,
    viewBox: "0 0 16.007 16.159",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16.007,
      height: 16.159
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.004 0 C 3.583 0 0 3.619 0 8.079 C 0 12.54 3.583 16.159 8.004 16.159 C 12.424 16.159 16.007 12.54 16.007 8.079 C 16.007 3.619 12.436 0 8.004 0 Z M 11.38 9.594 C 11.307 9.63 11.271 9.715 11.295 9.787 L 12.072 11.939 C 12.121 12.059 11.999 12.179 11.878 12.131 L 9.74 11.338 C 9.667 11.314 9.582 11.338 9.546 11.422 L 8.149 14.416 C 8.089 14.536 7.919 14.536 7.87 14.416 L 6.473 11.422 C 6.437 11.35 6.352 11.314 6.279 11.338 L 4.117 12.131 C 3.996 12.179 3.874 12.059 3.923 11.939 L 4.712 9.787 C 4.737 9.715 4.712 9.63 4.627 9.594 L 1.615 8.212 C 1.494 8.152 1.494 7.983 1.615 7.935 L 4.627 6.553 C 4.7 6.516 4.737 6.432 4.712 6.36 L 3.899 4.232 C 3.85 4.112 3.971 3.992 4.093 4.04 L 6.279 4.809 C 6.352 4.833 6.437 4.809 6.473 4.725 L 7.87 1.743 C 7.931 1.623 8.089 1.623 8.149 1.743 L 9.546 4.725 C 9.582 4.797 9.667 4.833 9.74 4.809 L 11.902 4.028 C 12.024 3.98 12.145 4.1 12.096 4.22 L 11.295 6.36 C 11.271 6.432 11.295 6.516 11.38 6.553 L 14.404 7.935 C 14.525 7.995 14.525 8.164 14.404 8.212 L 11.38 9.594 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 243.046,
      height: 11.241,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.922,
    height: 11.133,
    viewBox: "0 0 9.922 11.133",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0.06,
      width: 9.922,
      height: 11.133
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.368 2.886 C 7.651 2.2 6.583 1.827 5.647 1.827 C 3.352 1.827 1.967 3.559 1.967 5.735 C 1.967 7.478 2.988 9.282 5.647 9.282 C 6.485 9.282 7.226 9.101 8.064 8.428 L 8.064 6.553 L 5.332 6.553 L 5.332 4.761 L 9.922 4.761 L 9.922 9.222 C 8.866 10.412 7.542 11.133 5.66 11.133 C 1.64 11.133 0 8.512 0 5.735 C 0 2.753 1.882 0 5.66 0 C 7.093 0 8.538 0.541 9.631 1.623 L 8.38 2.898 L 8.368 2.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7.518,
    height: 10.604,
    viewBox: "0 0 7.518 10.604",
    fill: "none",
    style: {
      position: "absolute",
      left: 12.788,
      top: 0.361,
      width: 7.518,
      height: 10.604
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.016 0 L 2.016 8.753 L 7.518 8.753 L 7.518 10.604 L 0 10.604 L 0 0 L 2.016 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.992,
    height: 11.061,
    viewBox: "0 0 10.992 11.061",
    fill: "none",
    style: {
      position: "absolute",
      left: 22.165,
      top: 0.144,
      width: 10.992,
      height: 11.061
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.991 5.579 C 10.955 8.32 9.267 11.061 5.502 11.061 C 1.737 11.061 0 8.38 0 5.591 C 0 2.801 1.81 0 5.502 0 C 9.194 0 11.028 2.801 10.991 5.567 L 10.991 5.579 Z M 1.98 5.615 C 2.028 7.358 2.976 9.222 5.502 9.222 C 8.028 9.222 8.975 7.346 8.999 5.603 C 9.036 3.811 8.016 1.815 5.502 1.815 C 2.988 1.815 1.943 3.823 1.98 5.615 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.084,
    height: 10.580,
    viewBox: "0 0 9.084 10.580",
    fill: "none",
    style: {
      position: "absolute",
      left: 35.791,
      top: 0.361,
      width: 9.084,
      height: 10.58
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.769 3.066 C 8.769 3.883 8.368 4.665 7.372 5.11 C 8.623 5.482 9.084 6.805 9.084 7.466 C 9.084 9.823 7.299 10.58 5.077 10.58 L 0 10.58 L 0 0 L 5.077 0 C 7.19 0 8.757 0.938 8.757 3.078 L 8.769 3.066 Z M 1.992 4.256 L 5.077 4.256 C 6.352 4.256 6.765 3.727 6.765 3.126 C 6.765 2.645 6.364 1.827 5.077 1.827 L 1.992 1.827 L 1.992 4.268 L 1.992 4.256 Z M 1.992 8.729 L 5.077 8.729 C 5.902 8.729 7.081 8.452 7.081 7.454 C 7.081 6.456 5.902 5.999 5.077 5.999 L 1.992 5.999 L 1.992 8.729 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11.793,
    height: 10.592,
    viewBox: "0 0 11.793 10.592",
    fill: "none",
    style: {
      position: "absolute",
      left: 46.418,
      top: 0.361,
      width: 11.793,
      height: 10.592
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.708 8.596 L 3.109 8.596 L 2.186 10.592 L 0 10.592 L 4.797 0 L 6.996 0 L 11.793 10.592 L 9.595 10.592 L 8.696 8.596 L 8.708 8.596 Z M 5.915 2.224 L 3.923 6.733 L 7.894 6.733 L 5.902 2.224 L 5.915 2.224 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7.518,
    height: 10.604,
    viewBox: "0 0 7.518 10.604",
    fill: "none",
    style: {
      position: "absolute",
      left: 60.518,
      top: 0.361,
      width: 7.518,
      height: 10.604
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.016 0 L 2.016 8.753 L 7.518 8.753 L 7.518 10.604 L 0 10.604 L 0 0 L 2.016 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.740,
    height: 11.061,
    viewBox: "0 0 9.740 11.061",
    fill: "none",
    style: {
      position: "absolute",
      left: 74.692,
      top: 0.132,
      width: 9.74,
      height: 11.061
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.74 9.486 C 8.635 10.556 7.214 11.061 5.672 11.061 C 1.7 11.061 0.012 8.356 0 5.591 C -0.012 2.825 1.81 0 5.672 0 C 7.129 0 8.502 0.541 9.607 1.623 L 8.259 2.91 C 7.554 2.224 6.607 1.912 5.672 1.912 C 3.085 1.912 1.968 3.823 1.992 5.591 C 2.004 7.346 3.036 9.174 5.672 9.174 C 6.607 9.174 7.664 8.801 8.368 8.103 L 9.74 9.486 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.004,
    height: 10.592,
    viewBox: "0 0 2.004 10.592",
    fill: "none",
    style: {
      position: "absolute",
      left: 86.824,
      top: 0.361,
      width: 2.004,
      height: 10.592
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 10.592 L 0 0 L 2.004 0 L 2.004 10.592 L 0 10.592 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.805,
    height: 10.592,
    viewBox: "0 0 8.805 10.592",
    fill: "none",
    style: {
      position: "absolute",
      left: 91.804,
      top: 0.361,
      width: 8.805,
      height: 10.592
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.401 1.815 L 0 1.815 L 0 0 L 8.805 0 L 8.805 1.815 L 5.417 1.815 L 5.417 10.592 L 3.401 10.592 L 3.401 1.815 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.004,
    height: 10.592,
    viewBox: "0 0 2.004 10.592",
    fill: "none",
    style: {
      position: "absolute",
      left: 103.074,
      top: 0.361,
      width: 2.004,
      height: 10.592
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 10.592 L 0 0 L 2.004 0 L 2.004 10.592 L 0 10.592 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.368,
    height: 10.604,
    viewBox: "0 0 8.368 10.604",
    fill: "none",
    style: {
      position: "absolute",
      left: 107.884,
      top: 0.349,
      width: 8.368,
      height: 10.604
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.146 0.012 L 8.368 0.012 L 8.368 0.95 L 2.818 8.717 L 8.368 8.717 L 8.368 10.604 L 0 10.604 L 0 9.45 L 5.429 1.876 L 0.134 1.876 L 0.134 0 L 0.146 0.012 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.016,
    height: 10.604,
    viewBox: "0 0 8.016 10.604",
    fill: "none",
    style: {
      position: "absolute",
      left: 118.669,
      top: 0.361,
      width: 8.016,
      height: 10.604
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.016 10.592 L 0 10.592 L 0 0 L 8.016 0 L 8.016 1.936 L 2.004 1.936 L 2.004 4.376 L 7.797 4.376 L 7.797 6.24 L 2.004 6.24 L 2.004 8.632 L 8.016 8.632 L 8.016 10.604 L 8.016 10.592 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.890,
    height: 10.616,
    viewBox: "0 0 8.890 10.616",
    fill: "none",
    style: {
      position: "absolute",
      left: 129.952,
      top: 0.349,
      width: 8.89,
      height: 10.616
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.874 0 L 8.89 0 L 8.89 10.616 L 7.639 10.616 L 2.016 3.475 L 2.016 10.616 L 0 10.616 L 0 0.012 L 1.64 0.012 L 6.886 6.577 L 6.886 0 L 6.874 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.157,
    height: 11.241,
    viewBox: "0 0 9.157 11.241",
    fill: "none",
    style: {
      position: "absolute",
      left: 145.606,
      top: 0,
      width: 9.157,
      height: 11.241
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.226 2.922 C 6.862 2.32 5.854 1.743 4.688 1.743 C 3.194 1.743 2.465 2.369 2.465 3.15 C 2.465 4.076 3.571 4.328 4.846 4.485 C 7.081 4.761 9.157 5.338 9.157 7.863 C 9.157 10.22 7.044 11.241 4.664 11.241 C 2.478 11.241 0.789 10.58 0 8.632 L 1.688 7.767 C 2.162 8.933 3.401 9.45 4.7 9.45 C 6 9.45 7.166 9.005 7.166 7.863 C 7.166 6.865 6.109 6.456 4.688 6.3 C 2.502 6.048 0.486 5.47 0.486 3.09 C 0.486 0.914 2.66 0.012 4.627 0 C 6.291 0 8.016 0.469 8.829 2.104 L 7.226 2.922 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.992,
    height: 11.061,
    viewBox: "0 0 10.992 11.061",
    fill: "none",
    style: {
      position: "absolute",
      left: 157.083,
      top: 0.144,
      width: 10.992,
      height: 11.061
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.991 5.579 C 10.955 8.32 9.267 11.061 5.502 11.061 C 1.737 11.061 0 8.38 0 5.591 C 0 2.801 1.81 0 5.502 0 C 9.194 0 11.028 2.801 10.991 5.567 L 10.991 5.579 Z M 1.98 5.615 C 2.028 7.358 2.976 9.222 5.502 9.222 C 8.028 9.222 8.975 7.346 8.999 5.603 C 9.036 3.811 8.016 1.815 5.502 1.815 C 2.988 1.815 1.943 3.823 1.98 5.615 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7.518,
    height: 10.604,
    viewBox: "0 0 7.518 10.604",
    fill: "none",
    style: {
      position: "absolute",
      left: 170.782,
      top: 0.361,
      width: 7.518,
      height: 10.604
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.016 0 L 2.016 8.753 L 7.518 8.753 L 7.518 10.604 L 0 10.604 L 0 0 L 2.016 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.388,
    height: 10.809,
    viewBox: "0 0 9.388 10.809",
    fill: "none",
    style: {
      position: "absolute",
      left: 180.317,
      top: 0.373,
      width: 9.388,
      height: 10.809
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.388 0 L 9.388 6.072 C 9.388 9.21 7.445 10.809 4.761 10.809 C 2.077 10.809 0 9.27 0 6.072 L 0 0 L 2.004 0 L 2.004 6.072 C 2.004 7.983 3.109 8.993 4.773 8.993 C 6.437 8.993 7.384 7.887 7.384 6.072 L 7.384 0 L 9.388 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.805,
    height: 10.592,
    viewBox: "0 0 8.805 10.592",
    fill: "none",
    style: {
      position: "absolute",
      left: 192.268,
      top: 0.361,
      width: 8.805,
      height: 10.592
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.401 1.815 L 0 1.815 L 0 0 L 8.805 0 L 8.805 1.815 L 5.405 1.815 L 5.405 10.592 L 3.388 10.592 L 3.388 1.815 L 3.401 1.815 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.004,
    height: 10.592,
    viewBox: "0 0 2.004 10.592",
    fill: "none",
    style: {
      position: "absolute",
      left: 203.55,
      top: 0.361,
      width: 2.004,
      height: 10.592
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 10.592 L 0 0 L 2.004 0 L 2.004 10.592 L 0 10.592 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.992,
    height: 11.061,
    viewBox: "0 0 10.992 11.061",
    fill: "none",
    style: {
      position: "absolute",
      left: 208.518,
      top: 0.144,
      width: 10.992,
      height: 11.061
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.991 5.579 C 10.955 8.32 9.267 11.061 5.502 11.061 C 1.737 11.061 0 8.38 0 5.591 C 0 2.801 1.81 0 5.502 0 C 9.194 0 11.028 2.801 10.991 5.567 L 10.991 5.579 Z M 1.98 5.615 C 2.028 7.358 2.976 9.222 5.502 9.222 C 8.028 9.222 8.975 7.346 8.999 5.603 C 9.036 3.811 8.016 1.815 5.502 1.815 C 2.988 1.815 1.943 3.823 1.98 5.615 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.890,
    height: 10.616,
    viewBox: "0 0 8.890 10.616",
    fill: "none",
    style: {
      position: "absolute",
      left: 222.375,
      top: 0.349,
      width: 8.89,
      height: 10.616
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.874 0 L 8.89 0 L 8.89 10.616 L 7.639 10.616 L 2.016 3.475 L 2.016 10.616 L 0 10.616 L 0 0.012 L 1.64 0.012 L 6.886 6.577 L 6.886 0 L 6.874 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.157,
    height: 11.241,
    viewBox: "0 0 9.157 11.241",
    fill: "none",
    style: {
      position: "absolute",
      left: 233.889,
      top: 0,
      width: 9.157,
      height: 11.241
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.226 2.922 C 6.862 2.32 5.854 1.743 4.688 1.743 C 3.194 1.743 2.465 2.369 2.465 3.15 C 2.465 4.076 3.571 4.328 4.846 4.485 C 7.081 4.761 9.157 5.338 9.157 7.863 C 9.157 10.22 7.044 11.241 4.664 11.241 C 2.478 11.241 0.789 10.58 0 8.632 L 1.688 7.767 C 2.162 8.933 3.401 9.45 4.7 9.45 C 6 9.45 7.166 9.005 7.166 7.863 C 7.166 6.865 6.109 6.456 4.688 6.3 C 2.502 6.048 0.486 5.47 0.486 3.09 C 0.486 0.914 2.66 0.012 4.627 0 C 6.291 0 8.028 0.469 8.829 2.104 L 7.226 2.922 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body1 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      display: "flex",
      flexDirection: "row",
      gap: 9.920000076293945,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16.007,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 16.007,
    height: 16.159,
    viewBox: "0 0 16.007 16.159",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 16.007,
      height: 16.159
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.004 0 C 3.583 0 0 3.619 0 8.079 C 0 12.54 3.583 16.159 8.004 16.159 C 12.424 16.159 16.007 12.54 16.007 8.079 C 16.007 3.619 12.436 0 8.004 0 Z M 11.38 9.594 C 11.307 9.63 11.271 9.715 11.295 9.787 L 12.072 11.939 C 12.121 12.059 11.999 12.179 11.878 12.131 L 9.74 11.338 C 9.667 11.314 9.582 11.338 9.546 11.422 L 8.149 14.416 C 8.089 14.536 7.919 14.536 7.87 14.416 L 6.473 11.422 C 6.437 11.35 6.352 11.314 6.279 11.338 L 4.117 12.131 C 3.996 12.179 3.874 12.059 3.923 11.939 L 4.712 9.787 C 4.737 9.715 4.712 9.63 4.627 9.594 L 1.615 8.212 C 1.494 8.152 1.494 7.983 1.615 7.935 L 4.627 6.553 C 4.7 6.516 4.737 6.432 4.712 6.36 L 3.899 4.232 C 3.85 4.112 3.971 3.992 4.093 4.04 L 6.279 4.809 C 6.352 4.833 6.437 4.809 6.473 4.725 L 7.87 1.743 C 7.931 1.623 8.089 1.623 8.149 1.743 L 9.546 4.725 C 9.582 4.797 9.667 4.833 9.74 4.809 L 11.902 4.028 C 12.024 3.98 12.145 4.1 12.096 4.22 L 11.295 6.36 C 11.271 6.432 11.295 6.516 11.38 6.553 L 14.404 7.935 C 14.525 7.995 14.525 8.164 14.404 8.212 L 11.38 9.594 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 243.046,
      height: 11.241,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.922,
    height: 11.133,
    viewBox: "0 0 9.922 11.133",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0.06,
      width: 9.922,
      height: 11.133
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.368 2.886 C 7.651 2.2 6.583 1.827 5.647 1.827 C 3.352 1.827 1.967 3.559 1.967 5.735 C 1.967 7.478 2.988 9.282 5.647 9.282 C 6.485 9.282 7.226 9.101 8.064 8.428 L 8.064 6.553 L 5.332 6.553 L 5.332 4.761 L 9.922 4.761 L 9.922 9.222 C 8.866 10.412 7.542 11.133 5.66 11.133 C 1.64 11.133 0 8.512 0 5.735 C 0 2.753 1.882 0 5.66 0 C 7.093 0 8.538 0.541 9.631 1.623 L 8.38 2.898 L 8.368 2.886 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7.518,
    height: 10.604,
    viewBox: "0 0 7.518 10.604",
    fill: "none",
    style: {
      position: "absolute",
      left: 12.788,
      top: 0.361,
      width: 7.518,
      height: 10.604
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.016 0 L 2.016 8.753 L 7.518 8.753 L 7.518 10.604 L 0 10.604 L 0 0 L 2.016 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.992,
    height: 11.061,
    viewBox: "0 0 10.992 11.061",
    fill: "none",
    style: {
      position: "absolute",
      left: 22.165,
      top: 0.144,
      width: 10.992,
      height: 11.061
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.991 5.579 C 10.955 8.32 9.267 11.061 5.502 11.061 C 1.737 11.061 0 8.38 0 5.591 C 0 2.801 1.81 0 5.502 0 C 9.194 0 11.028 2.801 10.991 5.567 L 10.991 5.579 Z M 1.98 5.615 C 2.028 7.358 2.976 9.222 5.502 9.222 C 8.028 9.222 8.975 7.346 8.999 5.603 C 9.036 3.811 8.016 1.815 5.502 1.815 C 2.988 1.815 1.943 3.823 1.98 5.615 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.084,
    height: 10.580,
    viewBox: "0 0 9.084 10.580",
    fill: "none",
    style: {
      position: "absolute",
      left: 35.791,
      top: 0.361,
      width: 9.084,
      height: 10.58
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.769 3.066 C 8.769 3.883 8.368 4.665 7.372 5.11 C 8.623 5.482 9.084 6.805 9.084 7.466 C 9.084 9.823 7.299 10.58 5.077 10.58 L 0 10.58 L 0 0 L 5.077 0 C 7.19 0 8.757 0.938 8.757 3.078 L 8.769 3.066 Z M 1.992 4.256 L 5.077 4.256 C 6.352 4.256 6.765 3.727 6.765 3.126 C 6.765 2.645 6.364 1.827 5.077 1.827 L 1.992 1.827 L 1.992 4.268 L 1.992 4.256 Z M 1.992 8.729 L 5.077 8.729 C 5.902 8.729 7.081 8.452 7.081 7.454 C 7.081 6.456 5.902 5.999 5.077 5.999 L 1.992 5.999 L 1.992 8.729 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11.793,
    height: 10.592,
    viewBox: "0 0 11.793 10.592",
    fill: "none",
    style: {
      position: "absolute",
      left: 46.418,
      top: 0.361,
      width: 11.793,
      height: 10.592
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.708 8.596 L 3.109 8.596 L 2.186 10.592 L 0 10.592 L 4.797 0 L 6.996 0 L 11.793 10.592 L 9.595 10.592 L 8.696 8.596 L 8.708 8.596 Z M 5.915 2.224 L 3.923 6.733 L 7.894 6.733 L 5.902 2.224 L 5.915 2.224 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7.518,
    height: 10.604,
    viewBox: "0 0 7.518 10.604",
    fill: "none",
    style: {
      position: "absolute",
      left: 60.518,
      top: 0.361,
      width: 7.518,
      height: 10.604
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.016 0 L 2.016 8.753 L 7.518 8.753 L 7.518 10.604 L 0 10.604 L 0 0 L 2.016 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.740,
    height: 11.061,
    viewBox: "0 0 9.740 11.061",
    fill: "none",
    style: {
      position: "absolute",
      left: 74.692,
      top: 0.132,
      width: 9.74,
      height: 11.061
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.74 9.486 C 8.635 10.556 7.214 11.061 5.672 11.061 C 1.7 11.061 0.012 8.356 0 5.591 C -0.012 2.825 1.81 0 5.672 0 C 7.129 0 8.502 0.541 9.607 1.623 L 8.259 2.91 C 7.554 2.224 6.607 1.912 5.672 1.912 C 3.085 1.912 1.968 3.823 1.992 5.591 C 2.004 7.346 3.036 9.174 5.672 9.174 C 6.607 9.174 7.664 8.801 8.368 8.103 L 9.74 9.486 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.004,
    height: 10.592,
    viewBox: "0 0 2.004 10.592",
    fill: "none",
    style: {
      position: "absolute",
      left: 86.824,
      top: 0.361,
      width: 2.004,
      height: 10.592
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 10.592 L 0 0 L 2.004 0 L 2.004 10.592 L 0 10.592 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.805,
    height: 10.592,
    viewBox: "0 0 8.805 10.592",
    fill: "none",
    style: {
      position: "absolute",
      left: 91.804,
      top: 0.361,
      width: 8.805,
      height: 10.592
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.401 1.815 L 0 1.815 L 0 0 L 8.805 0 L 8.805 1.815 L 5.417 1.815 L 5.417 10.592 L 3.401 10.592 L 3.401 1.815 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.004,
    height: 10.592,
    viewBox: "0 0 2.004 10.592",
    fill: "none",
    style: {
      position: "absolute",
      left: 103.074,
      top: 0.361,
      width: 2.004,
      height: 10.592
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 10.592 L 0 0 L 2.004 0 L 2.004 10.592 L 0 10.592 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.368,
    height: 10.604,
    viewBox: "0 0 8.368 10.604",
    fill: "none",
    style: {
      position: "absolute",
      left: 107.884,
      top: 0.349,
      width: 8.368,
      height: 10.604
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.146 0.012 L 8.368 0.012 L 8.368 0.95 L 2.818 8.717 L 8.368 8.717 L 8.368 10.604 L 0 10.604 L 0 9.45 L 5.429 1.876 L 0.134 1.876 L 0.134 0 L 0.146 0.012 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.016,
    height: 10.604,
    viewBox: "0 0 8.016 10.604",
    fill: "none",
    style: {
      position: "absolute",
      left: 118.669,
      top: 0.361,
      width: 8.016,
      height: 10.604
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.016 10.592 L 0 10.592 L 0 0 L 8.016 0 L 8.016 1.936 L 2.004 1.936 L 2.004 4.376 L 7.797 4.376 L 7.797 6.24 L 2.004 6.24 L 2.004 8.632 L 8.016 8.632 L 8.016 10.604 L 8.016 10.592 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.890,
    height: 10.616,
    viewBox: "0 0 8.890 10.616",
    fill: "none",
    style: {
      position: "absolute",
      left: 129.951,
      top: 0.349,
      width: 8.89,
      height: 10.616
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.874 0 L 8.89 0 L 8.89 10.616 L 7.639 10.616 L 2.016 3.475 L 2.016 10.616 L 0 10.616 L 0 0.012 L 1.64 0.012 L 6.886 6.577 L 6.886 0 L 6.874 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.157,
    height: 11.241,
    viewBox: "0 0 9.157 11.241",
    fill: "none",
    style: {
      position: "absolute",
      left: 145.606,
      top: 0,
      width: 9.157,
      height: 11.241
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.226 2.922 C 6.862 2.32 5.854 1.743 4.688 1.743 C 3.194 1.743 2.465 2.369 2.465 3.15 C 2.465 4.076 3.571 4.328 4.846 4.485 C 7.081 4.761 9.157 5.338 9.157 7.863 C 9.157 10.22 7.044 11.241 4.664 11.241 C 2.478 11.241 0.789 10.58 0 8.632 L 1.688 7.767 C 2.162 8.933 3.401 9.45 4.7 9.45 C 6 9.45 7.166 9.005 7.166 7.863 C 7.166 6.865 6.109 6.456 4.688 6.3 C 2.502 6.048 0.486 5.47 0.486 3.09 C 0.486 0.914 2.66 0.012 4.627 0 C 6.291 0 8.016 0.469 8.829 2.104 L 7.226 2.922 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.992,
    height: 11.061,
    viewBox: "0 0 10.992 11.061",
    fill: "none",
    style: {
      position: "absolute",
      left: 157.083,
      top: 0.144,
      width: 10.992,
      height: 11.061
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.991 5.579 C 10.955 8.32 9.267 11.061 5.502 11.061 C 1.737 11.061 0 8.38 0 5.591 C 0 2.801 1.81 0 5.502 0 C 9.194 0 11.028 2.801 10.991 5.567 L 10.991 5.579 Z M 1.98 5.615 C 2.028 7.358 2.976 9.222 5.502 9.222 C 8.028 9.222 8.975 7.346 8.999 5.603 C 9.036 3.811 8.016 1.815 5.502 1.815 C 2.988 1.815 1.943 3.823 1.98 5.615 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 7.518,
    height: 10.604,
    viewBox: "0 0 7.518 10.604",
    fill: "none",
    style: {
      position: "absolute",
      left: 170.782,
      top: 0.361,
      width: 7.518,
      height: 10.604
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.016 0 L 2.016 8.753 L 7.518 8.753 L 7.518 10.604 L 0 10.604 L 0 0 L 2.016 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.388,
    height: 10.809,
    viewBox: "0 0 9.388 10.809",
    fill: "none",
    style: {
      position: "absolute",
      left: 180.317,
      top: 0.373,
      width: 9.388,
      height: 10.809
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.388 0 L 9.388 6.072 C 9.388 9.21 7.445 10.809 4.761 10.809 C 2.077 10.809 0 9.27 0 6.072 L 0 0 L 2.004 0 L 2.004 6.072 C 2.004 7.983 3.109 8.993 4.773 8.993 C 6.437 8.993 7.384 7.887 7.384 6.072 L 7.384 0 L 9.388 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.805,
    height: 10.592,
    viewBox: "0 0 8.805 10.592",
    fill: "none",
    style: {
      position: "absolute",
      left: 192.268,
      top: 0.361,
      width: 8.805,
      height: 10.592
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.401 1.815 L 0 1.815 L 0 0 L 8.805 0 L 8.805 1.815 L 5.405 1.815 L 5.405 10.592 L 3.388 10.592 L 3.388 1.815 L 3.401 1.815 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.004,
    height: 10.592,
    viewBox: "0 0 2.004 10.592",
    fill: "none",
    style: {
      position: "absolute",
      left: 203.55,
      top: 0.361,
      width: 2.004,
      height: 10.592
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 10.592 L 0 0 L 2.004 0 L 2.004 10.592 L 0 10.592 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.992,
    height: 11.061,
    viewBox: "0 0 10.992 11.061",
    fill: "none",
    style: {
      position: "absolute",
      left: 208.518,
      top: 0.144,
      width: 10.992,
      height: 11.061
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.991 5.579 C 10.955 8.32 9.267 11.061 5.502 11.061 C 1.737 11.061 0 8.38 0 5.591 C 0 2.801 1.81 0 5.502 0 C 9.194 0 11.028 2.801 10.991 5.567 L 10.991 5.579 Z M 1.98 5.615 C 2.028 7.358 2.976 9.222 5.502 9.222 C 8.028 9.222 8.975 7.346 8.999 5.603 C 9.036 3.811 8.016 1.815 5.502 1.815 C 2.988 1.815 1.943 3.823 1.98 5.615 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.890,
    height: 10.616,
    viewBox: "0 0 8.890 10.616",
    fill: "none",
    style: {
      position: "absolute",
      left: 222.375,
      top: 0.349,
      width: 8.89,
      height: 10.616
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.874 0 L 8.89 0 L 8.89 10.616 L 7.639 10.616 L 2.016 3.475 L 2.016 10.616 L 0 10.616 L 0 0.012 L 1.64 0.012 L 6.886 6.577 L 6.886 0 L 6.874 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.157,
    height: 11.241,
    viewBox: "0 0 9.157 11.241",
    fill: "none",
    style: {
      position: "absolute",
      left: 233.889,
      top: 0,
      width: 9.157,
      height: 11.241
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.226 2.922 C 6.862 2.32 5.854 1.743 4.688 1.743 C 3.194 1.743 2.465 2.369 2.465 3.15 C 2.465 4.076 3.571 4.328 4.846 4.485 C 7.081 4.761 9.157 5.338 9.157 7.863 C 9.157 10.22 7.044 11.241 4.664 11.241 C 2.478 11.241 0.789 10.58 0 8.632 L 1.688 7.767 C 2.162 8.933 3.401 9.45 4.7 9.45 C 6 9.45 7.166 9.005 7.166 7.863 C 7.166 6.865 6.109 6.456 4.688 6.3 C 2.502 6.048 0.486 5.47 0.486 3.09 C 0.486 0.914 2.66 0.012 4.627 0 C 6.291 0 8.028 0.469 8.829 2.104 L 7.226 2.922 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body2 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 70.699,
      display: "flex",
      flexDirection: "row",
      gap: 11.90999984741211,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 69.397,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 60,
    height: 60,
    viewBox: "0 0 60 60",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 5,
      width: 60,
      height: 60,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 60 30 C 60 46.569 46.569 60 30 60 C 13.431 60 0 46.569 0 30 C 0 13.431 13.431 0 30 0 C 46.569 0 60 13.431 60 30 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 69.397,
    height: 70.699,
    viewBox: "0 0 69.397 70.699",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 69.397,
      height: 70.699,
      color: "rgb(15,26,45)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 34.699 0 C 15.537 0 0 15.824 0 35.353 C 0 54.882 15.537 70.699 34.699 70.699 C 53.861 70.699 69.397 54.869 69.397 35.353 C 69.397 15.837 53.861 0 34.699 0 Z M 48.96 42.838 L 52.318 52.258 C 52.512 52.793 51.985 53.307 51.457 53.106 L 42.203 49.628 C 41.876 49.508 41.509 49.654 41.362 49.975 L 35.313 63.061 C 35.073 63.575 34.338 63.575 34.098 63.061 L 28.042 49.962 C 27.895 49.648 27.528 49.494 27.201 49.614 L 17.853 53.073 C 17.319 53.273 16.799 52.752 16.992 52.218 L 20.391 42.824 C 20.511 42.497 20.357 42.137 20.043 41.99 L 6.99 35.961 C 6.476 35.72 6.476 34.986 6.99 34.745 L 20.05 28.703 C 20.371 28.556 20.517 28.189 20.397 27.862 L 16.892 18.561 C 16.692 18.027 17.206 17.506 17.74 17.693 L 27.221 21.058 C 27.548 21.172 27.909 21.025 28.049 20.711 L 34.098 7.638 C 34.338 7.124 35.073 7.124 35.313 7.638 L 41.349 20.698 C 41.496 21.012 41.856 21.165 42.183 21.045 L 51.564 17.646 C 52.098 17.453 52.612 17.974 52.419 18.508 L 48.967 27.848 C 48.847 28.176 49 28.543 49.314 28.683 L 62.42 34.745 C 62.934 34.986 62.934 35.72 62.42 35.961 L 49.314 42.016 C 49 42.163 48.847 42.524 48.967 42.844 L 48.96 42.838 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 116.929,
      height: 51.41,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.911,
    height: 13.507,
    viewBox: "0 0 11.911 13.507",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.207,
      top: 0,
      width: 11.911,
      height: 13.507,
      color: "rgb(15,26,45)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.062 3.505 C 9.2 2.677 7.912 2.223 6.797 2.223 C 4.046 2.223 2.377 4.313 2.377 6.957 C 2.377 9.067 3.605 11.25 6.797 11.25 C 7.805 11.25 8.686 11.03 9.695 10.222 L 9.695 7.945 L 6.41 7.945 L 6.41 5.782 L 11.911 5.782 L 11.911 11.197 C 10.643 12.646 9.047 13.507 6.79 13.507 C 1.963 13.507 0 10.336 0 6.957 C 0 3.345 2.257 0 6.79 0 C 8.513 0 10.242 0.661 11.564 1.963 L 10.062 3.505 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.027,
    height: 12.839,
    viewBox: "0 0 9.027 12.839",
    fill: "none",
    style: {
      position: "absolute",
      left: 15.57,
      top: 0.367,
      width: 9.027,
      height: 12.839,
      color: "rgb(15,26,45)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.424 0 L 2.424 10.603 L 9.027 10.603 L 9.027 12.839 L 0 12.839 L 0 0 L 2.424 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13.194,
    height: 13.393,
    viewBox: "0 0 13.194 13.393",
    fill: "none",
    style: {
      position: "absolute",
      left: 26.82,
      top: 0.113,
      width: 13.194,
      height: 13.393,
      color: "rgb(15,26,45)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.193 6.75 C 13.16 10.068 11.117 13.393 6.603 13.393 C 2.09 13.393 0 10.149 0 6.77 C 0 3.392 2.163 0 6.603 0 C 11.043 0 13.227 3.392 13.193 6.75 Z M 2.384 6.804 C 2.437 8.913 3.579 11.17 6.603 11.17 C 9.628 11.17 10.769 8.893 10.803 6.784 C 10.836 4.62 9.628 2.197 6.603 2.197 C 3.579 2.197 2.33 4.64 2.384 6.804 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.896,
    height: 12.846,
    viewBox: "0 0 10.896 12.846",
    fill: "none",
    style: {
      position: "absolute",
      left: 43.185,
      top: 0.367,
      width: 10.896,
      height: 12.846,
      color: "rgb(15,26,45)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.509 3.726 C 10.509 4.714 10.035 5.669 8.84 6.203 C 10.342 6.663 10.896 8.259 10.896 9.067 C 10.896 11.931 8.746 12.846 6.089 12.846 L 0 12.846 L 0 0 L 6.089 0 C 8.62 0 10.509 1.135 10.509 3.726 Z M 2.384 5.154 L 6.089 5.154 C 7.611 5.154 8.105 4.513 8.105 3.779 C 8.105 3.191 7.631 2.203 6.089 2.203 L 2.384 2.203 L 2.384 5.154 Z M 2.384 10.583 L 6.089 10.583 C 7.077 10.583 8.493 10.255 8.493 9.04 C 8.493 7.825 7.077 7.278 6.089 7.278 L 2.384 7.278 L 2.384 10.583 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 14.168,
    height: 12.846,
    viewBox: "0 0 14.168 12.846",
    fill: "none",
    style: {
      position: "absolute",
      left: 55.93,
      top: 0.367,
      width: 14.168,
      height: 12.846,
      color: "rgb(15,26,45)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.442 10.422 L 3.726 10.422 L 2.624 12.846 L 0 12.846 L 5.762 0 L 8.406 0 L 14.168 12.846 L 11.524 12.846 L 10.442 10.422 Z M 7.084 2.697 L 4.7 8.166 L 9.474 8.166 L 7.091 2.697 L 7.084 2.697 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.027,
    height: 12.839,
    viewBox: "0 0 9.027 12.839",
    fill: "none",
    style: {
      position: "absolute",
      left: 72.849,
      top: 0.367,
      width: 9.027,
      height: 12.839,
      color: "rgb(15,26,45)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.424 0 L 2.424 10.603 L 9.027 10.603 L 9.027 12.839 L 0 12.839 L 0 0 L 2.424 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11.691,
    height: 13.393,
    viewBox: "0 0 11.691 13.393",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.36,
      top: 19.042,
      width: 11.691,
      height: 13.393,
      color: "rgb(15,26,45)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.691 11.484 C 10.369 12.786 8.666 13.393 6.81 13.393 C 2.037 13.393 0.02 10.108 0 6.77 C -0.02 3.412 2.163 0 6.81 0 C 8.553 0 10.202 0.661 11.524 1.963 L 9.908 3.525 C 9.067 2.697 7.925 2.317 6.81 2.317 C 3.712 2.317 2.37 4.627 2.39 6.777 C 2.41 8.907 3.639 11.123 6.81 11.123 C 7.932 11.123 9.194 10.663 10.042 9.821 L 11.691 11.491 L 11.691 11.484 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.404,
    height: 12.846,
    viewBox: "0 0 2.404 12.846",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.909,
      top: 19.296,
      width: 2.404,
      height: 12.846,
      color: "rgb(15,26,45)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 12.846 L 0 0 L 2.404 0 L 2.404 12.846 L 0 12.846 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.569,
    height: 12.846,
    viewBox: "0 0 10.569 12.846",
    fill: "none",
    style: {
      position: "absolute",
      left: 20.891,
      top: 19.296,
      width: 10.569,
      height: 12.846,
      color: "rgb(15,26,45)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.073 2.203 L 0 2.203 L 0 0 L 10.569 0 L 10.569 2.203 L 6.496 2.203 L 6.496 12.846 L 4.073 12.846 L 4.073 2.203 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.404,
    height: 12.846,
    viewBox: "0 0 2.404 12.846",
    fill: "none",
    style: {
      position: "absolute",
      left: 34.412,
      top: 19.296,
      width: 2.404,
      height: 12.846,
      color: "rgb(15,26,45)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 12.846 L 0 0 L 2.404 0 L 2.404 12.846 L 0 12.846 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.035,
    height: 12.846,
    viewBox: "0 0 10.035 12.846",
    fill: "none",
    style: {
      position: "absolute",
      left: 40.2,
      top: 19.296,
      width: 10.035,
      height: 12.846,
      color: "rgb(15,26,45)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.16 0 L 10.035 0 L 10.035 1.135 L 3.372 10.549 L 10.035 10.549 L 10.035 12.846 L 0 12.846 L 0 11.451 L 6.516 2.277 L 0.167 2.277 L 0.167 0 L 0.16 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.614,
    height: 12.846,
    viewBox: "0 0 9.614 12.846",
    fill: "none",
    style: {
      position: "absolute",
      left: 53.126,
      top: 19.296,
      width: 9.614,
      height: 12.846,
      color: "rgb(15,26,45)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.614 12.846 L 0 12.846 L 0 0 L 9.614 0 L 9.614 2.35 L 2.404 2.35 L 2.404 5.301 L 9.361 5.301 L 9.361 7.558 L 2.404 7.558 L 2.404 10.456 L 9.614 10.456 L 9.614 12.839 L 9.614 12.846 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.676,
    height: 12.886,
    viewBox: "0 0 10.676 12.886",
    fill: "none",
    style: {
      position: "absolute",
      left: 66.653,
      top: 19.276,
      width: 10.676,
      height: 12.886,
      color: "rgb(15,26,45)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.252 0 L 10.676 0 L 10.676 12.866 L 9.174 12.866 L 9.174 12.886 L 2.424 4.206 L 2.424 12.866 L 0 12.866 L 0 0.02 L 1.963 0.02 L 8.259 7.985 L 8.259 0.007 L 8.252 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.990,
    height: 13.627,
    viewBox: "0 0 10.990 13.627",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 37.783,
      width: 10.99,
      height: 13.627,
      color: "rgb(15,26,45)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.653 3.545 C 8.212 2.811 7.004 2.117 5.608 2.117 C 3.812 2.117 2.951 2.871 2.951 3.826 C 2.951 4.947 4.273 5.255 5.815 5.441 C 8.493 5.769 10.99 6.47 10.99 9.534 C 10.99 12.399 8.459 13.627 5.595 13.627 C 2.971 13.627 0.955 12.819 0 10.469 L 2.016 9.421 C 2.584 10.836 4.073 11.457 5.628 11.457 C 7.184 11.457 8.58 10.923 8.58 9.528 C 8.58 8.319 7.311 7.818 5.608 7.638 C 2.984 7.324 0.561 6.63 0.561 3.746 C 0.561 1.102 3.165 0.02 5.535 0 C 7.538 0 9.608 0.568 10.583 2.55 L 8.653 3.539 L 8.653 3.545 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13.193,
    height: 13.393,
    viewBox: "0 0 13.193 13.393",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.754,
      top: 37.977,
      width: 13.193,
      height: 13.393,
      color: "rgb(15,26,45)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.193 6.75 C 13.16 10.068 11.117 13.393 6.603 13.393 C 2.09 13.393 0 10.149 0 6.77 C 0 3.392 2.163 0 6.603 0 C 11.043 0 13.227 3.392 13.193 6.75 Z M 2.384 6.804 C 2.437 8.913 3.579 11.17 6.603 11.17 C 9.628 11.17 10.769 8.893 10.803 6.784 C 10.836 4.62 9.628 2.197 6.603 2.197 C 3.579 2.197 2.33 4.64 2.384 6.804 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.027,
    height: 12.846,
    viewBox: "0 0 9.027 12.846",
    fill: "none",
    style: {
      position: "absolute",
      left: 30.192,
      top: 38.224,
      width: 9.027,
      height: 12.846,
      color: "rgb(15,26,45)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.424 0.007 L 2.424 10.609 L 9.027 10.609 L 9.027 12.846 L 0 12.846 L 0 0 L 2.424 0 L 2.424 0.007 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11.270,
    height: 13.100,
    viewBox: "0 0 11.270 13.100",
    fill: "none",
    style: {
      position: "absolute",
      left: 41.636,
      top: 38.251,
      width: 11.27,
      height: 13.1,
      color: "rgb(15,26,45)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.27 0 L 11.27 7.358 C 11.27 11.157 8.94 13.1 5.709 13.1 C 2.477 13.1 0 11.23 0 7.358 L 0 0 L 2.404 0 L 2.404 7.358 C 2.404 9.668 3.726 10.896 5.722 10.896 C 7.718 10.896 8.86 9.554 8.86 7.358 L 8.86 0 L 11.264 0 L 11.27 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.569,
    height: 12.846,
    viewBox: "0 0 10.569 12.846",
    fill: "none",
    style: {
      position: "absolute",
      left: 55.991,
      top: 38.231,
      width: 10.569,
      height: 12.846,
      color: "rgb(15,26,45)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.073 2.203 L 0 2.203 L 0 0 L 10.569 0 L 10.569 2.203 L 6.496 2.203 L 6.496 12.846 L 4.073 12.846 L 4.073 2.203 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.404,
    height: 12.846,
    viewBox: "0 0 2.404 12.846",
    fill: "none",
    style: {
      position: "absolute",
      left: 69.511,
      top: 38.231,
      width: 2.404,
      height: 12.846,
      color: "rgb(15,26,45)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 12.846 L 0 0 L 2.404 0 L 2.404 12.846 L 0 12.846 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13.193,
    height: 13.393,
    viewBox: "0 0 13.193 13.393",
    fill: "none",
    style: {
      position: "absolute",
      left: 75.473,
      top: 37.977,
      width: 13.193,
      height: 13.393,
      color: "rgb(15,26,45)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.193 6.75 C 13.16 10.068 11.117 13.393 6.603 13.393 C 2.09 13.393 0 10.149 0 6.77 C 0 3.392 2.163 0 6.603 0 C 11.043 0 13.227 3.392 13.193 6.75 Z M 2.384 6.804 C 2.437 8.913 3.579 11.17 6.603 11.17 C 9.628 11.17 10.769 8.893 10.803 6.784 C 10.836 4.62 9.628 2.197 6.603 2.197 C 3.579 2.197 2.33 4.64 2.384 6.804 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.676,
    height: 12.879,
    viewBox: "0 0 10.676 12.879",
    fill: "none",
    style: {
      position: "absolute",
      left: 92.105,
      top: 38.211,
      width: 10.676,
      height: 12.879,
      color: "rgb(15,26,45)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.252 0 L 10.676 0 L 10.676 12.859 L 9.174 12.859 L 9.174 12.879 L 2.424 4.2 L 2.424 12.859 L 0 12.859 L 0 0.013 L 1.963 0.013 L 8.259 7.979 L 8.259 0 L 8.252 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.990,
    height: 13.627,
    viewBox: "0 0 10.990 13.627",
    fill: "none",
    style: {
      position: "absolute",
      left: 105.939,
      top: 37.783,
      width: 10.99,
      height: 13.627,
      color: "rgb(15,26,45)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.653 3.545 C 8.212 2.811 7.004 2.117 5.608 2.117 C 3.812 2.117 2.951 2.871 2.951 3.826 C 2.951 4.947 4.273 5.255 5.815 5.441 C 8.493 5.769 10.99 6.47 10.99 9.534 C 10.99 12.399 8.459 13.627 5.595 13.627 C 2.971 13.627 0.955 12.819 0 10.469 L 2.016 9.421 C 2.584 10.836 4.073 11.457 5.628 11.457 C 7.184 11.457 8.58 10.923 8.58 9.528 C 8.58 8.319 7.311 7.818 5.608 7.638 C 2.984 7.324 0.561 6.63 0.561 3.746 C 0.561 1.102 3.165 0.02 5.535 0 C 7.538 0 9.608 0.568 10.583 2.55 L 8.653 3.539 L 8.653 3.545 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body3 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 69.397,
      height: 70.699,
      display: "flex",
      flexDirection: "row",
      gap: 14,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 69.397,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 60,
    height: 60,
    viewBox: "0 0 60 60",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 5,
      width: 60,
      height: 60,
      color: "rgb(255,255,255)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 60 30 C 60 46.569 46.569 60 30 60 C 13.431 60 0 46.569 0 30 C 0 13.431 13.431 0 30 0 C 46.569 0 60 13.431 60 30 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 69.397,
    height: 70.699,
    viewBox: "0 0 69.397 70.699",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 69.397,
      height: 70.699,
      color: "rgb(15,26,45)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 34.699 0 C 15.537 0 0 15.824 0 35.353 C 0 54.882 15.537 70.699 34.699 70.699 C 53.861 70.699 69.397 54.869 69.397 35.353 C 69.397 15.837 53.861 0 34.699 0 Z M 48.96 42.838 L 52.318 52.258 C 52.512 52.793 51.985 53.307 51.457 53.106 L 42.203 49.628 C 41.876 49.508 41.509 49.654 41.362 49.975 L 35.313 63.061 C 35.073 63.575 34.338 63.575 34.098 63.061 L 28.042 49.962 C 27.895 49.648 27.528 49.494 27.201 49.614 L 17.853 53.073 C 17.319 53.273 16.799 52.752 16.992 52.218 L 20.391 42.824 C 20.511 42.497 20.357 42.137 20.043 41.99 L 6.99 35.961 C 6.476 35.72 6.476 34.986 6.99 34.745 L 20.05 28.703 C 20.371 28.556 20.517 28.189 20.397 27.862 L 16.892 18.561 C 16.692 18.027 17.206 17.506 17.74 17.693 L 27.221 21.058 C 27.548 21.172 27.909 21.025 28.049 20.711 L 34.098 7.638 C 34.338 7.124 35.073 7.124 35.313 7.638 L 41.349 20.698 C 41.496 21.012 41.856 21.165 42.183 21.045 L 51.564 17.646 C 52.098 17.453 52.612 17.974 52.419 18.508 L 48.967 27.848 C 48.847 28.176 49 28.543 49.314 28.683 L 62.42 34.745 C 62.934 34.986 62.934 35.72 62.42 35.961 L 49.314 42.016 C 49 42.163 48.847 42.524 48.967 42.844 L 48.96 42.838 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body4 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: "fit-content",
      height: 70.699,
      display: "flex",
      flexDirection: "row",
      gap: 11.90999984741211,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 69.397,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 69.397,
    height: 70.699,
    viewBox: "0 0 69.397 70.699",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 69.397,
      height: 70.699
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 34.699 0 C 15.537 0 0 15.824 0 35.353 C 0 54.882 15.537 70.699 34.699 70.699 C 53.861 70.699 69.397 54.869 69.397 35.353 C 69.397 15.837 53.861 0 34.699 0 Z M 48.96 42.838 L 52.318 52.258 C 52.512 52.793 51.985 53.307 51.457 53.106 L 42.203 49.628 C 41.876 49.508 41.509 49.654 41.362 49.975 L 35.313 63.061 C 35.073 63.575 34.338 63.575 34.098 63.061 L 28.042 49.962 C 27.895 49.648 27.528 49.494 27.201 49.614 L 17.853 53.073 C 17.319 53.273 16.799 52.752 16.992 52.218 L 20.391 42.824 C 20.511 42.497 20.357 42.137 20.043 41.99 L 6.99 35.961 C 6.476 35.72 6.476 34.986 6.99 34.745 L 20.05 28.703 C 20.371 28.556 20.517 28.189 20.397 27.862 L 16.892 18.561 C 16.692 18.027 17.206 17.506 17.74 17.693 L 27.221 21.058 C 27.548 21.172 27.909 21.025 28.049 20.711 L 34.098 7.638 C 34.338 7.124 35.073 7.124 35.313 7.638 L 41.349 20.698 C 41.496 21.012 41.856 21.165 42.183 21.045 L 51.564 17.646 C 52.098 17.453 52.612 17.974 52.419 18.508 L 48.967 27.848 C 48.847 28.176 49 28.543 49.314 28.683 L 62.42 34.745 C 62.934 34.986 62.934 35.72 62.42 35.961 L 49.314 42.016 C 49 42.163 48.847 42.524 48.967 42.844 L 48.96 42.838 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 116.929,
      height: 51.41,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.911,
    height: 13.507,
    viewBox: "0 0 11.911 13.507",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.207,
      top: 0,
      width: 11.911,
      height: 13.507
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.062 3.505 C 9.2 2.677 7.912 2.223 6.797 2.223 C 4.046 2.223 2.377 4.313 2.377 6.957 C 2.377 9.067 3.605 11.25 6.797 11.25 C 7.805 11.25 8.686 11.03 9.695 10.222 L 9.695 7.945 L 6.41 7.945 L 6.41 5.782 L 11.911 5.782 L 11.911 11.197 C 10.643 12.646 9.047 13.507 6.79 13.507 C 1.963 13.507 0 10.336 0 6.957 C 0 3.345 2.257 0 6.79 0 C 8.513 0 10.242 0.661 11.564 1.963 L 10.062 3.505 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.027,
    height: 12.839,
    viewBox: "0 0 9.027 12.839",
    fill: "none",
    style: {
      position: "absolute",
      left: 15.57,
      top: 0.367,
      width: 9.027,
      height: 12.839
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.424 0 L 2.424 10.603 L 9.027 10.603 L 9.027 12.839 L 0 12.839 L 0 0 L 2.424 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13.194,
    height: 13.393,
    viewBox: "0 0 13.194 13.393",
    fill: "none",
    style: {
      position: "absolute",
      left: 26.82,
      top: 0.113,
      width: 13.194,
      height: 13.393
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.193 6.75 C 13.16 10.068 11.117 13.393 6.603 13.393 C 2.09 13.393 0 10.149 0 6.77 C 0 3.392 2.163 0 6.603 0 C 11.043 0 13.227 3.392 13.193 6.75 Z M 2.384 6.804 C 2.437 8.913 3.579 11.17 6.603 11.17 C 9.628 11.17 10.769 8.893 10.803 6.784 C 10.836 4.62 9.628 2.197 6.603 2.197 C 3.579 2.197 2.33 4.64 2.384 6.804 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.896,
    height: 12.846,
    viewBox: "0 0 10.896 12.846",
    fill: "none",
    style: {
      position: "absolute",
      left: 43.185,
      top: 0.367,
      width: 10.896,
      height: 12.846
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.509 3.726 C 10.509 4.714 10.035 5.669 8.84 6.203 C 10.342 6.663 10.896 8.259 10.896 9.067 C 10.896 11.931 8.746 12.846 6.089 12.846 L 0 12.846 L 0 0 L 6.089 0 C 8.62 0 10.509 1.135 10.509 3.726 Z M 2.384 5.154 L 6.089 5.154 C 7.611 5.154 8.105 4.513 8.105 3.779 C 8.105 3.191 7.631 2.203 6.089 2.203 L 2.384 2.203 L 2.384 5.154 Z M 2.384 10.583 L 6.089 10.583 C 7.077 10.583 8.493 10.255 8.493 9.04 C 8.493 7.825 7.077 7.278 6.089 7.278 L 2.384 7.278 L 2.384 10.583 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 14.168,
    height: 12.846,
    viewBox: "0 0 14.168 12.846",
    fill: "none",
    style: {
      position: "absolute",
      left: 55.93,
      top: 0.367,
      width: 14.168,
      height: 12.846
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.442 10.422 L 3.726 10.422 L 2.624 12.846 L 0 12.846 L 5.762 0 L 8.406 0 L 14.168 12.846 L 11.524 12.846 L 10.442 10.422 Z M 7.084 2.697 L 4.7 8.166 L 9.474 8.166 L 7.091 2.697 L 7.084 2.697 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.027,
    height: 12.839,
    viewBox: "0 0 9.027 12.839",
    fill: "none",
    style: {
      position: "absolute",
      left: 72.849,
      top: 0.367,
      width: 9.027,
      height: 12.839
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.424 0 L 2.424 10.603 L 9.027 10.603 L 9.027 12.839 L 0 12.839 L 0 0 L 2.424 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11.691,
    height: 13.393,
    viewBox: "0 0 11.691 13.393",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.36,
      top: 19.042,
      width: 11.691,
      height: 13.393
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.691 11.484 C 10.369 12.786 8.666 13.393 6.81 13.393 C 2.037 13.393 0.02 10.108 0 6.77 C -0.02 3.412 2.163 0 6.81 0 C 8.553 0 10.202 0.661 11.524 1.963 L 9.908 3.525 C 9.067 2.697 7.925 2.317 6.81 2.317 C 3.712 2.317 2.37 4.627 2.39 6.777 C 2.41 8.907 3.639 11.123 6.81 11.123 C 7.932 11.123 9.194 10.663 10.042 9.821 L 11.691 11.491 L 11.691 11.484 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.404,
    height: 12.846,
    viewBox: "0 0 2.404 12.846",
    fill: "none",
    style: {
      position: "absolute",
      left: 14.909,
      top: 19.296,
      width: 2.404,
      height: 12.846
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 12.846 L 0 0 L 2.404 0 L 2.404 12.846 L 0 12.846 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.569,
    height: 12.846,
    viewBox: "0 0 10.569 12.846",
    fill: "none",
    style: {
      position: "absolute",
      left: 20.891,
      top: 19.296,
      width: 10.569,
      height: 12.846
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.073 2.203 L 0 2.203 L 0 0 L 10.569 0 L 10.569 2.203 L 6.496 2.203 L 6.496 12.846 L 4.073 12.846 L 4.073 2.203 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.404,
    height: 12.846,
    viewBox: "0 0 2.404 12.846",
    fill: "none",
    style: {
      position: "absolute",
      left: 34.412,
      top: 19.296,
      width: 2.404,
      height: 12.846
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 12.846 L 0 0 L 2.404 0 L 2.404 12.846 L 0 12.846 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.035,
    height: 12.846,
    viewBox: "0 0 10.035 12.846",
    fill: "none",
    style: {
      position: "absolute",
      left: 40.2,
      top: 19.296,
      width: 10.035,
      height: 12.846
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.16 0 L 10.035 0 L 10.035 1.135 L 3.372 10.549 L 10.035 10.549 L 10.035 12.846 L 0 12.846 L 0 11.451 L 6.516 2.277 L 0.167 2.277 L 0.167 0 L 0.16 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.614,
    height: 12.846,
    viewBox: "0 0 9.614 12.846",
    fill: "none",
    style: {
      position: "absolute",
      left: 53.126,
      top: 19.296,
      width: 9.614,
      height: 12.846
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.614 12.846 L 0 12.846 L 0 0 L 9.614 0 L 9.614 2.35 L 2.404 2.35 L 2.404 5.301 L 9.361 5.301 L 9.361 7.558 L 2.404 7.558 L 2.404 10.456 L 9.614 10.456 L 9.614 12.839 L 9.614 12.846 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.676,
    height: 12.886,
    viewBox: "0 0 10.676 12.886",
    fill: "none",
    style: {
      position: "absolute",
      left: 66.653,
      top: 19.276,
      width: 10.676,
      height: 12.886
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.252 0 L 10.676 0 L 10.676 12.866 L 9.174 12.866 L 9.174 12.886 L 2.424 4.206 L 2.424 12.866 L 0 12.866 L 0 0.02 L 1.963 0.02 L 8.259 7.985 L 8.259 0.007 L 8.252 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.990,
    height: 13.627,
    viewBox: "0 0 10.990 13.627",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 37.783,
      width: 10.99,
      height: 13.627
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.653 3.545 C 8.212 2.811 7.004 2.117 5.608 2.117 C 3.812 2.117 2.951 2.871 2.951 3.826 C 2.951 4.947 4.273 5.255 5.815 5.441 C 8.493 5.769 10.99 6.47 10.99 9.534 C 10.99 12.399 8.459 13.627 5.595 13.627 C 2.971 13.627 0.955 12.819 0 10.469 L 2.016 9.421 C 2.584 10.836 4.073 11.457 5.628 11.457 C 7.184 11.457 8.58 10.923 8.58 9.528 C 8.58 8.319 7.311 7.818 5.608 7.638 C 2.984 7.324 0.561 6.63 0.561 3.746 C 0.561 1.102 3.165 0.02 5.535 0 C 7.538 0 9.608 0.568 10.583 2.55 L 8.653 3.539 L 8.653 3.545 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13.193,
    height: 13.393,
    viewBox: "0 0 13.193 13.393",
    fill: "none",
    style: {
      position: "absolute",
      left: 13.754,
      top: 37.977,
      width: 13.193,
      height: 13.393
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.193 6.75 C 13.16 10.068 11.117 13.393 6.603 13.393 C 2.09 13.393 0 10.149 0 6.77 C 0 3.392 2.163 0 6.603 0 C 11.043 0 13.227 3.392 13.193 6.75 Z M 2.384 6.804 C 2.437 8.913 3.579 11.17 6.603 11.17 C 9.628 11.17 10.769 8.893 10.803 6.784 C 10.836 4.62 9.628 2.197 6.603 2.197 C 3.579 2.197 2.33 4.64 2.384 6.804 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.027,
    height: 12.846,
    viewBox: "0 0 9.027 12.846",
    fill: "none",
    style: {
      position: "absolute",
      left: 30.192,
      top: 38.224,
      width: 9.027,
      height: 12.846
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.424 0.007 L 2.424 10.609 L 9.027 10.609 L 9.027 12.846 L 0 12.846 L 0 0 L 2.424 0 L 2.424 0.007 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11.270,
    height: 13.100,
    viewBox: "0 0 11.270 13.100",
    fill: "none",
    style: {
      position: "absolute",
      left: 41.636,
      top: 38.251,
      width: 11.27,
      height: 13.1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 11.27 0 L 11.27 7.358 C 11.27 11.157 8.94 13.1 5.709 13.1 C 2.477 13.1 0 11.23 0 7.358 L 0 0 L 2.404 0 L 2.404 7.358 C 2.404 9.668 3.726 10.896 5.722 10.896 C 7.718 10.896 8.86 9.554 8.86 7.358 L 8.86 0 L 11.264 0 L 11.27 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.569,
    height: 12.846,
    viewBox: "0 0 10.569 12.846",
    fill: "none",
    style: {
      position: "absolute",
      left: 55.991,
      top: 38.231,
      width: 10.569,
      height: 12.846
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4.073 2.203 L 0 2.203 L 0 0 L 10.569 0 L 10.569 2.203 L 6.496 2.203 L 6.496 12.846 L 4.073 12.846 L 4.073 2.203 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.404,
    height: 12.846,
    viewBox: "0 0 2.404 12.846",
    fill: "none",
    style: {
      position: "absolute",
      left: 69.511,
      top: 38.231,
      width: 2.404,
      height: 12.846
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 12.846 L 0 0 L 2.404 0 L 2.404 12.846 L 0 12.846 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 13.193,
    height: 13.393,
    viewBox: "0 0 13.193 13.393",
    fill: "none",
    style: {
      position: "absolute",
      left: 75.473,
      top: 37.977,
      width: 13.193,
      height: 13.393
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 13.193 6.75 C 13.16 10.068 11.117 13.393 6.603 13.393 C 2.09 13.393 0 10.149 0 6.77 C 0 3.392 2.163 0 6.603 0 C 11.043 0 13.227 3.392 13.193 6.75 Z M 2.384 6.804 C 2.437 8.913 3.579 11.17 6.603 11.17 C 9.628 11.17 10.769 8.893 10.803 6.784 C 10.836 4.62 9.628 2.197 6.603 2.197 C 3.579 2.197 2.33 4.64 2.384 6.804 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.676,
    height: 12.879,
    viewBox: "0 0 10.676 12.879",
    fill: "none",
    style: {
      position: "absolute",
      left: 92.105,
      top: 38.211,
      width: 10.676,
      height: 12.879
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.252 0 L 10.676 0 L 10.676 12.859 L 9.174 12.859 L 9.174 12.879 L 2.424 4.2 L 2.424 12.859 L 0 12.859 L 0 0.013 L 1.963 0.013 L 8.259 7.979 L 8.259 0 L 8.252 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.990,
    height: 13.627,
    viewBox: "0 0 10.990 13.627",
    fill: "none",
    style: {
      position: "absolute",
      left: 105.939,
      top: 37.783,
      width: 10.99,
      height: 13.627
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.653 3.545 C 8.212 2.811 7.004 2.117 5.608 2.117 C 3.812 2.117 2.951 2.871 2.951 3.826 C 2.951 4.947 4.273 5.255 5.815 5.441 C 8.493 5.769 10.99 6.47 10.99 9.534 C 10.99 12.399 8.459 13.627 5.595 13.627 C 2.971 13.627 0.955 12.819 0 10.469 L 2.016 9.421 C 2.584 10.836 4.073 11.457 5.628 11.457 C 7.184 11.457 8.58 10.923 8.58 9.528 C 8.58 8.319 7.311 7.818 5.608 7.638 C 2.984 7.324 0.561 6.63 0.561 3.746 C 0.561 1.102 3.165 0.02 5.535 0 C 7.538 0 9.608 0.568 10.583 2.55 L 8.653 3.539 L 8.653 3.545 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __body5 = () => /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 69.397,
      height: 70.699,
      display: "flex",
      flexDirection: "row",
      gap: 14,
      alignItems: "center",
      flexWrap: "nowrap",
      position: "relative",
      color: "rgb(255,255,255)",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 69.397,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 69.397,
    height: 70.699,
    viewBox: "0 0 69.397 70.699",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 69.397,
      height: 70.699
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 34.699 0 C 15.537 0 0 15.824 0 35.353 C 0 54.882 15.537 70.699 34.699 70.699 C 53.861 70.699 69.397 54.869 69.397 35.353 C 69.397 15.837 53.861 0 34.699 0 Z M 48.96 42.838 L 52.318 52.258 C 52.512 52.793 51.985 53.307 51.457 53.106 L 42.203 49.628 C 41.876 49.508 41.509 49.654 41.362 49.975 L 35.313 63.061 C 35.073 63.575 34.338 63.575 34.098 63.061 L 28.042 49.962 C 27.895 49.648 27.528 49.494 27.201 49.614 L 17.853 53.073 C 17.319 53.273 16.799 52.752 16.992 52.218 L 20.391 42.824 C 20.511 42.497 20.357 42.137 20.043 41.99 L 6.99 35.961 C 6.476 35.72 6.476 34.986 6.99 34.745 L 20.05 28.703 C 20.371 28.556 20.517 28.189 20.397 27.862 L 16.892 18.561 C 16.692 18.027 17.206 17.506 17.74 17.693 L 27.221 21.058 C 27.548 21.172 27.909 21.025 28.049 20.711 L 34.098 7.638 C 34.338 7.124 35.073 7.124 35.313 7.638 L 41.349 20.698 C 41.496 21.012 41.856 21.165 42.183 21.045 L 51.564 17.646 C 52.098 17.453 52.612 17.974 52.419 18.508 L 48.967 27.848 C 48.847 28.176 49 28.543 49.314 28.683 L 62.42 34.745 C 62.934 34.986 62.934 35.72 62.42 35.961 L 49.314 42.016 C 49 42.163 48.847 42.524 48.967 42.844 L 48.96 42.838 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))));
  const __impls = {
    // figma: Type=Blue, Style=Secondary, Icon Only=False
    "type=blue|style2=secondary|iconOnly=false": __body0,
    // figma: Type=White, Style=Secondary, Icon Only=False
    "type=white|style2=secondary|iconOnly=false": __body1,
    // figma: Type=Blue, Style=Primary, Icon Only=False
    "type=blue|style2=primary|iconOnly=false": __body2,
    // figma: Type=Blue, Style=Primary, Icon Only=True
    "type=blue|style2=primary|iconOnly=true": __body3,
    // figma: Type=White, Style=Primary, Icon Only=False
    "type=white|style2=primary|iconOnly=false": __body4,
    // figma: Type=White, Style=Primary, Icon Only=True
    "type=white|style2=primary|iconOnly=true": __body5
  };
  return (__impls[__vkey_Logo(props)] ?? __body2)();
}

// Globals for scripts loaded after this file.
window.Logo = Logo;