import * as React from "react"
import { forwardRef, memo } from "react"
const SvgComponent = ({ title, titleId, desc, descId, ...props }, ref) => (
  <svg
    width="1em"
    height="1em"
    aria-hidden="true"
    ref={ref}
    aria-labelledby={titleId}
    aria-describedby={descId}
    {...props}
  >
    {desc ? <desc id={descId}>{desc}</desc> : null}
    {title ? <title id={titleId}>{title}</title> : null}
    <mask id="a">
      <rect width="100%" height="100%" fill="#fff" />
      <circle cx={40} cy={8} r={11} />
    </mask>
    <circle cx={12} cy={12} r={11} mask="url(#a)" />
    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
)
const ForwardRef = forwardRef(SvgComponent)
const Memo = memo(ForwardRef)
export default Memo

// <?xml version="1.0" encoding="UTF-8"?>
// <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
// <!-- https://feathericons.com/?query=sun -->
// <mask id="moon">
// <rect x="0" y="0" width="100%" height="100%" fill="white"></rect>
// <circle cx="40" cy="8" r="11" fill="black"></circle>
// </mask>
// <circle id="sun" cx="12" cy="12" r="11" mask="url(#moon)"></circle>
// <g id="sun-beams">
// <line x1="12" y1="1" x2="12" y2="3"></line>
// <line x1="12" y1="21" x2="12" y2="23"></line>
// <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
// <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
// <line x1="1" y1="12" x2="3" y2="12"></line>
// <line x1="21" y1="12" x2="23" y2="12"></line>
// <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
// <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
// </g>
// </svg>
