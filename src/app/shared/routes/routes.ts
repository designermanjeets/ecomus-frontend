import { Routes } from "@angular/router";
import { AuthGuard } from "./../../core/guard/auth.guard";
import { Error404Component } from './../../components/page/error404/error404.component';

export const content: Routes = [
  {
    path: "",
    loadChildren: () => import("../../components/themes/themes.module").then((m) => m.ThemesModule),
    title: 'Home | Stylexio'
  },
  {
    path: 'privacy-policy',
    loadChildren: () =>
      import('../../privacy-policy/privacy-policy.module').then((m) => m.PrivacyPolicyModule),
    title: 'Privacy Policy | Stylexio'
  },
  {
    path: 'return-policy',
    loadChildren: () =>
      import('../../return-exchange/return-exchange.module').then((m) => m.ReturnExchangeModule),
    title: 'Return Policy | Stylexio'
  },
  {
    path: 'refund-and-cancellation',
    loadChildren: () =>
      import('../../refund-and-cancellation/refund-and-cancellation.module').then((m) => m.RefundAndCancellationModule),
    title: 'Refund & Cancellation | Stylexio'
  },
  {
    path: "Contact-Us",
    loadChildren: () => import("../../contact-us/contact-us.module").then((m) => m.ContactUsModule),
    title: 'Contact Us | Stylexio'
  },
  {
    path: 'term-condition',
    loadChildren: () =>
      import('../../term-condition/term-condition.module').then((m) => m.TermConditionModule),
    title: 'Terms & Conditions | Stylexio'
  },
  {
    path: "shipping-policy",
    loadChildren: () => import("../../shipping-delevary/shipping-delevary.module").then((m) => m.ShippingDelevaryModule),
    title: 'Shipping Policy | Stylexio'
  },
  {
    path: "auth",
    loadChildren: () => import("../../components/auth/auth.module").then((m) => m.AuthModule),
    canActivateChild: [AuthGuard],
    title: 'Login / Register | Stylexio'
  },
  {
    path: "account",
    loadChildren: () => import("../../components/account/account.module").then((m) => m.AccountModule),
    canActivate: [AuthGuard],
    title: 'My Account | Stylexio'
  },
  {
    path: "",
    loadChildren: () => import("../../components/shop/shop.module").then((m) => m.ShopModule),
    title: 'Shop | Stylexio'
  },
  {
    path: "",
    loadChildren: () => import("../../components/blog/blog.module").then((m) => m.BlogModule),
    title: 'Blog | Stylexio'
  },
  {
    path: "",
    loadChildren: () => import("../../components/page/page.module").then((m) => m.PagesModule),
    title: 'Pages | Stylexio'
  },
  {
    path: '**',
    pathMatch: 'full',
    component: Error404Component,
    title: '404 - Page Not Found | Stylexio'
  }
];
