import {
  HomeOutlined,
  InsightsOutlined,
  MenuBookOutlined,
  SettingsOutlined,
} from '@mui/icons-material/';

export const navMenu = [
  {
    name: 'Главная',
    icon: <HomeOutlined />,
    path: '/',
    id: 1,
  },
  {
    name: 'Избранные',
    icon: <InsightsOutlined />,
    path: '/watchlist',
    id: 2,
  },
  {
    name: 'Новости',
    icon: <MenuBookOutlined />,
    path: '/news',
    id: 3,
  },
  {
    name: 'Настройки',
    icon: <SettingsOutlined />,
    path: '/setting',
    id: 4,
  },
];
