import {NavMenu} from '@shopify/app-bridge-react';

export function MyNavMenu() {
    // return 1;
  return (
    <NavMenu>
      <a href="/" rel="home">
        Home
      </a>
      <a href="/templates">Templates</a>
      <a href="/settings">Settings</a>
    </NavMenu>
  );
}
