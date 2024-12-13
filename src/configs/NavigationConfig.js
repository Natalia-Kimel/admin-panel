import { 
  DashboardOutlined, ShoppingCartOutlined, AppstoreOutlined, UserOutlined, FileImageOutlined, FundProjectionScreenOutlined, ShopOutlined, UsergroupAddOutlined,
} from '@ant-design/icons';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const dashBoardNavTree = [
{
  key: 'home',
  path: `${APP_PREFIX_PATH}/home`,
  title: 'home',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: []
},
{
  key: 'catalog',
  path: `${APP_PREFIX_PATH}/home`,
  title: 'Каталог',
  icon: ShoppingCartOutlined,
  breadcrumb: false,
  submenu: [
    {
      key: 'productList',
      path: `${APP_PREFIX_PATH}/catalog/product-list`,
      title: 'Товары',
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'categories',
      path: `${APP_PREFIX_PATH}/catalog/categories`,
      title: 'Категории',
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'collections',
      path: `${APP_PREFIX_PATH}/catalog/collections`,
      title: 'Коллекции',
      breadcrumb: false,
      submenu: []
    }
  ]
},
{
  key: 'orders',
  path: `${APP_PREFIX_PATH}/orders`,
  title: 'Заказы',
  icon: AppstoreOutlined,
  breadcrumb: false,
  submenu: []
},
{
  key: 'users',
  path: `${APP_PREFIX_PATH}/home`,
  title: 'Клиенты',
  icon: UserOutlined,
  breadcrumb: false,
  submenu: [
    {
      key: 'userList',
      path: `${APP_PREFIX_PATH}/users/user-list`,
      title: 'Список клиентов',
      breadcrumb: false,
      submenu: []
    },
    {
      key: 'userGroup',
      path: `${APP_PREFIX_PATH}/users/user-group`,
      title: 'Группы клиентов',
      breadcrumb: false,
      submenu: []
    },
  ]
},
{
  key: 'banners',
  path: `${APP_PREFIX_PATH}/banners`,
  title: 'Баннеры',
  icon: FileImageOutlined,
  breadcrumb: false,
  submenu: []
},
{
  key: 'promos',
  path: `${APP_PREFIX_PATH}/promos`,
  title: 'Промокоды',
  icon: FundProjectionScreenOutlined,
  breadcrumb: false,
  submenu: []
},
{
  key: 'address',
  path: `${APP_PREFIX_PATH}/address`,
  title: 'Оффлайн точки',
  icon: ShopOutlined,
  breadcrumb: false,
  submenu: []
},
{
  key: 'staff',
  path: `${APP_PREFIX_PATH}/staff`,
  title: 'Сотрудники',
  icon: UsergroupAddOutlined,
  breadcrumb: false,
  submenu: []
},
]

const navigationConfig = [
  ...dashBoardNavTree
]

export default navigationConfig;