import ProLayout from "@ant-design/pro-layout";
import { Link, useLocation } from "react-router-dom";
const settings = {
  colorWeak: false,
  title: "Book management admin",
  headerHeight: 60,
  fixedHeader: true,
  fixSiderbar: true,
  navTheme: "light",
};

export const PrivateLayout = ({ routes, children }) => {
  const { pathname } = useLocation();
  return (
    <ProLayout
      route={{
        routes,
      }}
      location={{
        pathname,
      }}
      menuItemRender={(menuItemProps, defaultDom) => {
        if (menuItemProps.isUrl) {
          return defaultDom;
        }
        return <Link to={menuItemProps.path}>{defaultDom}</Link>;
      }}
      {...settings}
    >
      {children}
    </ProLayout>
  );
};
