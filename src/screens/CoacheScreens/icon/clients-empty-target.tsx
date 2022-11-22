import * as React from "react";
import Svg, {
  Circle,
  G,
  Path,
  Rect,
  Defs,
  LinearGradient,
  Stop,
  RadialGradient,
} from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

export const ClientsEmptyTarget = () => (
  <Svg width={375} height={333} fill="none">
    <Circle
      cx={188}
      cy={146}
      r={132}
      transform="rotate(-50.46 188 146)"
      fill="url(#a)"
    />
    <G filter="url(#b)">
      <Circle cx={112} cy={35} r={10} fill="url(#c)" />
      <Circle cx={112} cy={35} r={10} stroke="#fff" />
    </G>
    <G filter="url(#d)" shapeRendering="crispEdges">
      <Circle cx={102.5} cy={105.5} r={4.5} fill="url(#e)" />
      <Circle
        cx={102.5}
        cy={105.5}
        r={4.5}
        stroke="#fff"
        strokeOpacity={0.3}
        strokeWidth={2}
      />
    </G>
    <G filter="url(#f)" shapeRendering="crispEdges">
      <Circle cx={55} cy={107} r={6} fill="url(#g)" />
      <Circle
        cx={55}
        cy={107}
        r={6}
        stroke="#fff"
        strokeOpacity={0.3}
        strokeWidth={2}
      />
    </G>
    <G filter="url(#h)" shapeRendering="crispEdges">
      <Circle cx={89.5} cy={76.5} r={8.5} fill="url(#i)" />
      <Circle
        cx={89.5}
        cy={76.5}
        r={8.5}
        stroke="#fff"
        strokeOpacity={0.3}
        strokeWidth={2}
      />
    </G>
    <G filter="url(#j)">
      <Path
        d="m321.391 86.69.821-3.33-7.219-4.135-.304-8.314-3.328-.822-4.136 7.22-8.314.303-.821 3.329 7.219 4.135.303 8.315 3.329.821 4.135-7.22 8.315-.303Z"
        fill="url(#k)"
      />
      <Path
        d="m321.391 86.69.821-3.33-7.219-4.135-.304-8.314-3.328-.822-4.136 7.22-8.314.303-.821 3.329 7.219 4.135.303 8.315 3.329.821 4.135-7.22 8.315-.303Z"
        stroke="#fff"
      />
    </G>
    <G filter="url(#l)">
      <Path
        d="M208.779 249.247a2.27 2.27 0 0 0-4.124-1.445l-1.776 2.512a6.352 6.352 0 0 1-5.56 2.674l-3.072-.18a2.27 2.27 0 0 0-1.445 4.124l2.512 1.776a6.352 6.352 0 0 1 2.674 5.56l-.18 3.072a2.27 2.27 0 0 0 4.124 1.445l1.776-2.512a6.353 6.353 0 0 1 5.56-2.674l3.072.18a2.27 2.27 0 0 0 1.445-4.124l-2.512-1.777a6.35 6.35 0 0 1-2.674-5.559l.18-3.072Z"
        fill="url(#m)"
      />
    </G>
    <G filter="url(#n)">
      <Rect x={144} y={35} width={126} height={159} rx={8} fill="#fff" />
    </G>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M160.589 57.776a5.586 5.586 0 0 1 5.586-5.587h81.649a5.586 5.586 0 0 1 0 11.173h-81.649a5.586 5.586 0 0 1-5.586-5.586Zm0 28.362a5.586 5.586 0 0 1 5.586-5.586h76.492a5.587 5.587 0 1 1 0 11.173h-76.492a5.586 5.586 0 0 1-5.586-5.587Zm5.586 22.776a5.586 5.586 0 0 0 0 11.173h37.817a5.586 5.586 0 0 0 0-11.173h-37.817Zm-5.586 33.948a5.586 5.586 0 0 1 5.586-5.586h81.649a5.586 5.586 0 0 1 0 11.173h-81.649a5.586 5.586 0 0 1-5.586-5.587Zm5.586 22.776a5.586 5.586 0 0 0 0 11.173h58.444a5.586 5.586 0 0 0 0-11.173h-58.444Z"
      fill="url(#o)"
    />
    <G filter="url(#p)">
      <Circle
        r={80.5}
        transform="matrix(1 0 0 -1 123.805 204.5)"
        fill="url(#q)"
        fillOpacity={0.47}
      />
    </G>
    <G filter="url(#r)">
      <Path
        d="M139.857 124.899a80.921 80.921 0 0 0-28.137-.428l7.677 11.301a68.759 68.759 0 1 1-56.537 38.387l-7.669-11.299a80.75 80.75 0 0 0-9.987 26.283c-8.397 43.878 20.366 86.255 64.244 94.652 43.878 8.397 86.255-20.365 94.652-64.244 8.398-43.878-20.365-86.255-64.243-94.652Zm-6.084 31.789a48.61 48.61 0 0 0-12.219-.774l-2.382 12.447a36.386 36.386 0 0 1 23.652 4.452 36.39 36.39 0 0 1-20.998 67.811 36.398 36.398 0 0 1-33.192-31.017 36.392 36.392 0 0 1 4.588-23.626l-12.447-2.382a48.522 48.522 0 0 0 36.583 68.72 48.522 48.522 0 0 0 55.328-54.769 48.527 48.527 0 0 0-38.929-40.865l.016.003Zm-25.007 44.619a16.176 16.176 0 0 0 27.463 14.332 16.174 16.174 0 0 0-14.998-27.106l-11.047-16.277 4.855-25.329a6.068 6.068 0 0 0-.941-4.544L98.04 118.724a6.065 6.065 0 0 0-10.973 2.264l-4.18 21.844-21.844-4.18a6.063 6.063 0 0 0-6.203 2.626 6.065 6.065 0 0 0 .047 6.735l16.058 23.659a6.067 6.067 0 0 0 3.875 2.553l25.339 4.849 11.048 16.277a16.071 16.071 0 0 0-2.441 5.956Zm-29.195-38.524-6.423-9.463 13.424 2.569a6.07 6.07 0 0 0 7.097-4.818l2.57-13.424 6.414 9.462-3.62 18.913a5.743 5.743 0 0 0-.559.387l-18.905-3.618.002-.008Z"
        fill="#fff"
        fillOpacity={0.8}
        shapeRendering="crispEdges"
      />
    </G>
    <G filter="url(#s)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M263.212 130.308c4.227-1.493 10.121-2.26 16.231.795 6.896 3.448 10.252 9.345 11.303 15.107 1.005 5.508-.021 11.112-2.014 15.098-2.607 5.213-6.738 9.915-10.897 13.977-3.424 3.345-7.183 6.55-10.528 9.401-.731.624-1.443 1.231-2.127 1.818a8.027 8.027 0 0 1-10.165.246l-1.321-1.026c-3.537-2.744-8.018-6.22-12.095-9.972-4.483-4.127-9.224-9.241-11.576-14.822-1.726-4.094-2.654-9.799-1.534-15.34 1.173-5.804 4.71-11.707 11.963-14.684 8.101-3.325 14.656-1.121 18.676 1.253a26.833 26.833 0 0 1 4.084-1.851Zm4.274 12.101c-2.149.759-3.788 2.016-4.227 2.38a6.761 6.761 0 0 1-9.063-.403c-.745-.736-4.051-3.586-8.871-1.608-2.536 1.041-3.759 2.889-4.257 5.354-.552 2.73-.062 5.814.781 7.814 1.223 2.903 4.203 6.462 8.441 10.363 3.068 2.824 6.404 5.484 9.513 7.909 3.099-2.645 6.198-5.313 9.065-8.113 3.805-3.717 6.733-7.232 8.385-10.536.784-1.569 1.361-4.357.868-7.055-.446-2.445-1.688-4.568-4.417-5.933-2.07-1.035-4.152-.902-6.218-.172Z"
        fill="url(#t)"
        fillOpacity={0.6}
      />
      <Path
        d="M281.679 126.631c-7.689-3.845-15.07-2.825-20.132-1.037-.837.295-1.631.618-2.377.953-4.998-2.289-12.184-3.728-20.616-.266-9.1 3.734-13.533 11.225-14.966 18.319-1.342 6.637-.242 13.363 1.827 18.272 2.792 6.623 8.216 12.341 12.798 16.559 4.232 3.895 8.849 7.477 12.358 10.199l.058.045.006.004 1.308 1.016a13.025 13.025 0 0 0 16.495-.398c.676-.58 1.38-1.181 2.113-1.806l.056-.047c3.311-2.823 7.177-6.119 10.722-9.582 4.298-4.198 8.897-9.361 11.875-15.318 2.464-4.928 3.666-11.629 2.461-18.232-1.286-7.047-5.462-14.419-13.986-18.681Zm-15.234 22.011c.218-.18 1.337-1.035 2.706-1.518 1.205-.426 1.806-.326 2.317-.071.678.34 1.013.684 1.209.964.211.3.404.729.526 1.395.133.73.131 1.546.016 2.327-.118.805-.324 1.367-.438 1.594-1.28 2.559-3.739 5.612-7.407 9.195-1.805 1.763-3.719 3.483-5.705 5.211-2.049-1.646-4.084-3.351-5.992-5.108-4.148-3.818-6.438-6.77-7.221-8.627-.498-1.182-.818-3.246-.488-4.881.141-.697.326-1.021.443-1.174.093-.122.283-.328.813-.545 1.127-.463 1.86-.322 2.346-.144a3.351 3.351 0 0 1 1.11.681 11.76 11.76 0 0 0 15.765.701Z"
        stroke="#fff"
        strokeWidth={10}
      />
    </G>
    <Defs>
      <LinearGradient
        id="c"
        x1={122.015}
        y1={45.024}
        x2={104.659}
        y2={21.262}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.505} stopColor="#F8F8FF" />
        <Stop offset={1} stopColor="#EEECFF" />
      </LinearGradient>
      <LinearGradient
        id="e"
        x1={107.007}
        y1={110.011}
        x2={99.197}
        y2={99.318}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.505} stopColor="#F8F8FF" />
        <Stop offset={1} stopColor="#D7D1FF" />
      </LinearGradient>
      <LinearGradient
        id="g"
        x1={61.009}
        y1={113.014}
        x2={50.596}
        y2={98.757}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.505} stopColor="#F8F8FF" />
        <Stop offset={1} stopColor="#DFDBFF" />
      </LinearGradient>
      <LinearGradient
        id="i"
        x1={98.013}
        y1={85.02}
        x2={83.26}
        y2={64.823}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.505} stopColor="#F8F8FF" />
        <Stop offset={1} stopColor="#D3CDFF" />
      </LinearGradient>
      <LinearGradient
        id="k"
        x1={305.945}
        y1={106.5}
        x2={330.8}
        y2={76.364}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.457} stopColor="#F8F8FF" />
        <Stop offset={0.97} stopColor="#D6D0FF" />
      </LinearGradient>
      <LinearGradient
        id="m"
        x1={206.95}
        y1={267.328}
        x2={200.824}
        y2={250.295}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#C9C0F0" />
        <Stop offset={1} stopColor="#fff" />
      </LinearGradient>
      <LinearGradient
        id="t"
        x1={270}
        y1={191}
        x2={281.027}
        y2={165.379}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#8C64FF" stopOpacity={0.3} />
        <Stop offset={1} stopColor="#8C64FF" />
      </LinearGradient>
      <RadialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="rotate(-120.713 268.695 99.947) scale(411.172)"
      >
        <Stop stopColor="#CBBCF5" />
        <Stop offset={1} stopColor="#fff" />
      </RadialGradient>
      <RadialGradient
        id="o"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="rotate(-50.086 264.997 -73.792) scale(174.803 130.198)"
      >
        <Stop stopColor="#BAAAE6" />
        <Stop offset={1} stopColor="#F0EBFF" />
      </RadialGradient>
      <RadialGradient
        id="q"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="rotate(97.748 35.155 47.749) scale(87.8127 90.8407)"
      >
        <Stop stopColor="#6D5DE7" />
        <Stop offset={1} stopColor="#F6F2FF" />
      </RadialGradient>
    </Defs>
  </Svg>
);