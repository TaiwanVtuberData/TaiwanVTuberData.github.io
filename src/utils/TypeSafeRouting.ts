import { ROUTE_PREFIX } from '../Config';
import {
  DayRangeSortOrder,
  TrendingVTuberSortOrder,
  TrendingVideosModifier,
} from '../types/ApiTypes';

interface BaseTypeSafeRoute {
  type: string;
}

interface HomeRoute extends BaseTypeSafeRoute {
  type: 'home';
}

interface LivestreamsRoute extends BaseTypeSafeRoute {
  type: 'livestreams';
}

interface EventCalendarRoute extends BaseTypeSafeRoute {
  type: 'event-calendar';
}

interface AllVTubersRoute extends BaseTypeSafeRoute {
  type: 'all-vtubers';
}

interface GroupListRoute extends BaseTypeSafeRoute {
  type: 'group-list';
}

interface TrendingVTubersRoute extends BaseTypeSafeRoute {
  type: 'trending-vtubers';
  sortOrder: TrendingVTuberSortOrder;
}

interface GrowingVTubersRoute extends BaseTypeSafeRoute {
  type: 'growing-vtubers';
}

interface DebutVTubersRoute extends BaseTypeSafeRoute {
  type: 'debut-vtubers';
}

interface AnniversaryVTubersRoute extends BaseTypeSafeRoute {
  type: 'anniversary-vtubers';
}

interface GraduateVTubersRoute extends BaseTypeSafeRoute {
  type: 'graduate-vtubers';
}

interface ReportIssueRoute extends BaseTypeSafeRoute {
  type: 'report-issue';
}

interface AboutRoute extends BaseTypeSafeRoute {
  type: 'about';
}

interface VTuberPlaceholderRoute extends BaseTypeSafeRoute {
  type: 'vtuber';
}

interface VTuberRoute extends BaseTypeSafeRoute {
  type: 'vtuber';
  id: string;
}

interface GroupPlaceholderRoute extends BaseTypeSafeRoute {
  type: 'group';
}

interface GroupRoute extends BaseTypeSafeRoute {
  type: 'group';
  name: string;
}

interface TrendingVideosPlaceholderRoute extends BaseTypeSafeRoute {
  type: 'trending-videos';
}

interface TrendingVideosRoute extends BaseTypeSafeRoute {
  type: 'trending-videos';
  sortOrder: TrendingVideosModifier;
}

interface VTubersViewCountPlaceholderRoute extends BaseTypeSafeRoute {
  type: 'vtubers-view-count';
}

interface VTubersViewCountRoute extends BaseTypeSafeRoute {
  type: 'vtubers-view-count';
  sortOrder: DayRangeSortOrder;
}

interface YearEndStatisticRoute extends BaseTypeSafeRoute {
  type: 'year-end-statistic';
}

type PlaceholderRoute =
  | VTuberPlaceholderRoute
  | GroupPlaceholderRoute
  | TrendingVideosPlaceholderRoute
  | TrendingVTubersRoute
  | VTubersViewCountPlaceholderRoute;

type TypeSafeRoute =
  | HomeRoute
  | EventCalendarRoute
  | AllVTubersRoute
  | GroupListRoute
  | TrendingVTubersRoute
  | GrowingVTubersRoute
  | DebutVTubersRoute
  | AnniversaryVTubersRoute
  | GraduateVTubersRoute
  | ReportIssueRoute
  | AboutRoute
  | LivestreamsRoute
  | VTuberRoute
  | GroupRoute
  | TrendingVideosRoute
  | VTubersViewCountRoute
  | YearEndStatisticRoute;

const GetPlaceholderBaseRoute = (
  route: PlaceholderRoute,
  placerHolderText: string,
): string => {
  switch (route.type) {
    case 'vtuber':
      return `vtuber/${placerHolderText}`;
    case 'group':
      return `group/${placerHolderText}`;
    case 'trending-videos':
      return `trending-videos/${placerHolderText}`;
    case 'trending-vtubers':
      return `trending-vtubers/${placerHolderText}`;
    case 'vtubers-view-count':
      return `vtubers-view-count/${placerHolderText}`;
  }
};

const GetBaseRoute = (route: TypeSafeRoute): string => {
  switch (route.type) {
    case 'home':
      return ``;
    case 'livestreams':
      return `livestreams`;
    case 'event-calendar':
      return `event-calendar`;
    case 'all-vtubers':
      return `all-vtubers`;
    case 'group-list':
      return `group-list`;
    case 'trending-vtubers':
      return `trending-vtubers/${route.sortOrder}`;
    case 'growing-vtubers':
      return `growing-vtubers`;
    case 'debut-vtubers':
      return `debut-vtubers`;
    case 'anniversary-vtubers':
      return `anniversary-vtubers`;
    case 'graduate-vtubers':
      return `graduate-vtubers`;
    case 'report-issue':
      return `report-issue`;
    case 'about':
      return `about`;
    case 'vtuber':
      return `vtuber/${route.id}`;
    case 'group':
      return `group/${encodeURIComponent(route.name)}`;
    case 'trending-videos':
      return `trending-videos/${route.sortOrder}`;
    case 'vtubers-view-count':
      return `vtubers-view-count/${route.sortOrder}`;
    case 'year-end-statistic':
      return `year-end-statistic`;
  }
};

export const GetPlaceholderRoute = (
  route: PlaceholderRoute,
  placerHolderText: string,
): string => {
  return `${ROUTE_PREFIX}/${GetPlaceholderBaseRoute(route, placerHolderText)}`;
};

export const GetRoute = (route: TypeSafeRoute): string => {
  return `${ROUTE_PREFIX}/${GetBaseRoute(route)}`;
};

export const GoToPage = (route: TypeSafeRoute): void => {
  window.location.href = GetRoute(route);
};
