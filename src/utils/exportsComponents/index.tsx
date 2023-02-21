import { lazy } from 'react';

export const Home = lazy(() => import('@/components/Home'));
export const AuthRootComponent = lazy(() => import('@/components/auth'));
export const WatchlistComponent = lazy(() => import('@/components/watchlist'));
export const SettingComponent = lazy(() => import('@/components/settings'));
export const LayoutComponent = lazy(() => import('@/components/layout'));
export const NewsComponent = lazy(() => import('@/components/news'));
