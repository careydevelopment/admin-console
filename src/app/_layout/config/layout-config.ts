export interface LayoutComponent {
  componentName: string;
}

export interface MenuType extends LayoutComponent {
  type: 'vertical' | 'horizontal';
}

export interface Layout {
  menuType: MenuType;
}

export const layout: Layout = {
  menuType: {
    componentName: 'menuType',
    type: 'horizontal'
  }
}
