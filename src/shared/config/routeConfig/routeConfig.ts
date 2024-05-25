export enum MainRoutes {
  HOME = 'home',
  POST = 'post',
}

export type Route = {
  name: MainRoutes;
  element: () => JSX.Element;
};


export type MainRouterParams = {
    [MainRoutes.HOME]: undefined;
    [MainRoutes.POST]: undefined;
}