import { BrowserRouter, Routes, Route,Navigate } from "react-router-dom";
import React, { Suspense, lazy } from "react";

// 路由配置数组
const routes = [
	{
		path: "/amor-fast-buy",
		component: lazy(() => import("@/pages/index")),
	},
	{
		path: "/detail/:id",
		component: lazy(() => import("@/pages/detail")),
	},
	{
		path: "*",
		// component: lazy(() => import("@/pages/notFound")),
		component: () => <Navigate  to={`amor-fast-buy`} replace />,
	},
];

const PageRoutes = () => (
	<BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
		<Suspense fallback={<div className="flex items-center justify-center min-h-screen">加载中...</div>}>
			<Routes>
				{routes.map((route, index) => {
					const Component = route.component;
					return <Route key={index} path={route.path} element={<Component />} />;
				})}
			</Routes>
		</Suspense>
	</BrowserRouter>
);

export default PageRoutes;
