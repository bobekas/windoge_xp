import InternetExplorer from './InternetExplorer';
import Minesweeper from './Minesweeper';
import ErrorBox from './ErrorBox';
import MyComputer from './MyComputer';
import Notepad from './Notepad';
import Winamp from './Winamp';
import Paint from './Paint';
import iePaper from 'assets/windowsIcons/ie-paper.png';
import ie from 'assets/windowsIcons/ie.png';
import mine from 'assets/minesweeper/mine-icon.png';
import error from 'assets/windowsIcons/897(16x16).png';
import computer from 'assets/windowsIcons/676(16x16).png';
import computerLarge from 'assets/windowsIcons/676(32x32).png';
import notepad from 'assets/windowsIcons/327(16x16).png';
import notepadLarge from 'assets/windowsIcons/327(32x32).png';
import winamp from 'assets/windowsIcons/winamp.png';
import paintLarge from 'assets/windowsIcons/680(32x32).png';
import paint from 'assets/windowsIcons/680(16x16).png';
import ICPCoinsIcon from 'assets/customIcons/ICPCoinsIcon.png';
import ICPTokensIcon from 'assets/customIcons/ICPTokensIcon.png';
import puzzleExpressIcon from 'assets/customIcons/puzzleExpressIcon.png';
import Pinball3dIcon from 'assets/customIcons/Pinball3dIcon.png';
import ICPCoins from './ICPCoins';
import ICPTokens from './ICPTokens';
import PuzzleExpress from './PuzzleExpress';
import Pinball from './Pinball';

const gen = () => {
  let id = -1;
  return () => {
    id += 1;
    return id;
  };
};
const genId = gen();
const genIndex = gen();
export const defaultAppState = [
  // {
  //   component: InternetExplorer,
  //   header: {
  //     title: 'Internet Explorer',
  //     icon: iePaper,
  //   },
  //   defaultSize: {
  //     width: 700,
  //     height: 500,
  //   },
  //   defaultOffset: {
  //     x: 130,
  //     y: 20,
  //   },
  //   resizable: true,
  //   minimized: false,
  //   maximized: window.innerWidth < 800,
  //   id: genId(),
  //   zIndex: genIndex(),
  // },
  // {
  //   component: Minesweeper,
  //   header: {
  //     title: 'Minesweeper',
  //     icon: mine,
  //   },
  //   defaultSize: {
  //     width: 0,
  //     height: 0,
  //   },
  //   defaultOffset: {
  //     x: 180,
  //     y: 170,
  //   },
  //   resizable: false,
  //   minimized: false,
  //   maximized: false,
  //   id: genId(),
  //   zIndex: genIndex(),
  // },
  // {
  //   component: Winamp,
  //   header: {
  //     title: 'Winamp',
  //     icon: winamp,
  //     invisible: true,
  //   },
  //   defaultSize: {
  //     width: 0,
  //     height: 0,
  //   },
  //   defaultOffset: {
  //     x: 0,
  //     y: 0,
  //   },
  //   resizable: false,
  //   minimized: false,
  //   maximized: false,
  //   id: genId(),
  //   zIndex: genIndex(),
  // },
  {
    component: MyComputer,
    header: {
      title: 'My Computer',
      icon: computer,
    },
    defaultSize: {
      width: 660,
      height: 500,
    },
    defaultOffset: {
      x: 250,
      y: 40,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    id: genId(),
    zIndex: genIndex(),
  },
];

export const defaultIconState = [
  {
    id: 0,
    icon: computerLarge,
    title: 'My Computer',
    component: MyComputer,
    isFocus: false,
  },
  {
    id: 1,
    icon: ICPCoinsIcon,
    title: 'ICPCoins',
    component: ICPCoins,
    isFocus: false,
  },
  {
    id: 2,
    icon: ICPTokensIcon,
    title: 'ICPTokens',
    component: ICPTokens,
    isFocus: false,
  },
  {
    id: 3,
    icon: ie,
    title: 'Internet Explorer',
    component: InternetExplorer,
    isFocus: false,
  },
  {
    id: 4,
    icon: notepadLarge,
    title: 'Roadmap',
    component: Notepad,
    isFocus: false,
  },
  {
    id: 5,
    icon: puzzleExpressIcon,
    title: 'PuzzleExpress',
    component: PuzzleExpress,
    isFocus: false,
  },
  {
    id: 6,
    icon: mine,
    title: 'Minesweeper',
    component: Minesweeper,
    isFocus: false,
  },
  {
    id: 7,
    icon: winamp,
    title: 'Winamp',
    component: Winamp,
    isFocus: false,
  },
  {
    id: 8,
    icon: paintLarge,
    title: 'Paint',
    component: Paint,
    isFocus: false,
  },
  {
    id: 9,
    icon: Pinball3dIcon,
    title: 'Pinball',
    component: Pinball,
    isFocus: false,
  },
];

export const appSettings = {
  'Internet Explorer': {
    header: {
      icon: iePaper,
      title: 'InternetExplorer',
    },
    component: InternetExplorer,
    defaultSize: {
      width: 700,
      height: 500,
    },
    defaultOffset: {
      x: 140,
      y: 30,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: true,
  },
  Minesweeper: {
    header: {
      icon: mine,
      title: 'Minesweeper',
    },
    component: Minesweeper,
    defaultSize: {
      width: 0,
      height: 0,
    },
    defaultOffset: {
      x: 190,
      y: 180,
    },
    resizable: false,
    minimized: false,
    maximized: false,
    multiInstance: true,
  },
  Error: {
    header: {
      icon: error,
      title: 'C:\\',
      buttons: ['close'],
      noFooterWindow: true,
    },
    component: ErrorBox,
    defaultSize: {
      width: 380,
      height: 0,
    },
    defaultOffset: {
      x: window.innerWidth / 2 - 190,
      y: window.innerHeight / 2 - 60,
    },
    resizable: false,
    minimized: false,
    maximized: false,
    multiInstance: true,
  },
  'My Computer': {
    header: {
      icon: computer,
      title: 'My Computer',
    },
    component: MyComputer,
    defaultSize: {
      width: 660,
      height: 500,
    },
    defaultOffset: {
      x: 260,
      y: 50,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: false,
  },
  'ICP Coins': {
    header: {
      icon: ICPCoinsIcon,
      title: 'ICP Coins',
    },
    component: ICPCoins,
    defaultSize: {
      width: 660,
      height: 500,
    },
    defaultOffset: {
      x: 260,
      y: 50,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: false,
  },
  Notepad: {
    header: {
      icon: notepad,
      title: 'Roadmap - Notepad',
    },
    component: Notepad,
    defaultSize: {
      width: 660,
      height: 500,
    },
    defaultOffset: {
      x: 270,
      y: 60,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: true,
  },
  'ICP Tokens': {
    header: {
      icon: ICPTokensIcon,
      title: 'ICP Tokens',
    },
    component: ICPTokens,
    defaultSize: {
      width: 660,
      height: 500,
    },
    defaultOffset: {
      x: 260,
      y: 50,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: false,
  },
  'Puzzle Express': {
    header: {
      icon: puzzleExpressIcon,
      title: 'Puzzle Express',
    },
    component: PuzzleExpress,
    defaultSize: {
      width: 852,
      height: 666,
    },
    defaultOffset: {
      x: 260,
      y: 50,
    },
    resizable: false,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: false,
  },
  Pinball: {
    header: {
      icon: Pinball3dIcon,
      title: 'Pinball',
    },
    component: Pinball,
    defaultSize: {
      width: 800,
      height: 600,
    },
    defaultOffset: {
      x: 260,
      y: 50,
    },
    resizable: false,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: false,
  },
  Notepad: {
    header: {
      icon: notepad,
      title: 'Roadmap - Notepad',
    },
    component: Notepad,
    defaultSize: {
      width: 660,
      height: 500,
    },
    defaultOffset: {
      x: 270,
      y: 60,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: true,
  },
  Winamp: {
    header: {
      icon: winamp,
      title: 'Winamp',
      invisible: true,
    },
    component: Winamp,
    defaultSize: {
      width: 0,
      height: 0,
    },
    defaultOffset: {
      x: 0,
      y: 0,
    },
    resizable: false,
    minimized: false,
    maximized: false,
    multiInstance: false,
  },
  Paint: {
    header: {
      icon: paint,
      title: 'Untitled - Paint',
    },
    component: Paint,
    defaultSize: {
      width: 660,
      height: 500,
    },
    defaultOffset: {
      x: 280,
      y: 70,
    },
    resizable: true,
    minimized: false,
    maximized: window.innerWidth < 800,
    multiInstance: true,
  },
};

export { InternetExplorer, Minesweeper, ErrorBox, MyComputer, Notepad, Winamp };